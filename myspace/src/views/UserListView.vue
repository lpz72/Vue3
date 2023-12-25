<template>
    <ContentBase>
        <div class="card" v-for="user in users" :key=" user.id">
            <div class="card-body">
                <div class="row">
                    <div class="col-1">
                     <img class = "img-fluid" :src="user.photo" alt=""> <!-- 注意这里是绑定 -->
                    </div>
                    <div class="col-11">
                        <div calss = "username">{{ user.username }}</div>
                        <div class = "follower-count"> {{ user.followerCount }}</div>
                    </div>
                </div>
            </div>
        </div>
    </ContentBase>
</template>

<script>
import ContentBase from '@/components/ContentBase.vue';
import $ from 'jquery'
import { ref } from 'vue';

export default{
    name: "UserList",
    components:{
        ContentBase,
    },

    setup: () =>{
        let users = ref([]);

        //从云端获取用户信息
        $.ajax({
            url:"https://app165.acapp.acwing.com.cn/myspace/userlist/", //API
            type: "get",
            success(resp) {
                users.value = resp;
            }

        })

        return {
            users,
        }
    }
}
</script>

<style scoped>


.username{

    font-weight: bold;
    height: 50%;
}

.follower-count{

    font-size: 12px;
    color: gray;
    height: 50%;

}
img{
    border-radius: 50%;
}

.card{
    margin-bottom: 20px;
    cursor: pointer; /* 鼠标特效，小手 */
}

.card:hover{
    box-shadow: 2px 2px 10px lightgray; /* 鼠标移动到用户列表时的特效 */
    transition: 500ms; /* 延时500ms */
}
</style>