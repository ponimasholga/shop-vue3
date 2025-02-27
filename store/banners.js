import { defineStore } from 'pinia';
import { ref } from 'vue'


export const useBannersStore = defineStore('kitchens', () => {

  const mainBanners = ref(null)

  const fetchMainBanners = async () => {

    const data = await $fetch('/api/banners/mainBanners', {
      method: 'GET',
    })

    if (data) {
      mainBanners.value = data
    }
  }

  return {
    mainBanners,
    fetchMainBanners,
  }
})