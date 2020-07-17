<template>
    <div>
        <van-nav-bar
                :title="title"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
    </div>
</template>

<script>
    export default {
        name: "Return",
        props: {
            title: String
        },
        methods: {
            onClickLeft() {
                // alert("返回")
                this.$router.go(-1);
            },
        }
    }
</script>

<style scoped lang="less">
    /deep/ .van-nav-bar__text {
        color: #424874;
    }

    /deep/ .van-nav-bar__arrow {
        color: #424874;
    }
</style>