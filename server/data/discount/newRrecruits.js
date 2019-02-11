// const Mock = require('mockjs')
// const Random = Mock.Random
const {mock,Random} = require('mockjs');

let newRecruits=mock({
    status:0,
    message:'ok',
    data:{
        'bannerList':[
            {
                'id|+1':10000,
                img:"@image('686x800','@color','@name')"
            }
        ],
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

module.exports = {
    newRecruits

}