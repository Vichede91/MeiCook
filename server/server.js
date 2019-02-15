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
    // let result =mock({
    //     status:0,
    //     message:'ok',
    //     data:result
    // })
    res.json(discount.newRecruits)
})

//请求优惠叶促销专区数据：
app.get(api.DISCOUNT_PROMOTION_URL,(req,res)=>{
    res.json(discount.promotion)
})

//请求优惠叶健康专区数据：
app.get(api.DISCOUNT_HEALTHY_URL,(req,res)=>{
    res.json(discount.healthyLife)
})
















app.listen(8888,'localhost',(error)=>{
    if(error){
        console.log('启动失败');
        console.log(error);
    }else{
        console.log('启动成功')
    }
})