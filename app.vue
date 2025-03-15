<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>

    </NuxtLayout>
  </div>
</template>
<script setup>
const allItemsButtonOpen = ref(false)

const allItemsButton = function(){
  allItemsButtonOpen.value = !allItemsButtonOpen.value
}
</script>
<style scoop>

@media (max-width: 979px){

}
</style>