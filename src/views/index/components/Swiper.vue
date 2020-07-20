<template>
    <div >
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in list" :key="index">
                <img :src="item.coverImgUrl" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
    import {picSwiper} from "../../../api/hot-news-api";

    export default {
        name: "Swiper",
        data() {
            return {
                list: []
            }
        },
        props: {
            pageNum: [Number, String],
            pageSize: [Number, String]
        },
        created() {
            picSwiper(this.pageNum, this.pageSize).then(res => {
                // console.log(res)
                this.list = res.data.rows
            })
        }
    }
</script>
<style scoped lang="less">
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }
    .my-swipe{
        width: 100%;
        height: 250px;
        margin-top: 5px;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>