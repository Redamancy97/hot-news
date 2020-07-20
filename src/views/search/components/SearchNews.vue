<template>
    <div>
        <div class="index-container-bottom">
            <ul>
             <router-link :to="'newdetail/'+item.articleId" tag="li" v-for="(item,index) in searchList" :key="index">
                     {{item.title}}
             </router-link>

            </ul>
        </div>
    </div>
</template>

<script>
    // import {searchNews} from "../../../../api/hot-news-api";
    import {searchNews} from "../../../api/hot-news-api";

    export default {
        name: "SearchNews",
        data() {
            return {
                searchList: []
            }
        },
        props: {
            pageNum: [Number, String],
            pageSize: [Number, String],
        },
        created() {
            searchNews(1, 10).then(res => {
                // console.log( res.data.rows)
                this.searchList=res.data.rows
            })
        }

    }
</script>

<style scoped lang="less">
    .index-container-bottom {
        background-color: #fff;
        width: 100%;
        ul {
            li {
                padding: 10px 15px;
            }
        }
    }
</style>