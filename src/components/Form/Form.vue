<template>
    <div class="grid items-center mx-auto">
        <h1 class="pt-[30px] pb-[25px] text-center text-Regular-h2-mob lg:text-Regular-h2-desc">Регистрация участников</h1>
        <form action="mailto:natus1k8@yandex.ru" enctype="text/plain">
            <label>
                Ваше имя
                <input type="text" name="name" required>
            </label>
            <label>
                Что вы хотите заказать?
                <input type="text" name="order" required>
            </label>
            <button type="submit">Сделать заказ</button>
        </form>
    </div>
</template>
<script setup>
const formList = [
    {
        type: "text",
        id: "name",
        required: true,
        placeholder: "Фамилия Имя Отчество",
    },
    {
        type: "text",
        id: "name",
        required: true,
        placeholder: "Дата рождения",
    },
    {
        type: "tel",
        id: "phone",
        required: true,
        placeholder: "Контактный телефон",
    },
    {
        type: "email",
        id: "mail",
        placeholder: "Ваша электронная почта",
    },
    {
        type: "text",
        id: "name",
        required: true,
        placeholder: "Город учебного заведения",
    },
    {
        type: "text",
        id: "name",
        required: true,
        placeholder: "Тип учебного заведения",
    },
    {
        type: "text",
        id: "name",
        required: true,
        placeholder: "Номер/название у/з",
    },
    {
        type: "text",
        id: "name",
        required: true,
        placeholder: "Класс/группа",
    },
    {
        type: "text",
        id: "name",
        required: true,
        placeholder: "Ваш логин в системе Codeforce",
    },
    {
        type: "text",
        id: "name",
        required: true,
        placeholder: "Прямая ссылка на Ваш профиль Codeforces",
    },
];
</script>