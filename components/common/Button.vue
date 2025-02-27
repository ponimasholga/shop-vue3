<template>
  <component
    :is="component"
    :href="link"
    class="btn"
  >
    {{ text }}
  </component>
</template>
  
<script setup >
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  schemeColor: {
    type: String,
    default: ''
  },
  link: {
    type: String,
  },
  icon: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  }
})

const component = computed(() => {
  return props.link ? 'a' : 'button'
})
</script>
  
<style lang="less" scoped>
@import '../assets/styles/main';

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  min-height: 45px;
  padding: 12px 20px;
  font-size: 15px;
  border-radius: 10px;
  color: var(--color-white);
  background-color: var(--color-btn-background);
  border: 1px solid transparent;
  border-radius: 10px;
}
</style>