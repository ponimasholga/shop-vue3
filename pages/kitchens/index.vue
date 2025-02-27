<template>
  <div>
    <Header />
    <main class="main">
      <div class="top-info">
        <div class="row">
        <h1>{{ title }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="kitchen-list">
          <KitchenItem
            v-for="(kitchen, index) in kitchens"
            :key="index" 
            class="kitchen-list__item"
            :item=kitchen
          />
        </div>
      </div>
    </main>
  </div>
</template>
  
  
<script setup >
  import KitchenItem from '~/components/kitchen/KitchenItem.vue'
  import { useKitchensStore } from '~/store/kitchens'

  useHead({
    title: 'Кухни народов мира',
  })

  const title = ref('Кухни народов мира')

  const store = useKitchensStore()
  const { fetchKitchens } = store
  const { kitchens } = storeToRefs(store)

  const urlDetailPage = (id) => {
    return `/kitchens/${id}`
  }


  await fetchKitchens()
  </script>
  
  
<style lang="less">
  @import '../assets/styles/main';

  .kitchen-list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    &__item {
      width: calc(14.3% - 30px)
    }
  }
</style>