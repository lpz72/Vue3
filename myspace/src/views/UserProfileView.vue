<template>
    <ContentBase> <!--使用bootstrap里的grid模板，实现布局管理，由于ContenBase里有container，这里就不再定义-->
        <div class="row">
            <div class="col-3"> 
             <UserProfileInfo @follow="follow" @unfollow="unfollow" :user = "user"/> <!--向子组件传递参数 -->
            <UserProfileWriter @post_a_post = "post_a_post"/>
            </div>
            <div class="col-9"> 
                <UserProfilePosts :posts = "posts"/> <!-- 子组件绑定属性,将帖子传到子组件中 -->
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

export default{
    name: "UserProfile",
    components:{
        ContentBase,UserProfileInfo,UserProfilePosts,UserProfileWriter,
    },

    setup:() =>{
        //定义用户信息
        //reactive与ref的区别是，reactive不可以重新赋值
        const user = reactive({
            id: 1,
            username:"li pengzhen",
            firstname: "pengzhen",
            lastname: "li",
            followcount: 0,
            is_followed: false,
        })

        //关注
        const follow = () => {
            if (user.is_followed) return;
            user.is_followed = true;
            user.followcount ++;
        };
        //取消关注
        const unfollow = () => {
            if (!user.is_followed) return;
            user.is_followed = false;
            user.followcount --;
        };

        //定义帖子
        const posts = reactive({
            count: 3, //帖子数量
            posts:[
                {
                    id:1,
                    userid:1,
                    content: "今天真开心",
                },
                {
                    id:2,
                    userid:1,
                    content: "今天非常开心",

                },
                {
                    id:3,
                    userid:1,
                    content: "今天超级开心",
                }
            ]
        })

        const post_a_post = (content) =>{
            posts.count ++;
            //在最上方增加一个帖子
            posts.posts.unshift({
                id:posts.count,
                userid:1,
                content: content,
            });
        }

        return{
            user,
            follow,
            unfollow,
            posts,
            post_a_post,
        }
    }

}
</script>

<style scoped>

</style>