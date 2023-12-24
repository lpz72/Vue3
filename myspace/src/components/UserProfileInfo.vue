<template>
  <!-- 用卡片括起来 div.card>div.card-body -->
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-3">
          <img
            class="img-fluid"
            src="https://cdn.acwing.com/media/user/profile/photo/139053_lg_6f98970e73.jpg"
            alt=""
          />
        </div>
        <!--加上img-fluid ,使图片自适应大小-->
        <div class="col-9">
          <div class="username">{{fullname}}</div>
          <div class="fans">粉丝数:{{user.followcount}}</div>
          <!-- 在bootstrap搜索按钮样例,btn-sm是将按钮设置为小 -->
          <!-- @clink绑定事件-->
          <button @click="follow"  v-if="!user.is_followed"  type="button" class="btn btn-secondary btn-sm">+关注</button>
          <button @click="unfollow" v-if="user.is_followed"  type="button" class="btn btn-secondary btn-sm">取消关注</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from 'vue';

export default {
  name: "UserProfileInfo",

  //利用props，子组件可以接受父组件传送的信息
  //父组件向子组件传递信息利用proc,子组件向父组件传递利用事件触发
  props:{
    user:{
        type:Object,
        required: true,
    },
  },

  setup:(props,context) =>{
    //利用computed动态计算全名
    let fullname = computed(() => props.user.lastname + ' ' + props.user.firstname);

        //关注
        const follow = () =>{
            //触发父组件绑定的函数
            context.emit("follow");
        }
        //取消关注
        const unfollow = () =>{
            context.emit("unfollow");
        }

    return {
        fullname,follow,unfollow
    }

  }

};
</script>

<style scoped>
/* 将图片设置为圆形*/
img {
  border-radius: 50%;
}

.username {
  font-weight: bold; /* 变粗*/
}

.fans {
  font-size: 12px; /* 字体大小 */
  color: gray; /* 字体颜色深浅*/
}

button {
  padding: 2px 4px; /* 高2px，宽4px*/
  font-size: 12px;
}
</style>