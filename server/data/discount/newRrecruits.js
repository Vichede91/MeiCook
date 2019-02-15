// const Mock = require('mockjs')
// const Random = Mock.Random
const {mock,Random} = require('mockjs');
//优惠叶新人专享数据：
let newRecruits=mock({
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

//优惠叶促销专区数据：
let promotion=mock({
    status:0,
    message:'ok',
    data:{
            'promotion':[
                {
                    'id|+1':1,
                    'name':'美烹',
                    'title':'@ctitle',
                    'paragraph1': '@cparagraph(1)',
                    'shopImg|10-30':[{
                        'id|+1': 40,
                        'img':'@image("299x340", "@color","@name","新人1元专区")',
                        'name':'@ctitle',
                        'vip|10-100':15.6,
                        'explan':'特惠',
                        'price|100-200':32,
                        'buy':'立即购买'
                    }],
                }
            ],
        }
    })

//优惠叶健康专区数据：
let healthyLife=mock({
    status:0,
    message:'ok',
    data:{
            'healthy':[
                {
                    'id|+1':1,
                    'name':'美烹',
                    'title':'@ctitle',
                    'bannerUrl':'@image("654x440", "@color","@name","美烹起源")',
                    'origin':[
                        {
                            'id':1000,
                            'banner':'@image("654x440", "@color","@name","美烹起源")',
                            'name':'美烹起源',
                            'explains': '@cparagraph(8)',

                        }
                    ],
                    // 'advantage':[
                    //     {
                    //         'id|+1':100,
                    //         'title':'@cparagraph(1)',
                    //         'img':'@image("288x220", "@color","@name","美烹优势")',
                    //         'name':'美烹优势',
                    //         'serves':'@cparagraph(1)',
                    //         'explains': '@cparagraph(3)',
                    //     }
                    // ],
                    'advantage|4':[
                        {
                            'id|+1':200,
                            'img':'@image("654x440", "@color","@name","美烹优势")',
                            'serves':'@ctitle',
                            'explains': '@cparagraph(1)',
                        }
                    ]

                   
                }
            ],
        }
    })
module.exports = {
    newRecruits,
    promotion,
    healthyLife

}