<template>
  <div class="classify">
    <div class="head">
      <p v-for="(it,inx) in headList" :key="inx" :class="{ave:index===inx}" @click="clk(inx)">{{it}}</p>
    </div>
    <div class="list">
      <Item v-for="(it,inx) in newList" :key="inx" :item="it">
        <template v-slot:list>
          <p>作者：{{it.authorName}}</p>
          <p>更新至：{{it.updteChapterName}}</p>
          <p>简介：{{it.description}}</p>
        </template>
      </Item>
    </div>
  </div>
</template>

<script>
import '@/mock/index';
import Item from '@/components/item';
export default {
  name: 'classify',
  components:{
    Item
  },
  data(){
    return {
      headList:['热门','新书','免费','完本'],
      index:0,
      list:{},
      newList:[]
    }
  },
  created(){
    this.$http('/data/list').then(res=>{
      this.list=res.data;
      this.newList=res.data['ranklist'+this.index];
    })
  },
  methods:{
    clk(inx){
      this.index=inx;
      this.newList=this.list['ranklist'+this.index];
    }
  }
}
</script>
<style lang='scss' scoped>
  .head{
    height: 44px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    p{
      height: 30px;
      line-height: 30px;
      flex: 1;
      margin:0 10px;
      background: #f5f4f4;
      text-align: center;
      border-radius: 8px;
    }
    .ave{
      background: tomato;
      color: #fff;
    }
  }
  
</style>