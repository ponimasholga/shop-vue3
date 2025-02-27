import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  const kitchens = await prisma.kitchen.findMany({})

  return kitchens;
})
