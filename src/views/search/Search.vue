<template>
    <div class="background">
        <SearchList/>
        <SearchNews :pageNum="1" :pageSize="10"/>
    </div>
</template>
<script>

    import SearchList from "./components/components/SearchList";
    import SearchNews from "./components/components/SearchNews";

    export default {
        name: "Search",
        components: {SearchList, SearchNews}
    }
</script>

<style scoped lang="less">
    .background {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #f4eeff;
        z-index: -1;
        padding: 10px;
    }
</style>