<template>
  <div class="details">
    详情
    <Item :item="item">
      <template v-slot:jump>
        <p>作者：{{item.authorName}}</p>
        <p>更新至：{{item.updteChapterName}}</p>
        <p>简介：{{item.description}}</p>
        <b @click.stop="toBook"> + 书架</b>
      </template>
    </Item>
  </div>
</template>

<script>
import Item from '@/components/item.vue';
import '@/mock/index';
export default {
  components:{
    Item
  },
  data(){
    return {
      item:this.$route.query.item
    }
  },
  methods:{
    toBook(){
      this.$router.push('/home/book')
    }
  }
}
</script>