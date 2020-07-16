<template>
    <div>
        <Return :title="'查看信息'"></Return>
        <van-cell-group style="margin-bottom: 10px;margin-top: 10px;overflow: hidden">
            <div style="text-align: center;padding: 20px">
                <van-image
                        round
                        width="5rem"
                        height="5rem"
                        :src="user.avatar"
                />
                <p style="font-size: 16px">{{user.userName}}</p>
            </div>
        </van-cell-group>
        <van-cell-group>
            <van-cell title="用户名" :value="user.loginName"/>
            <van-cell title="昵称" :value="user.userName"/>
            <van-cell title="邮箱" :value="user.email"/>
            <van-cell title="手机号" :value="user.phonenumber"/>
            <van-cell title="性别" :value="user.sex==0?'男':'女'"/>
            <van-cell title="个人简介" :value="user.remark"/>
        </van-cell-group>
    </div>
</template>

<script>
    import {getUserInfo} from "../../../api/user-api";
    import Return from "./Return";

    export default {
        name: "ViewInformation",
        data() {
            return {
                user: {},
                title: '',
            }
        },
        components: {
            Return
        },
        methods: {},
        created() {
            getUserInfo().then(res => {
                console.log(res.data.data)
                this.user = res.data.data;
            })
        }
    }
</script>

<style scoped lang="less">

</style>