<template>
  <div class="recipe">
    <div class="recipe__izb">
      <el-icon><KnifeFork /></el-icon>
    </div>

    <nuxt-link
      :to="linkCard()"
      class="recipe__image"
    >
      <img class="recipe__picture" :src="item.image" :alt="item.title">
    </nuxt-link>
    <div class="recipe__body">
      <div class="recipe__body-wrap">
        <Tag 
          :tags="recipeIgredients"
        />

        <div class="recipe__name">
        {{ item.title }}
        </div>
      </div>

 

      <div class="recipe__controls">
        <div class="recipe__controls-left">
          <div class="recipe__watch">
            <el-icon><View /></el-icon>
            <span>3</span>
          </div>
          <div class="recipe__chat">
            <el-icon><ChatRound /></el-icon>
            <span>45</span>
          </div>
        </div>
        <div class="recipe__controls-right">
          <div class="recipe__count">
            <el-icon><KnifeFork /></el-icon>
            <span>2</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import Tag from '~/components/common/Tag.vue'
  import { View, Hide, KnifeFork, ChatRound } from '@element-plus/icons-vue'

import { onMounted } from 'vue';

const props = defineProps({
  item: {
    type: Object,
  },
})

const linkCard = () => {
  return `/recipes/${props.item.id}`
}

const recipeIgredients = ref(null)

const normalizeRecipeIgredients = () => {
  const normalizeRecipeIgredients = []

  for (let i = 1; i<=2; i++) {
    if (props.item[`strIngredient${i}`]) {
      const ingr = {
        title: props.item[`strIngredient${i}`],
        measure: props.item[`strMeasure${i}`]
      }

      normalizeRecipeIgredients.push(ingr)

    }
  }

  recipeIgredients.value = normalizeRecipeIgredients
}

onMounted(async () => {
  normalizeRecipeIgredients()
})

</script>

<style lang="less">
  @import '../assets/styles/main';
  .recipe {
    position: relative;
    width: calc(25% - 30px);

    &__izb {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      top: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      background-color: #fff;
      border-radius: 50%;
      transition: background-color 0.3s, color 0.3s ease;

      &:hover {
        color: var(--color-white);
        background-color: var(--color-btn-background);
      }

      &.active {
        color: var(--color-white);
        background-color: var(--color-btn-background);
      }
    }

  &__body {
    border: 1px solid var(--color-primary);
    border-top: 0;

    &-wrap {
      padding: 16px;
    }
  }

  &__picture {
    width: 100%;
  }

  &__name {
    font-weight: 700;
    font-size: 17px;
    margin-top: 8px;
  }

  &__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    &-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  &__count {
    display: flex;
    align-items: center;
    color: var(--color-black);
    --color: var(--color-black); 

    span {
      font-size: 14px;
      margin-left: 5px;
    }
  }
 

  &__watch {
    display: flex;
    align-items: center;
    color: var(--color-black);
    --color: var(--color-black); 

    span {
      font-size: 14px;
      margin-left: 5px;
    }
  }
 

  &__chat {
    display: flex;
    align-items: center;
    color: var(--color-black);
    --color: var(--color-black); 

    span {
      font-size: 14px;
      margin-left: 5px;
    }
  }

  &__image {
    width: 100%;
    display: flex;
  }
}
</style>