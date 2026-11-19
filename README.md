# Luis F. Recalde — Portfolio

Website: **https://lfrecalde1.github.io/**

A static portfolio built with HTML, CSS, and JavaScript. No installation or build step is required.

## Preview locally

From the repository folder, run:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000. Refresh after editing. Stop the server with `Ctrl+C`.

## Edit the portfolio

| File | What to change |
| --- | --- |
| `research.js` | Biography, links, publications, projects, experience, education, and skills |
| `styles.css` | Colors, text sizes, alignment, spacing, and light/dark themes |
| `index.html` | Page sections, navigation, and metadata |
| `app.js` | Search, media galleries, theme switching, and citations |
| `assets/images/` | Photos and research figures |
| `assets/videos/` | Optimized demonstration videos |
| `assets/documents/Luis_Fernando_Recalde_CV.pdf` | Downloadable CV |

- To add a publication or project, duplicate an entry in `research.js` and give it a unique `id`. Use `featured: true` for publications with a large image section.
- To change the portrait, update `profile.portrait.src` in `research.js`.
- Use relative media paths, such as `assets/images/photo.webp`. Original recordings in `webpage_media/` are kept locally and ignored by Git.

## Check and publish

Check the website files before committing:

```bash
node scripts/check-site.mjs
```

GitHub Pages uses **Settings → Pages → Deploy from a branch → main → /(root)**. Keep `.nojekyll` in the repository. Check the **Actions** tab for deployment status.

Content and media sources are documented in [SOURCES.md](SOURCES.md). Code licensing is in [LICENSE](LICENSE).
