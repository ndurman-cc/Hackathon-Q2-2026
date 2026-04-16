# UX portfolio (Astro + GitHub Pages)

Static UX portfolio site: home, work index, case studies from Markdown, and about. Built with [Astro](https://astro.build/) and designed to deploy to **GitHub Pages** as a **user or organization site** at `https://<username>.github.io/`.

## Prerequisites

- Node.js **22.12+** (see `package.json` `engines`)

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:4321`).

## Production build and preview

```bash
npm run build
npm run preview
```

The static output is written to `dist/`.

## Configure before publishing

1. **`astro.config.mjs`** — Set `site` to your live URL, e.g. `https://your-username.github.io`. Replace the placeholder `YOUR-USERNAME` so canonical URLs and Open Graph tags resolve correctly.

2. **`src/site.ts`** — Replace name, tagline, bio, email, and LinkedIn URL with your own details.

3. **Case studies** — Edit or add Markdown files under `src/content/caseStudies/`. Frontmatter fields are validated in `src/content.config.ts`.

4. **Resume** — Optional: add `public/resume.pdf` so the About page download works.

5. **Open Graph image** — Replace `public/og-default.svg` with your own asset (or add per-page `ogImage` via `BaseLayout` where needed).

## Deploy with GitHub Actions

This repo includes [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). It runs on every push to `main`, runs `npm ci` and `npm run build`, and publishes the `dist/` folder to GitHub Pages.

**One-time GitHub settings**

1. Repository **Settings → Pages → Build and deployment**.
2. Under **Source**, choose **GitHub Actions** (not “Deploy from a branch”).

**User/org site URL**

For a site at the root (`https://username.github.io/` with no repository path), the repository name should normally be **`username.github.io`**. Push this project to that repository (or rename your repo) and keep `site` in `astro.config.mjs` aligned with that URL.

## Project structure

| Path | Purpose |
|------|--------|
| `src/pages/` | Routes (`index`, `about`, `work/`, `work/[slug]`) |
| `src/layouts/BaseLayout.astro` | Shell, fonts, meta, OG tags |
| `src/content/caseStudies/` | Case study Markdown + frontmatter |
| `src/content.config.ts` | Content collections and schemas |
| `src/styles/global.css` | Design tokens and layout styles |
| `public/` | Static assets (favicon, images, optional resume PDF) |

## License

Add a license file if you need one for your portfolio repo.
