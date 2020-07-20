<template>
    <div>
       <!--搜索组件-->

        <form action="/">
            <van-search
                    v-model="value"
                    show-action
                    placeholder="请输入搜索关键词"
                    @search="onSearch"
                    @cancel="onCancel"
            />
        </form>
        <div class="searchContainer">
      <span class="history" v-for="(item,index) in list" :key="item.id">
          <!-- 标签组件-->
           <van-tag
                v-if="show.primary"
                closeable
                size="medium"
                type="primary"
                @close="close(index)"
        >{{item.content}}</van-tag>
       </span>
            <div style="text-align:center;margin:20px 0;font-size:14px;" @click="clearHistory">清空历史记录</div>
        </div>
    </div>
</template>
<script>

    // import {Toast} from "vant";
    export default {
        name: "SearchList",
        data() {
            return {
                value: "",
                list: [],
                //标签组件的显示
                show: {
                    primary: true,
                    success: true
                }
            };
        },
        methods: {
            onSearch() {
                // Toast(val);
                let historyObj = {
                    id: Date.now(),
                    content: this.value
                };
                if (this.value == ""){
                    return;
                }
                this.list.push(historyObj);
                this.$router.push("sldetail/"+this.value)
                localStorage.setItem("news", JSON.stringify(this.list));
            },
            onCancel() {
                this.$router.go(-1)
            },
            //历史记录关闭方法
            close(index) {
                this.list.splice(index, 1);
                localStorage.setItem("news", JSON.stringify(this.list));
            },
            clearHistory() {
                localStorage.clear();
                this.list = [];
            },
        },
        created() {
            this.list = JSON.parse(localStorage.getItem("news") || "[]");
        },

    };
</script>
<style lang="less" scoped>
    .searchContainer {
        padding: 10px;
    }
    .container {
        display: flex;
        padding: 0 20px;
    }

</style>