<template>
<nav class="tabs border-top">
    <slot/>
</nav>
</template>

<script>
export default {
    name: 'tab-bar'
}
</script>

<style scoped>
.tabs{
    width: 100%;
    height: 98px;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
}
.border-top::before{
    border-top:1px solid #ccc;
}
</style>
