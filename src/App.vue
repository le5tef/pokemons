<template>
  <div class="app">
    <component :is="layout">
      <div class="page">
        <router-view />
      </div>
    </component>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import NavigationPanel from './components/NavigationPanel.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const layout = computed(() => route.meta.layout || 'default-layout')
</script>

<style scoped lang="scss">
.app {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: $background_main;
  background-image: url('@/assets/icons/background.png');
}
.page {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
