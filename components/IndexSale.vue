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
  .indexSaleLayout.indexSaleLayout a{
    z-index: 2;
  }
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
    right: -12%;
    bottom: 0%;
  }
}

.indexSaleInfo{
  z-index: 2;
  width: 67%;
  h2{
    font-size: 30px;
    font-weight: 700;
    margin: 0px 0px 15px 0px;
  }
  && p{
    font-size: 15px;
  }
}


@media (max-width: 979px){
  .indexSaleInfo h2{
    font-size: 20px;
    z-index: 2;
  }
  .indexSaleInfo.indexSaleInfo p{
    font-size: 14px;
    z-index: 2;
  }
  .indexSaleLayout{
    padding: 20px 20px 20px 20px;
  }
  .indexSaleInfo button{
    z-index: ;
  }
  .indexSaleInfo{
    width: 100%;
    margin: 0px 0px 20px 0px;
  }
  .allSalesButton{
    padding: 20px 20px 20px 20px;
  }
  .indexSaleLayout.indexSaleLayout a{
    z-index: 2;
    font-size: 15px;
    font-weight: 500;

    svg{
      margin: 0px 0px 0px 15px;
    }
  }
  .indexSales{
    height: max-content!IMPORTANT;
  }
  .indexSaleLayout.indexSaleLayout img{
    bottom: -50%;
    right: -50%;
  }
  .allSalesButton{
    max-width: 108px!IMPORTANT;
    width: 100%;
    font-size: 20px!IMPORTANT;
    padding: 20px 20px 20px 20px!IMPORTANT;
  }
}

@media (max-width: 679px){
  .indexSales{
    flex-direction: column;
  }

  .indexSaleLayout{
    margin: 12px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }

  .allSalesButton{
    width: 100%!IMPORTANT;
    max-width: 100%!IMPORTANT;
    margin: 12px 0px 0px 0px;
    flex-direction: row!IMPORTANT;
    justify-content: center!IMPORTANT;
    align-items: center!IMPORTANT;

    && svg {
      margin: 0px 15px 0px 0px;
    }
  }
}
</style>