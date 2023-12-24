//导航栏组件
//写html
<template>
    <!--模板在bootstrap官网 -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container"> <!-- -fluid是更靠左，去掉更靠中间些 -->
    <!-- <router-link .... :to="{name: xxx}"> yyy</router-link> 
      可以实现前端渲染，即点击导航栏时在网页不刷新的前提下跳转，
      每刷新一次就说明向服务器重新请求一遍数据，这就不是前端渲染 -->
    <router-link class="navbar-brand" :to="{name : 'home'}"> Myspace</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'home'}">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'userlist'}">好友列表</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'userprofile'}">用户动态</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'login'}">登录</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'register'}">注册</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

//写js，脚本
<script>
export default{
    name: "NavBar",
}
</script>

//写CSS，样式
//加上属性scoped后，在此组件写的CSS选择器都不会影响其他组件
<style scoped>

</style>