<template>
    <div>
        <Return :title="'忘记密码'"></Return>
        <van-form @submit="onSubmit" style="margin-top: 10px">
            <van-field
                    v-model="list.loginname"
                    label="用户名"
                    placeholder="用户名"
            />
            <van-field
                    v-model="list.password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
            />
            <van-field v-model="list.tel" type="tel" label="手机号" placeholder="请输入手机号"/>
            <van-field
                    v-model="list.sms"
                    center
                    clearable
                    label="短信验证码"
                    placeholder="请输入短信验证码"
            >
                <template #button>
                    <van-button size="small" type="primary" @click="sendCode"
                                style="background-color:#a6b1e1;border: none">发送验证码
                    </van-button>
                </template>
            </van-field>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit"
                            style="margin-top: 20px;background-color:#a6b1e1;border: none">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>

    // import Return from "./Return";
    import {forgetPassword, sendCode} from "../../../api/user-api";
    import {Toast} from "vant";
    import Return from "../../../components/header/Return";

    export default {
        name: "ForgetPassword",
        data() {
            return {
                title: '',
                list: {
                    loginname: '',
                    password: '',
                    tel: '',
                    sms: ''
                }

            }
        },
        components: {
            Return
        },
        methods: {
            onSubmit(values) {
                console.log('submit', values);
                forgetPassword(this.list).then(res => {
                    console.log(res);
                    if (res.data.code === 0) {
                        Toast.success('密码修改成功，请登录...');
                        this.$router.push("login");
                    } else {
                        Toast.fail(res.data.msg);
                    }
                })
            },
            sendCode() {
                sendCode(this.list.tel).then(res => {
                    console.log(res);
                })
            }
        },
    }
</script>

<style scoped>

</style>