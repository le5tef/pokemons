<template>
  <main class="page">
    <header class="page__header">
      <h1 class="page__header-title">Таблица Покемонов</h1>
      <p class="page__header-description">
        В данном разделе представлена краткая информация о покемонах: их внешний вид, <br />
        имя, тип и базовые характеристики.
      </p>
      <p class="page__header-description">
        Нажав на карточку покемона, вы перейдете на страницу с подробной информацией о нем.
      </p>
    </header>
    <section class="page__body" aria-label="Список покемонов">
      <router-link
        :to="`/pokemons/${pokemon.name}`"
        v-for="pokemon in pokemonsStore.sortedPokemonsList"
        :key="pokemon.name"
        class="card"
      >
        <PokemonCard :pokemon="pokemon" />
      </router-link>
    </section>
    <div ref="observer"></div>
  </main>
</template>

<script setup>
import PokemonCard from '@/components/PokemonCard.vue'
import { usePokemonsStore } from '@/stores/pokemons'
import { onMounted, onUnmounted, useTemplateRef } from 'vue'

const pokemonsStore = usePokemonsStore()

const observerDiv = useTemplateRef('observer')
onMounted(async () => {
  console.log(observerDiv.value)
  const options = {
    rootMargin: '0px',
    scrollMargin: '0px',
    threshold: 1.0,
  }
  const callback = function (entries) {
    if (entries[0].isIntersecting) {
      pokemonsStore.loadList(20, pokemonsStore.currentPage)
      pokemonsStore.currentPage += 1
    }
  }
  const observer = new IntersectionObserver(callback, options)
  observer.observe(observerDiv.value)
})
onUnmounted(() => {
  pokemonsStore.currentPokemonsList = []
  pokemonsStore.currentPage = 0
})
</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  width: 75%;
  align-items: center;
  background-color: rgb(157, 214, 255);
  &__header {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
    padding: 20px 20px 10px 20px;
    gap: 5px;
    border-bottom: 2px solid rgba(128, 128, 128, 0.633);
    align-items: center;
    &-title {
      font-size: 60px;
      font-weight: 700;
      color: white;
      text-transform: uppercase;
      text-shadow: 1px 2px 3px $text_shadow;
    }
    &-description {
      font-size: 24px;
      color: $text_main;
      text-align: center;
    }
  }
  &__body {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }
}

.card {
  border: none;
  flex: 1 1 calc(20% - 20px);
  border-radius: 12px;
  padding: 10px;
  max-width: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: auto;
  box-sizing: border-box;
  background-color: $color_gold;
}
</style>
