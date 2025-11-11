<template>
  <main class="card__content" :class="`color_${pokemon.type[0]}_border`">
    <header class="card__content-header" :class="`color_${pokemon.type[0]}_border`">
      {{ pokemon.id }}
    </header>
    <figure class="card__content-body" :class="`color_${pokemon.type[0]}_border-bot`">
      <img
        :src="pokemon.img"
        class="card__content-body_image"
        :alt="`Изображение покемона ${pokemon.name}`"
      />
      <figcaption class="card__content-body_name">{{ pokemon.name }}</figcaption>
    </figure>
    <footer class="card__content-footer" :class="`color_${pokemon.type[0]}_border-top`">
      <ul class="card__content-footer_types">
        <li>{{ pokemon.type[0] }}</li>
        <li v-if="pokemon.type[1]">{{ pokemon.type[1] }}</li>
      </ul>
      <dl class="card__content-footer_stats">
        <dd class="card__content-footer_stats-value">
          <HealthIcon />
          <p>{{ pokemon.stats.health }}</p>
        </dd>
        <dd class="card__content-footer_stats-value">
          <SwordIcon />
          <p>{{ pokemon.stats.attack }}</p>
        </dd>
      </dl>
    </footer>
  </main>
</template>

<script setup>
import HealthIcon from '@/assets/icons/HealthIcon.vue'
import SwordIcon from '@/assets/icons/SwordIcon.vue'

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.card__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  background: url('@/assets/icons/pokemon_bg.jpg');
  box-shadow: 0px 0px 25px 4px rgba(34, 60, 80, 0.6);
  &-header {
    font-size: 16px;
    padding: 5px;
    border-top: none !important;
    border-left: none !important;
    border-bottom-right-radius: 12px;
    align-self: start;
    font-weight: 700;
  }
  &-body {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    gap: 10px;
    padding-bottom: 10px;
    font-size: 18px;
    &_image {
      height: 100%;
      width: 100%;
      max-width: 100px;
      object-fit: cover;
    }
    &_name {
      font-weight: 700;
      font-size: 18px;
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
  &-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 5px;
    gap: 5px;
    &_types {
      display: flex;
      border: 2px solid black;
      border-radius: 8px;
      font-size: 13px;
      list-style: none;
      li {
        position: relative;
        padding: 2px 5px;
        font-weight: 600;
      }
      li:not(:last-child) {
        border-right: 2px solid black;
      }
    }
    &_stats {
      display: flex;
      gap: 10px;
      font-size: 13px;
      &-value {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-weight: 700;
      }
    }
  }
}
</style>
