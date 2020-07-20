<template>
    <div>
        <Return :title="'今日运势'"></Return>
        <div class="title">
            <p class="title-text">{{list.astroname}}</p>
            <p class="title-content">
                <span style="font-size: 20px; color: #666666">今日运势</span>
                <br>
                <span style="color:#999999">有效时间：{{today.date}}</span>
            </p>
        </div>
        <div class="content">
            <div style="width: 100%;display: flex">
                <div class="content-title">今日幸运值</div>
                <div>
                    <van-rate v-model="today.summary" icon="like" void-icon="like-o" readonly size="20px"
                              color="#a6b1e1"/>
                </div>
            </div>
            <div style="width: 100%;display: flex">
                <div class="content-title">爱情指数</div>
                <div>
                    <van-rate v-model="today.love" icon="like" void-icon="like-o" readonly size="20px"
                              color="#a6b1e1"/>
                </div>
            </div>
            <div style="width: 100%;display: flex">
                <div class="content-title">工作指数</div>
                <div>
                    <van-rate v-model="today.career" icon="like" void-icon="like-o" readonly size="20px"
                              color="#a6b1e1"/>
                </div>
            </div>
            <div style="width: 100%;display: flex">
                <div class="content-title">财运指数</div>
                <div>
                    <van-rate v-model="today.money" icon="like" void-icon="like-o" readonly size="20px"
                              color="#a6b1e1"/>
                </div>
            </div>
            <div style="width: 100%;display: flex">
                <div class="content-title">健康指数</div>
                <div>
                    <van-rate v-model="today.health" icon="like" void-icon="like-o" readonly size="20px"
                              color="#a6b1e1"/>
                </div>
            </div>
            <div style="width: 100%;display: flex">
                <div class="content-title">幸运数字</div>
                <div>
                    {{today.number}}
                </div>
            </div>
            <div style="width: 100%;display: flex">
                <div class="content-title">幸运颜色</div>
                <div>
                    {{today.color}}
                </div>
            </div>
            <div style="width: 100%;display: flex">
                <div class="content-title">贵人星座</div>
                <div>
                    {{today.star}}
                </div>
            </div>

            <div style="width: 100%;display: flex">
                总结：
                {{today.presummary}}
            </div>
        </div>

    </div>
</template>

<script>
    import {getConstellationDetails} from "../../../api/features-api";
    import Return from "../../../components/header/Return";

    export default {
        name: "FeaturesDetails",
        components: {
            Return
        },
        data() {
            return {
                list: {},
                today: {},
                tomorrow: {},
                week: {}
            }
        },
        created() {
            getConstellationDetails(this.$route.params.astroid).then(res => {
                // console.log(this.$route.params.astroid);
                console.log(res.data);
                this.list = res.data.result;
                this.today = res.data.result.today;
                this.tomorrow = res.data.result.tomorrow;
                this.week = res.data.result.week;

            })
        }
    }
</script>

<style scoped lang="less">
    .title {
        display: flex;
        margin: 10px 0;
        /*background-color: #fff;*/

        .title-text {
            width: 40%;
            height: 45px;
            flex-shrink: 0;
            line-height: 40px;
            font-size: 36px;
            color: #333;
            border-right: 5px solid #782FAA;
        }

        .title-content {
            padding: 0 10px;
        }
    }

    .content {
        background-color: #ffffff;
        width: 100%;
        height: 100%;
        overflow: scroll;
        padding-bottom: 50px ;


        div {
            font-size: 18px;
            width: 50%;
            /*height: 40px;*/
            flex-shrink: 0;
            line-height: 40px;
            text-align: center;
            /*flex-wrap: wrap;*/
        }
    }


</style>