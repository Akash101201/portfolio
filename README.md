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

```bash
npx vercel --prod
```
