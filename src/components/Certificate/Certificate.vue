<template>
    <div class="px-[343px] pt-[30px] pb-[25px] lg:pt-[75px] lg:pb-[42px]">
        
        <section class="mx-auto ">
            <h1 class="mx-auto pb-[25px] text-center text-Regular-h2-mob lg:Regular-h2-desc">Сертификаты</h1>
            <label for="category" class="mx-auto flex flex-col pb-[30px]">
                {{ categoryTitle }}
                <select v-model="selectCategory"  name="category" id="category" class= "rounded-[10px] outline-[#909090] outline-1 bg-[#D9D9D9] py-[8px] px-[21px] mt-[14px]">
                    <option value="0">Всё</option>
                    <option v-for="item in categoryList" :key="item.id" :value="item.id">{{ item.category }}</option>
                </select>
            </label>
            <ul class="grid grid-cols-amm gap-5">
                <li v-for="item in postList" :key="item" class="flex flex-col items-center">
                    <img src="/images/Gol_cert.png" alt="">
                    <p>{{ item.name }}</p>
                </li>
                
                
            </ul>
        </section>
        
    </div>
</template>
<script setup>
    import { ref, computed } from 'vue'
    const selectCategory = ref(0)
    let name=''
    const props = defineProps({
        categoryTitle: { type: String, default: () => '' },
        categoryList: { type: Array, default: () => [] },
        name: {type: String, default: ()=>''}
    });
    const postList =[
        {
            name:"Головин",
            image:"/images/Gol_cert.png",
        },
        {
            name:"Виноградский",
            image:"/images/Gol_cert.png",
        },
        {
            name:"Петров",
            image:"/images/Gol_cert.png",
        },
        {
            name:"Иванов",
            image:"/images/Gol_cert.png",
        },
        {
            name:"Капустин",
            image:"/images/Gol_cert.png",
        },
        {
            name:"Фрикаделькин",
            image:"/images/Gol_cert.png",
        },
        {
            name:"Пупсень",
            image:"/images/Gol_cert.png",
        },
        {
            name:"Вупсень",
            image:"/images/Gol_cert.png",
        },
    ];
    
    
</script>