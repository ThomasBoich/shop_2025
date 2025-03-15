<template>
<div>
    <Navbar></Navbar>
    <section class="content page_404_section">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50.0013 27.0415L81.3763 81.2498H18.6263L50.0013 27.0415ZM50.0013 10.4165L4.16797 89.5832H95.8346L50.0013 10.4165ZM54.168 68.7498H45.8346V77.0832H54.168V68.7498ZM54.168 43.7498H45.8346V60.4165H54.168V43.7498Z" fill="#CE2E41"/>
        </svg>

        <h1>Ой, запрошенная страница не найдена</h1>
        <p>Приносим свои извинения за неудобства</p>
    </section>
    <Footer></Footer>
</div>
</template>
<script setup>
definePageMeta({
    layout: 'page',
})
</script>
<style scoped>

.page_404_section{
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 40dvh;
    text-align: center;

    && h1{
        font-size: 40px;
        font-weight: 700;
    }

    && p{
        font-size: 20px;
    }
}

@media (max-width: 979px){
    .page_404_section{
        && h1{
            font-size: 25px;
        }

        && p{
            font-size: 15px;
        }
    }
}
</style>