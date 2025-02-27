<template>
  <div>
    <Header />
    <main class="main">
      <div class="top-info">
        <div class="row">
        <h1>{{ currentKitchen.title }}</h1>
        </div>
      </div>
      <div class="row">
        currentKitchen = {{currentKitchen}}
        <div class="page-detail__body">
          <div class="page-detail__about">
            {{ currentKitchen.text }}
          </div>
        </div>
        <div class="page-detail__section">
          <h2>Популярные рецепты</h2>
          <RecipeList :recipes="currentKitchen.recipes"/>
        </div>
      </div>
    </main>
  </div>
</template>
    
<script setup>
  import { useKitchensStore } from '~/store/kitchens'
  import RecipeList from '~/components/recipe/List.vue'

  const route = useRoute()
  const idPage = Number(route.params.id)

  const store = useKitchensStore()
  const { fetchKitchenById } = store
  const { currentKitchen } = storeToRefs(store)

  await fetchKitchenById(idPage)
</script>
  
<style lang="less" scoped>
  @import '../assets/styles/main'; 
</style>
    