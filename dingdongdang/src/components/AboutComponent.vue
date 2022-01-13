<template lang="ko">
    <div>
        About component
        <CommonButton name="About" @setInput="setInput"/>
        자식에게 받은 데이터 : {{value}}

        <br><br>

        입력값 : {{message}}<br>
        <input type="text" v-model="message"/>
    </div>
</template>
<script>
import CommonButton from "@/components/Button.vue";

export default {
    name : "AboutComponent",
    components : {
        CommonButton,
    },
    watch : {
        message(newValue, oldValue) {
            console.log("newValue : ", newValue);
            console.log("oldValue : ", oldValue);
        }
    },
    data() {
        return {
            value : '',
            message : '',
        }
    },
    methods : {
        setInput(value) {
            this.value = value;
        },
    },
}
</script>