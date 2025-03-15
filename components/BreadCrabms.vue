<template>
  <div>
    <nav class="content">
    <ol class="breadcrumb">
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <NuxtLink v-if="crumb.link" :to="crumb.link">{{ crumb.text }}</NuxtLink>
        <span v-else>{{ crumb.text }}</span>
      </li>
    </ol>
  </nav>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const breadcrumbs = ref([])

// Функция для генерации хлебных крошек на основе маршрута
const generateBreadcrumbs = (route) => {
  const matchedRoutes = route.matched
  const crumbs = matchedRoutes.map((route) => {
    return {
      text: route.meta.title || route.name,
      link: route.path
    }
  })

  // Добавляем корневой элемент "Главная"
  if (route.path !== '/') {
    crumbs.unshift({
      text: 'Главная',
      link: '/'
    })
  }

  return crumbs
}

// Слежение за изменениями маршрута
watch(() => route, () => {
  breadcrumbs.value = generateBreadcrumbs(route)
})

// Инициализация хлебных крошек
breadcrumbs.value = generateBreadcrumbs(route)
</script>

<style scoped>
nav{
  margin: 25px auto auto auto;
}
.breadcrumb {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.breadcrumb li {
  margin-right: 10px;
}
.breadcrumb li::after {
  content: '>';
  margin-left: 10px;
}
.breadcrumb li:last-child::after {
  content: '';
}
.breadcrumb li:last-child {
  content: '';
  color: #959595;
}
</style>