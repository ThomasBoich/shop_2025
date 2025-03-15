<template>
  <div>
    <!-- <div class="content bread_crambs">
      <NuxtLink to="/">Главная 
        <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 7.06L3.59042 4L0.5 0.94L1.45142 0L5.5 4L1.45142 8L0.5 7.06Z" fill="#959595"/>
        </svg>
      </NuxtLink>
      <NuxtLink to="" class="active">Каталог товаров</NuxtLink>
    </div> -->
    <BreadCrabms></BreadCrabms>
    <div class="CatalogLayer">
      <div class="content CatalogCategories">
        <h1>Каталог</h1>
        <div class="categoryList">
          <CatalogCategory :title="`Кирпичи`" />
          <CatalogCategory :title="`Блоки строительные`" />
          <CatalogCategory :title="`Теплоизоляция`" />
          <CatalogCategory :title="`Сухие строительные смеси`" />
          <CatalogCategory :title="`Пиломатериалы`" />
          <CatalogCategory :title="`Электрика`" />
        </div>
      </div>
    </div>

    <IndexHelpMaterialsLayer></IndexHelpMaterialsLayer>

  <IndexYouPlans></IndexYouPlans>
  <IndexGiveLead></IndexGiveLead>
  </div>  
</template>

<script lang="ts" setup>
</script>

<style>
/* популярные категории */
.categoryList{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.CatalogLayer{
  width: 100%;
  margin: 30px auto;
}
.CatalogCategories{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  && h1{
    font-size: 40px;
    font-weight: 700;
    margin: 0px 0px 30px 0px;
  }
}
/* популярные категории */
@media (max-width: 979px){
  .Advantage.Advantage span{
    font-size: 18px;
  }
  .Advantage.Advantage p{
    font-size: 14px;
  }
  .indexSalesLayout{
    margin: 50px 0px 0px 0px;
  }
  .popularCategoriesLayer{
    margin: 50px 0px 0px 0px;
  }
  .indexBannerLayout{
    height: max-content;
    padding: 50px 0px 100px 0px;
  }
  .indexBannerTitle.indexBannerTitle h1{
    font-size: 25px!IMPORTANT;
  }
  .indexBannerTitle.indexBannerTitle p{
    font-size: 18px!IMPORTANT;
  }

  .hitsLayer{
    margin: 0px 0px 50px 0px;
    padding: 50px 0px;
  }
  .hitsTitles.hitsTitles span{
    font-size: 25px;
  }
  .p-tab{
    font-size: 15px;
  }
  .index-tab{
    min-width: 40%!IMPORTANT
  }
  .betst_сonditions_title{
    font-size: 25px;
    margin: 0px 0px 15px 0px;
  }
  .betst_сonditions_info{
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .betst_сonditions_card_navigation{
    flex-direction: column
  }
  .betst_сonditions_card_info.betst_сonditions_card_info span{
    font-size: 20px!IMPORTANT;
  }
  .betst_сonditions_card_navigation{
    margin: 15px 0px 0px 0px;
  }
  .betst_сonditions_card_navigation.betst_сonditions_card_navigation button{
    margin: 0px 0px 15px 0px;
  }
  .betst_сonditions_card_navigation.betst_сonditions_card_navigation span{
    font-size: 13px;
  }
  .small_price_title{
    font-size: 25px;
  }
  .small_price_info_card_title{
    font-size: 20px;
  }
  .small_price.small_price img{
    right: -15%;
  }
  .help_materials_layer{
    margin: 50px 0px 0px 0px;
    padding: 50px 0px 50px 0px;
  }

  .help_materials_info.help_materials_info span{
    font-size: 25px;
    margin: 0px 0px 0px 0px;
  }
  .help_materials{
    flex-direction: column;
  }
  .help_materials_info{
    width: 100%;
    max-width: 100%;
    margin: 0px 0px 20px 0px;
  }

  .help_materials_info_img{
    display: flex;
    justify-content: space-between;
    gap: 0%;
  }

  .small_price{
    padding: 30px 30px 30px 30px;
  }
  .small_price_title{
    margin: 0px 0px 30px 0px;
  }

  .small_price_info_card.small_price_info_card p{
    margin: 0px 0px 20px 0px;
  }
}

@media (max-width: 768px){
  .indexBannerTitle.indexBannerTitle h1{
    font-size: 25px!IMPORTANT;
  }
  .indexBannerTitle.indexBannerTitle p{
    font-size: 18px!IMPORTANT;
  }

  .indexBannerLayout{
    height: max-content;
    padding: 50px 0px 100px 0px;
  }
}

@media (max-width: 679px){

  .indexAdvantages{
    flex-direction: column;
  }
  .Advantage{
    margin: 12px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
    align-items: flex-start;
  }

  .indexBannerDesc{
    flex-direction: column;
    align-items: flex-start;
  }
  
  .priceButton{
    display: none!IMPORTANT;
  }
  .minimumPay{
    display: none!IMPORTANT;
  }

  .categoryList{
    flex-direction: column;
  }

  .index-tab{
    min-width: 90%!IMPORTANT;
  }

  .betst_сonditions_content{
    flex-direction: column;
  }
  .betst_сonditions_content.betst_сonditions_content img{
    width: 100%;
    margin: 12px 0px 0px 0px;
  }

  .betst_сonditions_card_layer{
    flex-direction: column;
  }

  .betst_сonditions_card{
    width: 100%;
    max-width: 100%;
    margin: 12px 0px 0px 0px;
  }

  .small_price_info{
    flex-direction: column;
  }

  
  .small_price_info_card{
    margin: 20px 0px 0px 0px;
  }

  .small_price.small_price img {
        right: -25%;
        height: 100%;
        width: 100%;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }

    .help_materials_info_img{
      flex-direction: column;
    }

    .help_materials.help_materials img{
      margin: 12px 0px 0px 0px;
      width: 100%!IMPORTANT;
      max-width: 100%!IMPORTANT;
    }
    .indexBannerDesc.indexBannerDesc span {
      white-space: pre-wrap;
      flex-wrap: wrap;
    }
}
</style>