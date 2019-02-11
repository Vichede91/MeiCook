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
                })
            }
        )
    })
    
}