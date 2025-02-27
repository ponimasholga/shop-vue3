//import { countryTransformer } from "~/server/transformers/country"
import { PrismaClient } from "@prisma/client"
import ref from 'vue'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  
  const kitchen = await prisma.kitchen.findUnique({
    where: {
      id: 1
    },
    include: {
      recipes: true,
    }
  })

  //return countryTransformer(kitchen)

  return kitchen
})