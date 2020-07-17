<template>
    <div class="collect-list-container">
        <Return :title="'收藏列表'"></Return>
        collectlist
        <van-cell-group>
            <van-cell is-link :title="item.title" :label="item.articleSource" v-for="item in list" :key="item.articleId"
                      :to="'/news/'+item.articleId"/>
        </van-cell-group>
    </div>
</template>

<script>
    import Return from "./Return";
    import {collectList} from "../../../api/user-api";

    export default {
        name: "CollectList",
        data() {
            return {
                title: '',
                list: []
            }
        },
        components: {
            Return
        },
        created() {
            collectList().then(res => {
                console.log(res);
                this.list = res.data.rows;
            })
        }
    }
</script>

<style scoped lang="less">
    .collect-list-container {
        height: 100%;
        overflow: scroll;
        padding-bottom: 100px;
    }
</style>