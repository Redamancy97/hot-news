<template>
    <div class="background">

        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <div v-for="(item,index) in list" :key="item.id" class="music">
                <div class="music-cover">
                    <img :src="item.al.picUrl" alt="">
                </div>
                <div class="music-info">
                    <p class="music-name">{{item.name}}</p>
                    <p class="music-author">{{item.ar[0].name}}</p>
                    <p class="music-icon">
                        <van-icon name="play-circle-o" @click="getUrl(item.id,index)"/>
                        <van-icon name="pause-circle-o" @click="pause(index)"/>
                    </p>
                    <audio :src="src" controls ref="audio" style="display: none"></audio>
                </div>
            </div>
        </van-list>

    </div>
</template>

<script>
    import {getMusicBill, getMusicUrl} from "../../api/music-api";

    export default {
        name: "Music",
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                url: '',
                src: '',
                lispicUrlt:[]
                // isPlay: -1
            }
        },
        methods: {
            onLoad() {
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        // eslint-disable-next-line
                        // debugger
                        this.lispicUrlt.push(this.list.length + 1);
                    }

                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 1000);
            },
            getUrl(url, index) {
                this.url = url;
                getMusicUrl(this.url).then(res => {
                    console.log(res.data.data[0].url);
                    this.src = res.data.data[0].url;
                    this.$nextTick(() => {
                        this.play(index);
                    })
                })
                console.log(this.url);
            },
            play(index) {
                // console.log(1111)
                this.$refs.audio[index].play();
                this.isPlay = index;
            },
            pause(index) {
                // console.log(2222);
                this.$refs.audio[index].pause();
                this.isPlay = index;
            }

        },
        created() {
            getMusicBill(1).then(res => {
                // console.log(res.data.playlist.tracks);
                this.list = res.data.playlist.tracks.splice(0, 30);
            });

        }
    }
</script>

<style scoped lang="less">
    .background {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 40px;
        left: 0;
        background-color: #f4eeff;
        z-index: -1;
        padding: 10px;
        overflow: scroll;

        .music {
            height: 100px;
            width: 100%;
            display: flex;
            margin-bottom: 10px;
            background-color: #fff;

            .music-cover {
                width: 100px;
                height: 100%;
                flex-shrink: 0;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .music-info {
                height: 100%;
                flex-grow: 1;
                margin-left: 10px;

                .music-name {
                    width: 60%;
                    font-size: 18px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .music-author {
                    margin-top: 10px;
                    font-size: 14px;
                }

                .music-icon {
                    color: #424874;
                    margin-top: 10px;
                    font-size: 22px;
                }
            }
        }
    }

    .isactive {
        display: none;
    }
</style>