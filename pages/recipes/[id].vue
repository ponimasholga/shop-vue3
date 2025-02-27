<template>
    <main>
      <Header />
      <main class="main row">
        <div v-if="load" class="page-detail">
            <div class="page-detail__image">
              <img :src="recipe.strMealThumb" :alt="recipe.strMeal">
            </div>
            <div class="page-detail__body">
              <h1>{{ recipe.strMeal }}</h1>
              <div>
                {{ recipe.strInstructions }}
              </div>

              {{ idRecipe }}
              
              {{ recipe }}


            </div>
        </div>
      </main>
    </main>
  </template>
  
  
<script setup >
import { ref, onMounted, computed } from 'vue'
import { RecipeService } from '../services'

const load = ref(false)
const route = useRoute()
const idRecipe = route.params.id
const recipe = ref(RecipeService.getEmptyRecipe())

const fetchRecipe = async () => {
  try {
    const data = await RecipeService.getRecipeById(idRecipe);
    recipe.value  = {...data};
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  if (parseInt(idRecipe)) {
    await fetchRecipe()
    load.value = true
  }
})

</script>
    
  <style lang="less">
  @import '../assets/styles/main';
  </style>