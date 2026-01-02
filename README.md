# medium_dashboard

A starter Next.js (TypeScript) dashboard with Tailwind, Prisma (SQLite dev, Postgres-ready), Recharts, Docker, and CI.

## Quick start

1. Install dependencies (pnpm recommended):

```bash
pnpm install
```

2. Generate Prisma client and seed DB:

```bash
pnpm prisma:generate
pnpm run seed
```

3. Run dev server:

```bash
pnpm dev
```

4. Open http://localhost:3000

## Docker (optional)

The repository includes a `Dockerfile` and `docker-compose.yml` for running the app with a Postgres database locally.

Quick Docker steps:

1. Build and start services (app + Postgres):

```bash
docker-compose up --build
```

2. The compose command will install deps, generate Prisma client, push the schema to the DB, run seed, and start Next.js on port 3000.

3. To stop services:

```bash
docker-compose down
```

Smoke test

After starting the compose services, you can run a smoke test script to confirm the app and API are ready:

```bash
# run smoke test against localhost:3000
bash scripts/smoke-test.sh localhost 3000
```

Notes:
- By default this compose file points `DATABASE_URL` at the Postgres service. If you prefer local SQLite for development, set `DATABASE_URL` in `.env` to `file:./dev.db` and run `pnpm run db:push` then `pnpm run seed`.

## Features
- Next.js + TypeScript
- Tailwind CSS
- Recharts sample chart
- Prisma ORM (SQLite for dev; Postgres-ready)
- Jest + React Testing Library
- ESLint + Prettier + Husky + lint-staged
- Dockerfile + docker-compose (Postgres for dev)
- GitHub Actions CI
- Docker publish workflow (requires Docker Hub secrets)

## Deployment

### Local (Docker)

You can run the app locally with Docker Compose (Postgres service included):

```bash
docker-compose up --build
```

App: http://localhost:3000

### Vercel (recommended for Next.js)

- Connect the repository to Vercel and set the `DATABASE_URL` (use a managed Postgres) in Project Settings.
- Vercel will build and deploy automatically on pushes to `main`.

### Docker Hub / Container registry

A GitHub Actions workflow (`.github/workflows/docker-publish.yml`) is included to build and push a Docker image to Docker Hub on push to `main` — if you provide `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` as repository secrets the workflow will publish the image as `DOCKERHUB_USERNAME/medium_dashboard:latest`.

## License
MIT