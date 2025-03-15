<template>
  <div>
    <form action="" class="profile_settings_info">
      <section>
        <h2>Личные данные</h2>
        <div>
          <label for="">Имя</label>
          <input type="text" value="Наташа">
        </div>
        <div>
          <label for="">Фамилия</label>
          <input type="text" value="Иванова">
        </div>
        <div>
          <label for="">Телефон</label>
          <input type="text" value="8 926 564 43 34">
        </div>
        <div>
          <label for="">Email</label>
          <input type="text" value="mail@mail.ru">
        </div>
        <div>

        </div>
      </section>
      <section>
        <h2>Компания</h2>
        <div>
          <label for="">Название компании</label>
          <input type="text" value="ООО Изобилие">
        </div>
        <div>
          <label for="">КПП</label>
          <input type="text" value="5645645646">
        </div>
        <div>
          <label for="">ИНН компании</label>
          <input type="text" value="5645645646">
        </div>
        <div>
          <label for="">ОГРН</label>
          <input type="text" value="5645645646">
        </div>
        <div style="width: 100%;">
          <label for="">Юр. адрес компании</label>
          <input type="text" class="w100" value="214018, РОССИЯ, СМОЛЕНСКАЯ ОБЛ,  Г СМОЛЕНСК, ПР-КТ ГАГАРИНА, Д 26, пом. 25">
        </div>
        <div>

        </div>
      </section>
      <section>
        <h2>Банковские реквизиты</h2>
        <div>
          <label for="">Расчетный счет</label>
          <input type="text" value="40702810810000369733">
        </div>
        <div>
          <label for="">Банк</label>
          <input type="text" value="ТБанк">
        </div>
        <div>
          <label for="">ИНН банка</label>
          <input type="text" value="5645645646">
        </div>
        <div>
          <label for="">Бик банка</label>
          <input type="text" value="40702810810000369733">
        </div>
        <div style="width: 100%;">
          <label for="">Корреспондентский счет банка</label>
          <input type="text" class="w100" value="40702810810000369733">
        </div>
        <div>

        </div>
      </section>

      <div class="profile_form_button">
        <button class="profile_exit_button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z" fill="#CE2E41"/>
            </svg>

            Выйти
          </button>
          <button class="button">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 18.001H3.75L14.81 6.94103L11.06 3.19104L0 14.251V18.001ZM2 15.081L11.06 6.02104L11.98 6.94103L2.92 16.001H2V15.081Z" fill="white"/>
              <path d="M15.37 0.291035C14.98 -0.0989648 14.35 -0.0989648 13.96 0.291035L12.13 2.12104L15.88 5.87104L17.71 4.04104C18.1 3.65104 18.1 3.02104 17.71 2.63104L15.37 0.291035Z" fill="white"/>
            </svg>

            Сменить пароль
          </button>
      </div>


    </form>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'profile',
})

const props = defineProps({
  profile_title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.profile_settings_info{
  display: flex;
  flex-wrap: wrap;
  gap: 4%;
  width: 100%;

  && div{
    width: 47.5%;
    display: flex;
    margin: 2% auto auto auto;
    flex-direction: column;
    gap: 10px;
  }

  && input{
    width: 100%;
    border: 1px solid #F0F0F0;
    border-radius: 5px;
    padding: 20px 20px;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
  
  && button{
    display: flex;
    align-items: center;
    width: max-content;
    padding: 25px 25px 25px 25px;
    margin: 40px 0px 0px 0px;
  }

  && section{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 4%;
    width: 100%;

    h2{
      width: 100%;
      font-weight: 700;
      font-size: 29px;
      margin: 0px 0px 20px 0px;
    }
  }

  && section{
    margin: 0px 0px 40px 0px;
  }

  && section:last-child{
    margin: 0px 0px 0px 0px!IMPORTANT;
  }
}

.profile_exit_button{
  background-color: #FBEBEC;
  color: #272727;
  font-size: 15px;
  font-weight: 500;
  height: 50px;
  display: flex;
  width: 100%;
  height: 50px;
  display: flex;
  width: 100%;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
}

.profile_settings_info div:last-child{
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
}

@media (max-width: 979px){
  .profile_settings_info{
    gap: 2%; 

    && div{
      width: 100%;
    }
  }
  h2{
    font-size: 20px!IMPORTANT;
    margin: 0px 0px 20px 0px!IMPORTANT;
  }

  && input{
    font-size: 15px!IMPORTANT;
    padding: 15px 15px 15px 15px!IMPORTANT;
  }
  && label{
    font-size: 15px!IMPORTANT;
  }
  button{
    margin: 0px!IMPORTANT;
  }
}
</style>