# Heng Diao — Research Software & Patents

A minimal academic project portfolio. This is **plain HTML, CSS and JavaScript**: no build step, server, or third-party dependencies.

## Contents

- `index.html`: short personal introduction, research software, two granted invention patents (with expandable English technical summaries), and contact.
- `styles.css`: layout and mobile responsiveness.
- `script.js`: screenshot lightbox and copyright year.
- `assets/images/`: selected screenshots of DDU Linguistics Lab and the bilingual translation workspace.
- `assets/docs/`: downloadable CV and two granted Chinese invention patent PDFs.
- `assets/profile/`: optimized profile image.
- `.nojekyll`: allows GitHub Pages to serve assets without Jekyll processing.

## Deploy to GitHub Pages

1. Create a **public** repository named `YOUR_GITHUB_USERNAME.github.io` (or a repository with another name).
2. Upload the **contents of this folder**, so `index.html` is in the repository root.
3. Open **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Set **Branch: main**, **Folder: /(root)**, and save.
5. Visit `https://YOUR_GITHUB_USERNAME.github.io/` (or append `/REPOSITORY_NAME/` for a project repository).

All asset paths are relative, and both GitHub Pages URL styles are supported without rewriting the HTML.

## Preview locally

From this directory run `python -m http.server 8000` and browse to `http://localhost:8000/`.

## Updating the site

- Update prose directly in `index.html`.
- Replace screenshots under `assets/images/` while preserving filenames, or edit the `data-gallery` definitions in both `index.html` and `script.js`.
- Replace `assets/docs/Heng-Diao-CV.pdf` when your CV changes.
- Patent summaries are embedded as expandable English overviews in `index.html`. They are not official translations.
- The patent links point to original Chinese grant PDFs included in this project. They are publicly accessible to visitors once deployed.
