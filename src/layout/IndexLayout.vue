<template>
    <div class="index-container">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>


    import Footer from "../components/footer/Footer";
    import Header from "../components/header/Header";

    export default {
        name: "IndexLayout",
        components: {
            Header,
            Footer
        }
    }
</script>

<style scoped lang="less">
    .index-container {
        background-color: #f4eeff;
    }
</style>