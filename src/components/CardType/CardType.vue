<template>
    <div class="bg-white  text-center pt-[18px] pb-[26px] px-[16px] lg:px-[150px] lg:py-[64px] ">
        <h2 class="text-Regular-h2-mob text-center pb-[16px] lg:pb-[34px] lg:text-Regular-h2-desc">Для кого?</h2>
        <ul class="grid justify-center gap-[21px] lg:gap-[25px] mx-auto">
            <li class="flex flex-col lg:h-[366px] flex-wrap justify-center lg:gap-[20px]">
                <img class="w-[222px] mx-auto pb-[10px] lg:w-[366px] lg:text-left" src="images/boy_pic.png" alt="boy">
                <h3 class="text-center text-Regular-h3-mob pb-[8px] lg:text-left lg:text-Regular-h3-desc ">Юный программист</h3>
                <p class=" text-Light-h4-mob pb-[12px] lg:text-Light-h4-desc lg:text-left">Учащиеся старших классов общеобразовательных организаций <br> специального профессионального образования </p>
                <!-- <button class="self-center lg:self-start w-[231px] h-[50px] max-w-max text-SemiBold-button px-[27px] py-[15px] rounded-[10px] border-solid bg-[#0070B8] text-[#FFFFFF]">Узнать подробности</button>
                 -->
                <Button
                href="/about2/"
                theme="blue"
                class="self-center lg:self-start w-[231px] h-[50px] max-w-max text-SemiBold-button px-[27px] py-[15px] rounded-[10px] "        
                    >Узнать подробности
                </Button>
            </li>
            <li class="flex flex-col lg:flex-wrap-reverse lg:h-[366px] justify-center lg:gap-[20px]">
                <img class="w-[222px] mx-auto pb-[10px] lg:w-[366px] lg:text-left" src="images/boy_pic.png" alt="boy">
                <h3 class="text-center text-Regular-h3-mob pb-[8px] lg:text-left lg:text-Regular-h3-desc">Знатоки программирования</h3>
                <p class="text-Light-h4-mob pb-[12px] lg:text-Light-h4-desc lg:text-left">Учащиеся старших классов общеобразовательных организаций <br> специального профессионального образования </p>
                <!-- <button class="self-center lg:self-end w-[231px] h-[50px] max-w-max text-SemiBold-button px-[27px] py-[15px] rounded-[10px] border-solid bg-[#0070B8] text-[#FFFFFF]">Узнать подробности</button>
                 -->
                 <Button
                    href="/about2/"
                    theme="blue"
                    class="self-center lg:self-end w-[231px] h-[50px] max-w-max text-SemiBold-button px-[27px] py-[15px] rounded-[10px]"         
                        >Узнать подробности
                </Button>
            </li>
        </ul>
    </div>
    
</template>
<script setup>
    import Icon from "@components/Icon/Icon.vue";
    import Button from "@components/Button/Button.vue";
</script>