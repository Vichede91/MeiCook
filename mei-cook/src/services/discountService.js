import API from '../api'
import {FetchGet, FetchPost} from '../common/fetch'

// 请求首页的分类
export function getdiscountTopList(){
    // 使用async， await
    return new Promise((resolve, reject)=>{
        FetchGet(API.DISCOUNT_TOP_URL)
        .then(
            (data)=>{
                // 过滤数据
                resolve(data)
            }
        )
    })
    
}

export function getdiscountnewList(){
    // 使用async， await
    return new Promise((resolve, reject)=>{
        FetchGet(API.DISCOUNT_NEWRECRUITE_URL)
        .then(        
            (data)=>{
                // 过滤数据
                console.log(data)
                resolve({
                    bannerList:data.bannerList,
                    giftPackage:data.giftPackage.map((item)=>{
                        return {
                            id:item.id,
                            num:'0'+item.num,
                            title:item.title,
                            paragraph1:item.paragraph1,
                            paragraph2:item.paragraph2,
                            imageList:item.imageList.map(item1=>{
                                return{
                                    id:item1.id,
                                    imgdiscount:item1.img
                                }
                            }),
                            shopImg:item.shopImg.map(item2=>{
                                return{
                                    id:item2.id,
                                    imgShop:item2.img,
                                    name:item2.name,
                                    vip:item2.vip,
                                    price:item2.price,
                                    buy:item2.buy
                                }
                                
                            }),
                            preference:item.preference.map(item3=>{
                                return{
                                    id:item3.id,
                                    imgPreference:item3.img
                                }
                                
                            }),
                            explain:item.explain
                        }
                    })
                })
            }
        )
    })
    
}