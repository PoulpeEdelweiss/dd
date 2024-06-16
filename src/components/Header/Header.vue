<template>
    <header class="transition-all duration-300">
    <div class="w-full mx-auto bg-[#F9F9F9] px-[16px] py-[17px] lg:py-[25px] lg:px-[150px]">
      <ul class="flex items-center justify-between mx-auto lg:grid grid-cols-8 lg:px-[0]">
        <li class=" lg:col-start-1">
          <Icon 
            name="logo"
            :size="lg ? 'w-[100px] h-[60px]' : 'w-[76px] h-[51px]'" />
        </li>
        <li class="col-end-7 py-[20px] lg:col-start-2">
          <nav class="flex justify-between text-Regular-menu text-[FFFFFF] transition-all duration-300 lg:block">
            <div class="flex h-[17px] w-[50px] flex-col justify-between lg:hidden">
              <p class="block rounded h-[3px] bg-black"></p>
              <p class="block rounded h-[3px] bg-black"></p>
              <p class="block rounded h-[3px] bg-black"></p>
            </div>
            <ul class="mx-auto hidden max-w-max gap-x-3 text-base lg:flex">
              <li v-for="item in menuList" :key="item">
                <a 
                  :href="item.link"
                  class="outline-none rounded-lg hover:outline-1 hover:outline-[#0017C2] px-5 py-2.5">
                    <span>{{ item.title }}</span>
                </a>
              </li>
            </ul>
          </nav>
        </li>
        <!-- <li class="col-start-7 hidden max-w-max lg:block">
          <div class="flex items-center justify-center w-[50px] rounded-full bg-[#D1D1D1] h-[50px]">
              <svg width="31" height="31"  viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.45833 14.2083C6.45833 9.93421 9.93421 6.45833 14.2083 6.45833C18.4825 6.45833 21.9583 9.93421 21.9583 14.2083C21.9583 18.4825 18.4825 21.9583 14.2083 21.9583C9.93421 21.9583 6.45833 18.4825 6.45833 14.2083ZM26.7465 24.9201L22.3613 20.5336C23.7215 18.7847 24.5417 16.5927 24.5417 14.2083C24.5417 8.51079 19.9059 3.875 14.2083 3.875C8.51079 3.875 3.875 8.51079 3.875 14.2083C3.875 19.9059 8.51079 24.5417 14.2083 24.5417C16.5927 24.5417 18.7847 23.7215 20.5336 22.3613L24.9201 26.7465C25.172 26.9984 25.5027 27.125 25.8333 27.125C26.164 27.125 26.4947 26.9984 26.7465 26.7465C27.2516 26.2415 27.2516 25.4252 26.7465 24.9201Z" fill="#231F20" />
              <mask id="mask0_203_380" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="3" width="25" height="25">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.45833 14.2083C6.45833 9.93421 9.93421 6.45833 14.2083 6.45833C18.4825 6.45833 21.9583 9.93421 21.9583 14.2083C21.9583 18.4825 18.4825 21.9583 14.2083 21.9583C9.93421 21.9583 6.45833 18.4825 6.45833 14.2083ZM26.7465 24.9201L22.3613 20.5336C23.7215 18.7847 24.5417 16.5927 24.5417 14.2083C24.5417 8.51079 19.9059 3.875 14.2083 3.875C8.51079 3.875 3.875 8.51079 3.875 14.2083C3.875 19.9059 8.51079 24.5417 14.2083 24.5417C16.5927 24.5417 18.7847 23.7215 20.5336 22.3613L24.9201 26.7465C25.172 26.9984 25.5027 27.125 25.8333 27.125C26.164 27.125 26.4947 26.9984 26.7465 26.7465C27.2516 26.2415 27.2516 25.4252 26.7465 24.9201Z" fill="white" />
              </mask>
              <g mask="url(#mask0_203_380)">
                <rect width="31" height="31" fill="#0D1C2E" />
              </g>
              </svg>
          </div>
        </li> -->
        <li class="hidden lg:block max-w-max col-start-8">
            
            <!-- <button class="text-SemiBold-button px-[27px] py-[15px] rounded-[10px] border-solid bg-[#00C073] text-[#FFFFFF] text-base">Зарегестрироваться</button> -->

            <Button
              theme="green"
              href="/form/"
              class="px-[8px] py-[15px] lg:px-[27px] "         
                        >Зарегестрироваться
            </Button>
        </li>
        
        
      </ul>
    </div>
  </header>

</template>

<script setup>
  import Icon from "@components/Icon/Icon.vue";
  import Button from "@components/Button/Button.vue";
  import useMedia from '@tools/media'
  const { lg } = useMedia()
  const menuList = [
    {
        title: "Об олимпиаде",
        link: "/about2/",
    },
    {
        title: "Документы",
        link: "/documents/",
    },
    {
        title: "Сертификаты",
        link: "/cert/",
    },
    {
        title: "Результаты",
        link: "/results/",
    },
    {
        title: "Контакты",
        link: "/contacts/",
    },
  ];
</script>

