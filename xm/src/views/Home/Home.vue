<template>
  <div class="home">
    <ul>
      <router-link tag="li" to="/home/index">首页</router-link>
      <router-link tag="li" to="/home/classify">分类</router-link>
      <router-link tag="li" to="/home/ranking">排行</router-link>
      <router-link tag="li" to="/home/book">书架</router-link>
    </ul>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return {
      
    }
  }
}
</script>
<style lang='scss' scoped>
  ul{
    height: 44px;
    width: 100%;
    line-height: 44px;
    display: flex;
    background: #333;
    color: #ccc;
    li{
      flex: 1;
      text-align: center;
    }
    li.ave{
      background: #666;
      color: #fff;
    }
  }
  
</style>



