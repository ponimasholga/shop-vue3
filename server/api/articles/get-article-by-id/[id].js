import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const article = await prisma.article.findUnique({
    where: {
      id: Number(event.context.params.id)
    },
    include: {
      tags: true
    }
  })
  return article;
});