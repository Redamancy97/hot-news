<template>
    <div class="login-container">
        <div class="login-panel">
            <van-form @submit="onSubmit">
                <div>
                    <van-field
                            v-model="username"
                            name="用户名"
                            label="用户名"
                            placeholder="用户名"
                            :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                            v-model="password"
                            type="password"
                            name="密码"
                            label="密码"
                            placeholder="密码"
                            :rules="[{ required: true, message: '请填写密码' }]"
                    />
                    <router-link to="forgetpassword" style="float:right;margin-top: 5px;margin-right: 10px" tag="div">
                        忘记密码
                    </router-link>
                </div>

                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit"
                                style="margin-top: 40px;background-color:#a6b1e1;border: none">
                        登录
                    </van-button>
                    <van-button round block type="info"
                                style="margin-top: 20px;background-color:#a6b1e1;border: none" to="register">
                        注册
                    </van-button>
                    <!--                <van-button type="info" native-type="submit">登录</van-button>-->
                    <!--                <van-button type="info">注册</van-button>-->
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
    import {loginApi} from "../../../api/user-api";
    import {Toast} from "vant";

    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: '',
            };
        },
        methods: {
            onSubmit(values) {
                loginApi(this.username, this.password).then(res => {
                    console.log(res);
                    if (res.data.code === 0) {
                        this.$store.commit("changeLogin", {isLogin: true})
                        // this.$store.dispatch("checkLoginStatus")
                        Toast.success('登录成功...');
                        this.$router.push("personalcenter");
                    } else {
                        Toast.fail(res.data.msg);
                    }
                })
                console.log('submit', values);
            },
        },
    }
</script>

<style scoped lang="less">
    .login-container {
        height: 100%;
        display: flex;

        .login-panel {
            width: 100%;
            height: 100%;
            margin-top: 30%;
            /*display: flex;*/
            /*-webkit-align-items: center;*/
            /*align-items: center;*/
            /*-webkit-justify-content: center;*/
            /*justify-content: center;*/
        }
    }
</style>