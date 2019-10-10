<!--  -->
<template>
    <div class="item" @click="toXq">
        <dl>
            <dt>
                <img :src="item.coverUrl" alt="">
            </dt>
            <dd>
                <h4>{{item.bookName}}</h4>
                <slot name="list"></slot>
                <slot name="jump"></slot>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    name:'item',
    props:{
        item:{
            type:Object,
            default:{}
        }
    },
    data () {
        return {

        };
    },
    methods:{
        toXq(){
            this.$router.push({
                path:'/details',
                query:{
                    item:this.item
                }
            })
        }
    }
}

</script>
<style lang='scss' scoped>
    dl{
        box-sizing: border-box;
        padding: 15px 10px;
        display: flex;
        dt{
            border: 1px solid tomato;
            width: 74px;
            height: 98px;
            margin-right: 15px;
        }
        dd{
            p{
                width: 260px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
</style>