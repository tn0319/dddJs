<template>
  <div>
    Main
    <div>
      <router-link to="/">Main페이지로</router-link>
    </div>
    
    <br>

    <div>
        <button @click="clickQuery">Query 프로그래밍 방식</button><br>
        <router-link 
          :to="{
            name : 'Query',
            query : {name : 'Query 선언적 방식', age : 1},
          }"
        >
          Query 선언적 방식
        </router-link>
    </div>

    <div>
        <button @click="clickParams">Params 프로그래밍 방식</button><br>
        <router-link 
          :to="{
            name : 'Params',
            params : {name : 'Params 선언적 방식', age : 1},
          }"
        >
          Params 선언적 방식
        </router-link>
    </div>

    <router-view/>
  </div>
</template>
<script>
export default {
  name: "App",
  methods : {
    clickQuery() {
      this.$router.push({
        name : 'Query',
        query : {name : 'Query 프로그래밍 방식', age : 2},
      });
    },
    clickParams() {
      this.$router.push({
        name : 'Params',
        params : {name : 'Params 프로그래밍 방식', age : 2},
      });
    }
  }
}
</script>
<style>
</style>
