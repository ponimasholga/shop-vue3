<template>
  <main>
    <Header />
    <main class="main main--index">
      <MainBanner />
      <section class="section">
        <div class="section__top">
          <h2>Категории</h2>
        </div>
        <MainCategoryRecipe :categories="categories" />
      </section>
      <section class="section">
        <div class="section__top">
          <h2>Популярные рецепты</h2>
        </div>
        <RecipeList :recipes="recipes"/>
      </section>
      <section class="section">
        <div class="section__top">
          <h2>Наши статьи</h2>
        </div>
        <div class="section__body row">
          articles - {{ articles }}
          <MainArticles :articles="articles"/>
        </div>
      </section>
    </main>
  </main>
</template>


<script setup >
import Header from '~/components/header/Header.vue'
import RecipeList from '~/components/recipe/List.vue'
import MainCategoryRecipe from '~/components/main/mainCategoryList.vue'
import MainArticles from '~/components/main/mainArticles.vue'
import MainBanner from '~/components/main/mainBanner.vue'
import { useRecipesStore }  from './store/recipes';
import { useArticlesStore } from '~/store/articles'
import { storeToRefs } from 'pinia'

//recipes
const recipesStore = useRecipesStore();
recipesStore.getRecipes();
const { fetchCategories } = recipesStore
const { recipes } = storeToRefs(recipesStore);
const { categories } = storeToRefs(recipesStore);

//articles
const articlesStore = useArticlesStore();
const { fetchArticles } = articlesStore
const { articles } = storeToRefs(articlesStore);

await fetchArticles();
await fetchCategories();
</script>


<style lang="less">
  @import '../assets/styles/main';

  .section {
    padding-top: 40px;
    padding-bottom: 40px;

    &__top {
      margin-bottom: 40px;
      text-align: center;

      h2 {
        font-size: 32px;
        font-weight: bold;
        font-style: italic;
        color: var(--color-primary)
      }
    }
  }
</style>