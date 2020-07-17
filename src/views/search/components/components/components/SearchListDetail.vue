<template>
    <div>
        <div class="index-container">
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
    import {listDetail} from "../../../../api/hot-news-api";
    export default {
        name: "SearchListDetail",
        data() {
            return {
                listDetail: [],
            }
        },
        props: [
            'categoryId'
        ],
        created() {
            listDetail(1, 13, this.categoryId).then(res => {
                this.listDetail = res.data.rows
                // console.log(res.data.rows)
            })
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
                    .index-main-left:hover{
                        color:#a6b1e1 ;
                    }
                    .index-main-right {
                        font-size: 12px;
                    }
                }
            }
        }
    }

</style>