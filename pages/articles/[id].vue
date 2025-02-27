<template>
    <main>
      <Header />
      <main class="main">
        <div class="top-info">
          <div class="row">
            {{ currentArticle }}
            {{ currentArticle.data.title }}
          </div>
        </div>
      </main>
    </main>
  </template>
  
  
<script setup >
  import Header from '~/components/header/Header.vue'
  import { useArticlesStore } from '~/store/articles'

  const store = useArticlesStore()
  const { fetchArticle } = store

  
  const currentArticle = ref()
  const route = useRoute()

  currentArticle.value = await fetchArticle(route.params.id)


</script>
  
<style lang="less">
  @import '../assets/styles/main';
</style>