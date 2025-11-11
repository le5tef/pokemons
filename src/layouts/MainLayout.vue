<template>
  <div class="main">
    <NavigationPanel />
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import NavigationPanel from '@/components/NavigationPanel.vue'
</script>

<style scoped lang="scss"></style>
