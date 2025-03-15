<template>
    <div class="hitsLayer">
    
    <div class="content">
      
      <div class="hitsTitles">
        <span @click="hitsTitlesActiveFunction" :class="{'active': hitsTitlesActive}">Хиты продаж</span>
        <span @click="hitsSalesActiveFunction" :class="{'active': hitsSalesActive}">Распродажа</span>
      </div>

      <Tabs value="0" v-if="hitsTitlesActive">
        <TabList>
            <Tab value="0">Все</Tab>
            <Tab value="1">Утеплитель</Tab>
            <Tab value="3">Гидроизоляция</Tab>
            <Tab value="4">Шумоизоляция</Tab>
            <Tab value="5">Кирпич</Tab>
            <Tab value="6">Модульное оборудование</Tab>
            <Tab value="7">Доска строганная</Tab>
        </TabList>
        <TabPanels>
            <TabPanel value="0">
                <p class="m-0">
                  <!-- <MazCarousel>
                    <MazCard
                      v-for="(item, i) in Array(8)"
                      :key="i"
                      :images="[
                        'https://loremflickr.com/250/300'
                      ]"
                      style="min-width: 312px;"
                    >
                      <template #title>
                        <h4 class="maz-m-0">
                          Кирпич полнотелый рядовой М-150, красный
                        </h4>
                      </template>
                      <template #content>
                        <p class="maz-text-muted" style="margin-bottom: 0;">
                          You're awesome! You're awesome!
                        </p>
                      </template>
                    </MazCard>
                  </MazCarousel> -->
                  <SfScrollable
      class="m-auto py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      buttons-placement="floating"
      drag
    >
    <template #previousButton="defaultProps">
      <SfButton
        v-bind="defaultProps"
        class="absolute z-10 left-4 bg-white bg-white hidden md:block item_preview"
       
        square
      >
      <!-- size="lg" -->
        <SfIconChevronLeft />
      </SfButton>
    </template>
    <div v-for="{ id, name, price, img } in products" :key="id" class="index-tab" style="min-width: 24%;">

      <CatalogProductCart></CatalogProductCart>

<!-- фывфывфы -->

    </div>
    <template #nextButton="defaultProps">
      <SfButton
        v-bind="defaultProps"
        class="absolute z-10 bg-white right-4 md:block item_next"
        square
        style="right: -1.5rem!IMPORTANT;"
      >
        <SfIconChevronRight />
      </SfButton>
    </template>
                  </SfScrollable>
                </p>
            </TabPanel>
            <TabPanel value="1">
                <p class="m-0">
                  <SfScrollable
      class="m-auto py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      buttons-placement="floating"
      drag
    >
    <template #previousButton="defaultProps">
      <SfButton
        v-bind="defaultProps"
        class="absolute z-10 left-4 bg-white bg-white hidden md:block item_preview"
       
        square
      >
      <!-- size="lg" -->
        <SfIconChevronLeft />
      </SfButton>
    </template>
    <div v-for="{ id, name, price, img } in products" :key="id" class="index-tab" style="min-width: 24%;">

      <CatalogProductCart></CatalogProductCart>

<!-- фывфывфы -->

    </div>
    <template #nextButton="defaultProps">
      <SfButton
        v-bind="defaultProps"
        class="absolute z-10 bg-white right-4 md:block item_next"
        square
        style="right: -1.5rem!IMPORTANT;"
      >
        <SfIconChevronRight />
      </SfButton>
    </template>
  </SfScrollable>
                </p>
            </TabPanel>
            <TabPanel value="2">
                <p class="m-0">
                </p>
            </TabPanel>
            <TabPanel value="3">
                <p class="m-0">
                </p>
            </TabPanel>
            <TabPanel value="4">
                <p class="m-0">
                </p>
            </TabPanel>
            <TabPanel value="5">
                <p class="m-0">
                </p>
            </TabPanel>
            <TabPanel value="6">
                <p class="m-0">
                </p>
            </TabPanel>
            <TabPanel value="7">
                <p class="m-0">
                </p>
            </TabPanel>
        </TabPanels>
      </Tabs>

      <Tabs value="0" v-if="hitsSalesActive">
        <TabList>
            <Tab value="0">Все</Tab>
            <Tab value="1">Утеплитель</Tab>
            <Tab value="3">Гидроизоляция</Tab>
            <Tab value="4">Шумоизоляция</Tab>
            <Tab value="5">Кирпич</Tab>
            <Tab value="6">Модульное оборудование</Tab>
            <Tab value="7">Доска строганная</Tab>
        </TabList>
        <TabPanels>
            <TabPanel value="0">
                <p class="m-0">
                </p>
            </TabPanel>
            <TabPanel value="1">
                <p class="m-0">
                </p>
            </TabPanel>
            <TabPanel value="2">
                <p class="m-0">
                </p>
            </TabPanel>
            <TabPanel value="3">
                <p class="m-0">
                </p>
            </TabPanel>
            <TabPanel value="4">
                <p class="m-0">
                </p>
            </TabPanel>
            <TabPanel value="5">
                <p class="m-0">
                </p>
            </TabPanel>
            <TabPanel value="6">
                <p class="m-0">
                </p>
            </TabPanel>
            <TabPanel value="7">
                <p class="m-0">
                </p>
            </TabPanel>
        </TabPanels>
      </Tabs>
    </div> 
    </div>
</template>

<script lang="ts" setup>
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
// import Carousel from 'primevue/carousel';

const hitsTitlesActive = ref(true)
const hitsSalesActive = ref(false)
function hitsTitlesActiveFunction(){
  hitsTitlesActive.value = !hitsTitlesActive.value
  hitsSalesActive.value = false
}
function hitsSalesActiveFunction(){
  hitsSalesActive.value = !hitsSalesActive.value
  hitsTitlesActive.value = false
}

import {
  SfLink,
  SfButton,
  SfIconFavorite,
  SfIconChevronLeft,
  SfIconChevronRight,
  SfScrollable,
} from '@storefront-ui/vue';

const products = Array.from(Array(10), (_, i) => ({
  id: i.toString(),
  name: 'Кирпич полнотелый рядовой М-150, красный',
  price: '$2,345.99',
  img: {
    src: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png',
    alt: 'White sneaker shoe',
  },
}));
</script>

<style>
/* хиты продаж */
.hitsLayer{
  width: 100%;
  background-color: #FFFFFF;
  margin: 0px 0px 125px 0px;
  padding: 100px 0px;
}
/* хиты продаж */

.hitsTitles{
  display: flex;
  align-items: center;
  margin: 0px 0px 30px 0px;
  cursor: pointer;

  && span{
    font-size: 27px;
    font-weight: 700;
    margin: 0px 30px 0px 0px;
    color: #27272750;
  }
  && span.active{
    color: #272727;
  }
}
.p-tablist-tab-list{
  border: none!IMPORTANT;
  margin: 0px 0px 30px 0px!IMPORTANT;
}
.p-tab{
  height: 50px;
  border-radius: 5px;
  padding: 20px 20px 20px 20px!IMPORTANT;
  display: flex;
  align-items: center;
  font-weight: 700!IMPORTANT;
  margin: 0px 10px 0px 0px!IMPORTANT;
  background-color: #F0F0F0!IMPORTANT;
  border: none!IMPORTANT;
}
.p-tab-active{
  background-color: #272727!IMPORTANT;
  color: #FFFFFF!IMPORTANT;
}
.item_preview{
  position: absolute;
  left: -1.0rem;
  color: #272727;
}
.item_next{
  position: absolute;
  right: -1.0rem;
  color: #272727;
}
.item_next:hover{
  background-color: #CE2E41;
  color: #FFFFFF;
}
.item_preview:hover{
  background-color: #CE2E41;
  color: #FFFFFF;
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