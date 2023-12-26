import $ from "jquery";
import { jwtDecode } from 'jwt-decode';

const ModuleUser = {
    state: {
        id: "",
        username: "",
        photo: "",
        followerCount: 0,
        access: "",
        refresh: "",
        is_login: false,
    },
    getters: {
    },
    mutations: {
        updateUser(state,user){
            state.id = user.id;
            state.username = user.username;
            state.photo = user.photo;
            state.followerCount = user.followerCount;
            state.access = user.access;
            state.refresh = user.refresh;
            state.is_login = user.is_login;
        },
        undateaccess(state,access){
            state.access = access;
        },

        //退出时清空用户信息
        logout(state){
            state.id = "";
            state.username = "";
            state.photo = "";
            state.followCount = "";
            state.access = "";
            state.refresh = "";
            state.is_login = false;
        }

    },
    actions: {
        login(context,data){
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/api/token/",
                type: "POST",
                data:{
                    username: data.username,
                    password: data.password,
                },
                success(resp){
                    const {access,refresh} = resp;
                    const access_obj = jwtDecode(access);

                    setInterval(() => {
                        $.ajax({
                            url: "https://app165.acapp.acwing.com.cn/api/token/refresh/",
                            type: "POST",
                            data:{
                                refresh,
                            },
                            success(resp){
                                //因为mutations不能支持异步，所以需要分开写
                               context.commit("updateaccess",resp.access);
                            },
                        })
                    },4.5*60*1000)//每隔4.5分钟自动刷新一次

                    
                    //获取某个用户的信息
                    $.ajax({
                        url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
                        type: "GET",
                        data: {
                            user_id: access_obj.user_id,
                        },
                        //规定格式,jwt验证
                        headers: {
                            'Authorization': "Bearer " + access,
                        },

                        success(resp){
                            //调用mutations里的函数
                            context.commit("updateUser",{
                                ...resp, //重构resp
                                access: access,
                                refresh: refresh,
                                is_login: true,
                            });
                            data.success();
                        },
                        
                    })
                },
                error(){
                    data.error();
                }
            });
        }
    },
    modules: {
    }
};

export default ModuleUser