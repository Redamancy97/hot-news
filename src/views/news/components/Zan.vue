<template>
    <div>
        <div class="zan">
            <van-icon v-show="!like" name="good-job-o" @click="enshrine"/>
            <van-icon v-show="like" name="good-job" color="yellow" @click="enshrine"/>
        </div>
    </div>
</template>

<script>
    import {Dialog, Toast} from "vant";
    // import {dianZan} from "../../../api/hot-news-api";
    import {mapState} from "vuex";

    export default {
        name: "Zan",
        data() {
            return {
                like: false,
            }
        },
        props: {
            articleId: [Number, String]
        },
        computed: {
            ...mapState['isLogin']
        },
        methods: {
            enshrine() {
                if (this.like) {
                    Dialog.confirm({
                        title: '取消点赞',
                        // message: '那就取消吧',
                    })
                        .then(() => {
                            this.like = !this.like
                        })
                } else {
                    if (this.$store.state.isLogin) {
                        this.like = !this.like
                        Toast.success('点赞成功');
                        // dianZan(this.articleId).then(res => {
                        //     console.log(res)
                        // })
                    } else {
                        Dialog.confirm({
                            title: '您不登陆没办法点赞哦',
                            message: '单击确认可以去到登录页面哦',
                            confirmButtonText: '这就去登录',
                            confirmButtonColor: '#424874',
                            cancelButtonText: '就不去就不去'
                        })
                            .then(() => {
                                // on confirm
                                this.$router.push("/my/login");
                            })
                            .catch(() => {
                                // on cancel
                            });
                    }
                }
            }
        }

    }
</script>

<style scoped lang="less">
    .zan {
        font-size: 30px;
        position: fixed;
        right: 70px;
        bottom: 50px;
    }

</style>