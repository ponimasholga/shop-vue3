<template>
    <main>
      <Header />
      <main class="main">
        <div class="row">
          <div class="page__top">
            <h1>Рецепты</h1>
          </div>
          <div class="page__main">
            <div class="page__aside">
              фильтр
            </div>
            <div class="page__body">
              <RecipeList :recipes="recipes"/>
            </div>
          </div>
          
        </div>
      </main>
    </main>
  </template>
  
  
  <script setup >
  import Header from '~/components/header/Header.vue'
  import RecipeList from '~/components/recipe/List.vue'
  import { useRecipesStore }  from './store/recipes';
  
  const recipesStore = useRecipesStore();
  const recipes = computed(() => recipesStore.recipes)
  
  </script>
  