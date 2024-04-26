

<template>
    <header class="transition-all duration-300">
    <div class="w-full mx-auto bg-[#F9F9F9] py-[17px] lg:py-[25px] lg:px-[150px]">
      <ul class="flex items-center justify-between px-[8px] mx-auto lg:grid grid-cols-8 lg:px-[0]">
        <li class=" w-[76px] h-[50px] lg:col-start-1 lg:w-[100px] lg:h-[60px]">
          <img src="icons/logo.svg" alt="logo">
        </li>
        <li class="col-end-6 py-[20px] lg:col-start-2">
          <nav class="flex justify-between  text-base text-[FFFFFF] transition-all duration-300 lg:block">
            <div class="flex h-[17px] w-[50px] flex-col justify-between lg:hidden">
              <a class="block rounded h-[3px] bg-black"></a>
              <a class="block rounded h-[3px] bg-black"></a>
              <a class="block rounded h-[3px] bg-black"></a>
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
            <img class="" width="31" height="31" src="icons/search.svg" alt="">
            
          </div>
        </li>
        <li class="hidden lg:block max-w-max col-start-8">
            
            <button class="px-[27px] py-[15px] rounded-[10px] border-solid bg-[#00C073] text-[#FFFFFF] text-base">Зарегестрироваться</button>
        </li>
        
        
      </ul>
    </div>
  </header>

</template>

<script setup>
</script>

