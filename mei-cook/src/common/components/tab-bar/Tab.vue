<template>
<router-link class="tab" :to="info.path">
<div class="tab_con" @click="btnActive(info.index)">
    <i class="tubiao" :class=info.class></i>
    <span>{{info.title}}</span>
</div>

</router-link>
</template>

<script>

export default {
    name: 'tab-item',
    props: ['info'],
    data(){
        return{
            selector:0
        }
    },
    methods:{
        btnActive(index){
            console.log(1)
            this.selector=index
        }
    }
}
</script>

<style>
.tab{
    text-align: center;
    flex: 1;
    list-style: none;
}
.tab_con{
    width:100%;
    height:100%;
}
.tubiao{
    display: block;
    height:44px;
    font-size: 40px;
    text-align: center;
    margin:8px 0;
}
.router-link-active{
    color:rgba(239,179,31,1);
}

.tab span{
    display: block;
    font-size: 24px;
}
</style>
