<template>
  <div class="card edit-post">
    <div class="card-body">
      <label for="exit-post" class="form-label">编辑发帖</label>
      <textarea v-model="content" class="form-control" id="edit-post" rows="3"></textarea>
      <button @click="post_a_post" type="button" class="btn btn-primary btn=sm">发帖</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import $ from 'jquery';
import { useStore } from 'vuex';

export default {
  name: "UserProfile",
  setup: (props,context) =>{

        const store = useStore();
        let content = ref('');

        const post_a_post = () =>{

          $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/post/",
            type: "POST",
            data:{
              content: content.value,
            },

            headers:{
                'Authorization': "Bearer " + store.state.user.access,
            },
            
           success(resp){
            if (resp.result === "success"){
            context.emit('post_a_post',content.value); 
            //点击发帖后子组件会触发父组件的post_a_post函数，参数为content
            content.value = "";
            }
           }

          })

            
        }

        return {
            content,
            post_a_post,
        }
  }

};
</script>

<style scoped>
.edit-post {
  margin-top: 20px;
}

button{
    margin-top: 10px;
}
</style>