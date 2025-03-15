<template>
    <div class="indexSalesLayout">
      <div class="content indexSales">
      <indexSale :title="`Блоки Гжель по особым условиям`" :mini_description="`Персональная сниженная цена при покупке от 1 машины Гжельских керамеческих блоков`" :color="`#E46622`" />
      <indexSale :title="`Блоки Гжель по особым условиям`" :mini_description="`Персональная сниженная цена при покупке от 1 машины Гжельских керамеческих блоков`" :color="`#CE2E41`" />
      <div class="allSalesButton">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_101_2127)">
          <path d="M37.3396 20.5182C37.1786 20.1889 37.1786 19.8113 37.3396 19.4821L38.8314 16.4301C39.662 14.7308 39.0039 12.7055 37.3331 11.819L34.3324 10.2268C34.0086 10.0551 33.7867 9.74946 33.7233 9.38861L33.1365 6.04261C32.8097 4.17965 31.0864 2.92779 29.214 3.19271L25.8505 3.66848C25.4874 3.71973 25.1285 3.60302 24.8651 3.34825L22.4236 0.986391C21.0642 -0.328758 18.9345 -0.328836 17.5751 0.986391L15.1336 3.34849C14.8702 3.60333 14.5112 3.71981 14.1482 3.66872L10.7847 3.19294C8.91167 2.92786 7.18903 4.17989 6.86223 6.04285L6.27536 9.38869C6.212 9.74962 5.99005 10.0552 5.66638 10.227L2.66561 11.8191C0.994843 12.7055 0.336722 14.7311 1.16734 16.4304L2.65913 19.4822C2.82007 19.8115 2.82007 20.1892 2.65913 20.5184L1.16726 23.5702C0.336644 25.2695 0.994765 27.2949 2.66554 28.1814L5.6663 29.7736C5.99005 29.9453 6.212 30.2509 6.27536 30.6118L6.86223 33.9578C7.15973 35.6537 8.61394 36.8431 10.2853 36.8429C10.4499 36.8429 10.6169 36.8313 10.7848 36.8076L14.1483 36.3318C14.511 36.2803 14.8702 36.3973 15.1337 36.652L17.5751 39.0139C18.255 39.6716 19.127 40.0003 19.9993 40.0002C20.8714 40.0002 21.744 39.6714 22.4235 39.0139L24.8651 36.652C25.1285 36.3973 25.4876 36.2809 25.8505 36.3318L29.214 36.8076C31.0872 37.0726 32.8097 35.8206 33.1365 33.9577L33.7234 30.6118C33.7868 30.2509 34.0087 29.9454 34.3324 29.7736L37.3331 28.1814C39.0039 27.295 39.662 25.2695 38.8314 23.5702L37.3396 20.5182ZM15.3852 9.61853C17.7174 9.61853 19.6148 11.5159 19.6148 13.8481C19.6148 16.1803 17.7174 18.0777 15.3852 18.0777C13.0531 18.0777 11.1556 16.1803 11.1556 13.8481C11.1556 11.5159 13.0531 9.61853 15.3852 9.61853ZM13.2021 28.4286C12.9769 28.6538 12.6817 28.7665 12.3865 28.7665C12.0913 28.7665 11.796 28.6539 11.5709 28.4286C11.1204 27.9781 11.1204 27.2477 11.5709 26.7973L26.7965 11.5716C27.2469 11.1212 27.9773 11.1212 28.4278 11.5716C28.8783 12.0221 28.8783 12.7525 28.4278 13.203L13.2021 28.4286ZM24.6133 30.3818C22.2811 30.3818 20.3837 28.4844 20.3837 26.1523C20.3837 23.8201 22.2811 21.9227 24.6133 21.9227C26.9455 21.9227 28.8429 23.8201 28.8429 26.1523C28.8429 28.4844 26.9455 30.3818 24.6133 30.3818Z" fill="white"/>
          <path d="M24.614 24.2295C23.5539 24.2295 22.6914 25.0919 22.6914 26.152C22.6914 27.2121 23.5538 28.0745 24.614 28.0745C25.674 28.0745 26.5365 27.2121 26.5365 26.152C26.5365 25.0919 25.674 24.2295 24.614 24.2295Z" fill="white"/>
          <path d="M15.3854 11.9253C14.3253 11.9253 13.4629 12.7877 13.4629 13.8478C13.4629 14.9079 14.3253 15.7703 15.3854 15.7703C16.4455 15.7703 17.3079 14.9079 17.3079 13.8478C17.3079 12.7878 16.4455 11.9253 15.3854 11.9253Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_101_2127">
          <rect width="40" height="40" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        Все акции</div>
    </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>
.indexSalesLayout{
  width: 100%;
  margin: 125px 0px 0px 0px;
}
.indexSales{
  height: 358px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}
.allSalesButton{
  width: 100%;
  max-width: 200px;
  height: 100%;
  background-color: #272727;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #FFFFFF;
  align-items: flex-start;
  padding: 40px 40px 40px 40px;
  font-size: 30px;
  font-weight: 700;
  height: auto;
}




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