<template>
    <div class="background">
        <Swiper style="margin: 10px 0" :pageNum="1" :pageSize="10"/>
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
        overflow: scroll;
        padding-top: 0;
        padding-bottom: 50px;
    }
</style>