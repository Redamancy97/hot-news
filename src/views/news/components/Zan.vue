<template>
    <div>
        <div class="zan">
        <van-icon   v-show="!like"  name="good-job-o" @click="enshrine" />
        <van-icon   v-show="like"  name="good-job" color="yellow" @click="enshrine"/>
        </div>
    </div>
</template>

<script>
    import {Dialog, Toast} from "vant";
    import {dianZan} from "../../../api/hot-news-api";

    export default {
        name: "Zan",
        data(){
            return{
             like: false,
            }
        },
        props:{
            articleId:[Number,String]
        },
        methods:{
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
                    this.like = !this.like
                    Toast.success('点赞成功');
                    dianZan(this.articleId).then(res=>{
                        console.log(res)
                    })
                    // collectArticleId(this.articleId).then(res=>{
                    //     console.log(res)
                    //     this.$router.push("/my/collectList")
                    // })
                }
            }
        }

    }
</script>

<style scoped lang="less">
   .zan{
       font-size: 30px;
       position: fixed;
       right:70px;
       bottom: 50px;
   }

</style>