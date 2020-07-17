<template>
    <div class="index-container">
        <van-tabbar v-model="active" active-color="#424874" inactive-color="#000">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <router-link to="/search">
                <van-tabbar-item icon="search">搜索</van-tabbar-item>
            </router-link>
            <van-tabbar-item icon="service-o">音乐</van-tabbar-item>
            <van-tabbar-item icon="flower-o">节气</van-tabbar-item>
            <van-tabbar-item icon="user-o" @click="isShow">我的</van-tabbar-item>
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
        computed: {},
        methods: {
            isShow() {
                console.log(this.$store.state.isLogin);
                if (this.$store.state.isLogin) {
                    this.$router.push('/my/personalcenter')
                } else {
                    this.$router.push('/my')
                }
            }
        }
    }
</script>

<style scoped lang="less">
    /deep/ .van-tabbar-item {
        margin-top: 15px;
        padding: 0 20px;
    }
</style>