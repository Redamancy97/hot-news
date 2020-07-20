<template>
    <div>
        <!--今日运势-->
        <div style="font-size: 20px;font-weight: bold;color: #424874;margin: 10px 0px">今日运势</div>
        <van-grid>
            <van-grid-item v-for="item in list" :key="item.astroid" :icon="item.pic"
                           :text="item.astroname" :to="'/features/featuresdetails/'+item.astroid"/>
        </van-grid>
        <h2 style="color:#424874; margin: 10px 0">
            <van-icon name="smile-o"/>
            tips
        </h2>
        <div v-for="item in list" :key="item.astroid" style="width: 100%;height: 30px">
            <div style="width: 50%;display: inline;text-align: center">
                {{item.date}}
            </div>
            <div style="width: 50%;float: left;text-align: center">
                {{item.astroname}}
            </div>
        </div>
    </div>
</template>

<script>
    import {getConstellation} from "../../../api/features-api";

    export default {
        name: "FeaturesList",
        data() {
            return {
                activeName: '1',
                list: [],
            }
        },
        created() {
            getConstellation().then(res => {
                    console.log(res);
                    this.list = res.data.result
                }
            );
        }
    }
</script>

<style scoped>

</style>