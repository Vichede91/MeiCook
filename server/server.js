const express = require('express');
const api = require('./api');
const url = require('url');
const axios = require('axios');
const bodyParser = require('body-parser');
const fs = require('fs');
const {mock,Random} = require('mockjs');
const discount=require('./data/discount/newRrecruits')


const app = express();
//请求优惠ta数据
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
            'giftPackage|4':[
                {
                    'id|+1':1,
                    'num|+1':01,
                    'title':'@ctitle',
                    'paragraph1': '@cparagraph(1)',
                    'paragraph2': '@cparagraph(1)',
                    // 'bannerShop1|2':"@image('299x340','@color','@name')",
                    'imageList|4': [{
                        'id|+1': 10,
                        // 'img': '@image',//生成一个随机的图片地址,
                        'img': '@image("164x244", "@color","@name","优惠券")', //生成一个200*100, 背景色#000，前景色#fff, 格式png, 文字mock.js的图片
                    }],
                    'shopImg|2':[{
                        'id|+1': 40,
                        'img':'@image("299x340", "@color","@name","新人1元专区")',
                        'name':'@ctitle',
                        'vip':'新客专享价￥1',
                        'price|100-200':32,
                        'buy':'立即购买'
                    }],
                    'preference|6-20':[{
                        'id|+1': 60,
                        'img':'@image("686x400", "@color","@name","明星组合特惠专区")'
                    }],
                    'explain|4-6':'@cparagraph(1)'
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