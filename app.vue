<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRecipesStore }  from './store/recipes';

const recipesStore = useRecipesStore()

onMounted(() => {
  recipesStore.getRecipes();
});
</script>
