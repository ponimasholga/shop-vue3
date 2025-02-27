<template>
    <main>
      <Header />
      <main class="main">
        <div class="top-info">
          <div class="row">
            <h1>{{ title }}</h1>
          </div>
        </div>
        <div class="row">
          <div class="articles"
          >
            <nuxt-link 
              v-for="item in articles"
              :key="item.id"
              class="articles__item"
              :to="urlDetailPage(item.id)"
            >
              <div class="articles__img">
                <img :src="item.banner" alt="">
              </div>
              <div class="articles__body">
                <div class="articles__title">
                  {{ item.title }}
                </div>
                <div 
                  class="articles__tag">
                  <div class="articles__tag-item"
                    v-for="tag in item.tags"
                    :key="tag.id"
                  >
                    {{ tag.title }}
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </main>
    </main>
  </template>
  
  
<script setup >
  import Header from '~/components/header/Header.vue'
  import { useArticlesStore } from '~/store/articles'


  useHead({
    title: 'Статьи',
  })

  const title = ref('Статьи')

  const store = useArticlesStore()
  const { fetchArticles } = store
  const { articles } = storeToRefs(store)

  const urlDetailPage = (id) => {
    return `/articles/${id}`
  }


  await fetchArticles()
  </script>
  
  
  <style lang="less">
  @import '../assets/styles/main';

  .articles {
    display: flex;
    gap: 30px;

    &__body {
      background-color: #fff;
      border-bottom-right-radius: 13px;
      border-bottom-left-radius: 13px;
      padding: 15px 10px;
    }

    &__img {
      border-top-right-radius: 13px;
      border-top-left-radius: 13px;
      overflow: hidden;
      height: 300px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__tag {
      display: flex;
      gap: 5px;
      margin-top: 15px;

      &-item {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;
        min-height: 32px;
        padding: 5px 13px;
        font-size: 14px;
        color: #fff;
        background-color: #8fbe1d;
        border: 1px solid transparent;
        border-radius: 18px;
      }
    }

    &__title {
      font-size: 18px;
      color: #000;
    }

    &__item {
      width: calc(33% - 30px);
      border-radius: 13px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3)
    }
  }
  </style>