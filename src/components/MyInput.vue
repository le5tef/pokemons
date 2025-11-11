<template>
  <div class="my-input" :class="classType">
    <component :is="leftIcon" />
    <input
      class="input"
      :type="inputType"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: () => '',
  },
  placeholder: {
    type: String,
    default: () => 'Search...',
  },
  leftIcon: {
    type: [Object, Function, String],
    default: () => null,
  },
  inputType: {
    type: String,
    default: () => 'text',
  },
  classType: {
    type: String,
    default: () => null,
  },
})

const emits = defineEmits(['update:modelValue'])
function updateValue(value) {
  emits('update:modelValue', value)
}
</script>

<style scoped lang="scss">
.my-input {
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid $input_border;
  border-radius: 5px;
  background-color: $input_bg;
  height: 40px;
  width: 300px;
  padding: 0 10px;
}
.input {
  background: none;
  border: none;
  width: 100%;
  font-size: 15px;
  &:focus {
    outline: none;
  }
}
.auth {
  background-color: white;
}
.auth-pass {
  background-color: white;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
</style>
