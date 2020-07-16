<template>
    <div class="background">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "My"
    }
</script>

<style scoped lang="less">
    .background {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #f4eeff;
        z-index: -1;
    }
</style>