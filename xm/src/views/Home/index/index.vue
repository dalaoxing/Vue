<template>
  <div class="index">
    <div class="swiper-container banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(it,inx) in list" :key="inx">
          <img :src="require('@/assets/'+it.img)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/mock/index';
import Swiper from 'swiper';
export default {
  name: 'index',
  data(){
    return {
      list:[]
    }
  },
  created(){
    this.$http('/data/banner').then(res=>{
      this.list=res.data;
      this.$nextTick(()=>{
        new Swiper('.banner',{
          loop:true
        })
      })
    })
  }
}
</script>
<style lang="scss" scoped>
  .banner{
    width: 100%;
    img{
      width: 100%;
    }
  }
</style>