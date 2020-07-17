<template>
    <div class="index-container">
        <NewDetail/>
    </div>
</template>

<script>
    import NewDetail from "./components/NewDetail";

    export default {
        name: "News",
        components: {
            NewDetail
        }
    }
</script>

<style scoped lang="less">
    .index-container {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #f4eeff;
        z-index: -1;
        padding: 10px;
        overflow: scroll;
        padding-top: 0;
        padding-bottom: 50px;
    }
</style>