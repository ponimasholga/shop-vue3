<template>
  <header class="header">
    <div class="row">
      <div class="header__top ">
        <div class="header__logo">
          <Logo />
        </div>
        <div class="header__menu">
          <Menu />
        </div>
        <div class="header__control">
          <AuthTop />
        </div>
      </div>
    </div>
  </header>
</template>


<script setup >
  import AuthTop from '~/components/authTop/authTop.vue'
  import Logo from '~/components/common/Logo.vue'
  import Menu from '~/components/menu/Menu.vue'
</script>

<style lang="less">
@import '../assets/styles/main';

.header {
  background-color: var(--color-white);

  &__menu {
    display: flex;
    align-items: center;
  }

  &__logo {
    display: inline-flex;
    align-items: center;
  }

  &__top {
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 30px;
    
  }

  &__row {
    display: flex;
    align-content: center;
    justify-content: space-between;
  }
}
</style>
