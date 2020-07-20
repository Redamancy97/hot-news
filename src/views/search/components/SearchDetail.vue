<template>
    <div class="background">
        <div class="index-container">
            <!--            <p @click="click">返回</p>-->
            <Return></Return>
            <ul>
                <router-link :to="'news/'+item.articleId" tag="li" v-for="(item,index) in listDetail" :key="index">
                    <img :src="item.bannerImgUrl" alt="">
                    <div class="index-main">
                        <p class="index-main-left">{{item.title}}</p>
                        <p class="index-main-right">来源:{{item.articleSource}}</p>
                    </div>
                </router-link>
            </ul>
        </div>

    </div>
</template>

<script>
    // import { SearchList} from "../../../../api/hot-news-api";
    // import Return from "../../../../components/header/Return";
    import Return from "../../../components/header/Return";
    import {SearchList} from "../../../api/hot-news-api";

    export default {
        name: "SearchDetail",
        data() {
            return {
                listDetail: [],
            }
        },
        components: {
            Return
        },
        created() {
            // console.log(this.$route.params.value)
            SearchList(1, 5, this.$route.params.value).then(res => {
                this.listDetail = res.data.rows
            })
        },
        methods: {
            click() {
                this.$router.go(-1)
            }
        }
    }
</script>
<style scoped lang="less">
    .index-container {
        background-color: white;

        ul {

            li {
                display: flex;
                padding: 10px 0;
                border-bottom: 1px solid #ccc;

                img {
                    padding-left: 10px;
                    width: 120px;
                    height: 80px;
                    margin-bottom: 10px;
                }

                .index-main {
                    margin-left: 10px;

                    .index-main-left {
                        padding-bottom: 15px;

                    }

                    .index-main-left:hover {
                        color: #a6b1e1;
                    }

                    .index-main-right {
                        font-size: 12px;
                    }
                }
            }
        }
    }

</style>