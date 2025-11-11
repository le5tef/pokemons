<template>
  <header class="topbar">
    <router-link to="/" class="topbar__logo">
      <figure>
        <img class="topbar__logo-icon" src="@/assets/icons/PokedomIcon.png" alt="" />
      </figure>
    </router-link>

    <section class="topbar__navigation">
      <form class="topbar__navigation-input">
        <MyInput
          :left-icon="SearchIcon"
          :model-value="inputValue"
          @update:model-value="(value) => (inputValue = value)"
          :placeholder="`Поиск...`"
        />
        <PokemonList
          :input-value="inputValue"
          :pokemons-arr="pokemonsArr"
          @update:input-value="updateInput(value)"
          @update:pokemons-arr="updateList(value)"
        />
      </form>
      <nav class="topbar__navigation-menu">
        <ul class="topbar__navigation-menu_buttons">
          <li>
            <router-link to="/pokemons">
              <MyButton>О Покемонах</MyButton>
            </router-link>
          </li>
          <li>
            <router-link to="/pokemons_table">
              <MyButton>Таблица Покемонов</MyButton>
            </router-link>
          </li>
        </ul>
      </nav>
    </section>
    <aside class="topbar__navigation-profile_buttons">
      <router-link to="/auth">
        <MyButton> Войти </MyButton>
      </router-link>
      <router-link to="/registration">
        <MyButton>Зарегистрироваться</MyButton>
      </router-link>
    </aside>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'
import SearchIcon from '@/assets/icons/SearchIcon.vue'
import PokemonList from './PokemonList.vue'

const inputValue = ref()
const pokemonsArr = ref([])
const router = useRouter()
async function fetchMatch(value) {
  if (!value) {
    pokemonsArr.value = []
    return
  }
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200&offset=0')
    const data = await response.json()
    pokemonsArr.value = data.results.filter((pokemon) =>
      pokemon.name.startsWith(value.toLowerCase()),
    )
  } catch (error) {
    console.error('Error fetching pokemons:', error)
  }
}
const updateInput = (value) => {
  inputValue.value = value
}
const updateList = (value) => {
  pokemonsArr.value = value
}
watch(
  () => inputValue.value,
  async (newValue) => {
    console.log('Input value changed:', newValue)
    await fetchMatch(newValue)
  },
)
</script>

<style scoped lang="scss">
.topbar {
  display: flex;
  height: 65px;
  width: 100%;
  background-color: $background_nav;
  align-items: center;
  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc((100% - 75%) / 2);
    &-icon {
      height: 65px;
    }
  }
}

.topbar__navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 75%;
  height: 100%;
  &-input {
    position: relative;
  }
  &-menu {
    height: 100%;
    &_buttons {
      display: flex;
      gap: 5px;
      height: 100%;
      list-style: none;
    }
  }
  &-profile_buttons {
    display: flex;
    flex-direction: column;
    width: calc((100% - 75%) / 2);
    padding: 0 10px;
    gap: 5px;
    align-items: center;
  }
}
</style>
