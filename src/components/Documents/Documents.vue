<template>
    <div class="mx-auto pt-[30px] pb-[25px] lg:pt-[75px] lg:pb-[42px]">
        <h1 class="mx-auto pb-[25px] text-center text-Regular-h2-mob lg:Regular-h2-desc">Документы</h1>
        <ul class="flex flex-col gap-y-[19px] text-Light-h4-mob lg:text-Light-h4-desc lg:gap-y-[30px]">
            <li v-for="item in docList" :key="item" class="grid gap-[12px] text-left lg:grid-cols-11 lg:justify-between lg:gap-[107px] items-center">
                <p class="">{{item.title}}</p>
                <Button
                    theme="blue"
                    :href=item.link
                    class="px-[62px] py-[15px] lg:px-[81px] lg:py-[15px]"         
                        >Скачать
                </Button>
            </li> 
            
        </ul>
    </div>
</template>
<script setup>
    import Button from "@components/Button/Button.vue";
    const docList = [
    {
        title: "Официальное положение об олимпиаде",
        link: "/files/student.pdf",
    },
    {
        title: "Инструкция по работе с Codeforce",
        link: "/files/codeforces.pdf",
    },
    {
        title: "Инструкция по работе с сайтом",
        link: "/files/piolymp.pdf",
    },
  ];
    // const props = defineProps({
    //     
    // });
</script>