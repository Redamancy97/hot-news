<template>
    <div>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "../components/footer/Footer";

    export default {
        name: "OtherLayout",
        components: {
            Footer
        }
    }
</script>

<style scoped>

</style>