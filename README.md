# P.E.A — Pal's Eat Afrique LLC

Official website for **Pal's Eat Afrique LLC (P.E.A)**, a Japan-based import & export company connecting Africa and Japan.

> "All Eight, with full professionalism." — Connecting Africa & Japan, building futures together.

## Live structure

This is a single-page site (`index.html`) with four views — **Home**, **Services**, **About**, and **Contact** — switched via hash-based routing (`#home`, `#services`, `#about`, `#contact`) in `script.js`. No build step, no dependencies — just static HTML, CSS, and JS.

## Files

```
.
├── index.html     # All page content (Home, Services, About, Contact)
├── style.css      # Design system: colors, type, layout, components
├── script.js      # Nav toggle + hash-based page routing
└── .github/
    └── workflows/
        └── deploy.yml   # Auto-deploys to GitHub Pages on push to main
```

## Running locally

No build tools needed. Either:

- Open `index.html` directly in a browser, **or**
- Serve it locally (recommended, so the routing/fonts behave like production):
  ```bash
  python3 -m http.server 8000
  ```
  then visit `http://localhost:8000`

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) will build and publish the site automatically on every push to `main`.

Your site will be live at:
```
https://<your-username>.github.io/<repo-name>/
```

## Adding images

Image sections are currently placeholders — dashed boxes labeled with what should go there (e.g. *"Image: Used cars & electronics"*). To add a real image:

```html
<!-- Replace this -->
<div class="visual" data-placeholder="Used Cars & Electronics photo">
  <span class="visual-tag">JP → Africa</span>
  <span class="visual-placeholder-label">Image: Used cars & electronics</span>
</div>

<!-- With this -->
<div class="visual">
  <span class="visual-tag">JP → Africa</span>
  <img src="images/used-cars.jpg" alt="Used cars ready for export">
</div>
```

Create an `images/` folder in the project root for your photos.

## Design system

- **Colors**: Ink (`#0B0E14`), Navy (`#1A2030`), Paper (`#F5F1E6`), Gold (`#C9A227`), Vermilion (`#A33B2E`), Slate (`#8A93A6`)
- **Type**: Big Shoulders Display (headings), Inter (body), JetBrains Mono (labels/routes)
- **Signature element**: the circular "trade route seal" SVG showing the Japan ⇄ Africa route

## Contact info on site

- Phone: +81 90-2377-4848
- Email: info@palseatafricallc.com
- Website: www.palseatafricallc.com
- Headquarters: Based in Japan
