This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## API Client Generation (Orval)

This project uses Orval to generate typed DTOs and API services from:

- `public/innovation-lab-api-specs.json`

Generated outputs:

- Frontend React Query + fetch client: `src/lib/services/generated/frontend`
- Node fetch client: `src/lib/services/generated/node`

Commands:

```bash
npm run api:generate
npm run api:watch
```

Convenience re-exports:

- `src/lib/services/apiCall.ts`

Frontend local BFF helper layer:

- `src/lib/services/bff-client.ts`

Use `bffApi` / `localApi` from `src/lib/services/apiCall.ts` in UI code so client-side code consistently talks only to local `/api/*` routes.

Server-only Orval exports for BFF route handlers:

- `src/lib/services/server-api.ts`

Regenerate the client whenever the backend OpenAPI spec changes.

## BFF Layer (Next.js Route Handlers)

This project now includes a server-side BFF under `src/app/api/**`.

Key design points:

- All backend calls happen server-side via the Orval node client.
- Frontend can call local Next.js routes (`/api/...`) instead of calling backend APIs directly.
- Bearer token forwarding is supported by passing the incoming `Authorization` header to the backend.
- Responses are normalized into a standard envelope with `success`, `data`, `error`, and `meta`.

Configured route groups:

- `src/app/api/about/[[...segments]]/route.ts`
- `src/app/api/banners/[[...segments]]/route.ts`
- `src/app/api/categories/[[...segments]]/route.ts`
- `src/app/api/contacts/[[...segments]]/route.ts`
- `src/app/api/events/[[...segments]]/route.ts`
- `src/app/api/faqs/[[...segments]]/route.ts`
- `src/app/api/testimonials/[[...segments]]/route.ts`

Shared BFF utilities:

- `src/lib/bff/common.ts`

### Environment Variables

Create a local env file from `.env.example` and set:

- `BACKEND_API_BASE_URL` (for example `https://api.example.com`)

The generated node client uses this at runtime.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
