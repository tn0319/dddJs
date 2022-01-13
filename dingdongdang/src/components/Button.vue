<template lang="ko">
    <div>
        부모에게 받은 데이터 : {{name}} <br>
        
        Emit Data :
        <input type="text" v-model="value"/>
        <button @click="onEmit">{{name}} Emit</button>
    </div>
</template>
<script>
export default {
    name : "CommonButton",
    props: {
        name: String,
    },
    data() {
        return {
            value : '',
        }
    },
    methods: {
        onEmit() {
            this.$emit("setInput", this.value);
        },
    }
}
</script>
<style scoped>

</style>