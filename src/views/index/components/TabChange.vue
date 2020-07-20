<template>
    <div class="index-container">

        <van-tabs>
                 <!--        头条-->
            <van-tab v-for="(item,index) in list" :key="index"
                     title-active-color="#424874" :title="item.name">
                <!--          内容-->
                <ChangeDetail :category-id="item.categoryId"></ChangeDetail>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
    import ChangeDetail from "./ChangeDetail";
    import {listCart} from "../../../api/hot-news-api";
    export default {
        name: "TabChange",
        components: {ChangeDetail},
        props: {
            pageNum: [Number, String],
            pageSize: [Number, String],
        },
        data() {
            return {
                list: [],
                active: 1,
            }
        },
        created() {
            listCart(1).then(res => {
                this.list = res.data.rows.splice(0, 14)
            });
        }
    }
</script>
<style scoped lang="less">
</style>