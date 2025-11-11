<template>
  <main class="page">
    <section
      class="section-promo"
      style="
        background-image: url(https://wallpapers.com/images/hd/pokemon-battle-background-j620nq8sjlscuhox.jpg);
      "
    >
      <p class="section-promo__content">
        <strong class="section-promo__content_header"
          >Мир, населённый существами, называемыми покемонами, которых люди, тренеры покемонов,
          ловят, тренируют и используют в дружеских боях</strong
        >
      </p>
    </section>

    <section class="section-history">
      <header class="section-history__header"><h2>История создания</h2></header>
      <p class="section-history__body">
        История Pokémon началась с идеи Сатоси Тадзири (Satoshi Tajiri) — японского гейм-дизайнера,
        вдохновлённого своим детством, когда он любил ловить насекомых и изучать природу. Он хотел
        создать игру, в которой можно «собирать» существ, обмениваться ими и исследовать мир. Так
        появилась концепция Pokémon Red & Green (впоследствии Red & Blue) — игр для Game Boy, где
        игроки могли ловить и обмениваться покемонами через кабель Link Cable.
      </p>
    </section>

    <section class="section-franchise">
      <header class="section-franchise__header"><h2>Ветки франшизы</h2></header>
      <div class="section-franchise__body">
        <article
          class="card"
          style="
            background-image: url(https://m.media-amazon.com/images/M/MV5BYTJkNDRhMzAtMzVmOS00ZTE2LTllNzAtOTRiN2M2ZTA4OTI0XkEyXkFqcGc@._V1_.jpg);
          "
        >
          <div class="card__content">
            <h3 class="card__content_header">Видеоигры</h3>
            <p class="card__content_body">
              Игры остаются сердцем Pokémon. Они делятся на основные серии (RPG с поимкой покемонов
              и боями) и ответвления (например, Pokémon GO, Pokémon Unite, Pokémon Snap). Каждая
              игра вводит новый регион и новое поколение покемонов. На 2025 год существует уже 9
              поколений и более 1000 видов покемонов!
            </p>
          </div>
        </article>
        <article
          class="card"
          style="
            background-image: url(https://m.media-amazon.com/images/M/MV5BMzE0ZDU1MzQtNTNlYS00YjNlLWE2ODktZmFmNDYzMTBlZTBmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg);
          "
        >
          <div class="card__content">
            <h3 class="card__content_header">Аниме и фильмы</h3>
            <p class="card__content_body">
              Аниме началось в 1997 году и рассказывает о приключениях Эша и Пикачу. Эш путешествует
              по регионам, встречает друзей и участвует в турнирах. Фильмы часто рассказывают
              истории о легендарных и мифических покемонах, таких как Мьюту, Лугиа, Аркей и другие.
            </p>
          </div>
        </article>
        <article
          class="card"
          style="
            background-image: url(https://cdn.prod.website-files.com/5e8231a469a7f538c7e0e850/5f418609a15450b58faeba68_Pokemon-card-library.png);
          "
        >
          <div class="card__content">
            <h3 class="card__content_header">Карточная игра (Pokémon TCG)</h3>
            <p class="card__content_body">
              Покемоны в виде карточек с разными силами и характеристиками — одна из самых
              популярных настольных игр в мире.Игроки строят колоды и сражаются, используя атаки
              покемонов и специальные способности.
            </p>
          </div>
        </article>
        <article
          class="card"
          style="
            background-image: url(https://upload.wikimedia.org/wikipedia/ru/thumb/6/67/Pokemon_Special.jpg/330px-Pokemon_Special.jpg);
          "
        >
          <div class="card__content">
            <h3 class="card__content_header">Манга и книги</h3>
            <p class="card__content_body">
              Существует множество манг, например Pokémon Adventures (Pokémon Special) — гораздо
              ближе к оригинальному сюжету игр, чем аниме.
            </p>
          </div>
        </article>
      </div>
    </section>
    <section
      class="section-pick"
      style="background-image: url(https://www.hdwallpapers.in/download/pokemon_4k_hd-HD.jpg)"
    >
      <article class="section-pick__content">
        <header
          class="section-pick__content-header section-pick__content-header--hidden"
          ref="observer"
        >
          <strong class="section-pick__content-header_text1">Какого покемона </strong>
          <strong class="section-pick__content-header_text2">Вы выберите?</strong>
        </header>
        <div class="section-pick__content-separator"></div>
        <p class="section-pick__content-body">
          Список покемонов огромен и безгранично разнообразен: здесь вы встретите абсолютно
          уникальных существ, имеющих разные типы, способности характеристики и внешний вид. Все это
          может повлиять на исход сражения между тренерами!
        </p>
      </article>
    </section>
    <section class="section-table">
      <router-link to="/pokemons_table" class="section-table__button">Все Покемоны</router-link>
      <div class="section-table__body">
      <div v-for="(row,id) in [[...arr1,...arr1,...arr1,...arr1], [...arr1,...arr1,...arr1,...arr1], [...arr1,...arr1,...arr1,...arr1], [...arr1,...arr1, ...arr1,...arr1], ]" class="section-table__line">
        <router-link
          :to="`/pokemons/${pokemon.name}`"
          class="pokemon"
          v-for="pokemon in row"
          :key="Math.random()*1000000"
        >
          <figure>
            <img :src="pokemon.img" class="pokemon_image" :key="id" />
            <figcaption class="pokemon_name">{{ pokemon.name }}</figcaption>
          </figure>
        </router-link>
      </div>
    </div>
    </section>
  </main>
</template>

<script setup>
import { usePokemonsStore } from '@/stores/pokemons'
import { computed, onMounted, ref, useTemplateRef } from 'vue'

const pokemonsStore = usePokemonsStore()

const arr1 = computed(() => pokemonsStore.sortedPokemonsList.slice(0, 5))
const arr2 = computed(() => pokemonsStore.sortedPokemonsList.slice(5, 10))
const arr3 = computed(() => pokemonsStore.sortedPokemonsList.slice(10, 15))
const arr4 = computed(() => pokemonsStore.sortedPokemonsList.slice(15, 20))

const observerDiv = useTemplateRef('observer')
onMounted(async () => {
  await pokemonsStore.loadList(20, 0)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-pick__content-header--visible')
          entry.target.classList.remove('section-pick__content-header--hidden')
        } else {
          entry.target.classList.remove('section-pick__content-header--visible')
          entry.target.classList.add('section-pick__content-header--hidden')
        }
      })
    },
    {
      threshold: 0.3, // процент видимости блока, при котором сработает
    },
  )
  observer.observe(observerDiv.value)
})
</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: rgb(157, 214, 255);
  padding-bottom: 20px;
  box-sizing: border-box;
  gap: 20px;
}

.section-promo {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4) !important;
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &__content {
    width: 70%;
    display: flex;
    align-items: center;
    &_header {
      color: white;
      font-size: 60px;
      font-weight: 700;
      text-shadow: 1px 2px 3px #282828;
      text-transform: uppercase;
    }
  }
}

.section-history {
  display: flex;
  flex-direction: column;
  width: 75%;
  gap: 5px;
  &__header {
    font-size: 40px;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
    text-shadow: 1px 2px 3px #282828;
    align-self: center;
  }
  &__body {
    font-size: 23px;
    color: #363636;
    letter-spacing: 1px;
  }
}

.section-franchise {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
  &__header {
    font-weight: 700;
    text-shadow: 1px 2px 3px #282828;
    text-transform: uppercase;
    color: white;
    font-size: 40px;
    align-self: center;
  }
  &__body {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }
}
.card {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  color: white;
  position: relative;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px #000;
  overflow-y: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  &__content {
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: -85%;
    transition: all 0.5s ease;
    &_header {
      font-size: 18px;
      color: #ffffff;
      text-shadow: 1px 2px 3px #000000;
    }
    &_body {
      opacity: 0;
      transition: all 0.5s ease;
      font-size: 16px;
      text-shadow: 1px 2px 3px #000000;
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    background-blend-mode: darken;
    transform: scale(1.02);
  }
  &:hover &__content {
    bottom: 0;
  }
  &:hover &__content_header {
    top: 0;
  }
  &:hover &__content_body {
    opacity: 1;
    bottom: 0;
  }
}

.section-pick {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: darken;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 23px 41px rgba(34, 60, 80, 0.31);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  &__content {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    &-header {
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: center;
      text-transform: uppercase;
      font-weight: 700;
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease-out;
      color: #ede5d9d4;
      &--visible {
        opacity: 1;
        transform: translateY(0);
      }
      &--hidden {
        opacity: 0;
        transform: translateY(50px);
      }
      &_text1 {
        font-size: 50px;
      }
      &_text2 {
        font-size: 70px;
      }
    }
    &-separator {
      width: 300px;
      border: 1px solid red;
      border-radius: 12px;
    }
    &-body {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 1000px;
      font-size: 30px;
      color: #ede5d9d4;
    }
  }
}

.section-table {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  overflow-x: hidden;
  width: 100vw;
  padding: 0 20px 20px 20px;
  &__button {
    border: 2px solid black;
    padding: 10px;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 20px;
    margin-top: 20px;
    z-index: 3;
    transition: 0.5s;
    &:hover {
      transform: translateY(-10px);
      border-color: orangered;
    }
  }
  &__line {
    display: flex;
    gap: 5px;
  }
}

.section-table__line:has(.pokemon:hover) {
  position: relative;
  z-index: 99;
}

.pokemon {
  border: 1px solid black;
  background: #2a7b9b;
  background: linear-gradient(90deg, rgba(42, 123, 155, 1) 16%, rgba(87, 199, 133, 1) 94%);
  min-width: 220px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  transition: 0.3s;
  cursor: pointer;
  &_image {
    max-width: 150px;
    height: auto;
  }
  &_name {
    position: absolute;
    bottom: -100%;
    left: 0;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.3s;
  }
  &:hover {
    transform: scale(1.3);
    z-index: 2;
  }
  &:hover &_name {
    bottom: 0;
  }
}

.section-table__line:nth-child(even) {
  animation: cicleToTheLeft 5s linear infinite;
}
.section-table__line:nth-child(odd) {
  animation: cicleToTheRight 5s linear infinite;
}

@keyframes cicleToTheLeft {
  0% {
    transform: translateX(25%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes cicleToTheRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(25%);
  }
}
</style>
