<template>
  <div>
      <router-link to="/best">bestItem 페이지</router-link><br>
      <router-link to="/list">List 페이지</router-link><br>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
}
</script>
<style>
</style>
