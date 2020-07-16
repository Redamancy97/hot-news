<template>
    <div style="background-color:#f4eeff;">
        <Swiper style="margin: 10px 0" :pageNum="1" :pageSize="10"/>
        <!--        -->
        <TabChange  />
    </div>
</template>

<script>


    import Swiper from "./components/Swiper";
    import TabChange from "./components/TabChange";

    export default {
        name: "Index",
        components: {
            Swiper,
            TabChange,
        }
    }
</script>

<style scoped >

</style>