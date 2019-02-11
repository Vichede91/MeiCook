<template>
<scroller :top="44" :bottom="49">
    <div class="news">
        <div class="banner">
            <img src="img/banner@1x.png" alt="">
        </div>
        <div>
            <div class="newPeople">
                <span>01</span>
                <p>新人专享礼包</p>
            </div>
            <p class="newTitle titles">新用户注册即可获得</p>
            <p class="newTitle">价值100元新人礼包</p>
            <ul class="imgList">
                <li><img src="img/Rectangle 4 Copy 2@3x.png" alt=""></li>
                <li><img src="img/Rectangle 4 Copy 2@3x.png" alt=""></li>
                <li><img src="img/Rectangle 4 Copy 2@3x.png" alt=""></li>
                <li><img src="img/Rectangle 4 Copy 2@3x.png" alt=""></li>
            </ul>
            <div class="speek">
                <h6>说明</h6>
                <p>注册成功后，系统会自动发送优惠券到个人账户
                    中，点击个人中心-我的优惠券即可查看，购物
                    结算时选择使用优惠券即可直接抵扣。</p>
            </div>
        </div>
    </div>

</scroller>
</template>

<script>
import {getdiscountnewList} from '../../services/discountService'
export default {
    data(){
        return {
            banner:'',
            dataList: [],
        }
    },
   created(){
        getdiscountnewList()
        .then(data=>{
            this.banner = data.bannerList
            console.log(data.bannerList)
        })
    }
}
</script>

<style lang="scss" scoped>
.news{
//    width: 100%;
//     position: absolute;
//     top: 88px;
//     left: 0;
//     bottom:98px;
//     z-index: 2;  
    width:100%;height:100%;padding:32px;
    .banner{
        width:100%;height:800px;
        img{width:100%;height:100%;}
    }
    .newPeople{
        width:186px;height:248px;
        border: 1px solid #260A0A;margin:64px 0 0 264px;
        span{display:inline-block;width:100%;text-align: center;margin-top:32px;font-size: 48px;line-height: 50px;color: #3E1717; }
        p{
            width:222px;height:72px;line-height: 38px;font-size:36px;background:#fff;
            color: #3E1717;margin-left: -18px;text-align: center;
        }
    }
    .titles{margin:64px 0 32px 0;}
    .newTitle{width:100%;text-align:center;font-size: 24px;color: #3E1717;line-height: 28px;}
    .imgList{
        width:100%;margin:20px 0;
        li{
            width:164px;height:160px;float:left;margin-right:10px;
            img{width:100%;height:100%;}
        }
        li:last-child{margin:0;}
    }
    .speek{
        background: #F1F1F1;width:100%;
        h6{font-size: 36px;text-align: center;margin:36px 0 30px 0;color: #3E1717;
        display:inline-block;line-height: 36px;width:100%;}
        p{padding: 0 42px 0 42px;color: #3E1717;font-size: 28px;line-height: 40px;}
    }
}

</style>

