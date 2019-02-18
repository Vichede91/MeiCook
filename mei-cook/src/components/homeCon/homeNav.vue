<template>
    <div id="nav">
      <nav class="nav">
        <ul class="nav-list" ref="list">
            <li v-for="(item,index) in tabList" :key="item.index" 
            :class="{active: selectIndex===index}"
            ref="item" @click="selectTab(index)">
                {{item}}
            </li>
        </ul>
     </nav>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    
    data(){
        return {
            tabList: ['精选','全部商品','厨房调味','粮油副食','休闲小食','安心果蔬','熟食美味','都是瘦肉','这是肥肉'],
            selectIndex: 0
        }
    },
    methods:{
        selectTab(index){
            this.selectIndex = index;
            // console.log(this.selectIndex);
        }
    },
    created(){

        this.$nextTick(()=>{
                //识别宽度
                let width = 0;
                
                this.$refs.item.map(item=>{
                    width += item.offsetWidth;
                    // console.log(width);
                })
                // 设置宽度
                this.$refs.list.style.width = (width+145)+'px';
                //创建滚动视图
                new BScroll('.nav', {
                    scrollX: true,
                    scrollY: false,
                    click: true
                });
            })
       
    }
}
</script>

<style lang="scss" scoped>
#nav{
      width:100%;height:60px;
     position:absolute;top:88px;left:0;
     overflow: hidden;
     ul{
         display: flex;
         flex-direction:row;
         white-space: nowrap;
         li{
            padding: 10px 10px;
            margin: 0 20px;
            &.active{
                color: #BA874F;
                border-bottom: 5px solid #BA874F;
            }
            box-sizing: border-box;
        }
     }
}
</style>

