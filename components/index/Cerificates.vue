<template>
  <section class="df fd-c p-125-0 bc-white">
    <div class="content">
      <div class="certificate-title">
        <div class="df fd-c w-100">
        <p>Продаем только официальные товары с сертификатами качества</p>
        <h2>Контрофакт - ИСКЛЮЧЕН!</h2>
        </div>
        <div class="" style="min-width: 247px;">
          <button type="button" class="button" style="background-color: #FBEBEC;color: #272727;font-size: 15px;font-weight: 500;">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2.50488H6C4.9 2.50488 4.01 3.40488 4.01 4.50488L4 20.5049C4 21.6049 4.89 22.5049 5.99 22.5049H18C19.1 22.5049 20 21.6049 20 20.5049V8.50488L14 2.50488ZM18 20.5049H6V4.50488H13V9.50488H18V20.5049Z" fill="#CE2E41"/>
            </svg>

            Подробнее о документах
          </button>
        </div>
      </div>


      <div class="certificate-slider df jc-sb ai-c" style="max-width: 100%;float: left;">
        <SfScrollable
    class="m-auto py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    buttons-placement="floating"
    drag
  >
    <template #previousButton="defaultProps">
      <SfButton
        v-bind="defaultProps"
        class="absolute z-10 left-4 bg-white md:block slider_button"
        :class="{ '!hidden': defaultProps.disabled }"
        size="lg"
        square
        style="color:#272727;left: -25px;"
      >
        <SfIconChevronLeft />
      </SfButton>
    </template>
    <div
      v-for="{ id, img } in products"
      :key="id"
      class="first:ms-auto last:me-auto border border-neutral-200 shrink-0 rounded-md hover:shadow-lg"
      style="width: 23.5%;"
    >
      <div class="relative">
        <SfLink href="#" class="block cert_slide" style="display: flex;justify-content: center;border:1px solid #F0F0F0;padding: 20px 20px 20px 20px;border-radius: 5px;">
          <img
            :src="img.src"
            :alt="img.alt"
            class="block object-cover h-auto rounded-md aspect-square"
            style=""
          />
        </SfLink>
      </div>
    </div>
    <template #nextButton="defaultProps">
      <SfButton
        v-bind="defaultProps"
        class="absolute z-10 right-4 bg-white md:block slider_button"
        :class="{ '!hidden': defaultProps.disabled }"
        size="lg"
        square
        style="color:#272727;right: -25px;"
      >
        <SfIconChevronRight />
      </SfButton>
    </template>
  </SfScrollable>
  <div class="slider-stats">
    <div class="slider-stat">
      <span>20+</span>
      <p>
        проверенных годами брендов
      </p>
    </div>
    <div class="slider-stat">
      <span>50+</span>
      <p>заводов в сотрудничестве</p>
    </div>
  </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  SfLink,
  SfButton,
  SfIconFavorite,
  SfIconChevronLeft,
  SfIconChevronRight,
  SfScrollable,
} from '@storefront-ui/vue';

const products = [
  {
    id: 0,
    img: {
      src: 'knauf.svg',
      alt: 'knauf',
    }
  },
  {
    id: 1,
    img: {
      src: 'bergauf.svg',
      alt: 'bergauf',
    },
  },
  {
    id: 2,
    img: {
      src: 'fasadpro.svg',
      alt: 'fasadpro',
    }
  },
  {
    id: 3,
    img: {
      src: 'krovent.svg',
      alt: 'krovent',
    },
  },
  {
    id: 4,
    img: {
      src: 'knauf.svg',
      alt: 'knauf',
    }
  },
  {
    id: 5,
    img: {
      src: 'bergauf.svg',
      alt: 'bergauf',
    },
  },
  {
    id: 6,
    img: {
      src: 'fasadpro.svg',
      alt: 'fasadpro',
    }
  },
  {
    id: 7,
    img: {
      src: 'krovent.svg',
      alt: 'krovent',
    },
  }
];
</script>

<style scoped>
.cert_slide{
  display: flex;
  justify-content: space-between;
  align-items: center;

  && img{
    object-fit: contain;
  }
}

.slider_button{

}
.slider_button:hover{
  color: #FFFFFF!IMPORTANT;
  background-color: #CE2E41!IMPORTANT;
}
h2{
  font-weight: 700;
  font-size: 40px;
}

p{
  font-size: 20px;
  margin: 0px 0px 10px 0px;
}

.certificate-title{
  display: flex;
  align-items: flex-end;
}

.slider-stats{
  min-width: 350px;
  margin: 0px 0px 0px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  && span{
    font-weight: 700;
    font-size: 50px;
  }

  && p{
    font-size: 16px;
    font-weight: 500;
  }
}
</style>