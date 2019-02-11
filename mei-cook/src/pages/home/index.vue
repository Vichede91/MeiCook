<template>
<div id="home" class="page">
    <header class="header">
        <a class="logo" href="javascript: ;"><img src="/img/Page 1 Copy 2.png"></a>     
    </header>
    <homeNav/>
</div>
</template>

<script>
// import homeNav from '../../components/homeCon/homeNav'
import homeNav from '@/components/homeCon/homeNav'
export default {
    components:{
        homeNav,
    },
    data(){
        return{
            selectIndex:0
        }
    }
}
  
</script>

<style lang="scss" scoped>
#home{
   width:100%;height:100%;
   .header{
        display: flex; width:100%;height:88px;position:absolute;top:0;left:0;
       padding: 16px;background:#ccc;
   }
 
}
</style>
