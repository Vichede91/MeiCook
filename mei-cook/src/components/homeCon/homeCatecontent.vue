<template>
    <div>
        <div class="banner">
            <img src="img/Rectangle 5.png" alt="">
            <ul class="huodong">
                <li v-for="item in huodongList" :key="item.src" class="huodong-item">
                        <img :src="item.src" alt="">
                        <span>{{item.title}}</span>
                </li>
            </ul>
            <span>公告：欣和自营电商平台，品质保障</span>
        </div>
        <div class="goods">
                <div class="title">
                    <p>美烹好食</p>
                </div>
                <div class="content">
                    <img src="img/page-1-1_03.jpg">
                    <img src="img/page-1-1_05.jpg">
                </div>
        </div>
    </div>
</template>

<script>
import {getHomeAction} from '../../services/homeService'
export default {
    data(){
        return{
            huodongList:[]
        }     
    },
    created(){
        getHomeAction().then(data=>{
            // console.log(data);
            this.huodongList = data;
        });
    }
}
</script>

<style lang="scss" scoped>
.banner{
    img{
      display: block;
      border: 0;
      width: 100%;
      height: 4.8rem;
    }
    span{
        display: block;
        font-size: 0.24rem;
        line-height: 0.4rem;
        margin-top: 0.38rem;
        margin-left: .5rem;
        color: #101010;
        }
}
.huodong{
    display: flex;
    height: 1.4rem;
    .huodong-item{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            width: 0.6rem;
            height: 0.53rem;
        }
    }
}
.message{
   
    p{ 
        height: 1rem;
        border-top: 0.1rem solid #ECECEC;
        border-bottom: 0.1rem solid #ECECEC;
        font-size: 0.24rem;
        line-height: 0.28rem;
        padding-left: 0.32rem;
        line-height: 1rem;
    }
}
.goods{
    .title{
        height: 1rem;
        text-align: center;
        font-size: 0.28rem;
        line-height: 1rem;
    }
    .content{
        display: flex;
        justify-content: space-between;
        padding: 0 0.32rem;
        img{
            width: 4.32rem;
            height: 2.1rem;
        }
    }
}
</style>
