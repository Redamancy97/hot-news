<template>
    <div class="collect-list-container">
        <Return :title="'收藏列表'"></Return>
        <van-cell-group style="margin-top: 10px">
            <van-cell is-link :title="item.title" :label="item.articleSource" v-for="item in list" :key="item.articleId"
                      :to="'/news/'+item.articleId"/>
        </van-cell-group>
    </div>
</template>

<script>

    import {collectList} from "../../../api/user-api";
    import Return from "../../../components/header/Return";

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