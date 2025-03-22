<template>
  <!-- <div> -->
    <header>
      <button @click="toogle_auth_form"style="z-index: 9;position: fixed;right: 25px;top: 15px;">X</button>
      <nav>
        <div class="auth_form" :class="{'active': auth_form}">
          <div class="auth_form_layer">

            <span class="auth_cl" @click="toogle_auth_form">X</span>
            <h1>Вход или регистрация</h1>

            <div class="auth_btns">
              <button @click="toogle_form_fl" :class="{'active': form_fl}">Физическое лицо</button>
              <button @click="toogle_form_ul" :class="{'active': form_ul}">Юридическое лицо</button>
            </div>

            <form action="" class="form_ul" v-if="form_ul">
              <p>Введите данные для входа</p>
              <input type="text" placeholder="Email *">
              <input type="password" name="" id="" placeholder="Пароль *">
              <button class="button">Войти
                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10.59L7.58 6L3 1.41L4.41 0L10.41 6L4.41 12L3 10.59Z" fill="white"/>
                </svg>
              </button>
              <label for="">
                <input type="checkbox" checked>
                Нажимая на кнопку, вы соглашаетесь с Пользовательским соглашением
              </label>
              <NuxtLink to="">Напомнить пароль</NuxtLink>
              <NuxtLink to="" @click="toogle_form_regu">Нет аккаунта? Зарегистрироваться</NuxtLink>
              <form action="">

              </form>

              
            </form>
            <div class="form_ul_regi" v-if="form_reg">
                <form action="">
                  <input type="text" placeholder="Телефон *">
                  <input type="text" placeholder="Email *">
                  <input type="text" placeholder="Название компании">
                  <input type="text" placeholder="ИНН компании">
                  <input type="password" name="" id="" placeholder="Пароль *">
                  <input type="password" name="" id="" placeholder="Повторите пароль *">
                  <button class="button">Зарегистрироваться
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 10.59L8.08 6L3.5 1.41L4.91 0L10.91 6L4.91 12L3.5 10.59Z" fill="white"/>
                    </svg>
                  </button>
                  <label for="">
                    <input type="checkbox" checked>
                    Нажимая на кнопку, вы соглашаетесь с Пользовательским соглашением
                  </label>
                  <p>
              Будет создан личный кабинет. Сможете следить
              за историей заказов и получать бонусы за покупки
            </p>
                </form>
              </div>
          <form action="" class="form_fl" v-if="form_fl">
            <!-- <span class="auth_cl">X</span> -->
            <p>
              Авторизируйтесь или войдите через номер телефона — 
              мы отправим код подтверждения в смс
            </p>
            <input type="text" placeholder="Ваш телефон *">
            <button class="button">Войти 
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10.59L7.58 6L3 1.41L4.41 0L10.41 6L4.41 12L3 10.59Z" fill="white"/>
              </svg>
            </button>
            <label for="">
              <input type="checkbox" checked>
              Нажимая на кнопку, вы соглашаетесь с Пользовательским соглашением
            </label>
            <p>
              Будет создан личный кабинет. Сможете следить
              за историей заказов и получать бонусы за покупки
            </p>
            <hr>
            <div class="auth_social">
              <p>Или войдите через сервисы</p>
              <span>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="50" height="50" rx="5" fill="#FC3F1D"/>
                <path d="M28.6508 37H32.7847V13H26.771C20.7243 13 17.5463 16.1426 17.5463 20.7694C17.5463 24.4648 19.2887 26.64 22.3984 28.8851L17 37H21.4754L27.4892 27.9176L25.4045 26.5026C22.8764 24.775 21.6465 23.4291 21.6465 20.5283C21.6465 17.9723 23.4235 16.2463 26.8055 16.2463H28.6508V37Z" fill="white"/>
                </svg>

                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="50" height="50" rx="5" fill="#0077FF"/>
                <path d="M26.6165 32.4583C18.0749 32.4583 13.203 26.6557 13 17H17.2786C17.4191 24.087 20.5733 27.0889 23.0717 27.7079V17H27.1006V23.1121C29.5678 22.8491 32.1596 20.0638 33.0341 17H37.0629C36.3915 20.7756 33.5807 23.5609 31.582 24.7059C33.5807 25.6343 36.782 28.0637 38 32.4583H33.5651C32.6126 29.5183 30.2393 27.2436 27.1006 26.9341V32.4583H26.6165Z" fill="white"/>
                </svg>

                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="50" height="50" rx="5" fill="#272727"/>
                <path d="M8 16H26.78V25.445C26.78 27.8663 25.4883 30.1037 23.3916 31.3144L17.39 34.78L11.3885 31.3144C9.29166 30.1037 8 27.8663 8 25.445V16Z" fill="#FFDD2D"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1562 20.9712V23.9088C13.558 23.4552 14.2883 23.1482 15.1234 23.1482H16.0309V26.5631C16.0309 27.4716 15.784 28.2668 15.4178 28.7042H19.3652C18.9997 28.2664 18.7534 27.4722 18.7534 26.5648V23.1482H19.661C20.496 23.1482 21.2264 23.4552 21.6281 23.9088V20.9712H13.1562Z" fill="#333333"/>
                <path d="M38.6782 21.417C40.0252 21.417 41.0808 21.7726 41.845 22.4839C42.6169 23.1877 43.0028 24.1563 43.0028 25.3897C43.0028 26.6231 42.6169 27.5955 41.845 28.3068C41.0732 29.0105 40.0176 29.3624 38.6782 29.3624H35.9654V21.417H38.6782ZM38.6896 23.3466H38.1221V27.4328H38.6896C39.3176 27.4328 39.8133 27.2587 40.1765 26.9107C40.5473 26.5626 40.7327 26.0556 40.7327 25.3897C40.7327 24.7238 40.5473 24.2168 40.1765 23.8687C39.8133 23.5206 39.3176 23.3466 38.6896 23.3466Z" fill="white"/>
                <path d="M34.7191 21.417V29.3624H32.5625V21.417H34.7191Z" fill="white"/>
                </svg>

              </span>
            </div>
            <!-- <h1>Вход или регистрация</h1>
            <div class="auth_btns">
              <button>Физическое лицо</button>
              <button>Юридическое лицо</button>
            </div> -->
          </form>
          </div>

        </div>
      <MobileMenu ref="mobileMenuRef"></MobileMenu>

      <div class="items_all_layer_index" :class="{'active': allItemsButtonOpen}">
        <div class="content items_all br-5">
          <div class="nav_pc_device">
            <navig>
              <div class="categories">
                <ul class="main-categories">
                  <li
                    v-for="(category, index) in categories"
                    :key="index"
                    @mouseenter="activateSubmenu(index)"
                  >
                    <button :class="{ active: activeIndex === index }">{{ category.name }}</button>
                  </li>
                </ul>
              </div>
              <div class="subcategory-display" v-if="activeIndex !== -1" @mouseenter="clearHideTimeout" @mouseleave="startHideSubmenu">
                <h2 style="font-size: 25px;font-weight: 700;">{{ categories[activeIndex].name }}</h2>
                <ul>
                  <li
                    v-for="(subcategory, subIndex) in categories[activeIndex].subcategories"
                    :key="subIndex"
                  >
                    <NuxtLink :to="subcategory.link">{{ subcategory.name }}</NuxtLink>
                  </li>
                </ul>
              </div>
            </navig>
          </div>
          <!-- <div class="nav_pc">
            <navig>
              <ul class="main-categories">
                <li v-for="(category, index) in categories" :key="index">
                  <button @click.prevent="toggleSubmenu(index)">{{ category.name }}</button>
                </li>
              </ul>
              <div class="sub_cut">
                <ul v-if="activeIndex !== -1">
                  <li v-for="(subcategory, subIndex) in categories[activeIndex].subcategories" :key="subIndex">
                    <NuxtLink :to="subcategory.link">{{ subcategory.name }}</NuxtLink>
                    <ul v-if="subcategory.subcategories">
                      <li v-for="(subSubcategory, subSubIndex) in subcategory.subcategories" :key="subSubIndex">
                        <NuxtLink :to="subSubcategory.link">{{ subSubcategory.name }}</NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </navig>
          </div> -->
        </div>
      </div>

      <div class="sideMenuAlert">
        2100+ позиций товаров в наличии на собственных складах. Доставка по всей России.
      </div>
      <div class="sideMenuLayout">
        <div class="content sideMenu">
          <ul>
            <li><NuxtLink to="">Акции</NuxtLink></li>
            <li><NuxtLink to="">Отзывы</NuxtLink></li>
            <li><NuxtLink to="">Оплата</NuxtLink></li>
            <li><NuxtLink to="">Доставка</NuxtLink></li>
            <li><NuxtLink to="">Контакты</NuxtLink></li>
          </ul>
          <div class="sideMenuInfo">
            <NuxtLink to="">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM9.75 14.25H8.25V12.75H9.75V14.25ZM11.3025 8.4375L10.6275 9.1275C10.0875 9.675 9.75 10.125 9.75 11.25H8.25V10.875C8.25 10.05 8.5875 9.3 9.1275 8.7525L10.0575 7.8075C10.335 7.5375 10.5 7.1625 10.5 6.75C10.5 5.925 9.825 5.25 9 5.25C8.175 5.25 7.5 5.925 7.5 6.75H6C6 5.0925 7.3425 3.75 9 3.75C10.6575 3.75 12 5.0925 12 6.75C12 7.41 11.73 8.01 11.3025 8.4375Z" fill="#CE2E41"/>
              </svg>
              Помощь в работе
            </NuxtLink>
            <span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.965 8.0925C6.045 10.215 7.785 11.9475 9.9075 13.035L11.5575 11.385C11.76 11.1825 12.06 11.115 12.3225 11.205C13.1625 11.4825 14.07 11.6325 15 11.6325C15.4125 11.6325 15.75 11.97 15.75 12.3825V15C15.75 15.4125 15.4125 15.75 15 15.75C7.9575 15.75 2.25 10.0425 2.25 3C2.25 2.5875 2.5875 2.25 3 2.25H5.625C6.0375 2.25 6.375 2.5875 6.375 3C6.375 3.9375 6.525 4.8375 6.8025 5.6775C6.885 5.94 6.825 6.2325 6.615 6.4425L4.965 8.0925Z" fill="#CE2E41"/>
              </svg>

              8 800 567 56 67</span>
            <div class="sideMenuInfoSocial">
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
        </div>
        
        <div class="navUserMenuLayout">
          <div class="content navUserMenu">
            <div class="logo">
              <NuxtLink to="/"><img src="~/assets/img/logo.svg" alt="гк полюс логотип"></NuxtLink>
            </div>

            <button class="allItemsButton" @click="allItemsButton">
              <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.878906 12H18.8789V10H0.878906V12ZM0.878906 7H18.8789V5H0.878906V7ZM0.878906 0V2H18.8789V0H0.878906Z" fill="white"/>
              </svg>
              Все товары
            </button>

            <div class="navSearchLayout">
              <div class="searchInput">
                <input type="text" placeholder="Поиск по 1000+ товарам" />
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.16602 16.6665C13.3082 16.6665 16.666 13.3086 16.666 9.1665C16.666 5.02437 13.3082 1.6665 9.16602 1.6665C5.02388 1.6665 1.66602 5.02437 1.66602 9.1665C1.66602 13.3086 5.02388 16.6665 9.16602 16.6665Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.3333 18.3333L15 15" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>

            <button class="priceButton">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM14 18H2V2H9V7H14V18Z" fill="#CE2E41"/>
              </svg>
              Оптовый прайс-лист
            </button>

            <div class="minimumPay">
              <span>30 000 ₽</span>
              <p>Минимальный заказ</p>
            </div>

            <div class="navCart" :class="{'active': NavCart}" @click="ToogleNavCart">
              <div class="cartIcon">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5461 11.5C15.2961 11.5 15.9561 11.09 16.2961 10.47L19.8761 3.98C20.2461 3.32 19.7661 2.5 19.0061 2.5H4.20609L3.26609 0.5H-0.00390625V2.5H1.99609L5.59609 10.09L4.24609 12.53C3.51609 13.87 4.47609 15.5 5.99609 15.5H17.9961V13.5H5.99609L7.09609 11.5H14.5461ZM5.15609 4.5H17.3061L14.5461 9.5H7.52609L5.15609 4.5ZM5.99609 16.5C4.89609 16.5 4.00609 17.4 4.00609 18.5C4.00609 19.6 4.89609 20.5 5.99609 20.5C7.09609 20.5 7.99609 19.6 7.99609 18.5C7.99609 17.4 7.09609 16.5 5.99609 16.5ZM15.9961 16.5C14.8961 16.5 14.0061 17.4 14.0061 18.5C14.0061 19.6 14.8961 20.5 15.9961 20.5C17.0961 20.5 17.9961 19.6 17.9961 18.5C17.9961 17.4 17.0961 16.5 15.9961 16.5Z" fill="#272727"/>
                </svg>
                <span>5</span>

              </div>
              <p>Корзина</p>
              <div class="nav_cart_items_info" :class="{'active': NavCart}">
                <ul>
                  <li>
                    <img src="~/assets/img/product_image.svg" alt="">
                    Кирпич полнотелый рядовой М-150, красный.....
                    <span>Кол-во:  1</span>
                  </li>
                  <li>
                    <img src="~/assets/img/product_image.svg" alt="">
                    Кирпич полнотелый рядовой М-150, красный.....
                    <span>Кол-во:  1</span>
                  </li>
                  <li>
                    <img src="~/assets/img/product_image.svg" alt="">
                    Кирпич полнотелый рядовой М-150, красный.....
                    <span>Кол-во:  1</span>
                  </li>
                </ul>
                <button class="button">
                  Перейти в корзину
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 10.59L7.58 6L3 1.41L4.41 0L10.41 6L4.41 12L3 10.59Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </div>

            <div class="navLogin" @click="ProfileMenu">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2.4C9.16 2.4 10.1 3.34 10.1 4.5C10.1 5.66 9.16 6.6 8 6.6C6.84 6.6 5.9 5.66 5.9 4.5C5.9 3.34 6.84 2.4 8 2.4ZM8 11.4C10.97 11.4 14.1 12.86 14.1 13.5V14.6H1.9V13.5C1.9 12.86 5.03 11.4 8 11.4ZM8 0.5C5.79 0.5 4 2.29 4 4.5C4 6.71 5.79 8.5 8 8.5C10.21 8.5 12 6.71 12 4.5C12 2.29 10.21 0.5 8 0.5ZM8 9.5C5.33 9.5 0 10.84 0 13.5V16.5H16V13.5C16 10.84 10.67 9.5 8 9.5Z" fill="#272727"/>
              </svg>
              <p>Войти</p>
              <div class="profile_menu" :class="{'active': profile_menu}">
                <ul>
                  <li>
                    <NuxtLink to="">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V8.5C22 9.05228 21.5523 9.5 21 9.5H3C2.44772 9.5 2 9.05228 2 8.5V5ZM20 5H4V7.5H20V5Z" fill="#CE2E41"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.89844 8.5C2.89844 7.94772 3.34615 7.5 3.89844 7.5H20.0984C20.6507 7.5 21.0984 7.94772 21.0984 8.5V19.2C21.0984 20.3046 20.203 21.2 19.0984 21.2H4.89844C3.79387 21.2 2.89844 20.3046 2.89844 19.2V8.5ZM4.89844 9.5V19.2H19.0984V9.5H4.89844Z" fill="#CE2E41"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19922 13C9.19922 12.4477 9.64693 12 10.1992 12H13.7992C14.3515 12 14.7992 12.4477 14.7992 13C14.7992 13.5523 14.3515 14 13.7992 14H10.1992C9.64693 14 9.19922 13.5523 9.19922 13Z" fill="#CE2E41"/>
                    </svg>

                      Заказы
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9979 9.61572C10.6809 9.61572 9.61328 10.6834 9.61328 12.0003C9.61328 13.3173 10.6809 14.385 11.9979 14.385C13.3149 14.385 14.3825 13.3173 14.3825 12.0003C14.3825 10.6834 13.3149 9.61572 11.9979 9.61572ZM7.61328 12.0003C7.61328 9.57878 9.57634 7.61572 11.9979 7.61572C14.4195 7.61572 16.3825 9.57878 16.3825 12.0003C16.3825 14.4219 14.4195 16.385 11.9979 16.385C9.57634 16.385 7.61328 14.4219 7.61328 12.0003Z" fill="#CE2E41"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.42633 3.34907C10.5912 1.40513 13.4081 1.40513 14.573 3.34907L14.7889 3.70941C15.0154 4.0873 15.4625 4.27249 15.8898 4.1654L16.2973 4.06329C18.4956 3.5124 20.4874 5.50427 19.9365 7.70255L19.8344 8.11002C19.7273 8.53736 19.9125 8.98444 20.2904 9.21089L20.6508 9.42681C22.5947 10.5917 22.5947 13.4086 20.6508 14.5735L20.2904 14.7894C19.9125 15.0159 19.7273 15.463 19.8344 15.8903L19.9365 16.2978C20.4874 18.496 18.4956 20.4879 16.2973 19.937L15.8898 19.8349C15.4625 19.7278 15.0154 19.913 14.7889 20.2909L14.573 20.6512C13.4081 22.5952 10.5912 22.5952 9.42633 20.6512L9.2104 20.2909C8.98395 19.913 8.53687 19.7278 8.10954 19.8349L7.70206 19.937C5.50379 20.4879 3.51192 18.496 4.0628 16.2978L4.16491 15.8903C4.272 15.463 4.08682 15.0159 3.70892 14.7894L3.34859 14.5735C1.40464 13.4086 1.40464 10.5917 3.34859 9.42681L3.70892 9.21089C4.08682 8.98444 4.272 8.53736 4.16491 8.11002L4.0628 7.70255C3.51192 5.50428 5.50379 3.5124 7.70206 4.06329L8.10954 4.1654C8.53687 4.27249 8.98395 4.0873 9.2104 3.70941L9.42633 3.34907ZM12.8575 4.3771C12.4692 3.72912 11.5302 3.72912 11.1419 4.3771L10.926 4.73743C10.2466 5.87113 8.90538 6.42668 7.62337 6.10541L7.2159 6.0033C6.48314 5.81967 5.81918 6.48363 6.00281 7.21639L6.10492 7.62386C6.42619 8.90587 5.87064 10.2471 4.73694 10.9265L4.37661 11.1424C3.72863 11.5307 3.72863 12.4696 4.37661 12.8579L4.73695 13.0739C5.87064 13.7532 6.42619 15.0944 6.10492 16.3765L6.00281 16.7839C5.81918 17.5167 6.48314 18.1807 7.2159 17.997L7.62337 17.8949C8.90539 17.5736 10.2466 18.1292 10.926 19.2629L11.1419 19.6232C11.5302 20.2712 12.4692 20.2712 12.8575 19.6232L13.0734 19.2629C13.7527 18.1292 15.094 17.5736 16.376 17.8949L16.7834 17.997C17.5162 18.1807 18.1802 17.5167 17.9965 16.7839L17.8944 16.3765C17.5732 15.0944 18.1287 13.7532 19.2624 13.0739L19.6227 12.8579C20.2707 12.4696 20.2707 11.5307 19.6227 11.1424L19.2624 10.9265C18.1287 10.2471 17.5732 8.90587 17.8944 7.62386L17.9965 7.21639C18.1802 6.48363 17.5162 5.81967 16.7834 6.0033L16.376 6.10541C15.094 6.42668 13.7527 5.87112 13.0734 4.73743L12.8575 4.3771Z" fill="#CE2E41"/>
                    </svg>

                    Настройка профиля
                  </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z" fill="#CE2E41"/>
                    </svg>

                    Выход
                  </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>

            <button type="button" class="button mobile_nav" style="max-width: 50px;justify-content: center;align-items: center;display: flex;" @click="toggleMenu">

              <svg style="margin: 0 auto;padding: 0px;" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="white"/>
              </svg>

              
            </button>
          </div>        
        </div>

        <div class="navMenuLayout">       
            <div class="content navMenu">
              <NuxtLink to="">Кирпичи, блоки</NuxtLink>
              <NuxtLink to="">Утеплитель, изоляция</NuxtLink>
              <NuxtLink to="">Смеси</NuxtLink>
              <NuxtLink to="">Пиломатериалы</NuxtLink>
              <NuxtLink to="">Электрика</NuxtLink>
              <NuxtLink to="">Металлопрокат</NuxtLink>
              <NuxtLink to="">Отделочные материалы</NuxtLink>
              <NuxtLink to="">Бренды</NuxtLink>
              <NuxtLink to="" style="color:#CE2E41;">Новинки</NuxtLink>
            </div>
          </div>
      </div>

      <div class="device_nav">
          <ul>
            <li>
              <NuxtLink to="/">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.12697L17.5 11.077V19.668H15.3V13.068H8.7V19.668H6.5V11.077L12 6.12697ZM12 3.16797L1 13.068H4.3V21.868H10.9V15.268H13.1V21.868H19.7V13.068H23L12 3.16797Z" fill="#CE2E41"/>
                </svg>
                Главная
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.2 15.568C12.1764 15.568 15.4 12.3444 15.4 8.36797C15.4 4.39152 12.1764 1.16797 8.2 1.16797C4.22355 1.16797 1 4.39152 1 8.36797C1 12.3444 4.22355 15.568 8.2 15.568Z" stroke="#CE2E41" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.9998 17.1678L13.7998 13.9678" stroke="#CE2E41" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Поиск
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="" @click="allItemsButton">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0.167969V8.16797H8V0.167969H0ZM6 6.16797H2V2.16797H6V6.16797ZM0 10.168V18.168H8V10.168H0ZM6 16.168H2V12.168H6V16.168ZM10 0.167969V8.16797H18V0.167969H10ZM16 6.16797H12V2.16797H16V6.16797ZM10 10.168V18.168H18V10.168H10ZM16 16.168H12V12.168H16V16.168Z" fill="#CE2E41"/>
                </svg>
                Каталог
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9979 9.61572C10.6809 9.61572 9.61328 10.6834 9.61328 12.0003C9.61328 13.3173 10.6809 14.385 11.9979 14.385C13.3149 14.385 14.3825 13.3173 14.3825 12.0003C14.3825 10.6834 13.3149 9.61572 11.9979 9.61572ZM7.61328 12.0003C7.61328 9.57878 9.57634 7.61572 11.9979 7.61572C14.4195 7.61572 16.3825 9.57878 16.3825 12.0003C16.3825 14.4219 14.4195 16.385 11.9979 16.385C9.57634 16.385 7.61328 14.4219 7.61328 12.0003Z" fill="#CE2E41"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.42633 3.34907C10.5912 1.40513 13.4081 1.40513 14.573 3.34907L14.7889 3.70941C15.0154 4.0873 15.4625 4.27249 15.8898 4.1654L16.2973 4.06329C18.4956 3.5124 20.4874 5.50427 19.9365 7.70255L19.8344 8.11002C19.7273 8.53736 19.9125 8.98444 20.2904 9.21089L20.6508 9.42681C22.5947 10.5917 22.5947 13.4086 20.6508 14.5735L20.2904 14.7894C19.9125 15.0159 19.7273 15.463 19.8344 15.8903L19.9365 16.2978C20.4874 18.496 18.4956 20.4879 16.2973 19.937L15.8898 19.8349C15.4625 19.7278 15.0154 19.913 14.7889 20.2909L14.573 20.6512C13.4081 22.5952 10.5912 22.5952 9.42633 20.6512L9.2104 20.2909C8.98395 19.913 8.53687 19.7278 8.10954 19.8349L7.70206 19.937C5.50379 20.4879 3.51192 18.496 4.0628 16.2978L4.16491 15.8903C4.272 15.463 4.08682 15.0159 3.70892 14.7894L3.34859 14.5735C1.40464 13.4086 1.40464 10.5917 3.34859 9.42681L3.70892 9.21089C4.08682 8.98444 4.272 8.53736 4.16491 8.11002L4.0628 7.70255C3.51192 5.50428 5.50379 3.5124 7.70206 4.06329L8.10954 4.1654C8.53687 4.27249 8.98395 4.0873 9.2104 3.70941L9.42633 3.34907ZM12.8575 4.3771C12.4692 3.72912 11.5302 3.72912 11.1419 4.3771L10.926 4.73743C10.2466 5.87113 8.90538 6.42668 7.62337 6.10541L7.2159 6.0033C6.48314 5.81967 5.81918 6.48363 6.00281 7.21639L6.10492 7.62386C6.42619 8.90587 5.87064 10.2471 4.73694 10.9265L4.37661 11.1424C3.72863 11.5307 3.72863 12.4696 4.37661 12.8579L4.73695 13.0739C5.87064 13.7532 6.42619 15.0944 6.10492 16.3765L6.00281 16.7839C5.81918 17.5167 6.48314 18.1807 7.2159 17.997L7.62337 17.8949C8.90539 17.5736 10.2466 18.1292 10.926 19.2629L11.1419 19.6232C11.5302 20.2712 12.4692 20.2712 12.8575 19.6232L13.0734 19.2629C13.7527 18.1292 15.094 17.5736 16.376 17.8949L16.7834 17.997C17.5162 18.1807 18.1802 17.5167 17.9965 16.7839L17.8944 16.3765C17.5732 15.0944 18.1287 13.7532 19.2624 13.0739L19.6227 12.8579C20.2707 12.4696 20.2707 11.5307 19.6227 11.1424L19.2624 10.9265C18.1287 10.2471 17.5732 8.90587 17.8944 7.62386L17.9965 7.21639C18.1802 6.48363 17.5162 5.81967 16.7834 6.0033L16.376 6.10541C15.094 6.42668 13.7527 5.87112 13.0734 4.73743L12.8575 4.3771Z" fill="#CE2E41"/>
                </svg>

                Корзина
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z" fill="#CE2E41"/>
                </svg>

                Войти
              </NuxtLink>
            </li>
          </ul>
        </div>
    </nav>
  </header>
  <!-- </div> -->
</template>

<script lang="ts" setup>
const form_reg = ref(false)
const auth_form = ref(false)
const form_fl = ref(true)
const form_ul = ref(false)


function toogle_form_regu(){
  form_reg.value = true
  form_ul.value = false
  form_fl.value = false
}

function toogle_auth_form(){
  auth_form.value = !auth_form.value
}
function toogle_form_fl(){
  if (form_fl.value == true){
    return
  } else {
    form_fl.value = true
    form_ul.value = false
    form_reg.value = false
  }
}

function toogle_form_ul(){
  if (form_ul.value == true){
    return
  } else {
    form_fl.value = false
    form_ul.value = true
    form_reg.value = false
  }
}

const NavCart = ref(false)
function ToogleNavCart(){
  NavCart.value = !NavCart.value
}

const profile_menu = ref(false)
function ProfileMenu(){
  profile_menu.value = !profile_menu.value
}
const mobileMenuRef = ref(null);
function toggleMenu() {
  // Вызываем функцию из MobileMenu
  if (mobileMenuRef.value) {
    mobileMenuRef.value.toogleMobileMenu();
  }
}

const allItemsButtonOpen = ref(false)

const allItemsButton = function(){
  allItemsButtonOpen.value = !allItemsButtonOpen.value;
}

import { ref } from 'vue';
const categories = ref([
  {
    name: 'Железобетонные арматурины',
    subcategories: [
      { name: 'Наша команда', link: '/' },
      { name: 'Миссия и видение', link: '/' },
    ],
  },
  {
    name: 'Цемент здесь',
    subcategories: [
      { name: 'Веб-дизайн', link: '/' },
      {
        name: 'Цифровой маркетинг',
        link: '/',
        subcategories: [
          { name: 'SEO', link: '/' },
          { name: 'Социальные сети', link: '/' },
          { name: 'Email-маркетинг', link: '/' },
        ],
      },
    ],
  },
  { name: 'Сваи дорожные', subcategories: [], link: '/' },
  {
    name: 'Железобетонные арматурины',
    subcategories: [
      { name: 'Наша команда', link: '/' },
      { name: 'Миссия и видение', link: '/' },
    ],
  },
  {
    name: 'Цемент здесь',
    subcategories: [
      { name: 'Веб-дизайн', link: '/' },
      {
        name: 'Цифровой маркетинг',
        link: '/',
        subcategories: [
          { name: 'SEO', link: '/' },
          { name: 'Социальные сети', link: '/' },
          { name: 'Email-маркетинг', link: '/' },
        ],
      },
    ],
  },
  {
    name: 'Железобетонные арматурины',
    subcategories: [
      { name: 'Наша команда', link: '/' },
      { name: 'Миссия и видение', link: '/' },
    ],
  },
  {
    name: 'Цемент здесь',
    subcategories: [
      { name: 'Веб-дизайн', link: '/' },
      {
        name: 'Цифровой маркетинг',
        link: '/',
        subcategories: [
          { name: 'SEO', link: '/' },
          { name: 'Социальные сети', link: '/' },
          { name: 'Email-маркетинг', link: '/' },
        ],
      },
    ],
  },
]);
const activeIndex = ref(0); // Изначально активна первая категория
function activateSubmenu(index) {
  activeIndex.value = index; // Активируем подкатегории для выбранной категории
}
function startHideSubmenu() {
  // Ничего не делаем, чтобы подкатегории не скрывались
}
function clearHideTimeout() {
  // Ничего не делаем, чтобы подкатегории не скрывались
}
</script>

<style scoped>
.auth_form{
  background-color: #27272740;
  width: 100%;
  height: 100dvh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99999999;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  transition: visibility 0.5s;
  -webkit-transition: visibility 0.5s;
  -moz-transition: visibility 0.5s;
  flex-direction: column;
  opacity: 0;
  
  && form{
    /* background-color: #FFFFFF;
    border-radius:5px;
    padding: 40px 40px 40px 40px;
    max-width: 536px;
    width: 90%;
    
    
    
    box-shadow: 0px 0px;
    position: relative; */
    display: flex;
    gap: 20px;
    flex-direction: column;
    
    h1{
      font-size: 30px;
      font-weight: 700;
    }
    input{
      width: 100%;
      padding: 15px 25px 15px 25px;
      border-radius: 5px;
      border: 1px solid #E0E0E0;
      font-size: 16px;
      font-weight: 400;
      outline: none;
    }
    button{
      width: 1;
      padding: 15px 25px 15px 25px;
      border-radius: 5px;
      border: 1px solid #E0E0E0;
      font-size: 16px;
      font-weight: 400;
      gap: 9px;
      display: flex;
    }
    label{
      display: flex;
      align-items: flex-start;
      font-size: 12px;
      color: #959595;

      input{
        height: 15px;
        width: 15px;
        margin: 0px 9px 0px 0px;
      }
    }
  }
  && h1{
      font-size: 30px;
      font-weight: 700;
    }
}
.auth_form.active{visibility: visible;opacity: 9;}
.auth_social{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.auth_social span{
  display: flex;
  gap: 9px;
  
  svg{cursor: pointer;}
}
.auth_form_layer{
  background-color: #FFFFFF;
  border-radius:5px;
  padding: 40px 40px 40px 40px;
  max-width: 536px;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0px 0px;
  position: relative;
  overflow-y: auto;
}

.auth_cl{
  position: absolute;
  right: 25px;
  top: 20px;
  font-size: 20px;
  cursor: pointer;
}
.auth_btns{
  width: 100%;
  display: flex;
  gap: 10px;

  && button{
    width: 100%;
    padding: 20px 25px 20px 25px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    background-color: #F0F0F0;
  }
  && button.active{background-color: #272727;color: #FFFFFF;}
.auth_btns .auth_btns_active{
  background-color: #272727;
  }
}
.nav_cart_items_info{
  width: max-content;
  background-color: #FFFFFF;
  padding: 20px 20px 20px 20px;
  border-radius: 5px;
  z-index: 15;
  position: absolute;
  top: 50px;
  top: 20px;
  gap: 20px;
  right: 0;
  box-shadow: 0px 0px 20px 0px #27272720;
  visibility: hidden;
  transition: top 0.5s;
  -webkit-transition: top 0.5s;
  -moz-transition: top 0.5s;
  opacity: 0;

  && ul{
    gap: 20px;
    display: flex;
    flex-direction: column;
  }

  && li{
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #00000029;
    padding: 0px 0px 20px 0px;
  }
  
  && img{
    width: 49px;
    height: 49px;
    margin: 0px 20px 0px 0px;
  }
  && span{
    top: 0!IMPORTANT;
    position: relative!IMPORTANT;
    background-color: #FFFFFF!IMPORTANT;
    font-size: 15px!IMPORTANT;
    margin:0px 0px 0px 20px;
  }
  && button{
    margin: 20px 0px 0px 0px;
  }
}
.form_ul{
  && a{
    color: #CE2E41;
    text-decoration: underline;
  }
}
.nav_cart_items_info.active{
  top: 50px;
  visibility: visible;
  transition: top 0.5s;
  -webkit-transition: top 0.5s;
  -moz-transition: top 0.5s;
  opacity: 15;
}
.navLogin{
  position: relative;
  cursor: pointer;
}
.profile_menu{
  width: 100%;
  border-radius: 5px;
  background-color: #FFFFFF;
  padding: 20px 20px 20px 20px;
  position: absolute;
  right: 0;
  min-width: max-content;
  top: 50px;
  box-shadow: 0px 0px 20px 0px #2727271A;
  z-index: 9;
  visibility: hidden;
  opacity: 0;
  top: 40px;
  transition: top 0.5s;
  -webkit-transition: top 0.5s;
  -moz-transition: top 0.5s;

  && ul{
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* box-shadow: 0px 0px 20px 0px #2727271A; */
  }
  && svg{
    min-width: 20px!IMPORTANT;
    min-height: 20px!IMPORTANT;
    width: 20px!IMPORTANT;
    height: 20px!IMPORTANT;
  }

  && a{
    width: 100%;
    display: flex;
    align-items: center;
  }
}
.profile_menu.active{
  visibility: visible;
  opacity: 15;
  top: 50px;
  transition: top 0.5s;
  -webkit-transition: top 0.5s;
  -moz-transition: top 0.5s;
}
.items_all_layer_index{
  visibility: hidden;
  position: fixed;
  transition: all 0s;
}
.items_all_layer_index.active{
  visibility: visible;
  position: absolute;
  left: 0;
  right: 0;
  top: 232px;
  padding: 0px 0px 0px 0px;
  z-index: 99;
  transition: all 0s;
}
.items_all{
  position: relative;
  background-color: #FFFFFF;
  padding: 15px 25px 15px 25px;
  box-shadow: 0px 20px 20px 0px #00000009;
}

navig{
  display: none;
}

.active navig {
  display: flex;
}
.categories {
  min-width: 200px; /* Ширина блока с основными категориями */
}

.main-categories {
  list-style: none;
  padding: 0;
  margin: 0;
}

.main-categories li {
  margin-bottom: 0px; /* Отступ между основными категориями */
  display: flex;
  align-items: flex-start;
}

navig button {
  display: block;
  width: 100%;
  padding: 10px;
  /* background-color: #1e4451; */
  /* color: #fff; */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: left;
}

navig button:hover {
  /* background-color: #63b175; */
  color: #CE2E41;
}

navig button.active {
  /* background-color: #63b175; Цвет фона для активной категории */
  color: #CE2E41
}
.subcategory-display {
  margin-left: 20px; /* Отступ между блоками */
  padding: 10px 0px 0px 25px;
  /* border: 1px solid #ccc; */
  /* border-radius: 5px; */
  /* background-color: #f9f9f9; */
  border: none;
  border-left: 1px solid #cecece;
}
.subcategory-display h2 {
  margin: 0 0 10px; /* Отступ для заголовка подкатегорий */
}
.subcategory-display ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.subcategory-display li {
  margin-bottom: 5px; /* Отступ между подкатегориями */
}











.mobile_nav{
  display: none!IMPORTANT;
}
.sideMenuAlert{
  font-size: 14px;
  color: #FFFFFF;
  text-align: center;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #E46622;
  justify-content: center;
}
.sideMenuLayout{
  background-color: #F0F0F0;
}
.sideMenu{
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  && ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 434px;
    font-size: 15px;
    color: #777777;
  }    
}
.sideMenuInfo{
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 433px;
  width: 100%;

  && span{
    font-size: 15px;
    color: #272727;
    font-weight: 700;
    align-items: center;
    display: flex;
    
    && svg{
      margin: 0px 10px 0px 0px;
    }
    svg{
      margin: 0px 10px 0px 0px;
    }
  }
  && a{
    color: #CE2E41;
    font-weight: 700;
    text-decoration: underline;
    font-size: 15px;
    align-items: center;
    display: flex;
    
    && svg{
      margin: 0px 10px 0px 0px;
    }
    svg{
      margin: 0px 10px 0px 0px;
    }
  }
}
.sideMenuInfoSocial{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sideMenuInfoSocial svg{
  margin: 0px 0px 0px 5px!IMPORTANT;
}









.navUserMenuLayout{
  background-color: #FFFFFF;
  border-bottom: 1px solid #F0F0F0;
}
.navUserMenu{
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2%;
}
.logo{
  line-height: 0;
  min-width: 150px;
}
.allItemsButton{
  background-color: #CE2E41;
  border-radius: 5px;
  padding: 0px 20px 0px 20px;
  max-width: 152px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  justify-content: center;
  
  && svg{
    margin: 0px 10px 0px 0px;
  }
}
.navSearchLayout{
  width: 100%;
  max-width: 343.12px;
  position: relative;

  && input{
    width: 100%;
    height: 50px;
    border-radius: 5px;
    font-size: 15px;
    color: #959595;
    background-color: #F0F0F0;
    padding: 0px 50px 0px 20px;
  }
}
.searchInput{
  position: relative;
  width: 100%;
  height: max-content;

  && svg{
    position: absolute;
    top: 15px;
    right: 15px;
  }
}

.priceButton{
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
  
  && svg{
    margin: 0px 10px 0px 0px;
  }
}


.minimumPay{
  height: 50px;
  border: 1px solid #F0F0F0;
  border-radius: 5px;
  width: 100%;
  max-width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  && span{
    font-size: 15px;
    font-weight: 700;
  }

  && p{
    font-size: 13px;
  }
}

.navCart{
  max-width: 50px;
  height: 43px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;

  && p{
    font-size: 13px;
  }

  && span{
    background-color: #FEF127;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    min-width: 18px;
    min-height: 18px;
    top: 0px;
    right: 0px;
  }
}

.navLogin{
  width: 100%;
  max-width: 36px;
  height: 43px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  && p{
    font-size: 13px;
  }
}




.navMenuLayout{
  width: 100%;
  background-color: #FFFFFF;
}

.navMenu{
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;

  && a{
    font-size: 15px;
  }
}

.device_nav{
  display: none;
  z-index: 9;
  box-shadow: 0px 0px 49px 0px #00000029;
}



@media (max-width: 979px){
  .device_nav{
    display: flex;
    position: fixed;
    bottom: 0px;
    right: 0;
    left: 0;
    background-color: #FFFFFF;
    width: 100%;
    height: 60px;
    padding: 0px 15px 0px 15px;
  }

  .device_nav ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    align-items: stretch;
    gap: 0px;
  }
  .device_nav li{
    display: flex;
    align-items: center;
    justify-self: start;
    padding: 0px 0px 0px 0px;
  }
  .device_nav a{
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    svg{
      margin: 5px 0px 0px 0px!IMPORTANT;
    }
  }
  .items_all_layer_index {}
  .items_all_layer_index.active{
    background-color: #FFFFFF;
    top:0px;
    height: 100dvh;
    z-index: 9;
  }
  .items_all{
    height: 100dvh;
    overflow-y: scroll;
  }
  .navMenu{
    display: none;
  }
  .mobile_nav{
    display: flex!IMPORTANT;
  }

  .sideMenu{
    display: none;
  }

  .allItemsButton{
    display: none;
  }
  
  .navSearchLayout{
    display: none;
  }

  .navCart{
    display: none;
  }
  
  .navLogin{
    display: none;
  }
  
  .sideMenuAlert{
    height: 30px;
  }
}

@media (max-width: 768px){
  .navMenuLayout{
    display: none;
  }

  .sideMenu{
    display: none;
  }

  .allItemsButton{
    display: none;
  }
  
  .navSearchLayout{
    display: none;
  }

  .navCart{
    display: none;
  }
  
  .navLogin{
    display: none;
  }
  
  .sideMenuAlert{
    height: 30px;
  }
}

@media (max-width: 679px){
  .sideMenuAlert {
        height: auto;
        padding: 5px 0px 5px 0px;
        font-size: 13px;
    }
}

@media (max-width: 479px){
  .auth_form.auth_form h1{
    font-size: 22px;
  }
.auth_btns.auth_btns button{
  font-size: 15px;
  padding: 9px 15px 9px 15px;
}
  .auth_btns{
    /* flex-direction: column; */
  }

  .auth_social{
    flex-direction: column;
    gap: 20px;
  }
  .auth_form_layer{
    overflow-y: auto;
  }
  .auth_form_layer{
    padding: 40px 20px 40px 20px;
  }
}
</style>