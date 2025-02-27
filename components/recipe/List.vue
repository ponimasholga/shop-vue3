<template>
  <div class="recipes">
    <RecipeItem 
      v-for="item in recipes"
      :key="item.id"
      :item="item"
    />
  </div>
</template>
  
<script setup>
import RecipeItem from '~/components/recipe/Item.vue'
const props = defineProps({
  recipes: {
    type: Object,
  },
})

</script>
  
<style lang="less">
@import '../assets/styles/main';

.recipes {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
  </style>