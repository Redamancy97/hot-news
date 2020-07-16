<template>
    <div>
        <SearchNews :pageNum="1" :pageSize="10" />
    </div>
</template>

<script>
    import SearchNews from "./components/SearchNews";
    export default {
        name: "Search",
        components: {SearchNews}
    }
</script>

<style scoped>

</style>