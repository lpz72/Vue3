<template>
  <NavBar /> <!-- html里引入Navbar组件-->
  <router-view :key="$route.fullPath" /> 
  <!--根据不同网址做一个分页展示,:key="$route.fullPath"表示是全称连接作对比，不同则跳转-->
</template>

<script>
import NavBar from './components/NavBar.vue'; //引入Navbar组件

//export进来
export default{
  name: "App",
  components: {
    NavBar,
  }
}
</script>

<style>
</style>
