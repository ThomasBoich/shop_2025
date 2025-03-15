<template>
  <div>
    <h1>Заказы</h1>

    <div class="order_list">
      <div class="order_layer">
        <div class="order">
        <div>
          <button class="order_number">
            № 200728434765
           <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.41 3L6 7.58L10.59 3L12 4.41L6 10.41L0 4.41L1.41 3Z" fill="#CE2E41"/>
            </svg>
          </button>
        </div>
        <div>
          <span>22 июля 2020  10:56</span>
          <p>Способ доставки: До квартиры</p>
        </div>
        <div>
          <span>5 645, 45 руб.</span>
          <p>16 товаров</p>
        </div>
        <div>
          <span>Статус:</span>
          <p>Доставка</p>
        </div>
        <div>
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10V3L18.36 5.64C16.74 4.01 14.49 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12H19C19 15.86 15.86 19 12 19C8.14 19 5 15.86 5 12C5 8.14 8.14 5 12 5C13.93 5 15.68 5.79 16.95 7.05L14 10H21Z" fill="#CE2E41"/>
            </svg>
            Повторить
          </button>
        </div>
        </div>
        <div class="order_info">
          <ul>
            <li>
              <img src="~/assets/img/product_image.svg" alt="">
              <div>
                <span>Кирпич полнотелый рядовой М-150, красный.....</span>
                <p style="color: #CE2E41;">15 000 руб.</p>
              </div>
              <span>Кол-во:  1</span>
            </li>
          </ul>
        </div>
      </div>
      <button>Показать ещё</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'profile'
})
</script>

<style scoped>
.order_list{
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  && button{
    background: #FBEBEC;
    padding: 20px 25px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
    justify-content: center;
  }
}
h1{
  font-size: 29px;
  font-weight: 700;
  margin: 0px 0px 20px 0px;
}
.order{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2%;
  flex-wrap: wrap;
  /* border: 1px solid #F0F0F0;
  padding: 25px 25px 25px 25px; */
  border-radius: 5px;
  margin: 0px 0px 20px 0px;

  && div{
    width: max-content;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  && button{
    background: #FBEBEC;
    padding: 15px 25px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
  }

  && span{
    font-weight: 700;
  }
}
.order_number{
  background-color: inherit!IMPORTANT;
  padding: 0!IMPORTANT;
}

.order_info{
  padding: 20px;
  border: 1px solid #F0F0F0;
  border-radius: 5px;
  && li{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  && span{
    min-width: max-content;
  }

  && div{
    width: 100%;
  }

  && img{
    width: 50px;
    height: 50px;
  }
}

.order_layer{
  padding: 20px 20px 20px 20px;
  border: 1px solid #F0F0F0;
  padding: 25px 25px 25px 25px;
  border-radius: 5px;
}


@media (max-width: 979px){
  
  .order div:first-child{
  width: 100%;
  align-items: flex-start;
  margin: 0px 0px 20px 0px;
}
.order div:last-child{
  width: 100%;
  max-width: max-content;
  margin: 20px 79px 0px 0px;
}
}


@media (max-width: 679px){
  .order{
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    padding: 0px 0px 0px 0px;

    && div{
      width: 100%;
      max-width: 100%;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px 0px 0px 0px;
    }
  }
  
  .order div:last-child{
    margin: 20px 0px 0px 0px;
  }

  .order_info{
    && li{
      flex-direction: column;
      align-items: flex-start
    }
  }
}
</style>