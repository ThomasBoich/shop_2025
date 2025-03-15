<template>
  <div>
    <section class="content title"><h1>{{title}}</h1><p v-if="p != null">{{p}}</p></section>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  p: {
    type: String,
    default: null
  }
})
</script>

<style scoped>
.title{

  margin: 20px auto 20px auto;
  padding: 0px 0px 0px 0px;

  && p{
    font-size: 17px;
    font-weight: 400;
    display: flex;
    align-items: center;
  }
  && svg{
    margin: 0px 10px 0px 0px;
  }
  && h1{
    margin: 0px 0px 0px 0px;
  }
  && p{
    margin: 10px 0px 40px 0px;
  }
}

@media (max-width: 979px){
  .title{
    && h1{
      font-size: 25px;
    }
    && p{
      font-size: 15px;
    }
  }
}

@media (max-width: 679px){
  .title{
    && h1{
      font-size: 20px;
    }
    && p{
      font-size: 14px;
    }
  }
}
</style>