<template>
    <div class="card">
        <div class="card-body">
            <!-- 利用for循环输出文本，并且为每个帖子设置一个卡片,:key是vue内置的，必须写的，并且值要唯一 -->
            <div v-for="post in posts.posts" :key="post.id"> 
            <div class="card single-post"> <!-- single-post 是起的别名-->
                <div class="card-body">
                    {{post.content}}
                </div>
            </div>
            </div>
        </div>
    </div>

</template>

<script>
export default{
    name: "UserProfilePosts",
    props:{
        posts:{
            type: Object,
            required: true, //设置为必须接受
        }
    }
}
</script>

<style>
 /* 定义每个卡片的间距 */
.single-post{
    margin-bottom: 10px;
}
</style>