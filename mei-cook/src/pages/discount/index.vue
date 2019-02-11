<template>
<div id="discount" class="page">
   <header class="header">
       <ul class="list border-bottom">
           <li class="list_item" v-for="item in navData" :key="item.id"
            :class="{active: selectIndex===item.id}" ref="item" @click="selectTab(item.id)">
                  
               {{item.title}}
           </li>
       </ul>
   </header>
   <newRecruits v-show="selectIndex===111"/>
   <promptionArea v-show="selectIndex===112"/>
   <healthyLife v-show="selectIndex===113"/>
</div>
</template>

<script>
import newRecruits from '../../components/discountCon/newRecruits'
import promptionArea from '../../components/discountCon/promotionArea'
import healthyLife from '../../components/discountCon/healthyLife'
import {getdiscountTopList} from '../../services/discountService'
export default {
      components: {
        newRecruits,
        promptionArea,
        healthyLife
    },
     data(){
        return {
            navData: [],
            selectIndex:111
        }
    },
    methods:{
        selectTab(index){
            this.selectIndex=index
        }
    },
    created(){
        getdiscountTopList()
        .then(data=>{
            this.navData = data.tabList;
        })
    }
}   
</script>

<style lang="scss" scoped>
#discount{
   
    .header{
        width:100%;height:88px;position: absolute;top:0;left:0;
    .list{
            display: flex; margin:0 16px;justify-content:space-between;
            .list_item{
              text-align: center;line-height: 88px;font-size: 36px;
                &.active{
                    color:#BA874F;
                   border-bottom:1px solid #BA874F;
                } 
            }
    }
    }
}
</style>
