<template>
  <div id="app">
    <router-view/>
   <tab-bar>
     <tab-item v-for="(item) in tabList" :key="item.title" :info="item">
        
     </tab-item>
   </tab-bar>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tabList:[
        {title:'首页',class:'iconfont icon-iconsy2', path:'/home',index:2},
        {title:'分类',class:'iconfont icon-fenlei', path:'/category',index:1,},
        {title:'优惠', class:'iconfont icon-youhuiquan', path:'/discount',index:3},
        {title:'购物车', class:'iconfont icon-gouwuchekong', path:'/cart',index:0},
        {title:'我的', class:'iconfont icon-wode2', path:'/mine',index:4},
      ]
    }
  },
}
</script>


<style lang="scss">

</style>
