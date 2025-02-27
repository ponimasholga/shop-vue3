<template>
  <main>
    <Header />
    <main class="main row">
      <div class="auth">
        <div class="auth__back">
          <img class="auth__image" src="../assets/images/auth-back.jpeg" alt="">
        </div>
        <h1 class="title auth__title">
          Авторизация
        </h1>
        <AuthForm 
          class="form auth__form" 
        />
      </div>
    </main>
  </main>
</template>


<script setup >
import AuthForm from '~/components/form/AuthForm.vue'
import Header from '~/components/header/Header.vue'
</script>
  
<style lang="less">
@import '../assets/styles/main';
  
.auth {
  padding: 40px;
  width: 100%;
  background-color: var(--color-btn-background);
  position: relative;

  &__back {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    &::before {
      content:"";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.65);
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__form {
    width: 500px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  &__title {
    color: var(--color-white);
    position: relative;
    z-index: 1;
  }
}
</style>