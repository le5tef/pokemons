<template>
  <div class="page-about">
    <div class="page-about_header">
      <span>О проекте</span>
      <span>На данном сайте вы можете найти информацию о любом персонаже из аниме Pokemons</span>
    </div>
    <div class="page-about_body">
      <span>Использованные средства</span>
      <span>Стэк</span>
      <span>Приложение разработано с использованием следующих технологий:</span>
      <ul>
        <li>HTML</li>
        <li>CSS, Препроцессор SCSS</li>
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li>Vite</li>
      </ul>
      <span>Использованные подходы:</span>
      <ul>
        <li>Методолгия БЭМ</li>
        <li>Семантические теги</li>
        <li>Адаптивная верстка</li>
        <li>Подключение к API через fetch, с использованем async/await</li>
        <li>Авторизация через JWT токены</li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.page-about {
  display: flex;
  flex-direction: column;
  width: 75%;
  height: calc(100vh - 65px);
}
.page-about_header {
  display: flex;
  flex-direction: column;
}
.page-about_body {
  display: flex;
  flex-direction: column;
}
</style>
