import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import AboutView from '@/views/AboutView.vue'
import AuthView from '@/views/AuthView.vue'
import PokemonItemView from '@/views/PokemonItemView.vue'
import PokemonsInfo from '@/views/PokemonsInfo.vue'
import PokemonsView from '@/views/PokemonsView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AboutView,
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/pokemons',
      component: () => PokemonsInfo,
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/pokemons_table',
      component: () => PokemonsView,
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/pokemons/:name',
      component: () => PokemonItemView,
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/auth',
      component: () => AuthView,
      meta: {
        layout: AuthLayout,
      },
    },
    {
      path: '/registration',
      component: () => RegistrationView,
      meta: {
        layout: AuthLayout,
      },
    },
  ],
})

export default router
