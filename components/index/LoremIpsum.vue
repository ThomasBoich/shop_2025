<template>
  <section class="p-125-0 lorem_ipsum_layout">
    <div class="content lorem_ipsum">
      <div class="article_content">
        <article>
        <h2>Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
        </p>
      </article>
      <article>
        <h2>Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
        </p>
      </article>
      </div>
      <button type="button">
        Читать полностью
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_101_3642)">
        <path d="M3.5 10.5949L8.08 6.00488L3.5 1.41488L4.91 0.00488281L10.91 6.00488L4.91 12.0049L3.5 10.5949Z" fill="#CE2E41"/>
        </g>
        <defs>
        <clipPath id="clip0_101_3642">
        <rect width="12" height="12" fill="white" transform="translate(0.5 0.00488281)"/>
        </clipPath>
        </defs>
        </svg>
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.article_content{
  justify-content: space-between;
  align-items: center;
  flex: 1;
  display: flex;
  gap: 25px;
  margin: 0px 0px 40px 0px;
}
.lorem_ipsum{
  justify-content: center;
  align-items: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  
  && h2{
    font-size: 40px;
    font-weight: 700;
    margin: 0px 0px 10px 0px;
  }
  
  && p{
    font-size: 18px;
    line-height: 28px;
  }

  && button{
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

    svg{
      margin: 0px 0px 0px 10px;
    }
  }
}

@media (max-width: 979px){
  .lorem_ipsum.lorem_ipsum h2{
    font-size: 25px;
  }

  .lorem_ipsum.lorem_ipsum p{
    font-size: 16px;
  }

  .lorem_ipsum_layout{
    padding: 50px 0px 50px 0px;
  }
}

@media (max-width: 679px){
  .lorem_ipsum{
    flex-direction: column;
  }

  .article_content{
    flex-direction: column;
  }
  .lorem_ipsum.lorem_ipsum button{
    max-width: 100%;
    width: 100%;
  }
}
</style>