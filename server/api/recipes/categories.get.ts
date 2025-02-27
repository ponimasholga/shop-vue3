import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  const categories = await prisma.categoryRecipe.findMany({})

  return categories;
})
