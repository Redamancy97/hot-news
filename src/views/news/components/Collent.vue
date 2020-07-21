<template>
    <div>
        <!--收藏-->
        <div class="collent">
            <van-icon v-show="!like" name="like-o" @click="enshrine"/>
            <van-icon v-show="like" name="like" color="red" @click="enshrine"/>
        </div>
    </div>
</template>
<script>
    import {Dialog, Toast} from "vant";
    import {collectArticleId} from "../../../api/hot-news-api";
    import {mapState} from "vuex";

    export default {
        name: "Collent",
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
                if (this.$store.state.isLogin) {
                    if (this.like) {
                        Dialog.confirm({
                            title: '你不喜欢了？',
                            message: '那就取消吧',
                        })
                            .then(() => {

                                this.like = !this.like
                            })
                    } else {
                        this.like = !this.like
                        Toast.success('收藏成功');
                        collectArticleId(this.articleId).then(res => {
                            console.log(res)
                            // this.$router.push("/my/collectList")
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

            }
        },
    }
</script>
<style scoped lang="less">
    .collent {
        font-size: 30px;
        position: fixed;
        left: 70px;
        bottom: 50px;
    }
</style>