<template>
    <div class="background">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: "Features",
    }
</script>

<style scoped lang="less">
    .background {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 40px;
        left: 0;
        background-color: #f4eeff;
        z-index: -1;
        padding: 10px;
        overflow: scroll;
        padding-bottom: 50px;
    }
</style>