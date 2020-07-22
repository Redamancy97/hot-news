<template>
    <div>
        <!--收藏-->
        <!--        <div class="collent">-->
        <!--            <van-icon v-show="!like" name="like-o" @click="enshrine"/>-->
        <!--            <van-icon v-show="like" name="like" color="red" @click="enshrine"/>-->
        <!--        </div>-->
        <van-icon class="collect" name="like"
                style="position: fixed; right: 35px;bottom: 55px;"
                :color="isCollect?'red':'black'"
                @click="collect"
                ref="changeColor"
        />

    </div>
</template>
<script>
    import {Toast,Dialog} from "vant";
    import {collectArticleId,} from "../../../api/hot-news-api";
    import {mapState} from "vuex";


    export default {
        name: "Collent",
        data() {
            return {
                // like: false,
                flag: false,

            }
        },
        props: {
            articleId: [Number, String],
            isCollect:{
                default:false,
                type:Boolean
            }
        },
        computed: {
            ...mapState['isLogin']
        },
        methods: {
            collect() {
                if (this.$store.state.isLogin) {
                    if (this.isCollect) {
                        collectArticleId(this.articleId)
                            .then(res => {
                                console.log(res);
                                if (res.data.code == 0) {
                                    Toast.success("取消收藏");
                                    this.$emit("collect")
                                }
                            })
                    } else {
                        collectArticleId(this.articleId).then(res => {
                            console.log(res);
                            if (res.data.code == 0) {
                                Toast.success("收藏成功");
                                this.$emit("collect")
                            }
                        })
                    }
                } else {
                    // this.$router.push("/my/login");
                    Dialog.confirm({
                        title: '您不登陆没办法收藏哦',
                        message: '单击确认可以去到登录页面哦',
                        confirmButtonText:'这就去登录',
                        confirmButtonColor:'#424874',
                        cancelButtonText:'就不去就不去'
                    })
                        .then(() => {
                            // on confirm
                            this.$router.push("/my/login");
                        })
                        .catch(() => {
                            // on cancel
                        });
                    // Toast.fail('请先登录，再进行操作');
                }
            },
            // collect() {
            //
            //     if (this.isCollect) {
            //         collectArticleId(this.articleId)
            //             .then(res => {
            //                 console.log(res);
            //                 if (res.data.code == 0) {
            //                     Toast.success("取消收藏");
            //                     this.$emit("collect")
            //                 }
            //             })
            //     } else {
            //         collectArticleId(this.articleId).then(res => {
            //             console.log(res);
            //             if (res.data.code == 0) {
            //                 Toast.success("收藏成功");
            //                 this.$emit("collect")
            //             }
            //         })
            //     }
            // }

        },
    }
</script>
<style scoped lang="less">
    .collect {
        font-size: 30px;
        position: fixed;
        left: 170px;
        bottom: 50px;
    }
</style>