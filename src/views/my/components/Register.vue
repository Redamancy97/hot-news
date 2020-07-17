<template>
    <div>
        <Return :title="'用户注册'"></Return>
        <van-form @submit="onSubmit" style="margin-top: 10px">
            <van-field
                    v-model="list.loginname"
                    label="用户名"
                    placeholder="请输入用户名"/>
            <van-field
                    v-model="list.username"
                    label="昵称"
                    placeholder="请输入昵称"/>
            <van-field
                    v-model="list.password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
            />
            <van-field
                    v-model="list.repassword"
                    type="password"
                    label="确认密码"
                    placeholder="请再次输入密码"
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
            <van-field name="radio" label="性别">
                <template #input>
                    <van-radio-group v-model="list.sex" direction="horizontal">
                        <van-radio name="0" checked-color="#a6b1e1">男</van-radio>
                        <van-radio name="1" checked-color="#a6b1e1">女</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
            <van-field label="个人简介" v-model="list.remark"/>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit"
                            style="margin-top: 20px;background-color:#a6b1e1;border: none">
                    确认注册
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    // import Return from "./Return";
    import {registerInfo, sendCode} from "../../../api/user-api";
    import {Toast} from "vant";
    import Return from "../../../components/header/Return";

    export default {
        name: "Register",
        data() {
            return {
                list: {
                    username: '',
                    loginname: '',
                    password: '',
                    repassword: '',
                    tel: '',
                    sms: '',
                    sex: '1',
                    remark: ''
                },
                title: ''
            };
        },
        components: {
            Return
        },
        methods: {
            onSubmit(values) {
                if (this.list.password == this.list.repassword) {
                    registerInfo(this.list).then(res => {
                        console.log(res);
                        if (res.data.code === 0) {
                            Toast.success('注册成功，请登录...');
                            this.$router.push("login");
                        } else {
                            Toast.fail(res.data.msg);
                        }
                    })
                } else {
                    Toast.fail('两次密码输入不一致...');

                }
                console.log('submit', values);

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