import { defineStore } from 'pinia';
import axios from 'axios'
import { URL_RECIPES_BY_LETTER, URL_RECIPES_BY_ID } from '../constans'


export const useRecipesStore  =  defineStore('root', () => {
  const recipes  = ref(null)
  const recipe = ref(null)
  const categories = ref(null)

  const fetchCategories = async () => {

    const data = await $fetch('/api/recipes/categories', {
      method: 'GET',
    })

    if (data) {
      categories.value = data
    }
  }

  async function getRecipes() {
    const data = await axios.get(URL_RECIPES_BY_LETTER)
    recipes.value = data?.data?.meals
  }

  async function getRecipeId(id) {
    const data = await axios.get(`${URL_RECIPES_BY_ID}${id}`)
    recipe.value = data?.data?.meals[0]
  }

  return { categories, fetchCategories, recipes, recipe, getRecipes, getRecipeId}

})