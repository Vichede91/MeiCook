const express = require('express');
const api = require('./api');
const url = require('url');
const axios = require('axios');
const bodyParser = require('body-parser');
const fs = require('fs');
const {mock,Random} = require('mockjs');
const discount=require('./data/discount/newRrecruits')


const app = express();
//请求首页的分类
app.get(api.DISCOUNT_TOP_URL,(req,res)=>{
    let result =mock({
        status:0,
        message:'ok',
        data:{
           'tabList':[
               {id:111,title:'新人专享'},
               {id:112,title:'优惠促销'},
               {id:113,title:'健康生活'}             
            ],
           
        }
    })
    res.json(result)
})

//请求优惠叶新人专享数据：
app.get(api.DISCOUNT_NEWRECRUITE_URL,(req,res)=>{
    // let result=require('./data/discount/newRrecruits')
    let result =mock({
        status:0,
        message:'ok',
        data:{
            'bannerList':"@image('686x800','@color','@name')",
            'giftPackage|2':[
                {
                    'id|+1':01,
                    name:'@ctitle',
                    'title|6':'@name',
                    'explainOne|10-20':'@name',
                    'explainTwo|10-20':'@name',
                    'bannerShop1|2':"@image('299x340','@color','@name')",
                    'bannerShop2|8-10':"@image('299x340','@color','@name')",
                    'tabImg':[
                        {
                           'discounts|4':[
                               {
                                   'id|+1':11,
                                    'price|1-100':12,
                                    'priceTitle|4-6':'@name',
                                    'explan':"专享券",
                                    'getquan|1':["以领取","未领取"]
                               }
    
                           ]
                        }
                    ],
                    'explain|30-50':'@name'
                }
            ],
    
        }
    })
    res.json(result)
})

















app.listen(8888,'localhost',(error)=>{
    if(error){
        console.log('启动失败');
        console.log(error);
    }else{
        console.log('启动成功')
    }
})