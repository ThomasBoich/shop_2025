<template>
  <section class="bg-white" style="overflow: hidden;">
    <div class="content give_lead">
      <img src="~/assets/img/give_lead.png" alt="" class="give_lead_img">
      <div class="give_lead_info p-125-0">
        <h2>
      Получите профессиональный подбор <br> с расчетом количества стройматериалов
    </h2>
    <p>
      Это вам не даст потерять деньги и время в случае нехватки <br> или приобретения лишних материалов
    </p>
    <ul class="ul_lead">
      <li>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 0.00488281C4.032 0.00488281 0 4.03688 0 9.00488C0 13.9729 4.032 18.0049 9 18.0049C13.968 18.0049 18 13.9729 18 9.00488C18 4.03688 13.968 0.00488281 9 0.00488281ZM7.2 13.5049L2.7 9.00488L3.969 7.73588L7.2 10.9579L14.031 4.12688L15.3 5.40488L7.2 13.5049Z" fill="#CE2E41"/>
        </svg>

        Расскажем, как не попасть на уловки нечестных компаний, <br> которые могут сорвать сроки ремонта или строительства
      </li>
      <li>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 0.00488281C4.032 0.00488281 0 4.03688 0 9.00488C0 13.9729 4.032 18.0049 9 18.0049C13.968 18.0049 18 13.9729 18 9.00488C18 4.03688 13.968 0.00488281 9 0.00488281ZM7.2 13.5049L2.7 9.00488L3.969 7.73588L7.2 10.9579L14.031 4.12688L15.3 5.40488L7.2 13.5049Z" fill="#CE2E41"/>
        </svg>

        Подберем подходящие материалы и самое главное нужного количества
      </li>
      <li>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 0.00488281C4.032 0.00488281 0 4.03688 0 9.00488C0 13.9729 4.032 18.0049 9 18.0049C13.968 18.0049 18 13.9729 18 9.00488C18 4.03688 13.968 0.00488281 9 0.00488281ZM7.2 13.5049L2.7 9.00488L3.969 7.73588L7.2 10.9579L14.031 4.12688L15.3 5.40488L7.2 13.5049Z" fill="#CE2E41"/>
        </svg>
        Узнаем то, что вам нужно, чтобы вы не переплачивали
      </li>
    </ul>
    <form action="">
      <input type="text" placeholder="Ваш телефон *">
      <button type="submit" class="button">
        Получить подбор

        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_101_3601)">
        <path d="M3.5 10.5949L8.08 6.00488L3.5 1.41488L4.91 0.00488281L10.91 6.00488L4.91 12.0049L3.5 10.5949Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_101_3601">
        <rect width="12" height="12" fill="white" transform="translate(0.5 0.00488281)"/>
        </clipPath>
        </defs>
        </svg>
      </button>
      <label for="">
        <input type="checkbox" checked>
        <span>
          Нажимая на кнопку, вы соглашаетесь с <NuxtLink to=""> Пользовательским соглашением</NuxtLink>
        </span>
        
      </label>
      
      <ul>
        <li>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.99 0.00488281C4.47 0.00488281 0 4.48488 0 10.0049C0 15.5249 4.47 20.0049 9.99 20.0049C15.52 20.0049 20 15.5249 20 10.0049C20 4.48488 15.52 0.00488281 9.99 0.00488281ZM13.29 14.7149L9 10.4149V5.00488H11V9.59488L14.71 13.3049L13.29 14.7149Z" fill="#CE2E41"/>
          <path d="M13.29 14.7149L9 10.4149V5.00488H11V9.59488L14.71 13.3049L13.29 14.7149Z" fill="white"/>
          </svg>

          Свяжемся в течении 15 минут
        </li>
      </ul>
    </form>
      </div>

    
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style scoped>
label{
  display: flex;
  align-items: center;
  width: max-content;
  justify-content: flex-start;
  margin: 20px 0px 20px 0px;

  input{
    margin: 0px 10px 0px 0px!IMPORTANT;
    height: 20px!IMPORTANT;
    width: 20px!IMPORTANT;
  }

  span{
    display: inline;
    width: 100%;
    font-size: 12px;
    color: #959595;
  }
}

.give_lead_info{
  width: 60%;

  && form{
    max-width: 456px;
    z-index: 4;
  }
  
  && input{
    border: 1px solid #959595 ! IMPORTANT;
    border-radius: 5px;
    padding: 10px 10px 10px 10px;
    margin: 0px 0px 10px 0px;
    width: 100%;
  }
}

.give_lead{
  position: relative;

  & img{
    object-fit: cover;
    height: calc(100% - 125px);

    -o-object-fit: cover;
    object-fit: cover;
    height: calc(100% - 126px);
    height: auto;
    width: 60vw;
    max-width: 500px;
    z-index: 2;
  }
}

.give_lead_img{
  position: absolute;
  right: 0;
  bottom: 0;
  object-fit: cover;
  width: auto;
}

h2{
  font-size: 40px;
  font-weight: 700;
  margin: 0px 0px 20px 0px;
}
p{
  font-size: 20px;
  margin: 0px 0px 20px 0px;
}

.ul_lead{
  line-height: 35px;
  margin: 0px 0px 20px 0px;
  z-index: 4;


  li{
    align-items: flex-start;
    line-height: 20px;
    margin: 20px 0px 0px 0px;
  }

  && svg{
    min-width: 18px;
    min-height: 18px;
  }

  b{
    display: inline;
    height: max-content;
    width: max-content;
    padding: 0;
    margin: 0;
  }
}

@media (max-width: 979px){
  .give_lead{
  position: relative;

  & img{
    object-fit: cover;
    height: calc(100% - 125px);

    -o-object-fit: cover;
    object-fit: cover;
    height: calc(100% - 126px);
    height: auto;
    width: 60vw;
    max-width: 350px;
    z-index: 2;
    right: -15%;
  }
}

  h2{
    font-size: 25px;
  }
  .give_lead_info{
    width: 70%;
  }

  p{
    font-size: 16px;
  }
  .ul_lead li{
    font-size: 14px;
  }

  .give_lead_info{
    padding: 50px 0px 50px 0px;
  }
}

@media (max-width: 679px){
  .give_lead_info{
    max-width: 100%;
    width: 100%;
  }
  .give_lead img{
    display: none;
  }
  label{
    width: 100%;
  }
}
</style>