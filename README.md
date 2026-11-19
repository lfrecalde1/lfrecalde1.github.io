# Luis F. Recalde — research website

A personal robotics research website inspired by the split introduction and alternating research sections of [Angel Romero’s website](https://roangel.github.io/). The code is original. The content is based on Luis’s CV supplied on 18 November 2026 and the research media supplied on 19 November 2026.

The palette combines white, charcoal, and a restrained red taken from the DQ-NMPC flight imagery. A light/dark toggle follows the visitor’s system preference initially, then remembers an explicit choice in local storage. Current work appears before the publication list: TI-MPC, the MuJoCo aerial transportation simulator, and ongoing cooperative flight research in decentralized control and estimation. Publication figures use the new images from `webpage_media/`.

Repository: https://github.com/lfrecalde1/lfrecalde1.github.io

The website source is on the `main` branch. The intended GitHub Pages address is **https://lfrecalde1.github.io/**.

The website files live at the repository root. It uses plain HTML, CSS, and JavaScript. No npm install or build step is needed.

## Run locally

Clone the website and start a local server:

```bash
git clone git@github.com:lfrecalde1/lfrecalde1.github.io.git
cd lfrecalde1.github.io
python3 -m http.server 8000
```

Open **http://localhost:8000**. Edit a file and refresh the browser. Stop the server with `Ctrl+C`.

## Where to make changes

| File or folder | What to edit |
| --- | --- |
| `research.js` | Biography, links, publications, projects, experience, education, and expertise |
| `assets/images/` | Add your new photos and research figures here |
| `assets/videos/` | Add short MP4 or WebM videos here |
| `assets/documents/Luis_Fernando_Recalde_CV.pdf` | Published copy of the supplied CV; replace this file when updating the CV |
| `styles.css` | Colors, fonts, spacing, and responsive layout |
| `index.html` | Page sections, navigation, and search-engine metadata |
| `app.js` | Rendering, search/filter, citations, and mobile navigation |
| `scripts/prepare-media.py` | Recreate optimized images, MP4 loops, and video posters from the original media |
| `scripts/check-site.mjs` | Validate JavaScript, content ids, and all referenced local assets before publishing |
| `assets/media-manifest.json` | Original-to-export mappings and file sizes |
| `SOURCES.md` | Content and image attribution |

`research.js` assigns one object to `window.portfolio`. Keep the quotes, commas, square brackets, and braces when editing. New image and video paths are relative to the repository root; for example `assets/images/payload-flight.jpg`.

## Editing guide

- **Text and links:** edit `research.js`. The `profile`, `publications`, `projects`, `experience`, `education`, `expertise`, and `tools` sections hold the displayed content.
- **Scholar links:** your name uses `profile.links['Google Scholar']`; Guanrui Li’s name uses `profile.advisorScholarUrl`. The renderer applies these links consistently in the introduction, author lists, education, header, and footer.
- **Colors and emphasis:** edit the variables at the top of `styles.css`. The first block controls light mode; `[data-theme='dark']` controls dark mode. Accent text and project status labels are bold. The ACP Lab link uses the `.lab-link` style.
- **Proportions and text size:** the main desktop columns use a 1.618:1 ratio, reversing with alternating publication rows. Heading sizes follow the same ratio; spacing uses an 8/13/21/34/55/89px scale. Body text stays at 17px, supporting text at 16px, and secondary labels at 15px by default. Typography uses `rem` units to respect browser text preferences; mobile layouts stack into one column. Research images retain their original proportions.
- **Page structure:** `index.html` defines the sections; `app.js` fills them from the content file and handles search, galleries, themes, and citations. Comments group the related code.
- **Formatting:** `.editorconfig` and `.prettierrc.json` keep indentation and formatting consistent. If you use Prettier, run `npx prettier@3.6.2 --write index.html styles.css app.js research.js`. This is optional; Node and Prettier are not needed to run or publish the site.

Before publishing, run `node scripts/check-site.mjs` if Node is installed, then preview the site in a browser. Check the light/dark toggle, mobile layout, publication search, and any links or media you changed. The same validation runs in GitHub Actions after each push and on pull requests.

## Update the downloadable CV

The supplied CV is available at `assets/documents/Luis_Fernando_Recalde_CV.pdf`, linked through `profile.links.CV` in `research.js`. Replace that PDF to update the public download. Keep education, experience, expertise, and tools in `research.js` synchronized with any changes to the CV.

## Change your portrait

Add your photograph to `assets/images/`, then change `profile.portrait` in `research.js`:

```js
"portrait": {
  "src": "assets/images/portrait.jpg",
  "alt": "Luis Fernando Recalde"
}
```

## Add a publication

Duplicate an entry in the `publications` array and give it a unique `id`. Array order is the display order. `featured: true` gives a paper an alternating image/text section. Other papers appear in the compact list. Images retain their full proportions so diagrams and annotations are not cropped.

```js
{
  "id": "my-new-paper",
  "title": "My paper title",
  "authors": ["Luis F. Recalde", "Coauthor Name"],
  "venue": "Conference or journal name",
  "venueShort": "Short venue name",
  "year": 2027,
  "featured": true,
  "topics": ["control"],
  "summary": "One or two sentences explaining the problem and contribution.",
  "media": {
    "type": "image",
    "src": "assets/images/my-paper.jpg",
    "alt": "Describe what the image shows"
  },
  "links": {
    "Paper": "https://example.org/paper",
    "Project": "https://example.org/project",
    "Code": "https://github.com/lfrecalde1/my-project",
    "Video": "https://www.youtube.com/watch?v=VIDEO_ID"
  }
}
```

Replace all example URLs before adding the entry. Remove unavailable links rather than keeping placeholders. Valid topic keys are `control`, `perception`, and `interaction`. An optional `status` (such as `Accepted`) appears beside the year. An optional `bibtex` string enables the citation dialog.

## Add a video instead of a picture

Put the clip in `assets/videos/`. Change the publication’s `media` object:

```js
"media": {
  "type": "video",
  "src": "assets/videos/flight-demo.mp4",
  "poster": "assets/images/flight-poster.jpg",
  "alt": "Quadrotor carrying a suspended payload through a flight trajectory"
}
```

Ordinary videos have playback controls and do not autoplay. Silent demonstrations can add `"loop": true`: these play only while visible, with a Play/Pause button. Reduced-motion and data-saving preferences disable automatic playback. Off-screen videos and videos in hidden browser tabs pause. The browser waits to load each clip until needed. For spoken content, keep `loop` off and add WebVTT captions:

```js
"captions": [
  {"src": "assets/videos/flight-demo.en.vtt", "lang": "en", "label": "English", "default": true}
]
```

For large videos, use a YouTube/Vimeo link under `links.Video` and keep a local poster image. That keeps repository clones and page loads small.

## Add a project that is not a paper

The `projects` array contains the current research demonstrations. Add an object with `id`, `title`, `category`, `summary`, and `media`, using the same media format as a publication. Optional `note` and `links` fields provide development status and real project links. Identify unpublished work explicitly; TI-MPC is currently marked as work in progress.

For multiple demonstrations, use a `demos` array instead of `media`. Each item accepts the same image/video fields plus `label` (the selector button) and `caption` (a description under the media). The first item is shown initially. For example:

```js
"demos": [
  {
    "type": "video",
    "src": "assets/videos/tim-mpc-flight.mp4",
    "poster": "assets/images/tim-mpc-flight.webp",
    "loop": true,
    "label": "Aggressive flight",
    "alt": "TI-MPC suspended-payload flight experiment",
    "caption": "Aggressive flight with a suspended payload in the lab."
  }
]
```

## Prepare the supplied media

The original files live in `webpage_media/WebPage/`. That folder is ignored by Git; the originals remain unchanged on disk. Only the optimized files in `assets/` are committed for the website.

The original root-level `Luis_Fernando_Recalde_Resume.pdf` is also ignored; the downloadable copy in `assets/documents/` is committed. No original recordings or temporary preview files are needed to run the website from a fresh clone.

With FFmpeg and Python's Pillow installed, run:

```bash
python3 scripts/prepare-media.py
```

The script converts the five publication PNGs to WebP and all twelve animated sources (including the DQ-NMPC GIF) to silent H.264 MP4s at 960px width and 24 fps. It preserves clip durations and frame proportions, creates WebP posters, and writes a source/size manifest. The MP4 loops provide the motion of GIFs with smaller files and pause controls. Source media totals about 256 MiB; the optimized figures, videos, and posters total about 12.9 MiB. Only visible, selected clips load; the entire collection is not downloaded at page load.

The portrait stays in `profile.portrait`; the large introduction photograph is configured separately in `profile.hero`.

## Publish with SSH and GitHub Pages

This repository uses **Settings → Pages → Deploy from a branch → main → /(root)**. This setting was verified on the recreated repository on 19 November 2026. Keep this source selected; the site requires no Hugo or Jekyll build. The committed `.nojekyll` file tells Pages to serve the static files directly.

The personal-site repository is already correctly named `lfrecalde1.github.io`. Its root Pages address is https://lfrecalde1.github.io/; no additional repository name appears in the URL.

Push the committed files using the SSH remote:

```bash
git remote -v
git push -u origin main
```

The remote should be `git@github.com:lfrecalde1/lfrecalde1.github.io.git`. If this checkout does not select your non-default SSH key automatically, configure it locally:

```bash
git config --local core.sshCommand 'ssh -i ~/.ssh/id_ed25519_github -o IdentitiesOnly=yes'
git ls-remote origin refs/heads/main
```

This setting stays in this checkout’s `.git/config`; the SSH key is never added to the repository. SSH controls Git authentication. GitHub Pages uses the repository’s publishing settings independently.

After pushing, open the repository’s **Actions** tab. GitHub’s built-in **pages build and deployment** workflow publishes the website. `.github/workflows/check-website.yaml` separately checks JavaScript and required assets; it does not deploy a second copy. A successful local check does not confirm the live deployment—wait for the Pages run to finish before checking the public URL.

Future commits pushed to `main` update the website. This follows the [GitHub Pages publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

The previous Hugo content, configuration, template workflows, and Netlify configuration remain locally and are ignored by this new repository. They are not required for the static site. The previous README is retained in `docs/legacy-hugo-README.md`. The original template license remains in `LICENSE.md`; the website code is covered by `LICENSE`.

The private ChatGPT preview is a separate deployment. Editing GitHub files does not automatically update that preview.

## Content notes

- All nine publications in the latest CV are included. The website now contains 25 verified records, with six featured visually and the rest listed under “More publications.” Each has a paper link and a downloadable BibTeX citation.
- Google Scholar blocked automated access. The expanded list uses ORCID and publisher metadata; exact completeness against Scholar remains unconfirmed. See `SOURCES.md` for verification notes.
- Publication dates follow the supplied CV. ES-HPC-MPC uses its 2026 issue year; DQ-MPCC is labeled accepted.
- The PhD is in progress; the site does not claim a completed PhD.
- Biography, career dates, education, technical skills, software, and review service use `Luis_Fernando_Recalde_Resume.pdf`, including the May–December 2024 NYU visit. “Research Assistant” follows Luis’s requested display title.
- CV download links appear in the introduction, education, and contact sections. To update the downloadable copy, copy the new PDF to `assets/documents/Luis_Fernando_Recalde_CV.pdf` and commit the updated file.
- Research figures link to the respective papers or project pages. Replace them with your preferred photos or videos at any time.
- Search and filters work locally in the browser. No analytics, tracking, account system, or database is included.

## License

Original website code is provided under the MIT License in `LICENSE`. The CV, portrait, research figures, and videos are excluded from that license; rights remain with their respective authors. Inter is licensed under the SIL Open Font License; see `assets/OFL.txt`. See `SOURCES.md` for provenance.
