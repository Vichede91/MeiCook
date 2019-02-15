<template>
  <scroller :top="44" :bottom="49">
        <div class="healhty">
            <lazy-component>
            <div v-for="item in dataList" :key="item.id">
                <div class="newPeople">
                    <span>{{item.name}}</span>
                    <p><span>{{item.title}}</span></p>
                </div>
                 <ul class="origin">
                    <li v-for="item2 in item.origin" :key="item2.id">
                        <img :src=item2.banner alt="">
                        <div class="origin_con">
                            <h3 class="con_title">{{item2.name}}</h3>
                           <p>{{item2.explains}}</p>
                        </div>
                    </li>
                </ul>
                <ul class="advantage clear-fix">
                    <h2>{{item.name}}</h2>
                    <p>{{item.title}}</p>
                    <li v-for="item3 in item.advantage" :key="item3.id">
                        <div class="origin_con">
                            <img :class="item3.id%2==0?'ad_left':'' " :src=item3.img alt="">
                            <div :class="item3.id%2!==0?'ad_right':'' "  class="advantage_right">
                                <h5>{{item3.serves}}</h5>
                                <p>{{item3.explains}}</p>
                            </div>
                        </div>
                    </li>
                </ul>
                 <ul class="advantage_two clear-fix">
                    <h2>{{item.name}}</h2>
                    <p>{{item.title}}</p>
                     <img :src=item.bannerUrl alt="">
                   
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
import {getdiscounthealthyList} from '../../services/discountService'
export default {
      data(){
        return {
            dataList: [],
        }
    },
   created(){
        getdiscounthealthyList()
        .then(data=>{
            console.log(data.healthy)
            this.dataList=data.healthy
        })
    }
}
</script>

<style lang="scss" scoped>
.healhty{
    width:100%;height:100%;padding:32px;
    .newPeople{
        width:186px;height:248px;
        border: 1px solid #260A0A;margin:64px 0 72px 264px;
        span{display:inline-block;width:100%;text-align: center;margin-top:32px;font-size: 48px;line-height: 50px;color: #3E1717; }
        p{
            width:222px;line-height: 38px;background:#fff;margin-left: -18px;
            span{
               font-size:36px;
                color: #3E1717;text-align: center;
            }
        }
    }
    .origin{
          width:100%;margin:64px 0;
         li{
           padding:0 32px;background: #F1F1F1;
            img{width:100%;padding:16px;}
            .origin_con{
                padding:0 54px;
                h3{text-align: center;color: #3F2020;font-size: 38px;}
                p{font-size: 28px;line-height: 46px;color: #3F2020;letter-spacing: 0;}
            }
        }
    }
    .advantage{
        width:100%;background: #F1F1F1;padding:64px 0;
        h2{text-align: center;font-size: 32px;line-height: 38px;color: #3F2020;}
        p{color: #3F2020;font-size: 32px;line-height: 38px;margin:32px 0;text-align: center;}
         li{
            margin-top:32px;
           .origin_con{
               padding:0 56px;height:220px;width:100%;
               img{width:288px;height:220px;float:left;}
               .ad_left{float:right;width:288px;height:220px;}
               .advantage_right{
                   padding:42px 0;width:260px;height:220px;
                   h5{color: #BA874F;font-size:32px;line-height:38px;}
                   p{color: #3F2020;font-size: 28px;line-height: 34px;}
               }
               .ad_right{float:left; padding:42px 0;}
           }
        }
    }
    .advantage_two{
         width:100%;background: #F1F1F1;padding:64px 0;margin-top:64px;
        h2{text-align: center;font-size: 32px;line-height: 38px;color: #3F2020;}
        p{color: #3F2020;font-size: 32px;line-height: 38px;margin:32px 0;text-align: center;}
        img{width:100%;padding:16px;}
    }
}
</style>

