<script setup>
import { VueDatePicker } from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue'
const date = ref()
</script>

<template>
  <VueDatePicker ref="datePicker" v-bind="$attrs" v-model="date" />
</template>

<style scoped></style>
