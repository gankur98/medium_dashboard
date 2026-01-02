import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const now = Date.now()
  const items = Array.from({ length: 24 }).map((_, i) => ({
    name: 'traffic',
    value: Math.round(100 + Math.sin(i / 3) * 30 + Math.random() * 20),
    timestamp: new Date(now - (23 - i) * 60 * 60 * 1000)
  }))

  await prisma.metric.createMany({ data: items })
  console.log('Seeded metrics')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())
