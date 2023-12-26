<template>
    <div class="card">
        <div class="card-body">
            <!-- 利用for循环输出文本，并且为每个帖子设置一个卡片,:key是vue内置的，必须写的，并且值要唯一 -->
            <div v-for="post in posts.posts" :key="post.id"> 
            <div class="card single-post"> <!-- single-post 是起的别名-->
                <div class="card-body">
                    {{post.content}}
                    <!-- 传帖子id -->
                    <button @click="delete_a_post(post.id)" v-if="is_me" type="button" class="btn btn-danger btn=sm">删除</button>
                </div>
            </div>
            </div>
        </div>
    </div>

</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import $ from 'jquery';

export default{
    name: "UserProfilePosts",
    props:{
        posts:{
            type: Object,
            required: true, //设置为必须接受
        },

        user:{
            type:Object,
            required: true,
        },
    },

    setup:(props,context) =>{
        const store = useStore();
        //判断当前用户是否是自己,只有是自己时，帖子才能显示删除按钮
        let is_me = computed(() => store.state.user.id === props.user.id);

        //定义一个删除帖子事件
        const delete_a_post = post_id => {
            //调用后端API删除一个帖子,是永久删除
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/post/",
                type: "DELETE",
                data:{
                    post_id,
                },

                headers:{
                    'Authorization': "Bearer " + store.state.user.access,
                },

                success(resp){
                    if (resp.result === "success"){
                        context.emit("delete_a_post",post_id);
                    }
                }
            });

           
        }

        return {
            is_me,
            delete_a_post
        }
    }
}
</script>

<style scoped>
 /* 定义每个卡片的间距 */
.single-post{
    margin-bottom: 10px;
}

button{
    float: right; /* 向右浮动 */
}
</style>