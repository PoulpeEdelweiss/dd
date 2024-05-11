<template>
    <div class="mx-auto pt-[30px] pb-[25px] lg:pt-[75px] lg:pb-[42px]">
        <h1 class="mx-auto pb-[25px] text-center text-Regular-h2-mob lg:Regular-h2-desc">Контакты</h1>
        <ul class="flex flex-col gap-y-[19px] text-Light-h4-mob lg:text-Light-h4-desc lg:gap-y-[30px]">
            <li class="grid gap-[12px] text-left lg:grid-cols-11 lg:justify-between lg:gap-[110px]">
                <p class="">Электронная почта оргкомитета олимпиады:</p>
                <a href="mailto:olymp@donntu.ru">olymp@donntu.ru</a>
            </li> 
            <li class="grid gap-[12px] text-left lg:grid-cols-11 lg:justify-between lg:gap-0">
                <p class="">Телефоны для справок:</p>
                <div class="flex flex-col gap-[12px] lg:gap-[18px]">
                    <a class="" href="tel:89490090304">(+7949) 009-03-04</a>
                    <a href="tel:89493203765">(+7949) 320-37-65</a>
                </div>
            </li> 
            
        </ul>
    </div>
</template>
<script setup>
    // const props = defineProps({
    //     infoContacts: { type: Array, default: () => [] },
    // });
    
</script>