<template>
    <ContentBase> <!--使用bootstrap里的grid模板，实现布局管理，由于ContenBase里有container，这里就不再定义-->
        <div class="row">
            <div class="col-3"> 
             <UserProfileInfo @follow="follow" @unfollow="unfollow" :user = "user"/> <!--向子组件传递参数 -->
            <UserProfileWriter v-if="is_me" @post_a_post = "post_a_post"/>
            </div>
            <div class="col-9"> 
                <UserProfilePosts :user="user" :posts = "posts" @delete_a_post="delete_a_post"/> <!-- 子组件绑定属性,将帖子传到子组件中 -->
            </div>
        </div>
    </ContentBase>
</template>

<script>
import ContentBase from '@/components/ContentBase.vue';
import UserProfileInfo from '@/components/UserProfileInfo.vue';
import UserProfilePosts from '@/components/UserProfilePosts.vue';
import UserProfileWriter from '@/components/UserProfileWriter.vue';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import $ from 'jquery';
import { computed } from 'vue';

export default{
    name: "UserProfile",
    components:{
        ContentBase,UserProfileInfo,UserProfilePosts,UserProfileWriter,
    },

    setup:() =>{
        const store = useStore();
        const router = useRoute();
        const userId = parseInt(router.params.userId); //转换成整数，初始是字符串，在下面匹配时会出现问题

        //定义用户信息
        //reactive与ref的区别是，reactive不可以重新赋值
        const user = reactive({});

        //定义帖子
        const posts = reactive({}); //里面有两个变量:count,posts数组

        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
            type: "GET",
            data:{
                user_id: userId,
            },
            headers:{
                'Authorization': "Bearer " + store.state.user.access,
            },

            success(resp){
                user.id = resp.id;
                user.username = resp.username;
                user.photo = resp.photo;
                user.followerCount = resp.followerCount;
                user.is_followed = resp.is_followed;
            }
        });

        //从云端获取用户的所有帖子
        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/post/",
            type: "GET",
            data:{
                user_id: userId,
            },

            headers:{
                'Authorization': "Bearer " + store.state.user.access,
            },
            success(resp){
                posts.count = resp.length;
                posts.posts = resp;
            }
            

        });

        //动态计算是否是自己
        const is_me = computed(() =>userId == store.state.user.id);



         //关注
         const follow = () => {
            if (user.is_followed) return;
            user.is_followed = true;
            user.followerCount ++;
        };
        //取消关注
        const unfollow = () => {
            if (!user.is_followed) return;
            user.is_followed = false;
            user.followerCount --;
        };


        const post_a_post = content =>{
            posts.count ++;
            //在最上方增加一个帖子
            posts.posts.unshift({
                id:posts.count,
                userId:1,
                content: content,
            });
        };


        const delete_a_post = post_id =>{
            //留下id与post_id不相同的帖子，过滤
            posts.posts = posts.posts.filter(post => post.id != post_id); 
            posts.count = posts.posts.length;
        };

        return{
            user,
            follow,
            unfollow,
            posts,
            post_a_post,
            delete_a_post,
            is_me,
        }
    }

}
</script>

<style scoped>

</style>