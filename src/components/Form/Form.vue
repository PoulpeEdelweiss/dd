<template>
    <div :class="[
            modal
                ? 'bg-white w-[303px] lg:w-[754px] p-4 lg:p-6'
                : 'h-full',
            'mx-auto w-full grid items-center',
        ]"
    >
        <h1 class="mx-auto pb-[25px] text-center text-Regular-h2-mob lg:Regular-h2-desc">Регистрация участника</h1>
        <form v-if="!sended" @submit.prevent="send()" class="grid gap-y-5">
                <!-- <fieldset
                    v-if="modal"
                    class="grid grid-cols-1a gap-x-2.5 items-center"
                >
                    <span
                        :class="[
                            'text-Ubuntu-xl',
                           
                            { 'text-center': titleCenter },
                        ]"
                        
                        >{{ title }}</span
                    >
                    <button
                        type="button"
                        @click="open.set('')"
                        class="text-dark-2"
                    >
                        <Icon name="close" size="w-7 h-7" />
                    </button>
                </fieldset> -->
                <fieldset class="grid gap-y-5">
                    <!-- <template v-for="item in formList" :key="item">
                        <Input
                            v-if="item.id !== 'message'"
                            :id="item.id"
                            :name="item.id"
                            :type="item.type"
                            :required="item.required"
                            v-model="formData[item.id]"
                            :placeholder="item.placeholder"
                            
                        /> 
                    </template> -->
                    <fieldset v-for="item in formList" :key="item" class="grid gap-y-5">
                        <label class="gap-y-3.5 text-Light-h4-mob lg:text-Light-h4-desc flex flex-col">
                            {{ item.placeholder }}
                            <input 
                            type="item.type"
                            required
                            placeholder="item.placeholder"
                            id="item.id"
                            name="item.id"
                            class="bg-[#D9D9D9] rounded-lg outline outline-[#909090] focus:outline-[#0071b8] outline-1 focus:outline-none placeholder-transparent px-5 py-2 ring-inset ring-1 appearance-none transition-all"
                        >
                        </label>
                    </fieldset>
                    <fieldset class="flex flex-col space-y-5"> 
                        <label class="grid grid-cols-a1 gap-5 text-Light-h4-mob lg:text-Light-h4-desc">
                            <input type="checkbox" name="confirm" value="yes" id="yes">
                            <p>Устанавливая голочку внутри данной формы, Вы даёте согласие на обработку своих персональных данных исключительно в целях проведения спортивного соревнования, а также осуществление любых иных действий, предусмотренных действующим законом Российской Федерации.
                        </p>                   
                        </label>

                        <Button
                            type="submit"    
                            theme="green"
                            class="px-[8px] py-[15px] lg:px-[27px] "         
                        >
                            Зарегестрироваться
                        </Button>
                        <!-- <Button
                            type="submit"
                            :class="[
                                center ? 'mx-auto' : '',
                                modal ? '' : 'sm:w-auto sm:max-w-max',
                            ]"
                            :small="!lg"
                            class="w-full"
                            theme="green"
                        >
                            Отправить
                        </Button> -->
                    </fieldset>
                </fieldset>
            </form>
            <Success :modal="modal" v-else />      
    </div>
</template>
<script setup>
    //components
import Input from "@components/Input/Input.vue";
import Icon from "@components/Icon/Icon.vue";
import Button from "@components/Button/Button.vue";
import Success from "./Success/Success.vue";

//variables
import { ref, reactive, computed } from "vue";
import useMedia from "@tools/media";
const { lg } = useMedia();

const props = defineProps({
    title: { type: String, default: () => "" },
    // titleCenter: { type: Boolean, default: () => false },
    // center: { type: Boolean, default: () => false },
    modal: { type: Boolean, default: () => false },
    modelValue: { type: [Boolean, Array, Number, String], default: () => null },
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit("update:modelValue", value);
    },
});

const formList = [
    {
        type: "text",
        id: "name",
        required: true,
        placeholder: "Фамилия Имя Отчество",
    },
    {
        type: "date",
        id: "data",
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
        id: "city",
        required: true,
        placeholder: "Город учебного заведения",
    },
    {
        type: "text",
        id: "edu",
        required: true,
        placeholder: "Тип учебного заведения",
    },
    {
        type: "text",
        id: "num",
        required: true,
        placeholder: "Номер/название у/з",
    },
    {
        type: "text",
        id: "group",
        required: true,
        placeholder: "Класс/группа",
    },
    {
        type: "text",
        id: "login",
        required: true,
        placeholder: "Ваш логин в системе Codeforce",
    },
    {
        type: "url",
        id: "link",
        required: true,
        placeholder: "Прямая ссылка на Ваш профиль Codeforces",
    },
];


let formData = reactive({});

const sended = ref(false);


</script>