<template>
    <div>
      <div class="main">
        <div class="index-container">
            <div class="index-container-top" >
                <a href="/index">
                    <van-icon name="arrow-left" />返回
                </a>
                <span>{{obj.title}}</span>
            </div>
        </div>
        <div class="index-container-bottom">
            <h3>{{obj.title}}</h3>
            <p v-html="obj.content"></p>
        </div>
                  <!--收藏-->
        <div class="collent">
            <van-icon v-show="!like" name="like-o" @click="enshrine"/>
            <van-icon v-show="like" name="like" color="red" @click="enshrine"/>
        </div>
      </div>
    </div>
</template>

<script>
    import {newsDetail} from "../../../api/hot-news-api";
    import {Dialog} from "vant";
    import {Toast} from "vant";

    export default {
        name: "NewDetail",
        props: {
            articleId: [Number, String]
        },
        data() {
            return {
                like: false,
                obj: {}
            }
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
                        .catch(() => {
                            // on cancel
                        });
                } else {
                    this.like = !this.like
                    Toast.success('收藏成功');
                }
            }
        },
        created() {

            newsDetail(this.$route.params.articleId).then(res => {
                this.obj = res.data.data
                // console.log(this.obj)
            })
        },

    }
</script>

<style scoped lang="less">
    .index-container{
        height: 40px;
        /*border: 1px solid black;*/
        padding-top: 10px;
        .index-container-top{
            /*border: 1px solid black;*/
            width: 150px;
            margin-left: 120px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

        }
    }
    .index-container-bottom{
         /*height:800px ;*/
        padding-bottom:100px;
        overflow: scroll;
        /*position: relative;*/
        h3{
            margin-bottom: 20px;
            margin-left: 15px;
        }
        p{
            padding: 5px 10px;
            text-indent:2em;
        }
    }
    .collent{
        font-size: 30px;
        position: fixed;
        left:170px;
        bottom: 50px;
    }
</style>