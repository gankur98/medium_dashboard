FROM node:18-alpine

WORKDIR /app

# enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# install deps
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# copy and build
COPY . .
RUN pnpm build

ENV NODE_ENV=production
EXPOSE 3000

# start in production
CMD ["pnpm", "start"]