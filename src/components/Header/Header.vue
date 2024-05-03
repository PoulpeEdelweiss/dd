

<template>
    <header class="transition-all duration-300">
    <div class="w-full mx-auto bg-[#F9F9F9] py-[17px] lg:py-[25px] lg:px-[150px]">
      <ul class="flex items-center justify-between px-[9px] mx-auto lg:grid grid-cols-8 lg:px-[0]">
        <li class=" lg:col-start-1">
          <Icon name="logo" size="lg ? 'w-[100px] h-[60px]' : 'w-[76px] h-[50px]'" />
        </li>
        <li class="col-end-6 py-[20px] lg:col-start-2">
          <nav class="flex justify-between text-Regular-menu text-[FFFFFF] transition-all duration-300 lg:block">
            <div class="flex h-[17px] w-[50px] flex-col justify-between lg:hidden">
              <p class="block rounded h-[3px] bg-black"></p>
              <p class="block rounded h-[3px] bg-black"></p>
              <p class="block rounded h-[3px] bg-black"></p>
            </div>
            <ul class="mx-auto hidden max-w-max gap-x-8 text-base lg:flex">
              <li>Об олимпиаде</li>
              <li>Документы</li>
              <li>Сертификаты</li>
              <li>Результаты</li>
              <li>Контакты</li>
            </ul>
          </nav>
        </li>
        <li class="col-start-7 hidden max-w-max lg:block">
          <div class="flex items-center justify-center w-[50px] rounded-full bg-[#D1D1D1] h-[50px]">
            <!-- <img class="" width="31" height="31" src="icons/search.svg" alt=""> -->
            <Icon name="search" size="lg ? 'h-[31px]' : ' h-[21px]'" />
          </div>
        </li>
        <li class="hidden lg:block max-w-max col-start-8">
            
            <button class="text-SemiBold-button px-[27px] py-[15px] rounded-[10px] border-solid bg-[#00C073] text-[#FFFFFF] text-base">Зарегестрироваться</button>
        </li>
        
        
      </ul>
    </div>
  </header>

</template>

<script setup>
  import Icon from "@components/Icon/Icon.vue";
</script>

