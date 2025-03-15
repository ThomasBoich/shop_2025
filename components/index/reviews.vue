<template>
  <div class="content reviews_layer">
    <div class="reviews_title">
      <!-- <div class=""></div> -->
        <span>
          80%+ клиентов остаются с нами
          и рекомендуют знакомым
        </span>
      
      <div class="" style="display: flex;align-items: center;">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0.00488281C4.48 0.00488281 0 4.48488 0 10.0049C0 15.5249 4.48 20.0049 10 20.0049C15.52 20.0049 20 15.5249 20 10.0049C20 4.48488 15.52 0.00488281 10 0.00488281ZM8 15.0049L3 10.0049L4.41 8.59488L8 12.1749L15.59 4.58488L17 6.00488L8 15.0049Z" fill="#CE2E41"/>
        <path d="M8 15.0049L3 10.0049L4.41 8.59488L8 12.1749L15.59 4.58488L17 6.00488L8 15.0049Z" fill="white"/>
        </svg>

      Нравятся цены и экспертный подбор стройматериалов под их задачи
      </div>
    </div>
    <MazCarousel style="position: relative;" class="maz_car">
    <MazCard class="review_card" v-for="(item, i) in Array(6)" :key="i" style="min-width: 32.3%;">
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute;right: -10px;top: 0px;">
      <rect y="0.00488281" width="25" height="25" rx="5" fill="#FEF127"/>
      <path d="M6.5 17.5049H9.5L11.5 13.5049V7.50488H5.5V13.5049H8.5L6.5 17.5049ZM14.5 17.5049H17.5L19.5 13.5049V7.50488H13.5V13.5049H16.5L14.5 17.5049Z" fill="black"/>
      </svg>

      <img src="~/assets/img/review_avatar.png" alt="" class="review_avatar_img">
      <span style="font-size: 18px;font-weight: 700;margin: 0px 0px 10px 0px;display: flex;">Иван</span>
      <p style="font-size: 15px;">Батареи превосходные. Но особо хочу поблагодарить сотрудницу Елену, очень милая девушка, доброжелательная, вежливая, и что очень приятно хорошо разбирается в вопросах отопления и</p>
    </MazCard>
  </MazCarousel>


    <!-- <SfScrollable 
      class="
      m-auto
      py-4
      items-center
      w-full [&::-webkit-scrollbar]:hidden
      [-ms-overflow-style:none]
      [scrollbar-width:none]"
      drag
      >

      <template #previousButton="defaultProps">
        <SfButton v-bind="defaultProps" class="absolute z-10 left-4" :class="{ '!hidden': defaultProps.disabled }" square>
          <SfIconChevronLeft />
        </SfButton>
      </template>


      <div v-for="{ id, name, price, img } in products" :key="id" class="review_card" style="min-width: 30%;">
        
      </div>

      <template #nextButton="defaultProps">
        <SfButton v-bind="defaultProps" class="absolute z-10 right-4" square>
          <SfIconChevronRight />
        </SfButton>
      </template>
      
    </SfScrollable> -->
  </div>
</template>

<script lang="ts" setup>
  // import MazCarousel from 'maz-ui/components/MazCarousel'
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
  name: 'Иван',
  img: {
    src: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png',
    alt: 'White sneaker shoe',
  },
}));


</script>

<style scoped>
.maz_car{}
.maz_car::-webkit-scrollbar{width: 0!IMPORTANT;height: 0!IMPORTANT;}
.m-carousel__items::-webkit-scrollbar{width: 0!IMPORTANT;height: 0!IMPORTANT;}
.review_avatar_img{
  position: absolute;
  left: -40px;
  top: 5px;
  z-index: 2;
  border-radius: 5px;
}

.m-carousel__header{
  justify-content: space-between!IMPORTANT;
  width: 100%!IMPORTANT;
}

.m-carousel__header__actions{
  width: 100%!IMPORTANT;  
  justify-content: space-between!IMPORTANT;
}

.review_card{
  /* width: 100%; */
  min-width: 31.2%!IMPORTANT;
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 15px 25px 15px 25px;
}
  .reviews_title{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0px 0px 20px 0px;
    
    && span{
      font-size: 40px;
      font-weight: 700;
      width: 50%;
    }

    && svg{
      margin: 0px 10px 0px 0px;
    }
  }
  .reviews_layer{
    padding: 125px 0px 125px 0px;
  }

  @media (max-width: 979px){
    .reviews_title.reviews_title span{
      font-size: 25px;
    }
    .reviews_title{
      width: 100%;
      max-width: 100%;
      flex-direction: column;
      align-items: center;

      div{
        width: 100%;
      }
    }
    .reviews_title.reviews_title span{
      max-width: 100%;
      width: 100%;
    }
    .reviews_layer{
      padding: 50px 0px 50px 0px;
    }
    .review_card{
      min-width: 40%!IMPORTANT;
    }
  }
  
  @media (max-width: 679px){
    .review_card{
      min-width: 90%!IMPORTANT;
    }
  }
</style>