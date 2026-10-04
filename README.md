# Akash Shankar — Portfolio

Personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Lucide icons. The page is statically pre-rendered and deployed on Vercel.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Update content

All text, links, projects, experience, and skills live in `src/data/resume.ts`.

- Replace the resume: overwrite `public/Akash_Shankar_Resume.pdf`.
- Add a profile photo: put it at `public/avatar.jpg` and set `avatar: "/avatar.jpg"` in `src/data/resume.ts`.
- Change the live URL: update `siteUrl` in `src/data/resume.ts` (used for SEO tags, sitemap, and robots).

## Deploy

Repo: [github.com/Akash101201/portfolio](https://github.com/Akash101201/portfolio)

1. Sign in at [vercel.com](https://vercel.com) with GitHub as **Akash101201** (Hobby plan is free).
2. Import this repo: [vercel.com/new](https://vercel.com/new) → select `portfolio`.
3. Leave the Next.js defaults and click Deploy. Later `git push`es redeploy automatically.
