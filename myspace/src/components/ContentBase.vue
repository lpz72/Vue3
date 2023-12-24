<!-- 不同的页面有一些公共部分，公共部分用一个组件表示-->
<!-- 利用bootstrap里的cards模板，将内容框起来。更美观-->
<template>
    <div class="home">
      <div class="container"> <!-- 将内容放下container中，方便调整-->
        <div class="card">
          <div class="card-body">
          <slot> </slot> <!-- 将子元素渲染进来,获取子元素 -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContentBase"
  }
  </script>
  
  <style scoped>
  .container{
   margin-top: 20px; /* container与顶部的距离*/ 
  }
  </style>
  