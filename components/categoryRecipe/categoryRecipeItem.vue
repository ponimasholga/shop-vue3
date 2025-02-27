<template>
  <nuxt-link to="/recipes" class="category-recipe">
    <div class="category-recipe__image">
      <img src="/images/category-recipe/breakfast.jpg"/>
    </div>
    <div class="category-recipe__title">
      {{item.title}}
    </div>
  </nuxt-link>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    item: {
      type: Object,
    },
  })

</script>


<style lang="less">
  @import '../assets/styles/main';

  .category-recipe {
    &__image {
      width: 190px;
      height: 190px;
      overflow: hidden;
      border-radius: 50%;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__title {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      transition: all 0.3s ease;
    }

    &:hover {
      .category-recipe {
        &__title {
          color: var(--color-primary)
        }
      }
    }
  }
</style>