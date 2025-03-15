<template>
  <div>
    <Navbar></Navbar>
    <BreadCrabms></BreadCrabms>
    <div class="content">
      <div class="profile_layout">
        <div class="profile_menu">
          <ul>
            <li><NuxtLink to="settings_fiz"  exact-active-class="active">Настройка профиля</NuxtLink></li>
            <li><NuxtLink to="orders"  exact-active-class="active">Заказы</NuxtLink></li>
          </ul>
        </div>
        <div class="profile_content">
          <h2>
            {{profile_title}}
          </h2>
          <slot></slot>
        </div>
      </div>
    </div>
    <Footer></Footer>
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
.profile_layout{
  margin: 20px auto auto auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}
.profile_menu{
  width: 312px;
  && a{
    background-color: inherit;
    padding: 15px 25px 15px 25px;
    border-radius: 5px;
    width: 100%;
  }

  && a.active{
    background-color: #CE2E41;
    color: #FFFFFF;
  }
}

.profile_content{
  width: 100%;
  border-radius: 5px;
  background-color: #FFFFFF;
  padding: 20px 20px 20px 20px;
}
</style>