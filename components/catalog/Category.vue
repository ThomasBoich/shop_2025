<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="categoryCart">
    <h2>{{title}}</h2>
    <div class="categoryCartList">
      <ul>
        <li>
          <NuxtLink to="">
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 11.09L4.58 6.5L0 1.91L1.41 0.5L7.41 6.5L1.41 12.5L0 11.09Z" fill="#CE2E41"/>
            </svg>
            Название категории
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="">
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 11.09L4.58 6.5L0 1.91L1.41 0.5L7.41 6.5L1.41 12.5L0 11.09Z" fill="#CE2E41"/>
            </svg>
            Название категории
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="">
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 11.09L4.58 6.5L0 1.91L1.41 0.5L7.41 6.5L1.41 12.5L0 11.09Z" fill="#CE2E41"/>
            </svg>
            Название категории
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="">
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 11.09L4.58 6.5L0 1.91L1.41 0.5L7.41 6.5L1.41 12.5L0 11.09Z" fill="#CE2E41"/>
            </svg>
            Название категории
          </NuxtLink>
        </li>
      </ul>
    </div>
    <img src="~/assets/img/cart.png" alt="">
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.categoryCart{
  display: flex;
  width: calc(50% - 15px);
  height: auto;
  min-height: 100px;
  background-color: #FFFFFF;
  border-radius: 5px;
  margin: 0px 0px 30px 0px;
  position: relative;
  padding: 40px 40px 40px 40px;
  flex-direction: column;
  overflow: hidden;

  && h2{
    font-size: 25px;
    font-weight: 700;
    margin: 0px 0px 20px 0px;
  }

  && img{
    position: absolute;
    right: 0;
  }
}
.categoryCartList{
  && a{
    font-weight: 500;
    font-size: 15px;
    display: flex;
    align-items: center;
    margin: 0px 0px 10px 0px;
  }
  && svg{
    margin: 0px 10px 0px 0px;
  }
}
.categoryCart.categoryCart img{
  right: -25%;
  bottom: -40%;
}
@media (max-width: 979px){
  .popularCategories.popularCategories h2{
    font-size: 25px!IMPORTANT;
  }
  .popularCategories.popularCategories h2{
    font-size: 20px;
  }
  .categoryCart{
    padding: 20px 20px 20px 20px;
  }
  .categoryCartList{
    z-index: 2;
  }
  .categoryCart.categoryCart img{
    bottom: -50%;
    right: -50%;
  }
}

@media (max-width: 679px){
  .categoryCart{
    width: 100%;
    max-width: 100%;
    margin: 12px 0px 0px 0px;
  }
}
</style>