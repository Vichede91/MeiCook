<template>
  <scroller :top="44" :bottom="49">
        <div class="promotion">
            <lazy-component>
            <div v-for="item in dataList" :key="item.id">
                <div class="newPeople">
                    <span>{{item.name}}</span>
                    <p><span>{{item.title}}</span></p>
                </div>
                <p class="newTitle titles">{{item.paragraph1}}</p>
                 <ul class="imgshop">
                    <li v-for="item2 in item.shopImg" :key="item2.id">
                        <div class="shop">
                            <img :src=item2.imgShop alt="">
                        </div>
                        <p class="shop_name">{{item2.name}}</p>
                        <div class="price">
                            <span class="original_price">¥{{item2.price}}</span>
                            <div class="preferential">
                                <span>{{item2.explan}}</span>
                                <h4>¥{{item2.vip}}</h4>
                            </div>
                        </div>
                        <span class="buy">{{item2.buy}}</span>
                    </li>
                </ul>
            </div>
            </lazy-component>
        </div>
    </scroller>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';
Vue.use(Lazyload, {lazyComponent:true});
import {getdiscountpromotionList} from '../../services/discountService'
export default {
      data(){
        return {
            dataList: [],
        }
    },
   created(){
        getdiscountpromotionList()
        .then(data=>{
            console.log(data.promotion)
            this.dataList=data.promotion
        })
    }
}
</script>

<style lang="scss" scoped>
.promotion{
    width:100%;height:100%;padding:32px;
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
     .titles{margin:64px 0 32px 0;width:100%;text-align:center;font-size: 24px;color: #3E1717;line-height: 28px;}
      .imgshop{
          width:100%;margin:20px 0;display:flex;justify-content:space-around; flex-wrap: wrap;
         li{
             width:327px;background: #FCEEE5;margin-bottom:34px;height:100%;padding:14px;
             .shop{
                width:299px;height:340px;margin:0 auto;
                img{width:100%;height:100%;}
             }
             .shop_name{line-height:42px;text-align: center;font-size: 14px;color: #F6A958;}
            .price{
                width:100%;padding-left:36px;margin-bottom:36px;
              .original_price{
                    font-size: 12px;color: #3A0606;text-align: center;padding: 0 15px;
                }
               .preferential{
                    display:inline-block;width:124px;height:58px;border-left:1px solid #F6A958;
                  padding: 0 15px;
                  span{font-size: 12px;color: #3E1717;line-height: 16px;}
                   h4{font-size: 36px;color: #3E1717;letter-spacing: 0;}

               }
            }
            .buy{font-size: 36px;color: #FFFFFF;letter-spacing: 0;line-height: 38px;
            padding:0 42px;background-image: linear-gradient(-194deg, #D5842A 0%, #F3C58C 43%, #D5842A 100%);
            margin-left: 54px;}
        }
    }
}
</style>

