<template>
  <div>
    <BreadCrabms style="margin: 0px 0px 20px 0px;"></BreadCrabms>
    <PageTitle :title="'Купи на 5000 р получишь в подарок'"></PageTitle>
    <section class="content sale_section">
      <div class="sale_layer">
        <img src="~/assets/img/sale_image.png" alt="">
        <div class="sale_info">
          <div class="sale_title"><span>Срок акции: <SaleInfo>действует всегда</SaleInfo></span> <span>На что действует: <SaleInfo>на пиломатериалы</SaleInfo></span></div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
              
              <br><br>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
            </p>
          </div>
          <div class="df ai-c">
            <span style="font-weight: 700;">Поделитесь с друзьями </span>
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
            <NuxtLink to="">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="30" rx="5" fill="#3794FF"/>
<path d="M15.9249 21.1251C9.77504 21.1251 6.26726 16.9472 6.12109 9.99512H9.20167C9.30286 15.0977 11.5739 17.2591 13.3727 17.7048V9.99512H16.2735V14.3958C18.0499 14.2064 19.916 12.2011 20.5456 9.99512H23.4464C22.9629 12.7136 20.9392 14.7189 19.5001 15.5434C20.9392 16.2118 23.2441 17.961 24.1211 21.1251H20.928C20.2422 19.0083 18.5334 17.3705 16.2735 17.1477V21.1251H15.9249Z" fill="white"/>
</svg>

            </NuxtLink>
          </div>
        </div>
      </div>
      
      <div class="other_sales">
        <h2>
          Смотрите другие акции
        </h2>
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
    <div v-for="{ id, name, price, img } in products" :key="id" class="index-tab" style="min-width: 50%;">

      <div class="sale_item">
        <img src="~/assets/img/sale_image.png" alt="">
        <div class="sale_info">
          <span>Купи на 5000 р получишь в подарок</span>
          <ul>
            <li><SaleInfo>Срок акции:</SaleInfo> действует всегда</li>
            <li><SaleInfo>На что действует:</SaleInfo> на пиломатериалы</li>
          </ul>
          <NuxtLink to="">Узнать подробнее</NuxtLink>
        </div>
      </div>


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
      </div>
    </section>
    <!-- <IndexInfoProducts></IndexInfoProducts> -->
 

    <!-- <IndexTrends></IndexTrends> -->
    <IndexGiveLead></IndexGiveLead>
    <!-- <IndexLoremIpsum></IndexLoremIpsum> -->
  </div>  
</template>
<script lang="ts" setup>
const company_info = ref(false)
function company_card(){
  company_info.value = !company_info.value
}
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
definePageMeta({
  layout: 'page',
  title: 'Купи на 5000 р получишь в подарок',
  description: 'Акции компании',
  breadcrumbs: [
  {
    title: 'Купи на 5000 р получишь в подарок',
    url: '/sale'
  }
  ],
  breadcrumbsTitle: 'Купи на 5000 р получишь в подарок',
  breadcrumbsDescription: 'Акции компании'
})

const products = Array.from(Array(11), (_, i) => ({
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
.other_sales{
  margin: 125px auto auto auto;
  && h2{
    font-size: 40px;
    font-weight: 700;
  }
}
.sale_section{
  padding: 10px 0px 125px 0px;
}
.sale_info{
  && div{
    padding: 20px 40px 20px 40px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 5px;

    span{
      margin: 0px 20px 0px 0px;
    }
  }

  && SaleInfo{
    color: #777777;
  }

  && span{
    margin: 0px 20px 0px 0px;
  }

  && a{
    margin: 0px 10px 0px 0px;
  }
}

.sale_layer{
  display: flex;
  gap: 20px;
  
  && img{
    width: 100%;
    height: 100%;
    max-width: 312px;
    max-height: 312px;
    min-width: 312px;
    min-height: 312px;
    border-radius: 5px;
  } 

}
.tab_content{
  display: flex;
  gap: 2%;
  width: 100%;
  flex-wrap: wrap;
}
.sale_info{
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.sale_item{
  width: 100%;
  padding: 0px 0px 0px 0px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 0px 0px 20px 0px;
  display: flex;
  align-items: center;
  gap: 40px;
  overflow: hidden;

  && span{
    font-size: 20px;
    font-weight: 700;
  }

  && img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-height: 195px;
    max-width: 195px;
  }

  && SaleInfo{
    color: #777777;
  }

  && a{
    color: #CE2E41;
  }
}
.working_time{
  background-color: #ffffff;
  padding: 40px 40px 40px 40px;
  border-radius: 5px;
  margin: 125px auto 20px auto;
  display: flex;
  align-items: flex-start;

  && svg{
    margin: 0px 15px 0px 0px;
    min-width: 35px;
    min-height: 35px;
  }
  && h2{
    font-size: 25px;
    font-weight: 700;
    margin: 0px 0px 20px 0px;
  }
  && h3{
    font-size: 25px;
    font-weight: 700;
    margin: 0px 0px 10px 0px;
    
  }
}
.company_button{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0px 0px 0px;
}
.company_info{
  padding: 40px 40px 40px 40px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 0px auto 125px auto;
  && li{
    display: flex;
    width: 100%;
  }
  && div{
    display: flex;
    width: 100%;
  }
  && span{
    width: 49%;
    display: flex;
  }
  && h2{
    font-size: 25px;
    font-weight: 700;
    margin: 0px 0px 20px 0px;
  }
  && a button{
    background-color: #CE2E411A;
    width: 100%;
    max-width: 215px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-weight: 700;
    font-size: 15px;
    padding: 25px 25px 25px 25px;
  }
}


.company_info{
  && button{
    color: #CE2E41;
    min-width: max-content;
    width: max-content;

    span{
      width: max-content;
      min-width: max-content;
      margin: 0px 0px 0px 0px;
    }
  }
}

.tabs_layer{
  padding: 20px 0px 125px 0px;
}
.tab_content{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tab_navigate{
  width: 50%;
}
.tab_adres{
  width: 40%;
  && h2{
    font-size: 40px;
    font-weight: 700;
  }

  && span{
    display: flex;
    align-items: center;
    margin: 20px 0px 50px 0px;
  }

  && h3{
    font-size: 25px;
    font-weight: 700;
    margin: 20px 0px 20px 0px;
  }
}

.p-tablist-content{
  overflow: hidden!IMPORTANT;
  overflow-y: auto!IMPORTANT;
  overflow-x: auto!IMPORTANT;
}
@media (max-width: 1200px){
  .index-tab{
    min-width: 50%!IMPORTANT
  }
}


@media (max-width: 979px){
  .sale_info{
    && div{
      padding: 20px 20px 20px 20px;
    }
  }
  .sale_title{
    flex-direction: column;
    gap: 10px;
    display: flex;
  }
  .sale_item{
    gap: 20px;
    font-size: 13px;

    && img{
      width: 100vw;
      height: auto;
      max-width: 23vw;
      object-fit: cover;
    }

    && li{
      flex-direction: column;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      text-align: left;
    }
    && ul{
      display: flex;
      gap: 10px;
      flex-direction: column;
    }
    && div{
      padding: 10px 10px 10px 0px;
    }
  }
  .sale_item.sale_item span{
    font-size: 14px;
  }
    .tabs_layer{
      padding: 50px 0px 50px 0px!IMPORTANT;
      padding: 0px 0px 0px 0px!IMPORTANT;
    }

    .tab_adres{
      width: 50%;
      && h2{
        font-size: 25px;
      }
      
    }
    .p-tab{
      font-size: 14px;
    }
    .tab_adres.tab_adres span{
      margin: 10px 0px 10px 0px;
    }
    .tab_adres.tab_adres h3{
      font-size: 20px;
    }
    .p-tabpanels{
      && p{
        font-size: 14px;
      }
    }
    .working_time{
      margin: 50px auto 0px auto;
      padding: 20px 20px 20px 20px;

      && h3{
        font-size: 20px;
      }

      && svg{
        min-width: 25px;
        min-height: 25px;
      }
    }
    .company_info{
      padding: 20px 20px 20px 20px;
      margin: 20px auto 50px auto;
    }
    .company_info.company_info h2{
      font-size: 20px;
    }
    .company_info.company_info span{
      font-size: 14px;
    }
    .other_sales.other_sales h2{
      font-size: 25px;
    }
    .other_sales{
      margin: 50px auto auto auto;
    }
    .sale_section{
      margin: 10px auto 50px auto;
      padding: 0px 0px 0px 0px;
    }
}


@media (max-width: 679px){
  .sale_section{
    margin: 0 auto;
  }
  .sale_layer{
    flex-direction: column;

    && img{
      width: 100%;
      max-width: 100%;
    }
  }
  .p-tablist-tab-list{
      margin: 0px 0px 10px 0px!IMPORTANT;
    }

  .sale_item{
    flex-direction: column;
    width: 100%;

    && img{
      width: 100%;
      max-width: 100%;
      max-height: auto;
    }

    && div{
      padding: 0px 10px 20px 20px;
    }
  }
  .fuck_layer{
    flex-direction: column;
    margin: 0px 0px 20px 0px;
    gap: 20px;
    padding: 0px 0px 0px 17.5px!IMPORTANT;
  }
  .fuck{
    width: 100%;
    padding: 17.5px 25px 20px 29px;
  }
  .tab_content{
    gap: 4%;
    /* width: 100%;
    flex-direction: column; */
  }
  .tab_adres{
    width: 100%;
  }
  .tab_navigate{
    width: 100%;
  }
  .fuck_svg{
    width: 35px;
    height: 35px;
    left: -17.5px;
    top: 15px;
  }
  .fuck.fuck p{
    font-size: 14px;
  }
  .company_button{
    flex-direction: column;
    gap:20px;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .fuck_layer{
    margin: 0px 0px 40px 0px!IMPORTANT;
  }
}
</style>