<template>
  <article>
    <div class="product-cart">
      <svg width="43" height="25" viewBox="0 0 43 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="43" height="25" rx="5" fill="#FEF127"/>
      <path d="M19.373 17H16.799L14.693 13.828L12.587 17H10.013L13.406 12.203L10.325 7.9H12.886L14.693 10.591L16.5 7.9H19.061L15.98 12.203L19.373 17ZM19.8529 17V10.994H21.8159V14.244H21.8419L24.3899 10.994H26.1189V17H24.1559V13.75H24.1299L21.5819 17H19.8529ZM32.5824 10.994V12.762H30.6714V17H28.7084V12.762H26.7974V10.994H32.5824Z" fill="#272727"/>
      </svg>

      <img src="~/assets/img/product_image.svg" alt="">
      <h2>Кирпич полнотелый рядовой М-150, красный</h2>
      <ul class="item_list_value_key">
        <li>
          <div class="item_key">Размер:</div>
          <div class="item_value">200*80*46</div>
        </li>
        <li>
          <div class="item_key">Тип:</div>
          <div class="item_value">керамический</div>
        </li>
        <li>
          <div class="item_key">Вид:</div>
          <div class="item_value">полнотелый</div>
        </li>
        <li>
          <div class="item_key">Марка плотности:</div>
          <div class="item_value">D500</div>
        </li>
        <li>
          <div class="item_key">Производитель:</div>
          <div class="item_value">Липковский завод</div>
        </li>
      </ul>



      <div class="item_actions" :class="{'active': mobileButton}">
        <div class="item_action">
          <div class="item_price">
          <span>
            24 000 руб.
          </span>
          <div class="price">
            15 000 руб.
          </div>
        </div>
        <button type="button" class="button" @click="toogleItemMobileButton">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.0461 13C17.7961 13 18.4561 12.59 18.7961 11.97L22.3761 5.48C22.7461 4.82 22.2661 4 21.5061 4H6.70609L5.76609 2H2.49609V4H4.49609L8.09609 11.59L6.74609 14.03C6.01609 15.37 6.97609 17 8.49609 17H20.4961V15H8.49609L9.59609 13H17.0461ZM7.65609 6H19.8061L17.0461 11H10.0261L7.65609 6ZM8.49609 18C7.39609 18 6.50609 18.9 6.50609 20C6.50609 21.1 7.39609 22 8.49609 22C9.59609 22 10.4961 21.1 10.4961 20C10.4961 18.9 9.59609 18 8.49609 18ZM18.4961 18C17.3961 18 16.5061 18.9 16.5061 20C16.5061 21.1 17.3961 22 18.4961 22C19.5961 22 20.4961 21.1 20.4961 20C20.4961 18.9 19.5961 18 18.4961 18Z" fill="white"/>
          </svg>
          <!-- В корзину -->
        </button>
        <button class="mobile_item_button">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.0461 13C17.7961 13 18.4561 12.59 18.7961 11.97L22.3761 5.48C22.7461 4.82 22.2661 4 21.5061 4H6.70609L5.76609 2H2.49609V4H4.49609L8.09609 11.59L6.74609 14.03C6.01609 15.37 6.97609 17 8.49609 17H20.4961V15H8.49609L9.59609 13H17.0461ZM7.65609 6H19.8061L17.0461 11H10.0261L7.65609 6ZM8.49609 18C7.39609 18 6.50609 18.9 6.50609 20C6.50609 21.1 7.39609 22 8.49609 22C9.59609 22 10.4961 21.1 10.4961 20C10.4961 18.9 9.59609 18 8.49609 18ZM18.4961 18C17.3961 18 16.5061 18.9 16.5061 20C16.5061 21.1 17.3961 22 18.4961 22C19.5961 22 20.4961 21.1 20.4961 20C20.4961 18.9 19.5961 18 18.4961 18Z" fill="white"/>
          </svg>
          <!-- В корзину -->
        </button>
        </div>
        <div class="item_color_list">
          <span>Цвета</span>
            <div class="iten_list_layout">
              <span                 
                v-for="color in product.colors"
                :key="color"
                :class="{ active: selectedColor === color }"
                :style="{ backgroundColor: color }"
                @click="selectColor(color)">                
                <img src="~/assets/img/item_color.png" alt="">
              </span>
            </div>

            

        </div>
        <div class="item_pay_action">

        <div class="item_count">
          <span @click="decrement">-</span>
            <input class="br-5 jc-c df tc-c" type="number" :value="count">
          <span @click="increment">+</span>
        </div>
        

        <button type="button" class="button" data-v-33c21f61="">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-33c21f61=""><path d="M17.0461 13C17.7961 13 18.4561 12.59 18.7961 11.97L22.3761 5.48C22.7461 4.82 22.2661 4 21.5061 4H6.70609L5.76609 2H2.49609V4H4.49609L8.09609 11.59L6.74609 14.03C6.01609 15.37 6.97609 17 8.49609 17H20.4961V15H8.49609L9.59609 13H17.0461ZM7.65609 6H19.8061L17.0461 11H10.0261L7.65609 6ZM8.49609 18C7.39609 18 6.50609 18.9 6.50609 20C6.50609 21.1 7.39609 22 8.49609 22C9.59609 22 10.4961 21.1 10.4961 20C10.4961 18.9 9.59609 18 8.49609 18ZM18.4961 18C17.3961 18 16.5061 18.9 16.5061 20C16.5061 21.1 17.3961 22 18.4961 22C19.5961 22 20.4961 21.1 20.4961 20C20.4961 18.9 19.5961 18 18.4961 18Z" fill="white" data-v-33c21f61=""></path>
        </svg>
        <!-- В корзину -->
        </button>

        <button type="button" class="button bc-grey" data-v-33c21f61="">
        Быстрый заказ
        </button>
        </div>








        <div class="item_info_link">
          Нужно индивидуальное решение?
          <NuxtLink to="">
            Получить КП со сметой
          </NuxtLink>
        </div>

      </div>





        
    </div>
  </article>
</template>

<script lang="ts" setup>
//@ts-nocheck
const mobileButton = ref(false);

function toogleItemMobileButton(){
  mobileButton.value = !mobileButton.value;
}




const maxCount = ref(0);
const minCount = ref(0)
const count = ref(1);

function increment() {
  count.value++;
  // if (count.value < maxCount.value) {
  //   count.value++;
  // }
}

function decrement() {

  if (count.value < 1) {
    return
  }
  else{
    count.value--;
  }
}












//@ts-nocheck
const product = ref({
    id: 4,
    title: 'asdasdas',
    colors: ['зеленый', 'голубой', 'серый', 'белый'],
    image: '/item_color.png'
  })

const selectedColor = ref(null);

onMounted(() => {
  if (product.value.colors.length > 0) {
    selectedColor.value = product.value.colors[0]; // Устанавливаем первый цвет активным
  }
});
const selectColor = (color) => {
  selectedColor.value = color;
};
const buyProduct = () => {
  if (selectedColor.value) {
    console.log('Выбранный цвет:', selectedColor.value);
    // Здесь вы можете отправить выбранный цвет на сервер
  } else {
    alert('Пожалуйста, выберите цвет перед покупкой.');
  }
};
</script>

<style scoped>
.item_count{
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 700;
  width: 100px;
  align-items: center;
  gap: 10px;
  border: 1px solid #f0f0f0;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  && input{
    width: max-content;
    min-width: max-content;
    width: 35px;
    min-width: auto;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 0;
    position: relative;
    left: 9px;
    font-weight: 500;
    font-size: 20px;
  }
  && span{
    color: #CE2E41;
    font-weight: 700;
    z-index: 15;
  }
}
.item_pay_action{
  display: flex;
  gap: 10px;
  align-items: stretch;
  margin: 20px auto 20px auto;

  && input{
    font-size: 15px;
    max-width: max-content;
  }
  
  && button{
    max-width: max-content;
    padding: 0px 25px 0px 25px;
    display: flex!IMPORTANT;
  }
}

.item_pay_action .fill-current{
  color: #CE2E41;
}

.item_price{
  margin: 0px 0px 15px 0px;
}

.item_price_input{
  border: 1px solid #F0F0F0!IMPORTANT;
  align-items: center!IMPORTANT;
  display: flex!IMPORTANT;
  justify-content: center;
  border-radius: 5px;
}

.item_social_number{
  display: flex;
  align-items: center;
  min-width: max-content;
}
.item_info_link{
  && a{
    color: #CE2E41;
  }
}
.index-tab{
  position: relative;
}
.item_color_list{
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 0px 0px 0px 0px;
  flex-direction: column;
  border-bottom: 1px solid #f0f0f0;
  border-bottom: 1px solid #FFFFFF;
  margin: 0px 0px 0px 0px;
  visibility: hidden;
  display: none;

  && img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  && span{
    width: 25px;
    height: 25px;
    font-size: 14px;
    margin: 0;
  }
}

.mobile_item_button{
  display: none;
}

.iten_list_layout{
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 0px 0px 0px 0px;
}
.iten_list_layout span{
  border-radius: 5px;
  cursor: pointer;
  padding: 2px;
}
.iten_list_layout span.active{
  outline: 2px solid #CE2E41;
}

article{
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  align-items: flex-start;
}

article:hover{
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  padding: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
}
/* article:hover{


} */
.product-cart:hover{
    position: absolute;
    width: 100%;
    z-index: 115;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 20px 0px #00000020;
    overflow: hidden;
  }

.item_pay_action{
  display: none;
}

article:hover .item_pay_action{
  display: flex;
}

.product-cart:hover .item_color_list{
  visibility: visible;
  display: flex;
  
}

.product-cart:hover{
  && button{
    display: none;
  }
}

.product-cart{
  padding: 25px 25px 25px 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #F0F0F0;
  border-radius: 5px;
  position: relative;

  && button{
    width: max-content;
    padding: 15px;
    
    svg{
      margin: 0 auto;
    }
  }
}


.item_action{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.product-cart img{
  width: auto;
  height: 159px;
  object-fit: contain;
  margin: 0px 0px 20px 0px;
}

.product-cart svg{
  position: absolute;
  left: 15px;
  top: 15px;
}

.product-cart h2{
  font-size: 18px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  /* white-space: nowrap; */
  width: 100%;
  margin: 0px 0px 5px 0px;
}

dl{
  display: flex;
  width: 100%;

dd{
    width: 50%;
  }

dl{
    width: 50%;
  }
}

.cart_list dd{width: 50%;}
.cart_list dl{width: 50%;}
.item_list_value_key{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 0px 0px 20px 0px;
}
.item_list_value_key ul{
  display: flex;
  flex-direction: column;
}
.item_list_value_key li{
  width: 100%;
  display: flex;
  align-items: center;
}
.item_key{
  min-width: 50%!IMPORTANT;
  font-size: 13px;
  min-width: max-content;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item_value{
  min-width: 50%!IMPORTANT;
  font-size: 13px;
  min-width: max-content;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

button{
  svg{
    position: static!IMPORTANT;
    top: 0px!IMPORTANT;
  }
}

.item_price{
  display: flex;
  margin: 0px 0px 20px 0px;
  flex-direction: column;
}

.item_price span{
  font-size: 15px;
  text-decoration: line-through;
}

.price{
  font-size: 25px;
  font-weight: 700;
  color: #CE2E41;
}


.product-cart .active{
  position: relative;
  width: 100%;
  z-index: 115;
  background-color: #FFFFFF;
  box-shadow: none
}

@media (max-width: 1320px){
  .item_pay_action{
    flex-wrap: wrap;
  }
}

@media (max-width: 969px){
  .item_price button{
    display: flex!IMPORTANT;
  }
  /* .mobile_item_button{
    display: flex!IMPORTANT;
  } */

  article:hover{
  .product-cart{
  position: relative;
  width: 100%;
  z-index: 115;
  background-color: #FFFFFF;
  box-shadow: none
}

button{
    display: flex!IMPORTANT;
  }
  }

  .item_actions.active{
  position: fixed;
  bottom: 0px;
  box-shadow:-20px 0px 20px 0px #00000020!IMPORTANT;
  width: 100%;
  left: 0;
  right: 0;
  padding: 20px 20px;
}

}
</style>