<template>
  <div>
    <BreadCrabms></BreadCrabms>
    <section class="sub_cat_title">
      <h1>
        <colors style="color:#CE2E41;">Кирпичи</colors> по оптовым ценам от лучших <br> производителей с доставкой по России
      </h1>
    </section>
    <IndexSalesLayout></IndexSalesLayout>
    <section class="content">
      <div class="scope_application">
        <h2>Сфера применения</h2>
        <div class="scope_application_layout">
          <NuxtLink to="">Для фундамента</NuxtLink>
          <NuxtLink to="">Для печей</NuxtLink>
          <NuxtLink to="">Для фундамента</NuxtLink>
          <NuxtLink to="">Для печей</NuxtLink>
          <NuxtLink to="">Для фундамента</NuxtLink>
          <NuxtLink to="">Для печей</NuxtLink>
          <NuxtLink to="">Для фундамента</NuxtLink>
          <NuxtLink to="">Для печей</NuxtLink>
          <NuxtLink to="">Для фундамента</NuxtLink>
          <NuxtLink to="">Для печей</NuxtLink>
          <NuxtLink to="">Для фундамента</NuxtLink>
          <NuxtLink to="">Для печей</NuxtLink>
        </div>
        <button class="showAll">Показать ещё</button>
    </div>
    </section>

    <section class="content">
      <div class="select_category">
        <h2>Выбирайте категорию</h2>
        <div class="select_category_layer">
          <NuxtLink to="">
            <img src="~/assets/img/cart.png" alt="">
            Для фундамента</NuxtLink>
          <NuxtLink to="">
            <img src="~/assets/img/cart.png" alt="">
            Для печей</NuxtLink>
          <NuxtLink to="">
            <img src="~/assets/img/cart.png" alt="">
            Для фундамента</NuxtLink>
          <NuxtLink to="">
            <img src="~/assets/img/cart.png" alt="">
            Для печей</NuxtLink>
          <NuxtLink to="">
            <img src="~/assets/img/cart.png" alt="">
            Для фундамента</NuxtLink>
          <NuxtLink to="">
            <img src="~/assets/img/cart.png" alt="">
            Для печей</NuxtLink>
        </div>
        <button class="showAll">Показать все</button>
    </div>
    </section>

    <div class="catalog_layer df fd-c p-125-0 bc-white">
      <div class="catalog_page content">
        <div class="catalog_filter_layer" :class="{'active': FilterActive}">
          <div class="close_filter" @click="ShowFilter">

            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 6.91L17.59 5.5L12 11.09L6.41 5.5L5 6.91L10.59 12.5L5 18.09L6.41 19.5L12 13.91L17.59 19.5L19 18.09L13.41 12.5L19 6.91Z" fill="#272727"/>
</svg>




          </div>
          <div class="filter_section">
            <div>
          <div class="filter_section_title">Категории</div>
            <ul class="filter_category_ul">
              <li v-for="(category, index) in displayedCategories" :key="index">
                {{ category }}
              </li>
            </ul>
            <button class="filter_category_ul_button" @click="toggleCategories">
              {{ showAll ? 'Скрыть остальные' : 'Показать остальные' }}
            </button>
          </div>
          </div>

      <div class="filter_section">
        <div class="filter_section_title">Цена</div>
        <div class="wrapper">
    <div class="price-input">
      <div class="field">
        <span>Мин</span>
        <input type="number" class="input-min" v-model.number="minPrice" @input="updateRange" />
      </div>
      <div class="separator">-</div>
      <div class="field">
        <span>Макс</span>
        <input type="number" class="input-max" v-model.number="maxPrice" @input="updateRange" />
      </div>
    </div>
    <div class="slider">
      <div class="progress" :style="progressStyle"></div>
    </div>
    <div class="range-input">
      <input type="range" class="range-min" min="0" :max="maxRange" v-model.number="minPrice" @input="updatePriceInputs" />
      <input type="range" class="range-max" min="0" :max="maxRange" v-model.number="maxPrice" @input="updatePriceInputs" />
    </div>
        </div>
      </div>

      <div class="filter_section">
        <div class="filter_section_title">Тип кирпича</div>
        <ul class="filter_checkout_ul_li">
          <li v-for="(item, index) in type_of_brick" :key="index" class="checkbox-item">
            <label>
              <input 
                type="checkbox" 
                v-model="item.checked" 
              />
              {{ item.name }}
            </label>
          </li>
        </ul>       
      </div>     
            
      <div class="filter_section">
        <div class="filter_section_title">Прочность (марка)</div>
        <ul class="filter_checkout_ul_li">
          <li v-for="(item, index) in strength" :key="index" class="checkbox-item">
            <label>
              <input 
                type="checkbox" 
                v-model="item.checked" 
              />
              {{ item.name }}
            </label>
          </li>
        </ul>       
      </div>
      
      <div class="filter_section">
        <div class="filter_section_title">Цвет</div>
        <ul class="filter_checkout_ul_li">
          <li v-for="(item, index) in color" :key="index" class="checkbox-item">
            <label>
              <input 
                type="checkbox" 
                v-model="item.checked" 
              />
              {{ item.name }}
            </label>
          </li>
        </ul>       
      </div>

      <div class="filter_section">
        <div class="filter_section_title">Поверхность</div>
        <ul class="filter_checkout_ul_li">
          <li v-for="(item, index) in surface" :key="index" class="checkbox-item">
            <label>
              <input 
                type="checkbox" 
                v-model="item.checked" 
              />
              {{ item.name }}
            </label>
          </li>
        </ul>       
      </div>

      <div class="filter_section">
        <div class="filter_section_title">Производитель</div>
        <ul class="filter_checkout_ul_li">
          <li v-for="(item, index) in manufacturer" :key="index" class="checkbox-item">
            <label>
              <input 
                type="checkbox" 
                v-model="item.checked" 
              />
              {{ item.name }}
            </label>
          </li>
        </ul>       
      </div>
      
      <button type="button" class="filter_button">Сбросить фильтр</button>
        </div>
  
        

        <div class="catalog_items_list_layer">
          <div class="catalog_sort">
            <button class="showAll" @click="ShowFilter">
              <span>Фильтры</span>

              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.00506 2H13.0051L7.99506 8.3L3.00506 2ZM0.255061 1.61C2.27506 4.2 6.00506 9 6.00506 9V15C6.00506 15.55 6.45506 16 7.00506 16H9.00506C9.55506 16 10.0051 15.55 10.0051 15V9C10.0051 9 13.7251 4.2 15.7451 1.61C16.2551 0.95 15.7851 0 14.9551 0H1.04506C0.215061 0 -0.254939 0.95 0.255061 1.61Z" fill="#CE2E41"/>
              </svg>
            </button>
            <div class="sort_rating_content">
              <span>
                Сортировка
              </span>
              <div class="sort_rating">

                <div class="hidden_sort_rating">
                  <select name="" id="">
                    <option value="">По популярности</option>
                    <option value="">Сначала дешевл</option>
                    <option value="">Сначала дороже</option>
                  </select>
                </div>


                <button class="hidden_class active">По популярности</button>
                <button class="hidden_class ">Сначала дешевле</button>
                <button class="hidden_class ">Сначала дороже</button>
              </div>
            </div>
            <div class="sort_count">
              <span>
                Показать на странице
              </span>
              <select name="" id=""  class="sort_count_select">
                <option value="">9</option>
                <option value="">25</option>
                <option value="">50</option>
                <option value="">100</option>
              </select>
            </div>            
          </div>
          <div class="catalog_list_items">
            <CatalogProductCart></CatalogProductCart>
            <CatalogProductCart></CatalogProductCart>
            <CatalogProductCart></CatalogProductCart>
            <CatalogProductCart></CatalogProductCart>
            <CatalogProductCart></CatalogProductCart>
            <CatalogProductCart></CatalogProductCart>
            <CatalogProductCart></CatalogProductCart>
            <CatalogProductCart></CatalogProductCart>
          </div>
        </div>
      </div>


    </div>


    <IndexBetstСonditions></IndexBetstСonditions>
    
    <IndexHelpMaterialsLayer></IndexHelpMaterialsLayer>

  <IndexReviews></IndexReviews>
  <div class="content">
    <IndexReviewsForm></IndexReviewsForm>
  </div>
  
  <IndexInfoProducts></IndexInfoProducts>
  <IndexYouPlans></IndexYouPlans>
  <IndexCerificates></IndexCerificates>
  <IndexTrends></IndexTrends>
  <IndexGiveLead></IndexGiveLead>
  <IndexLoremIpsum></IndexLoremIpsum>
  </div>  
</template>

<script lang="ts" setup>
const FilterActive = ref(false)
function ShowFilter(){
  FilterActive.value = !FilterActive.value
}

// Пример данных для чекбоксов
const type_of_brick = ref([
  { name: 'Керамический кирпич', checked: false },
  { name: 'Силикатный кирпич', checked: false },
  { name: 'Огнеупорный кирпич', checked: false },
  { name: 'Гиперпрессованный кирпич', checked: false },
])

// Пример данных для чекбоксов
const strength = ref([
  { name: 'М100', checked: false },
  { name: 'М150', checked: false },
  { name: 'М200', checked: false },
  { name: 'M250', checked: false },
])

// Пример данных для чекбоксов
const color = ref([
  { name: 'белый', checked: false },
  { name: 'белый', checked: false },
  { name: 'белый', checked: false },
  { name: 'белый', checked: false },
])


// Пример данных для чекбоксов
const surface = ref([
  { name: 'гладкая', checked: false },
  { name: 'рифленая', checked: false },
])


// Пример данных для чекбоксов
const manufacturer = ref([
  { name: 'Технониколь', checked: false },
  { name: 'Технониколь', checked: false },
  { name: 'Технониколь', checked: false },
  { name: 'Технониколь', checked: false },
  { name: 'Технониколь', checked: false },
  { name: 'Технониколь', checked: false },
])


import { ref, computed } from 'vue'

const categories = ref([
  'Полнотелые кирпичи',
  'Кирпичи для кладки',
  'Кирпичи для фасадов',
  'Кирпичи для печей',
  'Кирпичи для ландшафта',
  'Кирпичи для облицовки',
  'Кирпичи специального назначения',
  // Добавьте другие категории по мере необходимости
])

const showAll = ref(false)

const displayedCategories = computed(() => {
  return showAll.value ? categories.value : categories.value.slice(0, 4)
})

const toggleCategories = () => {
  showAll.value = !showAll.value
}

import { ref, computed } from 'vue'

const minPrice = ref(990)
const maxPrice = ref(75000)
const maxRange = ref(250000)
const priceGap = 1000

const updateRange = () => {
  // Ограничение минимального значения
  if (minPrice.value < 0) {
    minPrice.value = 0
  }

  // Ограничение максимального значения
  if (maxPrice.value < minPrice.value + priceGap) {
    maxPrice.value = minPrice.value + priceGap
  }

  // Ограничение, чтобы минимальная цена не превышала максимальную
  if (minPrice.value >= maxPrice.value) {
    minPrice.value = maxPrice.value - priceGap; // Установить minPrice на maxPrice - priceGap
  }
}

const updatePriceInputs = () => {
  // Ограничение минимального значения
  if (minPrice.value < 0) {
    minPrice.value = 0
  }

  // Ограничение максимального значения
  if (maxPrice.value < minPrice.value + priceGap) {
    maxPrice.value = minPrice.value + priceGap
  }

  // Ограничение, чтобы минимальная цена не превышала максимальную
  if (minPrice.value >= maxPrice.value) {
    minPrice.value = maxPrice.value - priceGap; // Установить minPrice на maxPrice - priceGap
  }
}

const progressStyle = computed(() => {
  const left = (minPrice.value / maxRange.value) * 100
  const right = 100 - (maxPrice.value / maxRange.value) * 100
  return {
    left: `${left}%`,
    right: `${right}%`
  }
})


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

<style scoped>
.catalog_items_list_layer{
  padding: 0px 0px 0px 3%;
}
.filter_button{
  background-color: #CE2E411A;
  width: 100%;
  max-width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-weight: 700;
  font-size: 15px;
  padding: 25px 25px 25px 25px;
}
.filter_checkout_ul_li{
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0px 0px 0px 0px;
}
.filter_checkout_ul_li li{
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 0px;
}
.filter_checkout_ul_li input{
  max-width: 0px 15px 0px 0px;
  height: 15px;
  width: 15px;
}
.checkbox-list {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;

  label{
    margin: 0px 0px 0px 0px;
  }
}

.checkbox-item {
  margin: 0px 0px 5px 0px;
  display: flex;
  align-items: center;
  
  label{
    display: flex;
    align-items: center;
    margin: 0px 15px 0px 0px;
  }

  input{
    margin: 0px 10px 0px 0px;
  }
}


.catalog_list_items article{
  width: 31.3%;
  margin: 3% 0px 0px 0px;
}
.catalog_page{
  display: flex;
  justify-content: space-between;
}
.catalog_list_items{
  display: flex;
  flex: 1;
  width: 100%;
  flex-wrap: wrap;
  gap: 3%;
  padding: 0px 0px 0px 0px;
}
.filter_category_ul_button{
  color: #CE2E41;
  margin: 5px 0px 0px 0px;
  font-size: 15px;
}

.filter_category_ul{
  line-height: 29px;
  font-size: 15px;
}

::selection {
  color: #fff;
  background: #17a2b8;
 
}
.wrapper {
  width: 100%;
  border-radius: 10px;
  padding: 0px 0px 0px 0px;

}
header h2 {
  font-size: 24px;
  font-weight: 600;
}
header p {
  margin-top: 5px;
  font-size: 16px;
}
.price-input {
  width: 100%;
  display: flex;
  margin: 0px 0 15px;
}
.price-input .field {
  display: flex;
  width: 100%;
  height: 45px;
  align-items: center;
}
.field input {
  width: 100%;
  height: 100%;
  outline: none;
  font-size: 15px;
  margin-left: 12px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #999;
  -moz-appearance: textfield;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.price-input .separator {
  width: 130px;
  display: flex;
  font-size: 15px;
  align-items: center;
  justify-content: center;
}
.slider {
  height: 5px;
  position: relative;
  background: #ddd;
  border-radius: 5px;
  overflow: hidden
}
.slider .progress {
  height: 100%;
  left: 25%;
  right: 25%;
  position: absolute;
  border-radius: 5px;
  background: #CE2E41;
}
.range-input {
  position: relative;
}
.range-input input {
  position: absolute;
  width: 100%;
  height: 5px;
  top: -5px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-size: 15px;
}
input[type="range"]::-webkit-slider-thumb {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  background: #CE2E41;
  pointer-events: auto;
  -webkit-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
input[type="range"]::-moz-range-thumb {
  height: 17px;
  width: 17px;
  border: none;
  border-radius: 50%;
  background: #1F5785;
  pointer-events: auto;
  -moz-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
 
/* Support */
.support-box {
  top: 2rem;
  position: relative;
  bottom: 0;
  text-align: center;
  display: block;
}
.b-btn {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.b-btn.paypal i {
  color: blue;
}
.b-btn:hover {
  text-decoration: none;
  font-weight: bold;
}
.b-btn i {
  font-size: 20px;
  color: yellow;
  margin-top: 2rem;
}

.filter_section{
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #F0F0F0;
  padding: 0px 0px 15px 0px;
  margin: 0px 0px 15px 0px;
  font-size: 15px;
}

.filter_section_title{
  font-size: 18px;
  font-weight: 700;
  margin: 0px 0px 15px 0px;
}
.catalog_filter_layer{
  max-width: 312px;
  width: 100%;
  width: 312px;
  box-sizing: border-box;
  padding: 0px 0px 0px 0px;
}
.catalog_layer{

}

.sub_cat_title{
  max-width: 1320px!IMPORTANT;
  margin: 25px auto 25px auto;
  width: calc(100% - 29px);

  h1{
    font-size: 40px;
    font-weight: 700;
    margin: 0px 0px 75px 0px;
  }
}

.scope_application{
  display: flex;
  flex-direction: column;
  margin: 75px 0px 75px 0px;

  && h2{
    font-size: 25px;
    font-weight: 700;
  }
}
.scope_application_layout{
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0px 25px 0px;
  gap: 10px;
  

  && a{
  background-color: #FFFFFF;
  padding: 10px 10px 10px 10px;
  font-size: 15px;
  display: flex;
  border-radius: 5px;
  }
}
.select_category{
  display: flex;
  flex-direction: column;
  margin: 75px 0px 75px 0px;

  && h2{
    font-size: 25px;
    font-weight: 700;
  }
}
.select_category_layer{
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0px 25px 0px;
  gap: 10px;
  flex: 1;
  align-items: stretch;

  


  && a{
  background-color: #FFFFFF;
  padding: 110px 20px 20px 20px;
  font-size: 15px;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 15%;
  font-size: 15px;
  position: relative;
  }


  && a img{
    width: 100%;
    object-fit: contain;
    height: 100%;
    max-height: 100px;
    min-height: 100px;
    min-width: 100px;
    max-width: 100px;
    position: absolute;
    top: 10px;
    right: 0;
    left: 0;
    margin: 0 auto;
  }
}
.showAll {
    background-color: #CE2E411A;
    width: 100%;
    max-width: max-content;
    padding: 0px 15px 0px 15px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-weight: 500;
    font-size: 15px!IMPORTANT;
    display: none;

    && svg{
      margin: 0px 0px 0px 10px;
    }
}





.sort_rating{
  display: flex;
  gap: 10px;

  && button{
    background-color: #F0F0F0;
    font-size: 15px;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
    font-weight: 500;
  }

  && button.active{
    background-color: #151515;
    color: #FFFFFF;
  }
}

.sort_rating_content{
  display: flex;
  align-items: center;
  gap: 15px;
  font: 15px;
}

.hidden_sort_rating{
  display: none;
}

.sort_count{}
  select.sort_count_select{
    background-color: #F0F0F0!IMPORTANT;
    /* background: #F0F0F0!IMPORTANT; */
    padding: 10px 20px 10px 15px!IMPORTANT;
    cursor: pointer;
    border-radius: 5px;
    appearance: none;
    background: url('~/assets/img/keyboard_arrow_right.svg') no-repeat right;
    background-position-x: calc(100% - 15px);
    
  }

  .hidden_sort_rating{
    && select{
      background-color: #F0F0F0!IMPORTANT;
    /* background: #F0F0F0!IMPORTANT; */
    padding: 10px 35px 10px 15px!IMPORTANT;
    cursor: pointer;
    border-radius: 5px;
    appearance: none;
    background: url('~/assets/img/keyboard_arrow_right.svg') no-repeat right;
    background-position-x: calc(100% - 15px);
    }
  }


  .scope_application_layout a:nth-child(n+12) {
    display: none;
  }

.indexSalesLayout {
    width: 100%;
    margin: 0px 0px 0px 0px;
}



.catalog_sort{
  display: flex;
  justify-content: space-between;
  align-items: center;


}

@media (max-width: 1275px){
  .hidden_sort_rating{
    display: block;
  }
  .hidden_class{
    display: none;
  }
}
@media (max-width: 979px){
  .showAll{display: flex;}
  .scope_application_layout a:nth-child(n+7) {
    display: none;
  }
  .select_category_layer{
    && a{
      width: 23.5%;
    }

    && a:nth-child(n+5) {
      display: none;
    }
  }
  .catalog_list_items article{
    min-width: 48.5%;
  }
  .catalog_layer{
    padding: 25px 0px 0px 0px!IMPORTANT;
  }
  .sub_cat_title h1{
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    font-size: 25px;
  }
  .sub_cat_title{
    padding: 0px 0px 0px 0px;
    margin: 25px auto 50px auto;
  }
  .scope_application{
  display: flex;
  flex-direction: column;
  margin: 50px 0px 50px 0px;

  && h2{
    font-size: 25px;
    font-weight: 700;
  }
  }

  .catalog_list_items{
    padding: 0px 0px 0px 0px;
  }

  .catalog_filter_layer{
    display: none;
  }



 
  .catalog_filter_layer.active{
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100dvh;
    background-color: #FFFFFF;
    z-index: 115;
    max-width: 100%;
    top:0;
    right: 0;
    left: 0;
    padding: 20px 20px 20px 20px;
    overflow: hidden;
    overflow-y: auto;
  }
  .catalog_layer{
    padding: 25px 0px 0px 0px!IMPORTANT;
  }
  .catalog_items_list_layer{
    padding: 0px 0px 0px 0px;
  }
}


.close_filter{
  position: absolute;
  right: 15px;
  top:15px;
  z-index: 116;
  cursor: pointer;
}

@media (max-width: 679px){
  .scope_application_layout a:nth-child(n+5) {
    display: none;
  }
  .select_category_layer.select_category_layer a{
    width: 48%;
  }
  .catalog_list_items article{
    min-width: 100%!IMPORTANT;
  }
  .showAll{
    && span{
      display: none;
    }
  }
  .sort_rating_content{
    && span{
      display: none;
    }
  }

  .sort_count{
    && span{
      display: none;
    }
  }

  .showAll.showAll svg{
    margin: 0px 0px 0px 0px;
  }
}
</style>