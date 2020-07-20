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
    export default {
        name: "Collent",
        data(){
            return{
                like: false,
            }
        },
        props:{
            articleId:[Number,String]
        },
        methods: {
            enshrine() {
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
                    collectArticleId(this.articleId).then(res=>{
                        console.log(res)
                        this.$router.push("/my/collectList")
                    })
                }
            }
        },
    }
</script>
<style scoped lang="less">
    .collent{
        font-size: 30px;
        position: fixed;
        left:70px;
        bottom: 50px;
    }
</style>