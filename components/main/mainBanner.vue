<template>
  <div class="main-banner">
    <Carousel class="main-banner__slider" v-bind="carouselConfig">

      <Slide 
        v-for="slide in mainBanners" 
        :key="slide.id"
      >
        <nuxt-link :to="slide.link" class="main-banner__item">
          <div class="main-banner__image">
            <img :src="slide.image" :alt="slide.title">
          </div>
          <div class="main-banner__body">
            <div class="row">
              <div class="main-banner__title">
                {{ slide.title }}
              </div>
              <div class="main-banner__text">
                {{ slide.text }}
              </div>
            </div>
          </div>
        </nuxt-link>
      </Slide>

      <template #addons>

      <Navigation />
      
      <Pagination />
      
      </template>
    </Carousel>
  </div> 
</template>

<script setup >
  import 'vue3-carousel/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  import { useBannersStore } from '~/store/banners'

  const carouselConfig = {
    itemsToShow: 1,
    wrapAround: true
  }

  const store = useBannersStore()
  const { fetchMainBanners } = store
  const { mainBanners } = storeToRefs(store)

  await fetchMainBanners()

</script>

<style lang="less">
  @import '../assets/styles/main';
    
  .main-banner {
    margin-bottom: 60px;

    .carousel__pagination {
      bottom: 60px;
    }

    .carousel__pagination-button {
      width: 15px;
      height: 15px;
      border: 2px solid var(--color-white);
      transition: all 0.3s ease;
      border-radius: 50%;
      background-color: transparent;

      &.carousel__pagination-button--active {
        background-color: var(--color-white);
      }
    }

    .carousel__next {
      width: 40px;
      height: 40px;
      background-color: var(--color-primary);
      right: 15px;
      border-radius: 50%;

      path {
        fill: var(--color-white);
      }
    }

    .carousel__prev {
      width: 40px;
      height: 40px;
      background-color: var(--color-primary);
      right: 15px;
      border-radius: 50%;

      path {
        fill: var(--color-white);
      }
    }


    &__body {
      position: relative;
      z-index: 5;
      width: 100%;
      padding-bottom: 70px;
      padding-left: 70px;
      padding-right: 70px;
      max-width: 60%;
    }

    &__title {
      font-size: 36px;
      color: var(--color-white)
    }

    &__text {
      font-size: 22px;
      color: var(--color-white);
      margin-top: 15px;
    }

    &__item {
      display: flex;
      align-items: center;
      position: relative;
      height: 600px;
      width: 100%;
    }

    &__image {
      width: 100%;
      height: 600px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      

      &::before {
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>