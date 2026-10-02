# Krishna Barnwal — Portfolio

Personal portfolio site. Built on the [React Bits Pro portfolio template](https://github.com/DavidHDev/rbp-portfolio) by David Haz, with all content, imagery and configuration replaced.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion · WebGL flow shader · Lenis smooth scroll · Matter.js

---

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build      # production build
npm run typecheck  # TypeScript
npm run lint       # ESLint
```

---

## Deploy

### Push to your GitHub

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/KrsnaOn/portfolio.git
git push -u origin main
```

(Create the empty `portfolio` repo on GitHub first — don't add a README or .gitignore, or the first push will conflict.)

### Deploy on Vercel

1. Go to vercel.com and sign in with GitHub.
2. **Add New → Project**, pick the `portfolio` repo.
3. Leave every setting at its default — Vercel detects Next.js on its own.
4. **Deploy.**

Then set the real URL in `lib/metadata.ts`:

```ts
url: "https://your-actual-domain.vercel.app",
```

That one field drives the sitemap, canonical links and Open Graph tags, so it's worth doing before you share the link anywhere.

---

## Where the content lives

There is no CMS and no content directory — each section owns its own data, as an array at the top of its component file.

| What you want to change | File |
|---|---|
| Name, SEO description, site URL, keywords | `lib/metadata.ts` |
| Hero greeting, headline, intro line | `components/hero/hero.tsx` |
| Projects (all six) | `components/projects/projects.tsx` |
| Bio paragraphs | `app/about/page.tsx` |
| Timeline entries | `components/about/experience.tsx` |
| Education & certifications | `components/about/education.tsx` |
| Skill pills | `components/about/skills.tsx` |
| Physics tech chips | `components/about/stack.tsx` |
| Email address | `components/contact/contact-button.tsx` |
| Contact copy, social links, footer | `components/contact/contact-card.tsx` |

### Adding a project

Add an entry to the `PROJECTS` array in `components/projects/projects.tsx`. The home page shows the first four; `/projects` shows all of them, so order matters — put your strongest work first.

```ts
{
  id: "unique-slug",
  icon: Binary,                    // any lucide-react icon
  iconLabel: "Project name",
  title: "One line on what it is.",
  description: "A short paragraph on what it does and why.",
  meta: "Tech · stack · here",
  imageRatio: RATIO,
  image: "/projects/your-image.webp",
  imageAlt: "Describe the image for screen readers",
  href: "https://github.com/KrsnaOn/your-repo",
  hrefLabel: "Repository",         // or "Live demo"
}
```

---

## Images

| File | What it is |
|---|---|
| `public/krishna.webp` | Hero portrait at rest (grayscale) |
| `public/krishna_hover.webp` | Hero portrait on hover (colour, yellow ground) |
| `public/projects/*.webp` | One card image per project |

The two portraits must stay the same dimensions (currently 900×900) or the hover morph will jump.

**The project card images are diagrams, not screenshots.** Each one illustrates how that project actually works — the token pipeline for Siri-LLM, the held-transaction ledger for Deal-ID, the routing fan for Sahi Jagah. Replace any of them with a real screenshot whenever you have one: drop a `.webp` into `public/projects/` at a 1024×640 ratio and point the `image` field at it.

## Still to do

- `public/og-image.png` (1200×630) — the preview card shown when the link is shared. Nothing breaks without it; the link preview is just blank.
- `app/icon.svg` and `app/apple-icon.svg` still carry the template's mark.
- Tech chip logos load from `cdn.simpleicons.org`. If one ever 404s, that chip falls back to its first letter rather than showing a broken image.

---

## Template licence

The React Bits Pro template is free to use in personal and commercial projects. You may not resell or redistribute the template itself.
