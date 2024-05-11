<template>
    <footer class="w-full px-[9px] py-[30px] bg-[#004978] h-[268px] text-[rgb(249,249,249)] lg:h-[144px] lg:px-[150px]">
        <ul class="grid text-Light-h4-mob lg:text-Regular-menu lg:grid-cols-f1a lg:gap-[150px]">
            <li>
                <p>© 2023 ДОННТУ</p>
            </li>
            <li class="py-[20px] lg:py-0">
                <p class="pb-[7px] lg:pb-[12px]">Электронная почта оргкомитета олимпиады:</p>
                <a href="mailto:olymp@donntu.ru">olymp@donntu.ru</a>
            </li> 
            <li class="flex flex-col">
                <p class="pb-[7px] lg:pb-[12px]">Телефоны для справок:</p>
                <a class="pb-[7px] lg:pb-[12px]" href="tel:89490090304">(+7949) 009-03-04</a>
                <a href="tel:89493203765">(+7949) 320-37-65</a>
            </li> 
        </ul>
        
    </footer>
</template>
<script setup>
    infoOrg: [
      { title: "Электронная почта оргкомитета олимпиады:", info1: "olymp@donntu.ru"},
      { title: "Телефоны для справок:", info1: "(+7949) 009-03-04", info2:"(+7949) 320-37-65" },
    ];
</script>