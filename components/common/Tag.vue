<template>
  <div class="tag">
    <div class="tag__item" 
      v-for="tag in tags"
      :key="tag.title"
    >
      {{ tag.title }}
    </div>
  </div>
</template>
    
<script setup >
  const props = defineProps({
    tags: {
      type: Object,
      default: ''
    },
  })

</script>
    
<style lang="less" scoped>
@import '../assets/styles/main';

.tag {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  &__item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    line-height: 1.1;
    color: var(--color-white);
    background-color: var(--color-btn-background);
    padding: 6px;
    border-radius: 5px;
  }
}
</style>