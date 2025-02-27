import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  const mainBanners = await prisma.mainBanner.findMany({})

  return mainBanners;
})
