<template>
  <main class="page">
    <section class="form">
      <header class="form__header">
        <span class="form__header_text1">Вход в аккаунт PokeDom</span>
        <span class="form__header_text2">Введите свои данные</span>
      </header>
      <form class="form__body">
        <div class="form__body_section">
          <label for="login">Логин</label>
          <MyInput
            :input-type="`text`"
            name="login"
            :placeholder="`Введите логин`"
            :class-type="`auth`"
            class="input"
            :model-value="loginInput"
            @update:model-value="(value) => (loginInput = value)"
          />
        </div>
        <div class="form__body_section">
          <label for="pass">Пароль</label>
          <div class="form__body_section--pass">
            <MyInput
              id="input_pass"
              :input-type="inputType"
              :placeholder="`Введите пароль`"
              name="pass"
              class="input"
              :class-type="`auth-pass`"
              :model-value="passInput"
              @update:model-value="(value) => (passInput = value)"
            />
            <MyButton
              :left-icon="iconEye ? EyeOnIcon : EyeOffIcon"
              @click="showPass"
              :class-type="`pass`"
            ></MyButton>
          </div>
        </div>
        <MyButton :class-type="`primary`">Войти</MyButton>
      </form>
    </section>
  </main>
</template>

<script setup>
import EyeOffIcon from '@/assets/icons/EyeOffIcon.vue'
import EyeOnIcon from '@/assets/icons/EyeOnIcon.vue'
import MyButton from '@/components/MyButton.vue'
import MyInput from '@/components/MyInput.vue'
import { ref } from 'vue'

const passInput = ref()
const loginInput = ref()
const iconEye = ref(false)
const inputType = ref('password')
const showPass = () => {
  if (inputType.value === 'password') {
    inputType.value = 'text'
    iconEye.value = !iconEye.value
  } else {
    inputType.value = 'password'
    iconEye.value = !iconEye.value
  }
}
</script>

<style scoped lang="scss">
.page {
  height: 100vh;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.form {
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(165, 0, 0);
  border-radius: 12px;
  width: 500px;
  height: 350px;
  gap: 20px;
  background-color: rgb(255, 110, 110);
  padding: 20px;
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    &_text1 {
      font-size: 30px;
      color: white;
    }
    &_text2 {
      font-size: 25px;
      color: white;
    }
  }
  &__body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
    &_section {
      display: flex;
      flex-direction: column;
      gap: 5px;
      &--pass {
        display: flex;
      }
    }
  }
}

label {
  font-size: 20px;
}
</style>
