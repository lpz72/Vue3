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
        <!--
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'userprofile', params:{userId: 2}}">用户动态</router-link>
        </li>
      -->
      </ul>
      <!-- 没有登录时 -->
      <ul class="navbar-nav" v-if="!$store.state.user.is_login"> <!-- 用了store后可以直接调用，不用再父子组件传值 -->
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'login'}">登录</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'register'}">注册</router-link>
        </li>
      </ul>
      <!-- 登录时 -->
      <ul class="navbar-nav" v-else>
        <li class="nav-item">
          <!-- 点击后跳转到用户状态 -->
          <router-link class="nav-link" :to="{name: 'userprofile', params:{userId:$store.state.user.id}}">
            {{$store.state.user.username}}</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" style="cursor: pointer;" @click="logout" >退出</a> <!-- 不用再跳转，改为a，鼠标形状改为小手-->
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

//写js，脚本
<script>
import { useStore } from 'vuex';

export default{
    name: "NavBar",

    setup: () =>{
      const store = useStore();
     
      //实现退出功能
      const logout = () => {
        store.commit('logout');
      }

      return{
        logout,
      }
    }
}
</script>

//写CSS，样式
//加上属性scoped后，在此组件写的CSS选择器都不会影响其他组件
<style scoped>

</style>