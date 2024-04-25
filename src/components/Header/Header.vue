

<template>
    <header class="transition-all duration-300">
    <div class="w-full bg-[#F9F9F9] py-[25px] lg:px-[150px]">
      <ul class=" mx-auto grid lg:grid-cols-8">
        <li class="w-[76px] h-[50px] lg:col-start-1 ">
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
          <div class="relative w-[50px] rounded-full bg-[#D1D1D1] lg:h-[50px]">
            <img class="absolute left-2 top-3" width="31" height="31" src="icons/search.svg" alt="">
            
          </div>
        </li>
        <li class="col-start-8 hidden max-w-max lg:block">зарегестрироваться</li>
      </ul>
    </div>
  </header>

</template>

<script>
</script>

<style>
    input::-ms-clear{display: none;}
    button{cursor: pointer;}
    button::-moz-focus-inner{padding:0; border:0;}
    a, a:visited{text-decoration:none}
    ul li{list-style: none;}
    img{vertical-align: top;}

</style>
