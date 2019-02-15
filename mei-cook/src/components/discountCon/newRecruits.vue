<template>
    <scroller :top="44" :bottom="49">
        <div class="news">
             <lazy-component>
            <div class="banner">
                <img :src=banner alt="">
            </div>
            <div v-for="item in dataList" :key="item.id">
                <div class="newPeople">
                    <span>{{item.name}}</span>
                    <p><span>{{item.title}}</span></p>
                </div>
                <p class="newTitle titles">{{item.paragraph1}}</p>
                <p class="newTitle">{{item.paragraph2}}</p>
                <ul class="imgList" v-show="item.id<3?true:false">
                    <li  v-for="item1 in item.imageList" :key="item1.id">
                        <img :src=item1.imgdiscount alt="">
                    </li>
                </ul>
                 <ul class="imgshop" v-show="item.id===3?true:false">
                    <li v-for="item2 in item.shopImg" :key="item2.id">
                        <div class="shop">
                            <img :src=item2.imgShop alt="">
                        </div>
                        <p class="shop_name">{{item2.name}}</p>
                        <div class="price">
                            <span>{{item2.vip}}</span>
                            <span>{{item2.price}}</span>
                        </div>
                        <span class="buy">{{item2.buy}}</span>
                    </li>
                </ul>
                <ul class="imgpreference" v-show="item.id>3?true:false">
                    <li  v-for="item3 in item.preference" :key="item3.id">
                         <img :src=item3.imgPreference alt="">
                    </li>
                </ul>
                <div class="speek">
                    <h6>说明</h6>
                    <p>{{item.explain}}</p>
                </div>
            </div>
              </lazy-component>
        </div>
    </scroller>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

// options 为可选参数，无则不传
Vue.use(Lazyload, {lazyComponent:true});
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
            console.log(data.giftPackage)
            this.banner = data.bannerList
            this.dataList=data.giftPackage
        })
    }
}
</script>

<style lang="scss" scoped>
.news{
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
           width:222px;line-height: 38px;background:#fff;margin-left: -18px;
            span{
               font-size:36px;
                color: #3E1717;text-align: center;
            }
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
    .imgshop{
          width:100%;margin:20px 0;display:flex;justify-content:space-around;
         li{
             width:327px;height:592px;background: #FCEEE5;
             .shop{
                width:299px;height:340px;margin:14px auto;
                img{width:100%;height:100%;}
             }
             .shop_name{line-height:42px;text-align: center;font-size: 14px;color: #F6A958;}
            .price{
                width:100%;padding-left:36px;margin-bottom:36px;
                span:first-child{
                    display:inline-block;width:124px;height:58px;border-right:1px solid #F6A958;
                    font-size: 12px;color: #3A0606;text-align: center;padding:3px;
                }
                span:last-child{
                    background: #F6A958;padding:5px;margin-left:10px;
                }
            }
            .buy{font-size: 36px;color: #FFFFFF;letter-spacing: 0;line-height: 38px;
            padding:0 42px;background-image: linear-gradient(-194deg, #D5842A 0%, #F3C58C 43%, #D5842A 100%);
            margin-left: 54px;}
        }
    }
    .imgpreference{
          width:100%;margin:20px 0;
          li{
               width:686px;height:400px;margin-bottom:32px;
                img{width:100%;height:100%;}
          }

    }
    .speek{
        background: #F1F1F1;width:100%;
        h6{font-size: 36px;text-align: center;margin:36px 0 30px 0;color: #3E1717;
        display:inline-block;line-height: 36px;width:100%;}
        p{padding: 0 42px 0 42px;color: #3E1717;font-size: 28px;line-height: 40px;}
    }
}

</style>

