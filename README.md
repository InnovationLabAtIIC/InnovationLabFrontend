# IV Labs Website

Modern website for IV Labs built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Quick Start

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build for production
- `npm run start` - Run production build
- `npm run lint` - Run ESLint

## Folder Structure

```text
ivlabs/
├── public/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── (public)/
│   │       ├── about/page.tsx
│   │       ├── contact/page.tsx
│   │       ├── events/page.tsx
│   │       ├── lab/page.tsx
│   │       ├── login/page.tsx
│   │       └── partners/page.tsx
│   ├── components/
│   │   ├── About-Extended.tsx
│   │   ├── Crausel.tsx
│   │   ├── FadeIn.tsx
│   │   ├── Footer.tsx
│   │   ├── Home-Pg-Hero.tsx
│   │   ├── Maruee.tsx
│   │   ├── NavBar.tsx
│   │   ├── NewsSection.tsx
│   │   ├── SmoothScroll.tsx
│   │   ├── UpcomingEventsSection.tsx
│   │   └── Partners/
│   │       ├── companyCard.tsx
│   │       ├── companyList.tsx
│   │       ├── gallery.tsx
│   │       └── stories.tsx
│   ├── constants/
│   │   └── constants.ts
│   ├── hooks/
│   │   └── smth.ts
│   ├── lib/
│   │   ├── data/data.tsx
│   │   ├── services/apiCall.ts
│   │   └── utils/util.ts
│   ├── styles/
│   │   └── globals.css
│   └── types/
│       └── type.ts
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Notes

- Global styles live in `src/styles/globals.css`.
- Route groups are used under `src/app/(public)` for public-facing pages.
- Shared UI components are in `src/components`.
