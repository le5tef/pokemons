<template>
  <main class="page">
    <header class="page__header">
      <ul class="page__header_types">
        <li v-for="type in object.types" :key="type.name" class="page__header_types-value">
          {{ type.type.name }}
        </li>
      </ul>
      <h1 class="page__header_name">{{ pokemon }}</h1>
    </header>

    <section class="page__body">
      <figure class="img-container">
        <img :src="object.sprites.other.showdown.front_default" class="img-container__pokemon" />
        <img src="@/assets/icons/podium.png" class="img-container__podium" />
      </figure>
      <section class="info-container">
        <article class="info-container__stats">
          <h2 class="info-container__stats_title">Характеристики</h2>
          <ul class="stats-container">
            <li v-for="(stat, index) in object.stats" :key="stat.stat.name" class="stat">
              <h3 class="stat__header">
                {{ stat.stat.name }}
              </h3>
              <figure class="stat__body">
                <img :src="getStat(index)" class="stat__body_image" />
                <figcaption>
                  {{ stat.base_stat }}
                </figcaption>
              </figure>
            </li>
          </ul>
        </article>
        <article class="info-container__abilities">
          <h2 class="info-container__abilities_title">Способности</h2>
          <ul class="abilities-container">
            <li
              v-for="(ability, index) in object.abilities"
              :key="ability.ability.name"
              class="ability"
            >
              <figure class="ability__header">
                <img :src="getSpell(index)" class="ability__header_image" />
                <figcaption class="ability__header_name">{{ ability.ability.name }}</figcaption>
              </figure>
              <p class="ability__body">{{ abilitiesObj[ability.ability.name] }}</p>
            </li>
          </ul>
        </article>
      </section>
    </section>
    <footer class="page__footer">
      <router-link :to="`/pokemons/${previousPokemon.name}`" class="footer__pokemon">
        <img
          :src="previousPokemon.sprites.other.showdown.front_default"
          class="footer__pokemon_image"
        />
        <p class="footer__pokemon_description">
          <span class="footer__pokemon_description-next">Предыдущий покемон</span>
          <strong class="footer__pokemon_description-name">{{ previousPokemon.name }}</strong>
        </p>
      </router-link>

      <router-link to="/pokemons_table" class="footer__table">
        <div class="footer__table_container">
          <div v-for="n in 6" class="footer__table_container-item"></div>
        </div>
        <p class="footer__table_text">Все Покемоны</p>
      </router-link>
      <router-link :to="`/pokemons/${nextPokemon.name}`" class="footer__pokemon">
        <p class="footer__pokemon_description">
          <span class="footer__pokemon_description-next">Следующий покемон</span>
          <strong class="footer__pokemon_description-name">{{ nextPokemon.name }}</strong>
        </p>
        <img
          :src="nextPokemon.sprites.other.showdown.front_default"
          alt=""
          class="footer__pokemon_image"
        />
      </router-link>
    </footer>
  </main>
</template>

<script setup>
import { usePokemonsStore } from '@/stores/pokemons'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const getSpell = (index) => {
  return new URL(`../assets/icons/spell_${index + 1}.png`, import.meta.url).href
}
const getStat = (index) => {
  return new URL(`../assets/icons/stat_${index + 1}.png`, import.meta.url).href
}
const pokemonsStore = usePokemonsStore()
const router = useRouter()
const pokemon = ref()
const object = ref()
const abilitiesObj = ref({})
const fetchPokemon = async (name) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    object.value = await response.json()

    if (object.value) {
      object.value.abilities.forEach(async (ability) => {
        await fetchAbility(ability.ability.name, ability.ability.url)
      })
    }
    if (object.value.id === 1) await fetchPrevious(200)
    else await fetchPrevious(Number(object.value.id) - 1)

    if (object.value.id === 200) await fetchNext(1)
    else await fetchNext(Number(object.value.id) + 1)
    console.log(object.value)
  } catch (error) {
    console.error('Error fetching pokemon:', error)
  }
}
const fetchAbility = async (name, path) => {
  try {
    const response = await fetch(path)
    const data = await response.json()
    abilitiesObj.value[name] = data.effect_entries.find(
      (entry) => entry.language.name === 'en',
    ).effect
  } catch (error) {
    console.error('Error fetching ability:', error)
  }
}
const previousPokemon = ref()
const nextPokemon = ref()
const fetchPrevious = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    const response_2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${data.name}`)
    previousPokemon.value = await response_2.json()
  } catch (error) {
    console.error('Error fetching pokemon:', error)
  }
}
const fetchNext = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    const response_2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${data.name}`)
    nextPokemon.value = await response_2.json()
  } catch (error) {
    console.error('Error fetching pokemon:', error)
  }
}
watch(
  () => router.currentRoute.value.params.name,
  async (newName) => {
    pokemon.value = router.currentRoute.value.params.name
    await fetchPokemon(newName)
  },
  { immediate: true },
)
// onMounted(() => {
//   if (document.readyState === 'complete') {
//     pokemonsStore.loader = true
//   } else {
//     window.addEventListener('load', () => {
//       pokemonsStore.loader = false
//     })
//   }
// })

// onUnmounted(() => {
//   pokemonsStore.loader = false
// })
</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  width: 75%;
  background: linear-gradient(80deg, #b9cef1 0%, #389fb8 100%);
  min-height: 100vh;
}

span::first-letter {
  text-transform: uppercase;
}
.page__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 15px 0 10px 0;
  &_types {
    display: flex;
    gap: 20px;
    list-style: none;
    &-value {
      font-size: 18px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #4c4c4c;
    }
  }
  &_name {
    color: white;
    font-size: 60px;
    text-transform: uppercase;
    text-shadow: 1px 2px 3px #282828;
  }
}
.page__body {
  display: flex;
  flex-direction: column;
  .img-container {
    align-self: center;
    display: flex;
    flex-direction: column;
    position: relative;
    &__pokemon {
      width: 150px;
      height: auto;
      position: relative;
      z-index: 2;
      align-self: center;
    }
    &__podium {
      width: 300px;
      height: auto;
      position: relative;
      top: -70px;
      filter: drop-shadow(3px 10px 10px #1e1e1e);
    }
  }
  .info-container {
    position: relative;
    top: -70px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    &__stats {
      display: flex;
      flex-direction: column;
      background: linear-gradient(80deg, #aee0f4 0%, #4fa3b8 100%);
      border-top: 2px solid rgb(51, 144, 151);
      border-bottom: 2px solid #227e7e;
      box-shadow: 0px 0px 8px #000;
      padding: 10px 0;
      &_title {
        align-self: center;
        text-transform: uppercase;
        font-size: 23px;
        letter-spacing: 1px;
        text-shadow: 1px 1px 2px #000;
        color: #f1f1f1;
      }
    }
    &__abilities {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      &_title {
        align-self: center;
        text-transform: uppercase;
        font-size: 23px;
        letter-spacing: 1px;
        text-shadow: 1px 1px 2px #000;
        color: #f1f1f1;
      }
    }
  }
}

.stats-container {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
.stat {
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  gap: 5px;
  align-items: center;
  &:not(:last-child) {
    border-right: 1px solid black;
  }
  &__header {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 16px;
    color: #363636;
  }
  &__body {
    display: flex;
    gap: 5px;
    align-items: center;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
    color: #363636;
    &_image {
      height: 20px;
      width: 20px;
    }
  }
}

.abilities-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-self: flex-start;
  padding: 0 40px;
}
.ability {
  display: grid;
  gap: 15px;
  &__header {
    display: flex;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 22px;
    color: rgb(255, 255, 255);
    gap: 10px;
    align-self: flex-start;
    text-shadow: 1px 1px 2px #282828;
    width: fit-content;
    height: 100%;
    padding-left: 10px;
    box-sizing: border-box;
    &_image {
      width: 40px;
      height: 40px;
      background-color: rgb(79, 0, 128);
      border: 2px solid white;
    }
    &_name {
      min-width: 100px;
    }
  }
  &__body {
    letter-spacing: 1px;
    font-size: 18px;
    color: #363636;
    margin-left: 10px;
  }
}

.page__footer {
  display: flex;
  gap: 20px;
  width: 100%;
  margin-bottom: 30px;
  align-items: center;
  justify-content: space-between;
}
.footer__pokemon {
  display: flex;
  padding: 0 20px;
  box-shadow: 2px 2px 8px #000;
  width: 45%;
  height: 120px;
  align-items: center;
  justify-content: space-around;
  background-color: #43a9c0;
  cursor: pointer;
  transition: transform 0.4s ease;
  &:hover {
    transform: scale(1.2);
  }
  &_image {
    height: 150px;
    position: relative;
    top: -15px;
  }
  &_description {
    display: flex;
    flex-direction: column;
    width: fit-content;
    &-next {
      font-size: 15px;
      color: #e9e9e9;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-shadow: 1px 1px 4px #000;
      margin-bottom: 5px;
    }
    &-name {
      font-size: 28px;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 1px;

      font-weight: bold;
      line-height: 112%;
      text-shadow: 1px 1px 4px #000;
    }
  }
}

.footer__table {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  justify-self: center;
  &_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    &-item {
      width: 30px;
      height: 30px;
      background-color: rgb(141, 141, 141);
    }
  }
  &_container:hover &_container-item {
    background-color: rgb(255, 255, 255);
    transition: 0.4s;
  }
  &_text {
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 8px;
    text-align: center;
  }
}
</style>
