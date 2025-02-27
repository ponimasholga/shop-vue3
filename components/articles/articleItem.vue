<template>
  <nuxt-link to="/articles" class="article-item">
    <div class="article-item__image">
      <img src="/images/category-recipe/breakfast.jpg"/>
    </div>
    <div class="article-item__body">
      <div class="article-item__tag">
        <div class="article-item__tag-item">Tag</div>
      </div>
      <div class="article-item__title">
        {{item.title}}
      </div>
    </div>
  </nuxt-link>
</template>
  
<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    item: {
      type: Object,
    },
    size: {
      type: String,
    }
  })

</script>
  
  
  <style lang="less">
    @import '../assets/styles/main';
  
    .article-item {
      display: block;
      width: calc(50% - 30px);
      margin: 0 15px 30px;
      height: 240px;
      position: relative;
      float: right;

      &:hover {
        .article-item {
          &__title {
            color: var(--color-white);
          }
        }
      }

      &:first-child {
        float: left;
        width: calc(50% - 30px);
        margin: 0 15px 30px;
        height: 510px;
        grid-row: span 2;

        .article-item {
          &__title {
            font-size: 32px;

          }
        }
      }
      
      &__image {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 10px;
        position: absolute;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8)
        }
  
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &__tag {
        &-item {
          display: inline-flex;
          background-color: var(--color-primary);
          border-radius: 10px;
          padding: 2px 9px;
          color: var(--color-white)
        }
      }

      &__title {
        color: var(--color-white);
        font-weight: bold;
        text-align: left;
      }

      &__body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 20px;
      }
  
      &__title {
        font-size: 20px;
        line-height: 1.4;
        font-weight: bold;
        text-align: left;
        transition: all 0.3s ease;
      }
    }
  </style>