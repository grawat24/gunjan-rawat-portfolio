# Gunjan Rawat: Technical Writer portfolio

A static one-page portfolio site (plain HTML, CSS and JS, with no build step).

```
gunjan-portfolio/
├── index.html   # all content (cards, sections)
├── styles.css   # editorial styling, responsive
├── script.js    # filter chips (All / Docs / Kalp / Flexera / Marketing)
└── README.md
```

## Open locally
- Double-click `index.html`, **or**
- Serve it: `cd gunjan-portfolio && python3 -m http.server 8765`, then open http://localhost:8765

## Deploy
- **Netlify Drop:** go to https://app.netlify.com/drop and drag the `gunjan-portfolio` folder onto the page. You get a live URL right away.
- **GitHub Pages:** create a repo, upload these files to the root (drag-and-drop works in the GitHub web UI), then go to *Settings → Pages → Deploy from branch → main / root*.
- **Vercel / Cloudflare Pages:** import the folder as a static site. There is no build command, and the output dir is `/`.

## Editing content
All cards are plain HTML in `index.html`. Copy an existing `<li>` card to add one. Filter chips use each section's `data-group` attribute (`kalp docs`, `flexera docs`, `marketing`). Deep links work too: `#kalp`, `#flexera`, `#marketing`, `#docs`.

## Notes
- **Contact email** `gunjanrawat2424@gmail.com` is a placeholder (taken from the Drive owner). Check it and replace it in `index.html` (search for `mailto:`) if it's wrong.
- **Google Drive links:** brochures, case studies, flyers, newsletters and product docs link to individual Drive files (and their parent folders). **Viewers can only open them if the files or folders are shared as "Anyone with the link: Viewer".** Otherwise recruiters will see a "Request access" page. Before applying, open each link in a private window to confirm it works.
- Live docs (docs.kalp.studio, docs.flexera.com) are hosted by the employers and clients. They're linked as work samples, not copied.
- Published-article cards come from the "PUBLISHED WORKS" index doc. The complete list is linked from the site.
- Fonts load from Google Fonts (Fraunces + Inter). If they're blocked, the site falls back to Georgia and system sans fonts.
