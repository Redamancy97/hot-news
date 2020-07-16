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
    import {listCart} from "../../../api/hot-news-api";
    import ChangeDetail from "./components/ChangeDetail";

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
                // console.log(res)
                this.list = res.data.rows
                // console.log(res.data.rows)
            });
        }
    }
</script>

<style scoped lang="less">
</style>