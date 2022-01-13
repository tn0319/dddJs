<template lang="ko">
    <div>
        Home component
        <CommonButton name="Home" @setInput="setInput"/>
        자식에게 받은 데이터: {{value}}
        
        <br><br>

        입력값 : {{messageGetter}}<br>
        <input type="text" v-model="message"/>
    </div>
</template>
<script>
import CommonButton from "@/components/Button.vue";

export default {
    name: "HomeComponent",
    components: {
        CommonButton,
    },
    computed: {
        messageGetter() {
            return this.message.split('').reverse().join('');
        },
    },
    data() {
        return {
            value : '',
            message : '',
        };
    },
    methods : {
        setInput(value) {
            this.value = value;
        },
    }
}
</script>
<style scoped>

</style>