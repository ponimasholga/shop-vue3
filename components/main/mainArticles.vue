<template>
  <div class="main-articles">
    <ArticleItem 
      v-for="item in articles"
      :key="item.id"
      :item="item"
    />
  </div>
</template>
    
<script setup>
  import ArticleItem from '~/components/articles/articleItem.vue'

  const props = defineProps({
    articles: {
      type: Object,
    },
  })

</script>
  
<style lang="less">
  @import '../assets/styles/main';

  .main-articles {
    margin: 0 -15px;
    overflow: hidden;
  }
    
</style>