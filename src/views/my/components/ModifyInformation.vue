<template>
    <div>
        <!--        v-model="value"-->
        <Return :title="'修改信息'"></Return>
        <van-cell-group style="margin-bottom: 10px;margin-top: 10px;overflow: hidden">
            <div style="text-align: center;padding: 20px">
                <van-image
                        round
                        width="5rem"
                        height="5rem"
                        :src="userInfo.avatar"
                        @click="changeAvatar"
                />
                <input type="file" style="display: none" @change="uploadImg" ref="img">
                <p style="font-size: 16px">点击图片，修改头像</p>
            </div>
        </van-cell-group>
        <van-form @submit="Onsubmit" style="margin-top: 20px">
            <!--            <van-uploader v-model="fileList" preview-image multiple="false"/>-->
            <van-field label="昵称" v-model="userInfo.userName"/>
            <van-field label="邮箱" v-model="userInfo.email"/>
            <van-field label="手机号" v-model="userInfo.phonenumber"/>
            <!--            <van-field label="性别" v-model="userInfo.sex"/>-->
            <van-field name="radio" label="性别">
                <template #input>
                    <van-radio-group v-model="userInfo.sex" direction="horizontal">
                        <van-radio name="0">男</van-radio>
                        <van-radio name="1">女</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
            <van-field label="个人简介" v-model="userInfo.remark"/>
            <van-button round block type="info" native-type="submit"
                        style="margin-top: 40px;background-color:#a6b1e1;border: none">
                修改信息
            </van-button>
        </van-form>

    </div>
</template>

<script>
    // import Return from "./Return";
    import {changeImg, getUserInfo, modInfo} from "../../../api/user-api";
    import {Toast} from "vant";
    import Return from "../../../components/header/Return";

    export default {
        name: "ModifyInformation",
        data() {
            return {
                userInfo: {},
                // fileList: []
                // radio: '1',
            }
        },
        components: {
            Return
        },
        methods: {
            Onsubmit() {
                modInfo(this.userInfo).then(res => {
                    console.log(res);
                    if (res.data.code == 0) {
                        Toast.success('信息修改成功...');
                        getUserInfo().then(res => {
                            console.log(res.data.data)
                            this.userInfo = res.data.data;
                        })
                    }
                })
            },
            changeAvatar() {
                this.$refs.img.click();
            },
            uploadImg(e) {
                console.log(e);
                changeImg(e.target.files[0]).then(res => {
                    console.log(res);
                    getUserInfo().then(res => {
                        console.log(res.data.data)
                        this.userInfo = res.data.data;
                    })
                });
            }
        },
        created() {
            getUserInfo().then(res => {
                console.log(res.data.data)
                this.userInfo = res.data.data
            });
        }
    }
</script>

<style scoped>

</style>