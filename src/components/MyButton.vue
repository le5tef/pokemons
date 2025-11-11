<template>
  <button class="my-button" :class="classType">
    <component :is="leftIcon" />
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  leftIcon: {
    type: [Object, null],
    default: () => null,
  },
  classType: {
    type: String,
    default: () => null,
  },
})
</script>

<style scoped lang="scss">
.my-button {
  padding: 3px 5px;
  background-color: transparent;
  border: none;
  // border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgb(226, 47, 47);
  }
}
.active {
  text-decoration: underline;
  background-color: rgb(187, 13, 13);
}
.pass {
  background-color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.primary {
  background-color: rgb(197, 56, 56);
  padding: 10px;
  border-radius: 5px;
}
</style>
