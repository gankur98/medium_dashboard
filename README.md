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

## License
MIT