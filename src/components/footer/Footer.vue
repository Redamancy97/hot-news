<template>
    <div>
        <van-tabbar v-model="active" active-color="#424874" inactive-color="#000">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search">搜索</van-tabbar-item>
            <van-tabbar-item icon="service-o" >音乐</van-tabbar-item>
            <van-tabbar-item icon="flower-o" >节气</van-tabbar-item>
            <van-tabbar-item icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                active: 0,
                icon: {
                    active: 'https://img.yzcdn.cn/vant/user-active.png',
                    inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
                },
            };
        },
    }
</script>

<style scoped>

</style>