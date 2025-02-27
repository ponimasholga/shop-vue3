import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  const articles = await prisma.article.findMany({
    include: 
    { 
      tags: true 
    },
  })

  return articles;
})
