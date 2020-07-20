<template>
    <div>
        <van-cell-group style="margin-bottom: 10px">
            <div style="text-align: center;padding: 10px">
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
            <van-cell title="查看个人信息" is-link to="viewinformation"/>
            <van-cell title="修改个人信息" is-link to="modifyinformation"/>
            <van-cell title="收藏列表" is-link to="collectList"/>
        </van-cell-group>

        <van-button round block type="info" @click="logout"
                    style="margin-top: 20px;background-color:#a6b1e1;border: none">
            退出登录
        </van-button>
    </div>
</template>

<script>
    import {getUserInfo, logout} from "../../../api/user-api";
    import {mapState} from "vuex";

    export default {
        name: "PersonalCenter",
        data() {
            return {
                user: {}
            }
        },
        computed: {
            ...mapState["isLogin"]
        },
        methods: {
            logout() {
                if (this.$store.state.isLogin) {
                    logout().then(res => {
                        if (res.data.code == 403) {
                            this.$store.commit("changeLogin", {isLogin: false})
                            this.$router.push("login")
                        }
                    })
                }
            }
        },
        created() {
            getUserInfo().then(res => {
                this.user = res.data.data;
            })
        }
    }
</script>

<style scoped>

</style>