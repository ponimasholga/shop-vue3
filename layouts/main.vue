<template>
    <main>
      <Header />
      <main class="main">
        <div class="row">
            <slot />
        </div>
      </main>
    </main>
  </template>
        
<script setup >
  import Header from '~/components/header/Header.vue'
  import AsideMenu from '~/components/menu/AsideMenu.vue'
</script>
    
<style lang="less">
  @import '../assets/styles/main';

  .page-account {
    display: flex;

    &__aside {
      width: 300px;
    }

    &__body {
      width: calc(100% - 300px);
      padding-left: 15px;
    }
  }
</style>