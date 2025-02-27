<template>
  <div class="auth-top">
    <nuxt-link to="/account" class="auth-top__wrap">
      <div class="auth-top__avatar">

      </div>
      <div class="auth-top__name">
        Имя Имя
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
  //  import Button from '~/components/common/Button.vue'
  //<Button text="Вход" link="/auth" />
  //<Button schemeColor="outline" text="Регистрация" link="/registration" />
</script>
  
<style lang="less">
  @import '../assets/styles/main';
  .auth-top {
    &__wrap {
      display: inline-flex;
      align-items: center;
      gap: 15px;
    }

    &__avatar {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: #fff;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__name {
      font-size: 16px;
      color: #fff;
    }
  }
</style>