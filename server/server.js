const express = require('express');
const api = require('./api');
const url = require('url');
const axios = require('axios');
const bodyParser = require('body-parser');
const fs = require('fs');
const {mock,Random} = require('mockjs');
const discount=require('./data/discount/newRrecruits')

const http=require('http')
const jsdom = require('jsdom') ;   
const { JSDOM } =  jsdom ; 

var Mock = require('mockjs');

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

//分类专区数据
app.get(api.CATEGORY_LIST_URL, (req, res)=>{
    let id=url.parse(req.url,true).query.id;
    // let path='http://m.you.163.com/item/cateList?categoryId='+id;
    var paths='/item/cateList'
    http.request({
        hostname:'m.you.163.com',
        path:paths
    },(response)=>{ 
        let result='';
        response.on('data',(bf)=>{
            result+=bf;
        })
        response.on('end',()=>{
            // res.end(result);
            const dom = new JSDOM(result,{runScripts:"dangerously"})
            // console.log(dom.window.ftlData,dom.window.ftlData)
            // res.json(dom.window.globalData)
            // res.json(dom.window.ftlData)
            res.json({
                status:0,
                message:'ok',
                data:dom.window.ftlData
            })
        })
    }).end()
});
//分类页面分类列表
app.get(api.CATEGOEY_LIST_GROUP_URL, (req, res)=>{
    let {categoryId} = url.parse(req.url, true).query;
    if(!categoryId){
        res.json({
            status: 1,
            message: '缺少参数',
            data: null
        });
        return;
    }
    JSDOM.fromURL('http://m.you.163.com/item/cateList?categoryId='+categoryId, {runScripts: 'dangerously'}).then(dom=>{
        res.json({
            status: 0,
            message: 'ok',
            data: {
                categoryGroupList: dom.window.ftlData.categoryGroupList,
                currentCategory: dom.window.ftlData.currentCategory
            }
        })
    })
})

// // 分类商品列表
app.get(api.CATEGOEY_LIST_GROUP_ITEM_URL, (req, res)=>{
    let {categoryId, subCategoryId} = url.parse(req.url, true).query;
    if(!categoryId || !subCategoryId){
        res.json({
            status: 1,
            message: '缺少参数',
            data: null
        });
        return;
    }

    JSDOM.fromURL('http://m.you.163.com/item/list?categoryId='+categoryId+'&subCategoryId='+subCategoryId, {runScripts: 'dangerously'}).then(dom=>{
        res.json({
            status: 0,
            message: 'ok',
            data: dom.window.ftlData.categoryItems
        })
    })
})



app.get(api.HOME_HUODONG_URL,(req,res)=>{
    let result = require("./data/action.json");
    res.json(result);
});


//获取明星产品等数据
app.get(api.HOME_SHOPPINGLIST_URL,(req,res)=>{
    let data = Mock.mock({
        "data|8":[{
            "id|+1":1,
            'title':'@ctitle(4)',
            "data|4":[{
                "src":Random.image("328X350",'@color'),
                "new_price":'@float(0,1000,1,2)',
                "old_price":'@float(0, 100, 1, 2)',
                "title":"@ctitle(1,10)",
                "number":"@integer(1, 1000)"
            }]

        }]
    });
    // console.log(data);

    res.json(data);
    
});










app.listen(8888,'localhost',(error)=>{
    if(error){
        console.log('启动失败');
        console.log(error);
    }else{
        console.log('启动成功')
    }
})