<template>
  <div>
    <form action="">
      <div>
        <label for=""></label>
        <input type="text" value="Наташа">
      </div>
      <div>
        <label for=""></label>
        <input type="text" value="Иванова">
      </div>
      <div>
        <label for=""></label>
        <input type="text" value="8 926 564 43 34">
      </div>
      <div>
        <label for=""></label>
        <input type="text" value="mail@mail.ru">
      </div>
      <div>
        <button>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z" fill="#CE2E41"/>
          </svg>

          Выйти
        </button>
        <button>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 18.001H3.75L14.81 6.94103L11.06 3.19104L0 14.251V18.001ZM2 15.081L11.06 6.02104L11.98 6.94103L2.92 16.001H2V15.081Z" fill="white"/>
            <path d="M15.37 0.291035C14.98 -0.0989648 14.35 -0.0989648 13.96 0.291035L12.13 2.12104L15.88 5.87104L17.71 4.04104C18.1 3.65104 18.1 3.02104 17.71 2.63104L15.37 0.291035Z" fill="white"/>
          </svg>

          Сменить пароль
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'profile'
})

const props = defineProps({
  profile_title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
</style>