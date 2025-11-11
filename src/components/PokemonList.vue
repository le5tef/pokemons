<template>
  <main class="input_values" v-if="inputValue">
    <ul
      v-for="pokemon in pokemonList"
      :key="pokemon.name"
      @click="openPokemon(pokemon.name)"
      class="input_value-item"
      v-if="pokemonList.length"
    >
      <li>{{ pokemon.name }}</li>
    </ul>
    <p v-else>Ничего не найдено</p>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  inputValue: {
    type: String,
    required: true,
  },
  pokemonsArr: {
    type: Array,
    required: true,
  },
})
const emits = defineEmits('update:pokemons-arr', 'update:input-value')
const pokemonList = computed({
  get() {
    return props.pokemonsArr
  },
  set(value) {
    emits('update:pokemons-arr', value)
  },
})

const openPokemon = (name) => {
  console.log(name)
  pokemonList.value = []
  emits('update:input-value', '')
  router.push(`/pokemons/${name}`)
}
</script>

<style scoped lang="scss">
.input_values {
  position: absolute;
  border-top: none;
  border-left: 1px solid $nav_border;
  border-right: 1px solid $nav_border;
  border-bottom: 1px solid $nav_border;
  border-radius: 8px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  margin-top: 10px;
  max-height: 200px;
  overflow-y: auto;
  width: 100%;
  padding: 5px 10px;
  background-color: $nav_values;
}
.input_value-item {
  cursor: pointer;
  list-style: none;
}
.input_value-item:not(:last-child) {
  margin-bottom: 5px;
}
.input_value-item::first-letter {
  text-transform: uppercase;
}
</style>
