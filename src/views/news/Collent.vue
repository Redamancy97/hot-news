<template>
    <div>
    <!--收藏-->
        <div class="collent">
        <van-icon v-show="!like" name="like-o" @click="enshrine"/>
        <van-icon v-show="like" name="like" color="red" @click="enshrine"/>
        </div>
    </div>
</template>
<script>
    import {Dialog, Toast} from "vant";
    export default {
        name: "Collent",
        data(){
            return{
                like: false,
            }
        },
        methods: {
            enshrine() {
                if (this.like) {
                    Dialog.confirm({
                        title: '你不喜欢了？',
                        message: '那就取消吧',
                    })
                        .then(() => {
                            this.like = !this.like
                        })
                        .catch(() => {
                            // on cancel
                        });
                } else {
                    this.like = !this.like
                    Toast.success('收藏成功');
                }
            }
        },
    }
</script>
<style scoped lang="less">
    .collent{
        font-size: 30px;
        position: fixed;
        left:170px;
        bottom: 50px;
    }
</style>