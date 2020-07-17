<template>
    <div class="index-container">
        <Return :title="'新闻详情'"></Return>
        <NewDetail :articleId="36853"/>
    </div>
</template>

<script>
    import NewDetail from "./components/NewDetail";
    import Return from "../my/components/Return";

    export default {
        name: "News",
        data() {
            return {
                title: ''
            }
        },
        components: {
            NewDetail,
            Return
        }
    }
</script>

<style scoped lang="less">
    .index-container {
        background-color: #f4eeff;
    }
</style>