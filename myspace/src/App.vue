<template>
  <NavBar /> <!-- html里引入Navbar组件-->
  <router-view/> <!--根据不同网址做一个分页展示-->
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
