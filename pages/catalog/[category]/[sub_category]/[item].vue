<template>
  <div>
    <BreadCrabms></BreadCrabms>
    <section class="content item_title">
      <h1>
        Кирпич полнотелый рядовой М-15


        <div class="item_nav_info">
          <div class="item_article">
          Артикул товара: 7606
        </div>    

        <button>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 13.4335C14.3667 13.4335 13.8 13.6835 13.3667 14.0752L7.425 10.6169C7.46667 10.4252 7.5 10.2335 7.5 10.0335C7.5 9.83353 7.46667 9.64186 7.425 9.45019L13.3 6.0252C13.75 6.44186 14.3417 6.70019 15 6.70019C16.3833 6.70019 17.5 5.58353 17.5 4.2002C17.5 2.81686 16.3833 1.7002 15 1.7002C13.6167 1.7002 12.5 2.81686 12.5 4.2002C12.5 4.4002 12.5333 4.59186 12.575 4.78353L6.7 8.20853C6.25 7.79186 5.65833 7.53353 5 7.53353C3.61667 7.53353 2.5 8.65019 2.5 10.0335C2.5 11.4169 3.61667 12.5335 5 12.5335C5.65833 12.5335 6.25 12.2752 6.7 11.8585L12.6333 15.3252C12.5917 15.5002 12.5667 15.6835 12.5667 15.8669C12.5667 17.2085 13.6583 18.3002 15 18.3002C16.3417 18.3002 17.4333 17.2085 17.4333 15.8669C17.4333 14.5252 16.3417 13.4335 15 13.4335Z" fill="#CE2E41"/>
        </svg>

        Поделится в соц. сетях
      </button>
        </div>
      </h1>
    </section>
    <div class="content item_content_layout_page">
      <div class="item_galery">
        <div class="relative flex w-full max-h-[600px] aspect-[4/4]">
    <SfScrollable
      ref="thumbsRef"
      class="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      direction="vertical"
      :active-index="activeIndex"
      :previous-disabled="activeIndex === 0"
      :next-disabled="activeIndex === images.length - 1"
      buttons-placement="floating"
    >
      <template #previousButton="defaultProps">
        <SfButton
          v-if="!firstThumbVisible"
          v-bind="defaultProps"
          :disabled="activeIndex === 0"
          class="absolute !rounded-full z-10 top-4 rotate-90 bg-white"
          variant="secondary"
          size="sm"
          square
        >
          <SfIconChevronLeft size="sm" />
        </SfButton>
      </template>
      <button
        v-for="({ imageThumbSrc, alt }, index) in images"
        :key="`${alt}-${index}-thumbnail`"
        :ref="(el) => assignRef(el, index)"
        type="button"
        :aria-label="alt"
        :aria-current="activeIndex === index"
        :class="`md:w-[78px] md:h-auto relative shrink-0 pb-1 mx-4 -mb-2 border-b-4 snap-start cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0  ${
          activeIndex === index ? 'border-primary-700' : 'border-transparent'
        }`"
        @mouseover="activeIndex = index"
        @focus="activeIndex = index"
      >
        <img :alt="alt" class="border border-neutral-200" width="78" height="78" :src="imageThumbSrc" />
      </button>
      <template #nextButton="defaultProps">
        <SfButton
          v-if="!lastThumbVisible"
          v-bind="defaultProps"
          :disabled="activeIndex === images.length"
          class="absolute !rounded-full z-10 bottom-4 rotate-90 bg-white"
          variant="secondary"
          size="sm"
          square
        >
          <SfIconChevronRight size="sm" />
        </SfButton>
      </template>
    </SfScrollable>
    <SfScrollable
      class="w-full h-full snap-y snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      :active-index="activeIndex"
      direction="vertical"
      wrapper-class="h-full m-auto"
      is-active-index-centered
      buttons-placement="none"
      :drag="{ containerWidth: true }"
      @on-drag-end="onDragged"
    >
      <div
        v-for="({ imageSrc, alt }, index) in images"
        :key="`${alt}-${index}`"
        class="flex justify-center h-full basis-full shrink-0 grow snap-center snap-always"
      >
        <img
          :aria-label="alt"
          :aria-hidden="activeIndex !== index"
          class="object-cover w-auto h-full"
          :alt="alt"
          :src="imageSrc"
        />
      </div>
    </SfScrollable>
  </div>
      </div>

      <div class="item_offer_layout">
          <div class="item_price" data-v-33c21f61=""><div class="price" data-v-33c21f61=""> 15 000 руб. </div><span data-v-33c21f61=""> 24 000 руб. </span></div>

          <div class="item_pay_action">

            <div class="inline-flex flex-col items-center item_price_input">
    <div class="flex border border-neutral-300 rounded-md">
      <SfButton
        variant="tertiary"
        :disabled="count <= min"
        square
        class="rounded-r-none"
        :aria-controls="inputId"
        aria-label="Decrease value"
        @click="dec()"
      >
        <SfIconRemove />
      </SfButton>
      <input
        :id="inputId"
        v-model="count"
        type="number"
        class="appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
        :min="min"
        :max="max"
        @input="handleOnChange"
      />
      <SfButton
        variant="tertiary"
        :disabled="count >= max"
        square
        class="rounded-l-none"
        :aria-controls="inputId"
        aria-label="Increase value"
        @click="inc()"
      >
        <SfIconAdd />
      </SfButton>
    </div>
  </div>

            <!-- <input class="br-5 jc-c df tc-c" type="number" value="1"> -->

          <button type="button" class="button" data-v-33c21f61="">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-33c21f61=""><path d="M17.0461 13C17.7961 13 18.4561 12.59 18.7961 11.97L22.3761 5.48C22.7461 4.82 22.2661 4 21.5061 4H6.70609L5.76609 2H2.49609V4H4.49609L8.09609 11.59L6.74609 14.03C6.01609 15.37 6.97609 17 8.49609 17H20.4961V15H8.49609L9.59609 13H17.0461ZM7.65609 6H19.8061L17.0461 11H10.0261L7.65609 6ZM8.49609 18C7.39609 18 6.50609 18.9 6.50609 20C6.50609 21.1 7.39609 22 8.49609 22C9.59609 22 10.4961 21.1 10.4961 20C10.4961 18.9 9.59609 18 8.49609 18ZM18.4961 18C17.3961 18 16.5061 18.9 16.5061 20C16.5061 21.1 17.3961 22 18.4961 22C19.5961 22 20.4961 21.1 20.4961 20C20.4961 18.9 19.5961 18 18.4961 18Z" fill="white" data-v-33c21f61=""></path>
            </svg>
            В корзину
          </button>

          <button type="button" class="button bc-grey" data-v-33c21f61="">
            Быстрый заказ
          </button>
          </div>


          <!-- weqwedqwdasd -->
        </div>
      <div class="item_layout">
      <div class="item_layout_content">


        <div class="item_info_layer">
          <div class="item_info">
            <div class="item_info_layer_contacts">
                <div class="item_info_layer_contacts_links">   
                  <span>
                  Нашли дешевле? Сделаем скидку
                </span>
                <div class="item_social_number">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#CE2E41"/>
                </svg>
                <number>
                  <NuxtLink to="">
                    8 800 567 56 67
                  </NuxtLink>
                </number>
              <NuxtLink to="">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="30" rx="5" fill="#2AABEE"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.78977 14.8414C11.1626 12.9363 14.0785 11.6803 15.5374 11.0734C19.7031 9.34081 20.5687 9.03983 21.1329 9.02989C21.257 9.02771 21.5344 9.05846 21.7141 9.20429C21.8659 9.32742 21.9076 9.49376 21.9276 9.6105C21.9476 9.72725 21.9725 9.9932 21.9527 10.201C21.7269 12.5729 20.7502 18.3287 20.2533 20.9852C20.043 22.1093 19.629 22.4862 19.2281 22.5231C18.3571 22.6033 17.6956 21.9474 16.8519 21.3944C15.5317 20.529 14.7859 19.9903 13.5044 19.1458C12.0235 18.1698 12.9835 17.6335 13.8275 16.7568C14.0484 16.5274 17.8864 13.0365 17.9607 12.7198C17.9699 12.6802 17.9786 12.5326 17.8909 12.4546C17.8032 12.3766 17.6737 12.4033 17.5803 12.4245C17.4479 12.4546 15.3389 13.8485 11.2532 16.6065C10.6546 17.0175 10.1123 17.2178 9.62652 17.2073C9.09094 17.1958 8.0607 16.9045 7.29483 16.6556C6.35545 16.3502 5.60886 16.1888 5.67387 15.6702C5.70773 15.4001 6.0797 15.1238 6.78977 14.8414Z" fill="white"/>
              </svg>
            </NuxtLink>
              <NuxtLink to="">             
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="30" rx="5" fill="#2CD44A"/>
              <path d="M15.256 7.11865H15.2522C11.0468 7.11865 7.62695 10.5394 7.62695 14.7458C7.62695 16.4142 8.16467 17.9606 9.07897 19.2162L8.12844 22.0497L11.0601 21.1125C12.2661 21.9115 13.7048 22.3729 15.256 22.3729C19.4614 22.3729 22.8812 18.9512 22.8812 14.7458C22.8812 10.5404 19.4614 7.11865 15.256 7.11865ZM19.694 17.8891C19.51 18.4087 18.7797 18.8396 18.1972 18.9655C17.7987 19.0503 17.2781 19.118 15.5258 18.3915C13.2844 17.4629 11.8409 15.1853 11.7284 15.0375C11.6207 14.8897 10.8227 13.8315 10.8227 12.737C10.8227 11.6425 11.3785 11.1095 11.6026 10.8807C11.7866 10.6929 12.0907 10.6071 12.3825 10.6071C12.4768 10.6071 12.5617 10.6119 12.638 10.6157C12.862 10.6252 12.9745 10.6386 13.1223 10.9923C13.3063 11.4356 13.7544 12.5301 13.8078 12.6426C13.8621 12.7551 13.9165 12.9076 13.8402 13.0554C13.7687 13.208 13.7058 13.2756 13.5933 13.4053C13.4808 13.535 13.374 13.6341 13.2615 13.7733C13.1585 13.8944 13.0422 14.0241 13.1719 14.2481C13.3015 14.4674 13.7496 15.1986 14.4094 15.7859C15.2607 16.5439 15.951 16.786 16.1979 16.889C16.3819 16.9653 16.6012 16.9471 16.7356 16.8041C16.9063 16.6201 17.117 16.3151 17.3315 16.0147C17.4841 15.7993 17.6766 15.7726 17.8788 15.8488C18.0847 15.9203 19.1744 16.459 19.3985 16.5706C19.6225 16.6831 19.7703 16.7365 19.8246 16.8308C19.878 16.9252 19.878 17.3685 19.694 17.8891Z" fill="white"/>
              </svg>
            </NuxtLink> 
          </div>

                </div>
            
                <div class="GiveAll">
                  <span>Нужен большой объем?</span>
                  <button>Получить КП со сметой</button>
                </div>
            
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
              
              <div class="item_short_characteristics">
                <span>Характеристики</span>
                <dl>
                  <dt>Размер</dt>
                  <dd>200*80*46</dd>
                  <dt>Тип</dt>
                  <dd>Керамический</dd>
                  <dt>Вид</dt>
                  <dd>Полнотелый</dd>
                  <dt>Марка плотности</dt>
                  <dd>D500</dd>
                  <dt>Производитель</dt>
                  <dd>Липковский завод</dd>
                </dl>
                <button>Все характеристики</button>
              </div>

              <div class="delivery_layout">
            <div class="delivery_all">
              <span>Доставка</span>
              <ul>
                <li>
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.25 2H11.5V0.5H10V2H4V0.5H2.5V2H1.75C0.9175 2 0.2575 2.675 0.2575 3.5L0.25 14C0.25 14.825 0.9175 15.5 1.75 15.5H12.25C13.075 15.5 13.75 14.825 13.75 14V3.5C13.75 2.675 13.075 2 12.25 2ZM12.25 14H1.75V6.5H12.25V14ZM4.75 9.5H3.25V8H4.75V9.5ZM7.75 9.5H6.25V8H7.75V9.5ZM10.75 9.5H9.25V8H10.75V9.5ZM4.75 12.5H3.25V11H4.75V12.5ZM7.75 12.5H6.25V11H7.75V12.5ZM10.75 12.5H9.25V11H10.75V12.5Z" fill="#CE2E41"/>
                  </svg>


                  Москва и область: 1-2 дня</li>
                <li>
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.25 2H11.5V0.5H10V2H4V0.5H2.5V2H1.75C0.9175 2 0.2575 2.675 0.2575 3.5L0.25 14C0.25 14.825 0.9175 15.5 1.75 15.5H12.25C13.075 15.5 13.75 14.825 13.75 14V3.5C13.75 2.675 13.075 2 12.25 2ZM12.25 14H1.75V6.5H12.25V14ZM4.75 9.5H3.25V8H4.75V9.5ZM7.75 9.5H6.25V8H7.75V9.5ZM10.75 9.5H9.25V8H10.75V9.5ZM4.75 12.5H3.25V11H4.75V12.5ZM7.75 12.5H6.25V11H7.75V12.5ZM10.75 12.5H9.25V11H10.75V12.5Z" fill="#CE2E41"/>
                  </svg>

                  Другие города: 3-7 дней</li>
              </ul>
            </div>
            <div class="self_delivery">
              <span>Самовывоз</span>
              <ul>
                <li>
                  <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 0.5C3.0975 0.5 0.75 2.8475 0.75 5.75C0.75 9.6875 6 15.5 6 15.5C6 15.5 11.25 9.6875 11.25 5.75C11.25 2.8475 8.9025 0.5 6 0.5ZM6 7.625C4.965 7.625 4.125 6.785 4.125 5.75C4.125 4.715 4.965 3.875 6 3.875C7.035 3.875 7.875 4.715 7.875 5.75C7.875 6.785 7.035 7.625 6 7.625Z" fill="#CE2E41"/>
                  </svg>

                  со склада: Чехов, ул. Первая 1</li>
              </ul>
            </div>
          </div>
          </div>
          <div class="item_payment_info">
            <div class="payment_info br-5 df fd-c">
              <ul>
                <li>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_101_10095)">
                  <path d="M11.7879 11.1653C12.0576 9.90622 13.2267 9.00692 14.5757 9.00692H17.0938V6.30897C17.0938 5.76938 16.7341 5.40967 16.1945 5.40967H0.906138C0.366548 5.40967 0.00683594 5.76938 0.00683594 6.30897V17.1008C0.00683594 17.6404 0.366548 18.0001 0.906138 18.0001H16.1945C16.7341 18.0001 17.0938 17.6404 17.0938 17.1008V14.4028H14.3959C12.7771 14.4028 11.4281 12.874 11.7879 11.1653Z" fill="#CE2E41"/>
                  <path d="M14.3959 10.8052C13.8563 10.8052 13.4966 11.1649 13.4966 11.7045C13.4966 12.2441 13.8563 12.6038 14.3959 12.6038H17.9931V10.8052H14.3959V10.8052Z" fill="#CE2E41"/>
                  <path d="M14.3961 0.912985C14.3961 0.283477 13.8565 -0.0762776 13.227 0.0136822L1.80566 3.61093H14.3961V0.912985Z" fill="#CE2E41"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_101_10095">
                  <rect width="18" height="18" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                  <span>                  <title_pay_info>Любая оплата:</title_pay_info> наличка, расчетный счет, возврат НДС</span>

                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5553 4.63318C16.5338 4.15964 16.5338 3.70762 16.5338 3.25561C16.5338 2.88969 16.254 2.60987 15.888 2.60987C13.1975 2.60987 11.1526 1.83498 9.45216 0.177578C9.19387 -0.0591928 8.80642 -0.0591928 8.54813 0.177578C6.84768 1.83498 4.80283 2.60987 2.11225 2.60987C1.74633 2.60987 1.46651 2.88969 1.46651 3.25561C1.46651 3.70762 1.46651 4.15964 1.44499 4.63318C1.35889 9.15336 1.22974 15.3525 8.7849 17.957L9.00014 18L9.21539 17.957C16.749 15.3525 16.6414 9.17489 16.5553 4.63318ZM8.48355 10.8969C8.3544 11.0045 8.20373 11.0691 8.03153 11.0691H8.01001C7.83781 11.0691 7.66561 10.983 7.55799 10.8538L5.5562 8.63677L6.52481 7.77578L8.09611 9.51928L11.5831 6.20448L12.4656 7.15157L8.48355 10.8969Z" fill="#CE2E41"/>
                  </svg>
<span>                  <title_pay_info>Без посредников</title_pay_info>  Официальная продукция от дилера напрямую с заводов с документами качества</span>

                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 6V2L0 9L7 16V11.9C12 11.9 15.5 13.5 18 17C17 12 14 7 7 6Z" fill="#CE2E41"/>
                  </svg>
<span>                  <title_pay_info>Возврат неиспользуемых остатков</title_pay_info> без лишних вопросов</span>

                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.25 3H13.5V1.5H12V3H6V1.5H4.5V3H3.75C2.9175 3 2.2575 3.675 2.2575 4.5L2.25 15C2.25 15.825 2.9175 16.5 3.75 16.5H14.25C15.075 16.5 15.75 15.825 15.75 15V4.5C15.75 3.675 15.075 3 14.25 3ZM14.25 15H3.75V7.5H14.25V15ZM6.75 10.5H5.25V9H6.75V10.5ZM9.75 10.5H8.25V9H9.75V10.5ZM12.75 10.5H11.25V9H12.75V10.5ZM6.75 13.5H5.25V12H6.75V13.5ZM9.75 13.5H8.25V12H9.75V13.5ZM12.75 13.5H11.25V12H12.75V13.5Z" fill="#CE2E41"/>
                  </svg>
<span>                  <title_pay_info>Покупка в рассрочку</title_pay_info> для частных лиц. <NuxtLink to="">Подробнее</NuxtLink>
</span>

                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>

    </div>



  </div>
</template>

<script lang="ts" setup>

const product = ref({
    id: 4,
    title: 'asdasdas',
    colors: ['зеленый', 'голубой', 'серый', 'белый'],
    image: '/item_color.png'
  })

import { ref } from 'vue';
import {
  SfScrollable,
  SfButton,
  SfIconChevronLeft,
  SfIconChevronRight,
  type SfScrollableOnDragEndData,
} from '@storefront-ui/vue';
import { unrefElement, useIntersectionObserver } from '@vueuse/core';
import { watch, type ComponentPublicInstance } from 'vue';


import { clamp } from '@storefront-ui/shared';
import { useCounter } from '@vueuse/core';
import { SfIconAdd, SfIconRemove, useId } from '@storefront-ui/vue';

const min = ref(1);
const max = ref(999);
const inputId = useId();
const { count, inc, dec, set } = useCounter(1, { min: min.value, max: max.value });

function handleOnChange(event: Event) {
  const currentValue = (event.target as HTMLInputElement)?.value;
  const nextValue = parseFloat(currentValue);
  set(clamp(nextValue, min.value, max.value));
}


const withBase = (filepath: string) => `https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/gallery/${filepath}`;

const images = [
  { imageSrc: withBase('gallery_1.png'), imageThumbSrc: withBase('gallery_1_thumb.png'), alt: 'backpack1' },
  { imageSrc: withBase('gallery_2.png'), imageThumbSrc: withBase('gallery_2_thumb.png'), alt: 'backpack2' },
  { imageSrc: withBase('gallery_3.png'), imageThumbSrc: withBase('gallery_3_thumb.png'), alt: 'backpack3' },
  { imageSrc: withBase('gallery_4.png'), imageThumbSrc: withBase('gallery_4_thumb.png'), alt: 'backpack4' },
  { imageSrc: withBase('gallery_5.png'), imageThumbSrc: withBase('gallery_5_thumb.png'), alt: 'backpack5' },
  { imageSrc: withBase('gallery_6.png'), imageThumbSrc: withBase('gallery_6_thumb.png'), alt: 'backpack6' },
  { imageSrc: withBase('gallery_7.png'), imageThumbSrc: withBase('gallery_7_thumb.png'), alt: 'backpack7' },
  { imageSrc: withBase('gallery_8.png'), imageThumbSrc: withBase('gallery_8_thumb.png'), alt: 'backpack8' },
  { imageSrc: withBase('gallery_9.png'), imageThumbSrc: withBase('gallery_9_thumb.png'), alt: 'backpack9' },
  { imageSrc: withBase('gallery_10.png'), imageThumbSrc: withBase('gallery_10_thumb.png'), alt: 'backpack10' },
  { imageSrc: withBase('gallery_11.png'), imageThumbSrc: withBase('gallery_11_thumb.png'), alt: 'backpack11' },
];
const thumbsRef = ref<HTMLElement>();
const firstThumbRef = ref<HTMLButtonElement>();
const lastThumbRef = ref<HTMLButtonElement>();
const firstThumbVisible = ref(false);
const lastThumbVisible = ref(false);
const activeIndex = ref(0);

watch(
  thumbsRef,
  (thumbsRef) => {
    if (thumbsRef) {
      useIntersectionObserver(
        firstThumbRef,
        ([{ isIntersecting }]) => {
          firstThumbVisible.value = isIntersecting;
        },
        {
          root: unrefElement(thumbsRef),
          rootMargin: '0px',
          threshold: 1,
        },
      );
    }
  },
  { immediate: true },
);

watch(
  thumbsRef,
  (thumbsRef) => {
    if (thumbsRef) {
      useIntersectionObserver(
        lastThumbRef,
        ([{ isIntersecting }]) => {
          lastThumbVisible.value = isIntersecting;
        },
        {
          root: unrefElement(thumbsRef),
          rootMargin: '0px',
          threshold: 1,
        },
      );
    }
  },
  { immediate: true },
);

const onDragged = (event: SfScrollableOnDragEndData) => {
  if (event.swipeRight && activeIndex.value > 0) {
    activeIndex.value -= 1;
  } else if (event.swipeLeft && activeIndex.value < images.length - 1) {
    activeIndex.value += 1;
  }
};

const assignRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (!el) return;
  if (index === images.length - 1) {
    lastThumbRef.value = el as HTMLButtonElement;
  } else if (index === 0) {
    firstThumbRef.value = el as HTMLButtonElement;
  }
};



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
.item_content_layout_page{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-end;
}

.item_content_layout_page > :nth-child(2){
  max-width: calc(100% - 444px)!IMPORTANT;
}
.item_content_layout_page > :nth-child(3){
  max-width: calc(100% - 444px)!IMPORTANT;
  float: right;
  /* position: relative; */
  margin: -290px 0px 0px 0px;
  margin: -275px 0px 40px 0px;
}
.delivery_layout{
  display: flex;
  gap: 20px;

  && span{
    font-size: 18px;
    font-weight: 700;
    margin: 0px 0px 10px 0px;
    display: flex;
  }

  && li{
    display: flex;
    align-items: flex-start;
    margin: 0px 0px 5px 0px;
  }
  
  && svg{
    min-width: 18px;
    min-height: 18px;
    position: relative;
    top: 4px;
  }
}
.item_short_characteristics{
  padding: 0px 0px 20px 0px;
  border-bottom: 1px solid #f0f0f0;
  margin: 0px 0px 20px 0px;

  && span{
    font-size: 18px;
    font-weight: 700;
    margin: 0px 0px 10px 0px;
    display: flex;
  }
  && dl{
    display: flex;
    flex-wrap: wrap;
    font-size: 13px;
  }
  && dt{
    width: 50%;
    margin: 0px 0px 5px 0px;
    font-weight: 500;
  }
  && dd{
    width: 50%;
    margin: 0px 0px 5px 0px;
  }
  && button{
    color: #CE2E41;
    margin: 10px 0px 0px 0px;
    font-size: 13px;
  }
}
.item_color_list{
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 20px 0px 20px 0px;
  flex-direction: column;
  border-bottom: 1px solid #f0f0f0;
  margin: 0px 0px 20px 0px;
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

.item_info_layer{
  display: flex;
  gap: 20px;
  justify-content: space-between;
}
.payment_info{
  background-color: #FFFFFF;
  padding: 20px 20px 20px 20px;
  gap: 10px;
  display: flex;
  && ul{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  && li{
    display: flex;
    align-items: flex-start;
    font-size: 14px;
    color: #777777;
  }
  && svg{
    min-width: 18px;
    min-height: 18px;
    top: 0px;
    position: relative;
  }
  && a{
    color: #CE2E41;
  }
  && title_pay_info{
    display: inline;
    color: #272727;
  }
}
.item_payment_info{
  width: 100%;
  max-width: 312px;
}


.item_pay_action{
  display: flex;
  gap: 10px;
  align-items: stretch;

  && input{
    font-size: 15px;
    max-width: max-content;
  }
  
  && button{
    max-width: max-content;
    padding: 0px 25px 0px 25px;
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


.GiveAll{
  min-width: max-content;
  && button{
    background-color: #CE2E411A;
    width: 100%;
    max-width: 215px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    font-weight: 700;
    font-size: 15px;
    padding: 10px 25px 10px 25px;
    color: #CE2E41;
  }

  && span{
    margin: 0px 0px 10px 0px;
    display: flex;
    width: 100%;
  }
}
.item_info{
  background-color: #FFFFFF;
  padding: 20px 20px 20px 20px;
  border-radius: 5px;
  width: 100%;
}
.item_info_layer_contacts{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  flex: 1;
  gap: 20px;
  padding: 0px 0px 20px 0px;
  border-bottom: 1px solid #F0F0F0;

  && svg{
    margin: 0px 10px 0px 0px;
  }

  && span{
    margin: 0px 0px 15px 0px;
    font-size: 15px;
  }
}
.item_info_layer_contacts_links{
  display: flex;
  align-items: center;
  flex-direction: column;
  
  && number{
    margin: 0px 20px 0px 0px;
  }
}
.item_offer_layout{
  padding: 25px 25px 25px 25px;
  background-color: #FFFFFF;
  border-radius: 5px;
  width: 100%;
  max-height: max-content;
}
.item_layout_content{
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
}



.item_layout{
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin: auto auto 50px auto;
}
.item_galery{
  width: 424px;
  padding: 15px 15px 15px 0px;
  background-color: #FFFFFF;
  border-radius: 5px;
  min-width: 424px;
  max-height: max-content;
}
.item_title{
  margin: 25px auto 20px auto;
  width: 100%;
  width: calc(100% - 40px);
  display: flex;


  && h1{
    display: flex;
    font-size: 32px;
    font-weight: 700;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
  }
}

.item_article{
  font-size: 14px;
  font-weight: 400;
}

.item_nav_info{display: flex;align-items: center;gap: 25px;}
.item_nav_info button{font-size: 14px;font-weight: 400;display: flex;align-items: center;}
.item_nav_info button svg{
  margin: 0px 15px 0px 0px;
}


@media (max-width: 1200px){
  .item_info_layer_contacts{
    flex-direction: column;
  }
  .item_info_layer_contacts_links{
    align-items: flex-start;
  }
  .item_social_number{
    min-width: max-content;
  }
}

@media (max-width: 999px){
.item_pay_action{
  flex-wrap: wrap;
}
.item_pay_action button{
  max-width: 50%!IMPORTANT;
  width: 100%;
}
.item_pay_action button:last-child{
  width: 100%;
  max-width: 100%!IMPORTANT;
}
.item_content_layout_page > :nth-child(3){
  max-width: calc(100%)!IMPORTANT;
  float: right;
  /* position: relative; */
  margin: 0px 0px 0px 0px;
}
.item_offer_layout{
  height: auto;
  max-height: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  
  && .item_price_input{
    width: 100%;
    max-width: 100%;
    padding: 11px 0px 11px 0px;
  }
  && button{
    width: 100%!IMPORTANT;
    max-width: 100%!IMPORTANT;
  }

  && button:last-child{
    width: 100%!IMPORTANT;
    max-width: 100%!IMPORTANT;
  }
}
.item_content_layout_page{
  align-items: stretch;
}
.item_galery{
  min-width: 348px!IMPORTANT;
  min-height: 348px!IMPORTANT;
  width: 348px;
}
.item_content_layout_page[data-v-1a73b267] > :nth-child(2) {
    max-width: calc(100% - 370px) ! IMPORTANT;
}

.item_title{
  && h1{
    flex-direction: column;
    gap: 10px;
  }
}
}


@media (max-width: 679px){
  .item_content_layout_page{
    width: 100%;
    max-width: 100%;
    flex-direction: column;
  }
  .item_galery{
    width: 100%;
    max-width: 100%;
  }
  .item_offer_layout{
    width: 100%!IMPORTANT;
    max-width: 100%!IMPORTANT;
  }
  .item_content_layout_page{
    width: 100%!IMPORTANT;
    max-width: 100%!IMPORTANT;
  }
  .item_content_layout_page[data-v-1a73b267] > :nth-child(2) {
    max-width: 100% ! IMPORTANT;
  }
  .item_info_layer{
    flex-direction: column;
  }
  .item_payment_info{
    width: 100%;
    max-width: 100%;
    margin: 0px 0px 40px 0px;
  }
  .delivery_layout{
    flex-direction: column;
  }
  .item_title.item_title h1{
    font-size: 20px;
  }
  .max-h-\[600px\] {
      max-height: 320px;
  }
}
</style>