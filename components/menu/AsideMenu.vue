<template>
    <nav class="aside-menu">
      <NuxtLink class="aside-menu__link" to="/recipes">Настройки</NuxtLink>
      <NuxtLink class="aside-menu__link" to="/my-recipes">Мои рецепты</NuxtLink>
      <NuxtLink class="aside-menu__link" to="/favorites">Избранные рецепты</NuxtLink>
      <NuxtLink class="aside-menu__link" to="/my-articles">Мои статьи</NuxtLink>
    </nav> 
  </template>
  
  <style lang="less">
  @import '../assets/styles/main';
    
  .aside-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    width: 100%;
  
    &__link {
      display: flex;
      align-items: center;
      padding: 10px 15px;
  
      &.active {
        color: var(--color-primary);
      }
    }
  }
  </style>