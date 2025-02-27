import { getArticleById } from '../../db/article'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const article = await getArticleById(3)
  return article

});