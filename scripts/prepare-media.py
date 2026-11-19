#!/usr/bin/env python3
"""Prepare the supplied research media. Requires ffmpeg and Pillow.

Run from any directory: python3 scripts/prepare-media.py
Originals stay in webpage_media/; only assets/ is deployed to GitHub Pages.
"""

import json
import subprocess
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "webpage_media/WebPage"
IMAGES = ROOT / "assets/images"
VIDEOS = ROOT / "assets/videos"

FIGURES = {
    "flight-paths": "dq_nmpc/dq_nmpc.png",
    "tactile-servoing": "tactile_visual_servoing/tactile_visual_servoing_control.png",
    "payload-sequence": "ES-HPC-MPC/cover.png",
    "lidar-odometry": "Dual_quaternion_lidar_odometry/lidar_odometry.png",
    "solar-inspection": "Visual_Servoing_inspection/visual_servoing_inspection.png",
}

# Output name, original path, representative poster time (seconds).
CLIPS = [
    ("tim-mpc-flight", "TI-MPC/aggressive_real.mp4", 1.8),
    ("tim-mpc-simulation", "TI-MPC/aggressive_simulation.mp4", 1.8),
    ("tim-mpc-regulation-flight", "TI-MPC/regulation_real.mp4", 1.4),
    ("tim-mpc-regulation-simulation", "TI-MPC/regulation_simulation.mp4", 1.8),
    ("tim-mpc-planning", "TI-MPC/lidar_planning_payload_simulation.mp4", 3),
    ("mujoco-payload", "Simulator/fully_onboard_payload_transportation.mp4", 4),
    ("mujoco-quadrotor", "Simulator/fully_onboard_quadrotor_control.mp4", 2),
    ("mujoco-learning", "Simulator/rl_payload_transportation.mp4", 4),
    ("mujoco-cooperative", "Multiple_quadrotor_payload_transportation/multiple_quadrotor_control_simulation.mp4", 4),
    ("mujoco-cooperative-lidar", "Multiple_quadrotor_payload_transportation/multiple_quadrotor_control_lidar_simulation.mp4", 4),
    ("outdoor-flight", "Outdoor_lidar_multiple/outdor_flight_multiple_lidar.mp4", 12),
    ("dq-nmpc-demo", "DQ-NMPC/dq_code.gif", 2),
]


def ffmpeg(*args):
    subprocess.run(
        ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", *map(str, args)],
        check=True,
    )


def main():
    IMAGES.mkdir(parents=True, exist_ok=True)
    VIDEOS.mkdir(parents=True, exist_ok=True)
    records = []
    for name, source in FIGURES.items():
        original = SOURCE / "webpage_images" / source
        target = IMAGES / f"{name}.webp"
        with Image.open(original) as image:
            image = ImageOps.exif_transpose(image).convert("RGB")
            image.thumbnail((1600, 1100), Image.Resampling.LANCZOS)
            image.save(target, "WEBP", quality=86, method=6)
        records.append({
            "source": str(original.relative_to(ROOT)),
            "output": str(target.relative_to(ROOT)),
            "original_bytes": original.stat().st_size,
            "bytes": target.stat().st_size,
        })
    for name, source, poster_time in CLIPS:
        original = SOURCE / "webpage_videos" / source
        target = VIDEOS / f"{name}.mp4"
        poster = IMAGES / f"{name}.webp"
        # Silent browser-compatible loops, preserving each recording's full duration.
        ffmpeg(
            "-i", original, "-map", "0:v:0",
            "-vf", "scale=960:-2:flags=lanczos,fps=24",
            "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "27",
            "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-threads", "2",
            target,
        )
        ffmpeg(
            "-ss", poster_time, "-i", target, "-frames:v", "1",
            "-c:v", "libwebp", "-quality", "82", "-threads", "1", poster,
        )
        records.append({
            "source": str(original.relative_to(ROOT)),
            "output": str(target.relative_to(ROOT)),
            "poster": str(poster.relative_to(ROOT)),
            "original_bytes": original.stat().st_size,
            "bytes": target.stat().st_size,
        })
        print(
            f"{name}: {original.stat().st_size / 1048576:.2f} → "
            f"{target.stat().st_size / 1048576:.2f} MB",
            flush=True,
        )
    (ROOT / "assets/media-manifest.json").write_text(json.dumps(records, indent=2) + "\n")
    print(
        f"Total: {sum(r['original_bytes'] for r in records) / 1048576:.1f} → "
        f"{sum(r['bytes'] for r in records) / 1048576:.1f} MB",
        flush=True,
    )


if __name__ == "__main__":
    main()
