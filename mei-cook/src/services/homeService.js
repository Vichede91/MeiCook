import API from '../api'
import {FetchGet, FetchPost} from '../common/fetch'
import { resolve } from 'url';
import { reject } from 'q';


// 首页活动数据
export function getHomeAction(){
    return new Promise((resolve,reject)=>{
        FetchGet(API.HOME_HUODONG_URL)
        .then(data=>{
            // console.log(data);
            resolve(data);
        })
    })
   
}

// 首页明星等数据
export function getHomeShoppingList(){
    return new Promise((resolve,reject)=>{
        FetchGet(API.HOME_SHOPPINGLIST_URL)
        .then(data=>{
            // console.log(data);
            resolve(data);
        })
    }) 
}

 //请求分类列表数据
 export function getCategoryList(){
    return new Promise((resolve,reject)=>{
        FetchGet(API.CATEGORY_LIST_URL)
        .then(data=>{
            resolve({
                categoryL1List:data.categoryL1List.map(item=>{
                    return {
                        id:item.id,
                        name:item.name,
                        wapBannerUrl:item.wapBannerUrl
                    }
                })
            })
        })
    })
}
////请求分类列表商品数据
export function getCategoryListGroup(categoryId){
    return new Promise((resolve,reject)=>{
        FetchGet(API.CATEGOEY_LIST_GROUP_URL,{categoryId})
        .then(data=>{
            console.log(data)
            resolve({
                bannerUrl:data.currentCategory.bannerUrl,
                // id:data.currentCategory.id,
                categoryGroupList:data.categoryGroupList.map(item=>{
                    return {
                        name:item.name,
                        id:item.id,
                        categoryList:item.categoryList.map(items=>{
                            return{
                                id:items.id,
                                name:items.name,
                                frontName:items.name,
                                wapBannerUrl:items.wapBannerUrl,
                                frontDesc:items.frontDesc,
                            }
                        })                           
                    }
                })
            })
        })
    })
}
