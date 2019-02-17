<template>
<div id="home" class="page">
    <header class="header">
        <a class="logo" href="javascript: ;"><img src="/img/Page 1 Copy 2.png"></a>
        <p><van-icon name="search" />想吃什么吗？</p>
      <van-icon name="comment-o"/>   
    </header>

    <HomeNav :data="getIndex"></HomeNav>

    <scroller :bottom="49" :top="84">
      <template v-if="isShow">
        <HomeCateconten/>
        <HomeContent/>
      </template>

      <template v-else-if="isShow2">

      </template>

    </scroller>
</div>
</template>

<script>
// import homeNav from '../../components/homeCon/homeNav'
import HomeNav from '@/components/homeCon/homeNav'
import HomeCateconten from '../../components/homeCon/homeCatecontent'
import HomeContent from "../../components/homeCon/homeContent"

export default {
    props:["data"],
    components:{
        HomeNav,
        HomeCateconten,
        HomeContent
    },
    data(){
        return{
            selectIndex:0,
            isShow:true,
            isShow2:false
        }
    },
    methods:{
        getIndex(index){
            console.log(indthis.selectIndexex);
            this.selectIndex = index;
            if(index==0){
                this.isShow = true;
                this.isShow2 = false;
            }else{
                this.isShow = false;
                this.isShow2 = true;
            }
            console.log(this.isShow);
        }
    }
}
  
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  .header {
    display: flex;
    width: 100%;
    height: 88px;
    position: absolute;
    top: 0;
    left: 0;
    padding: 16px;
    background: #fff;
    justify-content: space-around;
    p{
      background: rgb(247, 242, 242);
      height: 56px;
      width: 500px;
      border-radius: 28px;
      line-height: 56px;
      padding-left: 60px;
      color: #999;
      font-size: 24px;
      position: relative;
      .van-icon {
        position: absolute;
        left: 20px;
        top: 12px;
        font-size: 32px;
      }
    }
    .van-icon{
        font-size: 50px;
    }
  }
}
</style>
