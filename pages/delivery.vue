<template>
  <div>
    <BreadCrabms style="margin: 0px 0px 20px 0px;"></BreadCrabms>
    <PageTitle :title="'Доставка товаров'"></PageTitle>
    <section class="content delivery_layer">
      <IndexDelivery></IndexDelivery>
    </section>
    <section class="content delivery_text br-5">
      <h2>Условия доставки</h2>
      <p>
        Доставка осуществляется по дорогам с твёрдым покрытием.
        Разгрузка производится покупателем самостоятельно.
        Водитель предварительно связывается с покупателем перед началом доставки.
        Доставка производится после подтверждения покупателем принятия заказа.
        В день доставки контактный телефон покупателя должен быть доступен.
        При отсутствии покупателя или его представителя водитель ожидает 20 минут, затем возвращает товар на склад.
      </p>
      <span>Правила разгрузки:</span>
      <p>
        Разгрузка осуществляется покупателем самостоятельно.
        Время на разгрузку зависит от веса заказа.
        За превышение времени на разгрузку заказчик оплачивает простой.
        При получении заказа покупатель проверяет товар по количеству и внешним дефектам.
        После подписания документов претензии по количеству и внешним дефектам не принимаются.
      </p>
      <span>Подтверждение заказа:</span>
      <p>Обязательства исполнителя по доставке считаются выполненными после подписания документов.
        Покупатель обязан согласовать с менеджером новый срок доставки при переносе даты.</p>
        <span>Сроки</span>
        <ul>
          <li>
            <div>Москва</div>
            <div>
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.25 3.5H13.5V2H12V3.5H6V2H4.5V3.5H3.75C2.9175 3.5 2.2575 4.175 2.2575 5L2.25 15.5C2.25 16.325 2.9175 17 3.75 17H14.25C15.075 17 15.75 16.325 15.75 15.5V5C15.75 4.175 15.075 3.5 14.25 3.5ZM14.25 15.5H3.75V8H14.25V15.5ZM6.75 11H5.25V9.5H6.75V11ZM9.75 11H8.25V9.5H9.75V11ZM12.75 11H11.25V9.5H12.75V11ZM6.75 14H5.25V12.5H6.75V14ZM9.75 14H8.25V12.5H9.75V14ZM12.75 14H11.25V12.5H12.75V14Z" fill="#CE2E41"/>
              </svg>

              до 2 дней</div>
          </li>
          <li>
            <div>Московская область</div>
            <div>
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.25 1.5H11.5V0H10V1.5H4V0H2.5V1.5H1.75C0.9175 1.5 0.2575 2.175 0.2575 3L0.25 13.5C0.25 14.325 0.9175 15 1.75 15H12.25C13.075 15 13.75 14.325 13.75 13.5V3C13.75 2.175 13.075 1.5 12.25 1.5ZM12.25 13.5H1.75V6H12.25V13.5ZM4.75 9H3.25V7.5H4.75V9ZM7.75 9H6.25V7.5H7.75V9ZM10.75 9H9.25V7.5H10.75V9ZM4.75 12H3.25V10.5H4.75V12ZM7.75 12H6.25V10.5H7.75V12ZM10.75 12H9.25V10.5H10.75V12Z" fill="#CE2E41"/>
              </svg>

              до 2 дней</div>
          </li>
          <li>
            <div>Тульская область</div>
            <div>
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.25 3.5H13.5V2H12V3.5H6V2H4.5V3.5H3.75C2.9175 3.5 2.2575 4.175 2.2575 5L2.25 15.5C2.25 16.325 2.9175 17 3.75 17H14.25C15.075 17 15.75 16.325 15.75 15.5V5C15.75 4.175 15.075 3.5 14.25 3.5ZM14.25 15.5H3.75V8H14.25V15.5ZM6.75 11H5.25V9.5H6.75V11ZM9.75 11H8.25V9.5H9.75V11ZM12.75 11H11.25V9.5H12.75V11ZM6.75 14H5.25V12.5H6.75V14ZM9.75 14H8.25V12.5H9.75V14ZM12.75 14H11.25V12.5H12.75V14Z" fill="#CE2E41"/>
              </svg>

              до 2 дней</div>
          </li>
          <li>
            <div>Рязанская область</div>
            <div>
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.25 1.5H11.5V0H10V1.5H4V0H2.5V1.5H1.75C0.9175 1.5 0.2575 2.175 0.2575 3L0.25 13.5C0.25 14.325 0.9175 15 1.75 15H12.25C13.075 15 13.75 14.325 13.75 13.5V3C13.75 2.175 13.075 1.5 12.25 1.5ZM12.25 13.5H1.75V6H12.25V13.5ZM4.75 9H3.25V7.5H4.75V9ZM7.75 9H6.25V7.5H7.75V9ZM10.75 9H9.25V7.5H10.75V9ZM4.75 12H3.25V10.5H4.75V12ZM7.75 12H6.25V10.5H7.75V12ZM10.75 12H9.25V10.5H10.75V12Z" fill="#CE2E41"/>
              </svg>


              до 2 дней</div>
          </li>
          <li>
            <div>Калужская область</div>
            <div>
              
              
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.25 3.5H13.5V2H12V3.5H6V2H4.5V3.5H3.75C2.9175 3.5 2.2575 4.175 2.2575 5L2.25 15.5C2.25 16.325 2.9175 17 3.75 17H14.25C15.075 17 15.75 16.325 15.75 15.5V5C15.75 4.175 15.075 3.5 14.25 3.5ZM14.25 15.5H3.75V8H14.25V15.5ZM6.75 11H5.25V9.5H6.75V11ZM9.75 11H8.25V9.5H9.75V11ZM12.75 11H11.25V9.5H12.75V11ZM6.75 14H5.25V12.5H6.75V14ZM9.75 14H8.25V12.5H9.75V14ZM12.75 14H11.25V12.5H12.75V14Z" fill="#CE2E41"/>
              </svg>

              до 2 дней</div>
          </li>
          <li>
            <div>Тверская область</div>
            <div>
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.25 1.5H11.5V0H10V1.5H4V0H2.5V1.5H1.75C0.9175 1.5 0.2575 2.175 0.2575 3L0.25 13.5C0.25 14.325 0.9175 15 1.75 15H12.25C13.075 15 13.75 14.325 13.75 13.5V3C13.75 2.175 13.075 1.5 12.25 1.5ZM12.25 13.5H1.75V6H12.25V13.5ZM4.75 9H3.25V7.5H4.75V9ZM7.75 9H6.25V7.5H7.75V9ZM10.75 9H9.25V7.5H10.75V9ZM4.75 12H3.25V10.5H4.75V12ZM7.75 12H6.25V10.5H7.75V12ZM10.75 12H9.25V10.5H10.75V12Z" fill="#CE2E41"/>
              </svg>


              до 2 дней</div>
          </li>
          <li>
            <div>Любые другие города</div>
            <div>
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.25 3.5H13.5V2H12V3.5H6V2H4.5V3.5H3.75C2.9175 3.5 2.2575 4.175 2.2575 5L2.25 15.5C2.25 16.325 2.9175 17 3.75 17H14.25C15.075 17 15.75 16.325 15.75 15.5V5C15.75 4.175 15.075 3.5 14.25 3.5ZM14.25 15.5H3.75V8H14.25V15.5ZM6.75 11H5.25V9.5H6.75V11ZM9.75 11H8.25V9.5H9.75V11ZM12.75 11H11.25V9.5H12.75V11ZM6.75 14H5.25V12.5H6.75V14ZM9.75 14H8.25V12.5H9.75V14ZM12.75 14H11.25V12.5H12.75V14Z" fill="#CE2E41"/>
              </svg>

              по согласованию</div>
          </li>
        </ul>
        <span>Срочная доставка</span>
        <p class="df">
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0.5C3.584 0.5 0 4.084 0 8.5C0 12.916 3.584 16.5 8 16.5C12.416 16.5 16 12.916 16 8.5C16 4.084 12.416 0.5 8 0.5ZM6.4 12.5L2.4 8.5L3.528 7.372L6.4 10.236L12.472 4.164L13.6 5.3L6.4 12.5Z" fill="#CE2E41"/>
            <path d="M6.4 12.5L2.4 8.5L3.528 7.372L6.4 10.236L12.472 4.164L13.6 5.3L6.4 12.5Z" fill="white"/>
          </svg>

          Возможна по согласованию</p>
    </section>
    <!-- <IndexInfoProducts></IndexInfoProducts> -->
 

    <!-- <IndexTrends></IndexTrends> -->
    <!-- <IndexGiveLead></IndexGiveLead> -->
    <!-- <IndexLoremIpsum></IndexLoremIpsum> -->
  </div>  
</template>
<script lang="ts" setup>
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
definePageMeta({
  layout: 'page',
  title: 'Доставка',
  description: 'Доставка',
  breadcrumbs: [
  {
    title: 'Доставка',
    url: '/pay'
  }
  ],
  breadcrumbsTitle: 'Доставка',
  breadcrumbsDescription: 'Доставка'
})
</script>
<style scoped>

.delivery_text{
  padding: 40px 40px 40px 40px;
  background-color: #FFFFFF;
  margin: auto auto 40px auto;
  
  && h2{
    font-size: 30px;
    font-weight: 700;
  }
  && p{
    margin: 20px 0px 0px 0px;
  }
  
  && span{
    font-size: 20px;
    font-weight: 700;
    margin: 20px 0px 0px 0px;
    display: flex;
  }
  && ul{
    margin: 20px 0px 0px 0px;
    div{
      width: 50%;
      width: 100%;
      max-width: 250px;
    }
  }
}

.ul-text{
  width: 100%;
  border-radius: 5px;
  background-color: #FFFFFF;
  padding: 40px 40px 40px 40px;

  && span{
    font-weight: 700;
    margin: 0px 0px 10px 0px;
    display: flex;
  }

  && p{
    margin: 0px 0px 10px 0px;
  }
}

.pay_ul_layer{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.ul_info{
  display: flex;
  align-items: flex-start;
  max-width: 404px;
  width: 100%;
  border-radius: 5px;
  padding: 20px 20px 20px 40px;
  background-color: #FFFFFF;
  position: relative;
  max-height: max-content;

  && svg{
    position: absolute;
    left: -25px;
  }
  
  && span{
    font-size: 20px;
    font-weight: 700;
  }
}

.ul{
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  gap: 4%;
  justify-content: flex-end;
}

.ul_card{
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: #FFFFFF;
  padding: 20px 20px 20px 20px;
  margin: 0px 0px 4% 0px;
  width: 48%;

  && svg{
    margin: 0px 15px 0px 0px;
    min-width: 50px;
    min-height: 50px;
  }
}


.ul_ul_ul{
  gap: 0;
  width: 40%;
}
.pay_section{
  margin: auto auto 125px auto;
}

.phusic_info{
  width: 100%;
  padding: 40px 40px 40px 40px;
  background-color: #FFFFFF;
  border-radius: 5px;
  display: flex;

  && div{
    display: flex;
    align-items: center
  }

  && span{
    font-size: 25px;
    font-weight: 700;
    margin: 0px 0px 10px 0px;
  }

  && a{
    margin: 0px 5px 0px 0px;
  }
}

.phusic_info div:first-child{
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  
}
.phusic_info div:last-child{
  flex-direction: row;
  width: 50%;
}
.physic_number{
  display: flex;
  align-items: center;
  flex-direction: row!IMPORTANT;
  margin: 0px 20px 0px 0px;
  font-size: 20px;
  max-width: max-content;
  line-height: 0.9;
  
  && svg{
    margin: 0px 10px 0px 0px;
  }
}
.pay_physics_layer{
  display: flex;
  justify-content: space-between;
  gap: 2%;
  flex-wrap: wrap;
}

.physic{
  display: flex;
  gap: 2%;
  flex-wrap: wrap;
  width: 49%;
  justify-content: flex-end;

  && .fuck{
    background-color: #FFFFFF;
    height: max-content;
    padding: 20px 20px 20px 29px;
    gap: 10px;

    span{
      font-size: 20px;
      margin: 0px 0px 0px 0px;
    }

    p{
      font-size: 15px;
    }
    
    svg{
      top: 15px;
    }
  }
}

.pay_physics_layer .physic:first-child{
  justify-content: flex-start
}
.physic_card{
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 20px 20px 20px 20px;
  width: 49%;
  margin: 0% 0% 2% 0%;
  display: flex;
  align-items: center;
  gap: 10px;

  && svg{
    min-width: 50px;
    min-height: 50px;
  }
}


.contact_section{
  background-color: #272727;
  border-radius: 5px;
  color: #FFFFFF;
  margin: auto auto 125px auto;

  && h2{
    font-size: 35px;
    font-weight: 700;
  }

  && p{
    font-size: 20px;
  }

  && div{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
  }

  && form{
    padding: 40px 40px 40px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    textarea{
      padding: 20px 20px 20px 20px;
      border-radius: 5px;
      color: #272727;
    }
    
    input{
      padding: 15px 20px 15px 20px;
      border-radius: 5px;
      color: #272727;

    }
    
    label{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: #959595;

      input{
        margin: 0px 10px 0px 0px;
      }
    }
  }
}

.faq_section{
  padding: 0px 0px 125px 0px;
}
.p-accordioncontent-content{
  border: none;
  padding: 0;
  outline: none;
  border-style: none;
  border-color: #FFFFFF!IMPORTANT;
}
.p-tabpanels{
  border: none!IMPORTANT;
  outline: none!IMPORTANT;
  background-color: inherit!IMPORTANT;
  background: inherit!IMPORTANT;
  border-radius: 5px;
  overflow: hidden;
  border-style: none;
  border-color: #FFFFFF!IMPORTANT;
}
.p-tabpanel{
  border: none;
  border-style: none;
  border-color: #FFFFFF!IMPORTANT;
}
.p-accordionheader{
  padding: 20px;
  border: none;
  border-style: none;
  border-color: #FFFFFF!IMPORTANT;
}
.p-accordioncontent-content{
  border: none;
  padding: 20px;
  border-style: none;
  border-color: #FFFFFF!IMPORTANT;

  && p{
    border: none!IMPORTANT;
    padding: 20px;
    border-style: none;
    border-color: #FFFFFF;
  }
}
.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader{
  color: #FFFFFF;
  background-color: #272727;
  border: none;
}
.garantiya_contacts{
  background-color: #272727;
  padding: 40px 40px 40px 40px;
  border-radius: 5px;
  position: relative;
  margin: 0 auto 150px auto;
  max-width: 1320px;
  overflow: hidden;
  width: calc(100% - 29px);
  color: #FFFFFF;
  
  && span{
    display: flex;
    align-items: center;

    svg{
      margin: 0px 10px 0px 0px;
    }
  }

  && p{
    margin: 20px 0px 20px 0px;
  }

  && h2{
    font-size: 40px;
    color: #FFFFFF;
    font-weight: 700;
  }

  && div{
    background-color: #CE2E41;
    padding: 20px 20px 20px 20px;
    color: #FFFFFF;
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px 0px 20px 0px;
    width: max-content;
    
    span{
      display: flex;
      align-items: center;
      margin: 0px 10px 0px 10px;
      
      svg{
        margin: 0px 10px 0px 0px;
      }
    }

    p{
      display: flex;
      align-items: center;
      margin: 0px 0px 0px 0px;
    }
  }

}

.garantiya_contacts_fon{
  position: absolute;
  right: 0%;
  bottom: 0;
  top: 25%;
}
.garantiya_info{
  padding: 40px 40px 40px 40px;
  background-color: #FFFFFF;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin: 0px auto 125px auto;

  && span{
    font-size: 25px;
    font-weight: 700;
    display: flex;
    width: 100%;
  }
  
  && p{
    display: flex;
    width: 100%;
    margin: 0px 0px 20px 0px;
  }

  && div{
    display: flex;
    align-items: center;
    margin: 0px 0px 20px 0px;
    
    svg{
      margin: 0px 10px 0px 0px;
    }
  }
  && ul{
    margin: 0px 0px 20px 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

.garantiya_info.garantiya_info span{
  margin: 0px 0px 20px 0px;
}


.p-tablist-tab-list{
  margin: 0px 0px 0px 0px!IMPORTANT;
}

.fuck_layer{
 padding: 0px 0px 0px 25px;
 margin: 0px 0px 125px 0px!IMPORTANT;
 margin: 0 auto 50px auto!IMPORTANT;
 display: flex;
 gap: 50px;
 max-width: 1320px;
}
.fuck{
  width: 50%;
  padding: 35px 20px 35px 45px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;

  && span{
    font-size: 25px;
    font-weight: 700;
  }

  && p{
    font-size: 17px;
  }
}
.fuck_svg{
  position: absolute;
  left: -25px;
  top: 25px;
}
.fuck_phone{
  display: flex;
  padding: 0px 0px 0px 0px;
  gap: 10px;

  && span{
    font-size: 20px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap:10px;
    margin: 0px 10px 0px 0px;
  }
}

















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
  background-color: #FFFFFF;
  padding: 40px 40px 40px 40px;
  border-radius: 5px;
  width: 100%;

  && h2{
    font-size: 25px;
    font-weight: 700;
    margin: 0px 0px 0px 0px;
  }

  && p{
    margin: 20px 0px 0px 0px;
  }
}
.p-tablist-tab-list{
  flex-direction: column!IMPORTANT;
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

.tab_list_custom_page{
  display: flex;
  flex-direction: column;
  
}
.p-tablist-tab-list{
  flex-direction: column!IMPORTANT;
}
.tab_list_custom_page .p-tablist-tab-list{
  flex-direction: column!IMPORTANT;
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
  display: flex;
  /* justify-content: space-between;
  flex-direction: row; */
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

  .ul_card.ul_card svg{
    min-width: 25px;
    min-height: 25px;
  }
  .ul_info.ul_info span{
    font-size: 18px;
  }

  .physic_card.physic_card svg{
    min-width: 27px;
    min-height: 27px;
  }
  .fuck{
    width: 90%;
  }
  .phusic_info.phusic_info span{
    font-size: 20px;
  }
  .phusic_info{
    padding: 20px 20px 20px 20px;
  }
  
  .faq_section{
    padding: 0px 0px 50px 0px;
  }
  .contact_section{
    margin: auto auto 50px auto;
  }
  .contact_section.contact_section form{
    align-items: flex-start;
  }
  .contact_section.contact_section h2{
    font-size: 25px;
  }
  .contact_section.contact_section p{
    font-size: 15px;
  }
  .garantiya_contacts{
    padding: 20px 20px 20px 20px;
    margin: 0 auto 50px auto;
  }
  .garantiya_contacts.garantiya_contacts h2{
    font-size: 25px;
  }
  .garantiya_contacts.garantiya_contacts div{
    font-size: 15px;
  } 
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

    .fuck_layer{
      padding: 0px 20px 0px 45px;
    }

    .fuck{
      && span{
        font-size: 20px;
      }
    }
    .garantiya_info{
      margin: auto auto 50px auto;
    }
    .content.tabs_layer{
      margin: auto auto 50px auto;
    }


    .physic.physic .fuck span{
      font-size: 18px;
    }
    .ul-text{
      padding: 20px 20px 20px 20px;
    }
}


@media (max-width: 679px){
  .pay_physics_layer{
    flex-direction: column;
  }
  .pay_physics_layer .physic{
    width: 100%;
    flex-direction: column;
  }
  .physic_card{
    width: 100%;
    padding: 10px 10px 10px 10px;
    padding: 20px 20px 20px 20px;
  }
  .physic_card.physic_card svg{
    min-width: 25px;
    min-height: 25px;
    height: 25px;
    width: 25px;
  }
  .faq_section{
    padding: 0px 0px 40px 0px;
  }
  .contact_section{
    margin: auto auto 40px auto;
  }
  .contact_section.contact_section form{
    flex-direction: column;
    gap: 20px;
    padding: 20px 20px 20px 20px;
    div{
      width: 100%;
    }
  }
  .garantiya_contacts.garantiya_contacts div{
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    p{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      svg{
        margin: 0px 10px 0px 0px;
      }
    }
    span{
      width: 100%;
      padding: 0px 0px 0px 0px;
      margin: 10px 0px 0px 0px;
    }
  }
  .garantiya_contacts.garantiya_contacts h2{
    font-size: 20px;
  }
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
 padding: 0px 20px 0px 35px;
 margin: 0px 0px 125px 0px!IMPORTANT;
 margin: 0;
 display: flex;
 gap: 20px;
 flex-direction: column;
}
.fuck{
  width: 100%;
  padding: 20px 20px 20px 40px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;
  margin: 0px 0px 2% 0px;

  && span{
    font-size: 20px;
    font-weight: 700;
  }

  && p{
    font-size: 17px;
  }
}
.fuck_svg{
  position: absolute;
  left: -25px;
  top: 20px;
}
.fuck_phone{
  display: flex;
  padding: 0px 0px 0px 0px;
  gap: 10px;

  && span{
    font-size: 20px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap:10px;
    margin: 0px 10px 0px 0px;
  }
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
  .pay_physics_layer .physic:nth-last-child(2){
    padding: 0px 0px 0px 20px!IMPORTANT;
  }
  .phusic_info{
    flex-direction: column;
    gap: 10px;
  }
  .phusic_info div{
    width: 100%;
    max-width: 100%;
  }
  .phusic_info div:first-child{
    width: 100%;
  }
  .phusic_info div:last-child{
    width: 100%;
  }
  .p-tablist-tab-list{
    margin: 0px 0px 0px 0px!IMPORTANT;
  }
  .pay_ul_layer{
    flex-direction: column;
  }
  .ul{
    width: 100%;
    flex-direction: column;
  }
  .ul_card{
    width: 100%;
  }
  .ul_card.ul_card svg{
    width: 25px;
    height: 25px;
  }
  .ul_ul_ul{
    padding: 0px 0px 0px 25px;
    margin: 0px 0px 4% 0px;
  }
  .ul_info{
    padding: 20px 20px 20px 29px;
  }
}
</style>