<template>
  <nav class="menu">
    <NuxtLink class="menu__link" to="/recipes">Рецепты</NuxtLink>
    <NuxtLink class="menu__link" to="/articles">Статьи</NuxtLink>
    <NuxtLink class="menu__link" to="/kitchens">Кухни народов мира</NuxtLink>
  </nav> 
</template>

<style lang="less">
@import '../assets/styles/main';
  
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  &__link {
    font-size: 16px;
    color: var(--color-black-90);
    font-weight: bold;
    text-transform: uppercase;

    &.active {
      color: var(--color-primary);
    }

    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>