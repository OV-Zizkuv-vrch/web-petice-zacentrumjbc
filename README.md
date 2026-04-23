# Keystatic in Next.js

This template shows how you can use Keystatic in a Next.js site that utilises
the `app` directory.

## Local development

```bash
npm install
npm run dev
```

- App: http://localhost:3000
- Keystatic admin: http://127.0.0.1:3000/keystatic

In development, Keystatic uses **local** storage — content is read and written directly to files on disk (`content/` directory). No extra configuration is needed.

## Environment variables

Create a `.env.local` file in the project root. All variables prefixed with `NEXT_PUBLIC_` are embedded in the browser bundle; the rest are server-only.

### Required in production

| Variable | Description |
|----------|-------------|
| `KEYSTATIC_GITHUB_CLIENT_ID` | GitHub OAuth app client ID (from Keystatic Cloud dashboard) |
| `KEYSTATIC_GITHUB_CLIENT_SECRET` | GitHub OAuth app client secret |
| `KEYSTATIC_SECRET` | Random secret string used to sign Keystatic sessions (min. 32 chars) |
| `KEYSTATIC_CLOUD_PROJECT` | Keystatic Cloud project in `team/project` format |

### Optional

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_SITE_URL` | `https://petice.zacentrumjbc.cz` | Canonical site URL — used in sitemap and Open Graph metadata |
| `NEXT_PUBLIC_EPETITION_URL` | `https://epetice.gov.cz/placeholder` | Link to the official government ePetition page |

## Production setup (Keystatic Cloud)

In production, Keystatic switches to **cloud** storage, which stores content in a connected GitHub repository and provides a hosted admin UI with GitHub authentication.

1. Create a project at [cloud.keystatic.io](https://cloud.keystatic.io) and link it to this GitHub repository.
2. Follow the Keystatic Cloud setup to create a GitHub OAuth app — it will give you the `KEYSTATIC_GITHUB_CLIENT_ID` and `KEYSTATIC_GITHUB_CLIENT_SECRET` values.
3. Generate a random secret for `KEYSTATIC_SECRET` (e.g. `openssl rand -hex 32`).
4. Set all three variables in your hosting environment.

## Content

Content is managed through Keystatic at `/keystatic`. Two collections are available:

| Collection | Path | Description |
|------------|------|-------------|
| Content | `content/` | Site pages — `petice` (petition text) and `o-nas` (About page) |
| Posts | `posts/` | Legacy posts collection |

## Build

```bash
npm run build
npm start
```
