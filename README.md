# Nam V. Tran — Portfolio

A bilingual, privacy-conscious portfolio built with Astro 7, TypeScript, Tailwind CSS 4, and content collections.

## Develop

```sh
pnpm install
pnpm dev
```

## Verify

```sh
pnpm lint
pnpm check
pnpm test
pnpm build
pnpm exec playwright install chromium # first-time local setup
pnpm test:e2e
```

## Replace the guided content

- Update `src/content/profile/en.json` and `vi.json` with your biography, links, and interests.
- Replace the monogram with an approved portrait only when you have one you can publish.
- Use the existing files in `src/content/journey`, `work`, and `writing` as bilingual authoring templates.
- Keep matching English and Vietnamese entries aligned by subject. Slugs may remain locale-specific.

## Privacy boundary

Before publishing, remove source code owned by an employer, internal architecture, customer data, private metrics, unreleased work, security details, internal screenshots, and coworker attribution without permission. Only entries with `visibility: public` are built; writing must also have `draft: false`.

The canonical production URL is currently configured as `https://namvtran.dev`. Replace it in `astro.config.mjs` if your final domain is different.
