<template>
    <div>
        <SearchList />
        <SearchNews :pageNum="1" :pageSize="10" />
    </div>
</template>
<script>

    import SearchList from "./components/components/SearchList";
    import SearchNews from "./components/components/components/SearchNews";
    export default {
        name: "Search",
        components: {SearchList,SearchNews}
    }
</script>

<style scoped>

</style>