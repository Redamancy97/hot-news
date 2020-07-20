<template>
    <div>
        <Return :title="obj.title"></Return>
        <div class="main" style="margin-top: 10px;background-color:#fff; padding: 10px">
            <div class="index-container-bottom">
                <h3>{{obj.title}}</h3>
                <p v-html="obj.content" class="content"></p>
            </div>
            <!--  点赞   -->
            <Zan :articleId="obj.articleId"/>
            <!--收藏-->
            <Collent :articleId="obj.articleId"/>
        </div>
    </div>
</template>
<script>
    import {newsDetail} from "../../../api/hot-news-api";
    import Collent from "./Collent";
    import Return from "../../../components/header/Return";
    import Zan from "./Zan";

    export default {
        name: "NewDetail",
        components: {Zan, Collent, Return},
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
            click() {
                this.$router.go(-1)
            }
        },
        created() {
            newsDetail(this.$route.params.articleId).then(res => {
                this.obj = res.data.data
            })
        },
    }
</script>
<style scoped lang="less">
    .index-container {
        height: 40px;
        /*border: 1px solid black;*/
        padding-top: 10px;

        .index-container-top {
            /*border: 1px solid black;*/
            width: 150px;
            margin-left: 120px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .index-container-bottom {
        padding-bottom: 100px;
        overflow: scroll;
        /*position: relative;*/

        h3 {
            margin-bottom: 20px;
            margin-left: 15px;
        }

        /deep/ .content img {
            width: 300px;
            height: 100%;
        }

        p {
            padding: 10px 10px;
            text-indent: 2em;
        }
    }

</style>