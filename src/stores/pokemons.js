import { cloneDeep, set } from 'lodash'
import { defineStore } from 'pinia'

const pokemon_default = {
  id: null,
  name: '',
  img: '',
  type: [],
  stats: {
    health: null,
    attack: null,
  },
}
export const usePokemonsStore = defineStore('pokemons', {
  state: () => ({
    pokemonsList: [],
    currentPokemonsList: [],
    currentPage: 0,
    loader: false,
  }),
  getters: {
    getTotalPages() {
      return Math.ceil(this.pokemonsList.length / 20)
    },
  },
  actions: {
    async loadList(limit, page) {
      const offset = page * 20
      const params = new URLSearchParams({ limit: limit, offset: offset })
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?${params}`)
      const data = await response.json()
      this.pokemonsList = data.results
      this.pokemonsList.forEach(async (el) => {
        this.currentPokemonsList.push(await this.loadPokemon(el.name))
      })
    },
    async loadPokemon(name) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await response.json()
      const newPokemon = cloneDeep(pokemon_default)
      newPokemon.name = data.name
      newPokemon.img = data.sprites.other.home.front_default
      newPokemon.id = data.id
      newPokemon.stats.health = data.stats.find((stat) => stat.stat.name === 'hp').base_stat
      newPokemon.stats.attack = data.stats.find((stat) => stat.stat.name === 'attack').base_stat
      newPokemon.type = data.types.map((typeInfo) => typeInfo.type.name)
      return newPokemon
    },
  },
})
