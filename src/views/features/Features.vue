<template>
    <div class="background">
        features
    </div>
</template>

<script>
    import {getSolarTerms, getSolarTermsDetails} from "../../api/features-api";

    export default {
        name: "Features",
        created() {
            getSolarTerms().then(res => {
                console.log(res);
            });
            getSolarTermsDetails(1).then(res => {
                console.log(res);
            })
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
    }
</style>