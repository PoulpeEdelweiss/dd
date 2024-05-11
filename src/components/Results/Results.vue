<template>
    <div class="mx-auto pt-[30px] pb-[25px] lg:pt-[75px] lg:pb-[42px]">
        <h1 class="mx-auto pb-[25px] text-center text-Regular-h2-mob lg:Regular-h2-desc">Результаты</h1>
        <ul class="flex flex-col gap-y-[19px] text-Light-h4-mob lg:text-Light-h4-desc lg:gap-y-[30px]">
            <li v-for="item in resList" :key="item" class="grid gap-[12px] text-left lg:grid-cols-11 lg:justify-between lg:gap-[327px] items-center">
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
    const resList = [
    {
        title: "Результаты за 2017 год",
        link: "/files/for_pupils/pupil2017.pdf",
    },
    {
        title: "Результаты за 2018 год",
        link: "/files/for_pupils/pupil2018.pdf",
    },
    {
        title: "Результаты за 2019 год",
        link: "/files/for_pupils/pupil2019.pdf",
    },
    {
        title: "Результаты за 2020 год",
        link: "/files/for_pupils/pupil2020.pdf",
    },
    {
        title: "Результаты за 2021 год",
        link: "/files/for_pupils/pupil2021.pdf",
    },
    {
        title: "Результаты за 2023 год",
        link: "/files/for_pupils/pupil2023.pdf",
    },
    {
        title: "Результаты за 2024 год",
        link: "/files/for_pupils/pupil2024.pdf",
    },
  ];
    // const props = defineProps({
    //     
    // });
</script>