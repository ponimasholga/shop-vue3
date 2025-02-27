<template>
  <main>
    <Header />
    <main class="main">
      <div class="top-info">
        <div class="row">
        </div>
      </div>
      <div class="row">
        <div class="page-account">
          <div class="page-account__aside">
            <AsideMenu />
          </div>

          <div class="page-account__body">
            <slot />
          </div>
        </div>
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