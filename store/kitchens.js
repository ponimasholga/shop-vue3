import { defineStore } from 'pinia';
import { ref } from 'vue'


export const useKitchensStore = defineStore('kitchens', () => {

  const kitchens = ref({})
  const currentKitchen = ref(null)

  const fetchKitchens = async () => {

    const data = await $fetch('/api/kitchens/kitchens', {
      method: 'GET',
    })

    if (data) {
      kitchens.value = data
    }
  }

  const fetchKitchenById = async (id) => {
    try {
      const data = await $fetch(`/api/kitchens/get-kitchen-by-id/${id}`, {
        method: 'GET',
      })

      if (data) {
        currentKitchen.value = data,
        load.value = true
      }
    }
    catch(err) {
      console.log(err);
    }
  }

  return {
    kitchens,
    fetchKitchens,
    fetchKitchenById,
    currentKitchen,
  }
})