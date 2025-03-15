<template>
    <div class="popularCategoriesLayer">
      <div class="content popularCategories">
        <h2>{{title}}</h2>
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
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Популярные категории'
  }
})
</script>

<style>
/* популярные категории */
.categoryList{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.popularCategoriesLayer{
  width: 100%;
  margin: 125px auto;
}
.popularCategories{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  && h2{
    font-size: 27px;
    font-weight: 700;
    margin: 0px 0px 30px 0px;
  }
}

/* популярные категории */





@media (max-width: 1200px){
  .index-tab{
    min-width: 32%!IMPORTANT
  }
}

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
.small_price_info_card{
  width: 100%;
}
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
      /* white-space: pre-wrap;
      flex-wrap: wrap; */
      width: 100%;
      align-items: flex-start;
      display: flex;
    }
    .indexBannerTitle.indexBannerTitle p{
      margin: 20px 0px 20px 0px;
    }
    .indexBannerDesc{
      gap: 10px;
    }
    .hitsTitles.hitsTitles span{
      font-size: 20px;
    }
}
</style>