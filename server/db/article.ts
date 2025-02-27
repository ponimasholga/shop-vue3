import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getArticleById = (articleId:number) => {
  return prisma.article.findUnique({
    where: {
      id: 3
    },
    include: {
      tags: true
    }
  })  
}