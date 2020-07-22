<template>
    <div >
        <div class="index-container">
        <van-tabbar v-model="active" active-color="#424874" inactive-color="#000" >
            <router-link to="/index"><van-tabbar-item icon="home-o">首页</van-tabbar-item></router-link>
            <router-link to="/search"><van-tabbar-item icon="search">搜索</van-tabbar-item></router-link>
            <router-link to="/music"><van-tabbar-item icon="service-o" >音乐</van-tabbar-item></router-link>
            <router-link to="/features"><van-tabbar-item icon="flower-o" >星座</van-tabbar-item></router-link>
            <van-tabbar-item  icon="user-o"  @click="isShow">我的</van-tabbar-item>
        </van-tabbar>
    </div>
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
    .index-container{

        background-color: #424874;
    }
   /deep/ .van-tabbar-item{
       margin-top: 8px;
       margin-bottom: 5px;
       padding: 0px 25px;
   }


 </style>