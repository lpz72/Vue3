<template>
 <ContentBase>
    <!-- 在bootstrap官网找模板 -->
    <div class="row justify-content-md-center" > <!-- grid属性：justify-content-md-center，使居中 -->
        <div class="col-3">
        <form @submit.prevent="login"> <!-- 绑定并prevent(阻止)login的默认行为 -->
            <div class="mb-3">
                <label for="username" class="form-label">用户名</label>
                <input v-model="username" type="text" class="form-control" id="username"/>
                <!-- 利用v-model将input和username双向绑定 -->
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">密码</label>
                <input v-model="password" type="password" class="form-control" id="password"/>
            </div>
            <div class = "error-message">{{ error_message }}</div>
            <button type="submit" class="btn btn-primary">登录</button>
            </form>
        </div>
    </div>
    
 </ContentBase>
</template>

<script>
import ContentBase from '@/components/ContentBase.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
import router from '@/router/index';

export default{
    name: "LoginView",
    components:{
        ContentBase,
    },

    setup: () =>{
        const store = useStore();
        let username = ref('');
        let password = ref('');
        let error_message = ref('');

        const login = () =>{
            error_message.value = "";

            //调用actions里的用dispatch,调用mutations里的用commit
            store.dispatch("login",{
                username: username.value,
                password: password.value,

                success(){
                    router.push({name: 'userlist'}); //如果登录成功，则直接跳转到用户列表
                },
                error(){
                    error_message.value = "用户名或密码错误"; //失败时
                }

            });
        }
        

        return{
            //username等价于 username:username
            username,password,error_message,login,
        }
    }

}
</script>

<style scoped>

button{
    width: 100%;
}

.error-message{
    color: red;
}
</style>