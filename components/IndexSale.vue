<template>
    <div class="indexSaleLayout" :style="`background-color: ${color}`">
      <div class="indexSaleInfo">
        <h2>{{title}}</h2>
        <p>{{mini_description}}</p>
      </div>
      <NuxtLink to="">
        Каталог блоков Гжель
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z" fill="white"/>
        </svg>

      </NuxtLink>
      <img src="~/assets/img/item.png" alt="">
    </div>  
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  mini_description: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: '',
  }
})
</script>

<style>
.indexSaleLayout{
  width: 100%;
  margin: 0px 15px 0px 0px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  color: #FFFFFF;
  padding: 40px 40px 40px 40px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  && a{
    background-color: #272727;
    padding: 20px 20px 20px 20px;
    width: 100%;
    max-width: 240px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-weight: 700;
    justify-content: center;

    && svg{
      margin: 0px 0px 0px 15px;
    }
  }

  && img{
    position: absolute;
    right: 0;
  }
}

.indexSaleInfo{
  z-index: 2;
  width: 50%;
  h2{
    font-size: 30px;
    font-weight: 700;
    margin: 0px 0px 15px 0px;
  }
  && p{
    font-size: 15px;
  }
}
</style>