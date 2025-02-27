import { defineStore } from 'pinia';
import { ref } from 'vue'


export const useArticlesStore = defineStore('artciles', () => {

  const articles = ref({})
  const currentArticle = ref(null)

  const fetchArticles = async () => {

    const data = await $fetch('/api/articles/articles', {
      method: 'GET',
    })

    if (data) {
      articles.value = data
    }
  }

  const fetchArticle = async (code) => {
    const data = await useFetch(`/api/articles/get-article-by-id/${Number(code)}`)

    return data
  }

  return {
    articles,
    fetchArticles,
    fetchArticle,
  }
})