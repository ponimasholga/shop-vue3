<template>
  <div class="main-categories">
    <CategoryRecipeItem 
      v-for="item in categories"
      :key="item.id"
      :item="item"
    />
  </div>
</template>
  
<script setup>
  import CategoryRecipeItem from '~/components/categoryRecipe/categoryRecipeItem.vue'

  const props = defineProps({
    categories: {
      type: Object,
    },
  })

</script>
  
<style lang="less">
  @import '../assets/styles/main';

  .main-categories {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
    
</style>