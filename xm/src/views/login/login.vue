<template>
  <div class="login">
    <p><input type="text" placeholder="请输入用户名" v-model="user"></p>
    <p><input type="text" placeholder="请输入密码" v-model="pwd"></p>
    <button @click="toLogin">登陆</button>
  </div>
</template>

<script>

export default {
  name: 'login',
  data(){
    return {
      user:'',
      pwd:''
    }
  },
  methods:{
    toLogin(){
      this.$http.post('/data/login',{user:this.user,pwd:this.pwd}).then(res=>{
        if(res.data.code===1){
          alert('登陆成功')
        }else{
          alert('登陆失败请重新登录')
        }
      })
    }
  }
}
</script>