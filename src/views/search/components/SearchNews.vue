<template>
    <div>
        <div class="index-container" style="background-color:#f4eeff;">
        <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                input-align="center"
        />
            <p class="clean">清除历史记录</p>
        </div>
         <div class="index-container-bottom" >
            <p class="real-time">实时热搜:</p>
            <ul>
                <li v-for="(item,index) in list" :key="index" >{{item.title}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {searchNews} from "../../../api/hot-news-api";

    export default {
        name: "SearchNews",
        data(){
            return{
                value:'',
                list:[]
            }
        },
        props:{
            pageNum:[Number,String],
            pageSize:[Number,String]
        },
       created() {
           searchNews(this.pageNum,this.pageSize).then(res=>{
               // console.log(res)
               this.list=res.data.rows
           })
       }

    }
</script>

<style scoped lang="less">
    .index-container {
        .clean{
            margin: 20px 0;
            padding-left: 130px;
        }
    }
    .index-container-bottom{
        width: 100%;
         .real-time{
             font-size: 20px;
             padding: 15px 0;
         }
        ul {
            li{
                padding: 10px 15px;
            }
        }
    }
</style>