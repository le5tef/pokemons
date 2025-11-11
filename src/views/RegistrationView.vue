<template>
  <main class="page">
    <section class="form">
      <header class="form__header">
        <h3>Регистрация</h3>
      </header>
      <form class="form__body">
        <div class="field">
          <label for="">Почта</label>
          <MyInput
            :input-type="`email`"
            name="login"
            :placeholder="`Введите почту`"
            :class-type="`auth`"
            class="input"
            :model-value="loginInput"
            @update:model-value="(value) => (loginInput = value)"
          />
        </div>
        <div class="field">
          <label for="">Логин</label>
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
        <div class="field">
          <label for="">Пароль</label>
          <MyInput
            :input-type="`password`"
            name="login"
            :placeholder="`Введите пароль`"
            :class-type="`auth`"
            class="input"
            :model-value="loginInput"
            @update:model-value="(value) => (loginInput = value)"
          />
        </div>
        <fieldset class="field">
          <legend>Пол</legend>
          <div class="field--gender">
            <div class="gender">
              <label for="">Мужской</label>
              <input type="radio" value="male" v-model="gender" />
            </div>
            <div class="gender">
              <label for="">Женский</label>
              <input type="radio" value="female" v-model="gender" />
            </div>
          </div>
        </fieldset>
        <div class="field">
          <label for="">Дата рождения</label>
          <MyDatepicker />
        </div>
        <div class="field">
          <label for="">Город</label>
          <MyInput
            :input-type="`text`"
            name="login"
            :placeholder="`Введите город`"
            :class-type="`auth`"
            class="input"
            :model-value="loginInput"
            @update:model-value="(value) => (loginInput = value)"
          />
        </div>
        <MyButton :class-type="`primary`"><span>Зарегистрироваться</span></MyButton>
      </form>
    </section>
  </main>
</template>

<script setup>
import MyButton from '@/components/MyButton.vue'
import MyDatepicker from '@/components/MyDatepicker.vue'
import MyInput from '@/components/MyInput.vue'
import { ref } from 'vue'

const gender = ref('male')
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
  height: 650px;
  gap: 20px;
  background-color: rgb(255, 110, 110);
  padding: 20px;
  &__header {
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 30px;
    color: white;
  }
  &__body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 18px;
    color: white;
  }
}

.field {
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: none;
  &--gender {
    display: flex;
    justify-content: space-around;
    .gender {
      display: flex;
      gap: 5px;
      font-size: 16px;
    }
  }
}
</style>
