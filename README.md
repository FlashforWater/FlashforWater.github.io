# Personal Site

Dashboard-style personal site built with Next.js 16 + Tailwind v4, deployed to GitHub Pages.

## Quick start

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # static export to ./out
```

## Customize

- **`src/config/site.ts`** — name, role, bio, GitHub handle, projects, learning focus.
- **`src/components/StackCard.tsx`** — your tech stack list.
- **`src/content/notes/*.md`** — paper-reading notes (frontmatter: `title`, `date`, `summary`).

## Deploy to GitHub Pages

1. Create a repo named `<your-username>.github.io` (user site) **or** any name (project site).
2. Push this code to the `main` branch.
3. In repo Settings → Pages → Source, choose **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.

For a project site (e.g. `myhandle.github.io/personal-site`) the `next.config.ts` auto-detects the repo name and sets `basePath` accordingly.
