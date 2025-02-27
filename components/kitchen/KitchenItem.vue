<template>
  <div class="k-item">
    <NuxtLink class="k-item" :to="urlDetailPage(item.id)">
      <div class="k-item__image">
        <img :src="item.image"/> 
      </div>
      <div class="k-item__title">
        {{ item.title }}
      </div>
    </NuxtLink>
  </div> 
</template>

<script setup>
  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
  })

  const urlDetailPage = (id) => {
    return `/kitchens/${id}`
  }

</script>

<style lang="less">
@import '../assets/styles/main';
  
.k-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  transition: opacity 0.3 ease;

  &__image {
    width: 150px;
    height: 150px;
    border: 3px solid var(--color-primary);
    overflow: hidden;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover {
    opacity: 0.6;
    transition: 0.3s ease;
  }

  &__title {
    color: #000;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  }
}
</style>