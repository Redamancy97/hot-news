<template>
    <div class="index-container">
        <NewDetail :articleId="36853"/>
    </div>
</template>

<script>
    import NewDetail from "./components/NewDetail";

    export default {
        name: "News",
        components:{
            NewDetail
        }
    }
</script>

<style scoped lang="less">
   .index-container{
       background-color: #f4eeff;
   }
</style>