<template>
    <div class="mx-auto max-w-max mt-[75px] px-[150px]">   
        <div class="mx-auto lg:w-[1140px] lg:h-[327px] bg-[url('images/banner2.png')] bg-repeat-round rounded-[10px] lg:pt-[70px] lg:pb-[31px]">
            <div class="mx-auto bg-[#D9D9D9] rounded-[10px] w-[243px] lg:w-[518px]">
                <h1 class="text-black text-center text-Regular-h2-mob lg:text-Regular-h2-desc pt-[21px] pb-[5px] lg:pt-[73px] lg:pb-[31px]">{{ mainTitle }}</h1> 
                <h2 class="flex justify-center text-[#0017C2] text-Regular-h3-mob lg:text-Regular-h3-desc pb-[12px] lg:pb-[53px]">
                    <span class="hidden lg:block">Текущее состояние — &nbsp;</span>
                    <span v-if="stateComp===true">идёт набор</span>
                    <span v-else>завершено</span>
                </h2>
            </div>  
        </div>
        <div class="grid lg:grid-cols-41 lg:pt-[23px] lg:gap-[94px]">
            <div>
                <ul v-for="item in article" :key="item" class="grid gap-[34px]">
                    <li class="">
                        {{item.title}}
                    </li>
                    <li class="pb-[64px]">{{item.text }}</li>
                </ul>
            </div>
            <div class="hidden lg:block bg-[#D9D9D9] max-h-max rounded-[10px]">
                <h3 class="pt-[21px] text-center text-ExtraLight-h5-desc">{{ mainTitle }}</h3>
                <ul v-for="item in article" :key="item" class="text-center underline gap-[7px]">
                    <li class="">
                        {{item.title}}
                    </li>
                </ul>
                
            </div>
        </div>
        
    </div>
</template>
<script setup>
    import Icon from "@components/Icon/Icon.vue";
    import Button from "@components/Button/Button.vue";
    
    import useMedia from '@tools/media'
    const { lg } = useMedia()
    const props = defineProps({
        article: { type: Array, default: () => [] },
        mainTitle: { type: String, default: () => '' },
        stateComp: { type: Boolean, default: () => false }
    });

</script>