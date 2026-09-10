# dantaserick.github.io

Personal site of Erick Dantas — Data & AI Engineering (analytics, agentic systems, software) and University Professor.
Live at **https://dantaserick.github.io**.

## Stack

React 19 · Vite · TypeScript · Tailwind CSS 4 · Vitest · oxlint. Single page, dark theme, English only.

## Editing content

Everything the site shows lives in one file: [`src/content.ts`](src/content.ts) — experience, projects, capabilities, education, links and the hero console alerts. Components carry no business text. Edit that file, commit, push to `main`, and GitHub Actions rebuilds and publishes the site.

`npm test` runs a few invariants over the content (links are https, dates are `YYYY-MM`, hero alerts stay generic, first project is Bridge).

## Local development

```
npm install
npm run dev       # http://localhost:5173
npm run build     # dist/
npm run preview   # serves dist/ on :4173
npm test
npm run lint
```

## Deploy

`.github/workflows/deploy.yml` runs on every push to `main`: install, test, lint, build, publish `dist/` to GitHub Pages (Pages source must be set to "GitHub Actions" in the repository settings).

## Printing a CV

The "Download CV" button calls the browser print dialog; `src/print.css` turns the page into a compact résumé (hero console, nav and footer hidden).

---

Content © Erick Dantas. Code under MIT.
