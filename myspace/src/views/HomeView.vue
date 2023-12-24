<!-- 利用bootstrap里的cards模板，将内容框起来。更美观-->
<template>
  <ContentBase> 
    首页 
  </ContentBase>
</template>

<script>
import ContentBase from "@/components/ContentBase.vue"; //引入组件

export default {
  name: "HomeView",
  //components表示在template里将会用到哪些组件，将用到的组件都放在compinents中
  components: { 
    ContentBase,
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px; /* container与顶部的距离*/
}
</style>
