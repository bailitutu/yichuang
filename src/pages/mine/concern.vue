<template>
    <yd-layout :title="itemId == '1'? '关注' : '粉丝'" link="/mine">
        <ul class="concern_list" v-if=" itemId == '1'">
            <li>
                <img src="../../assets/head.png" alt="" class="concern_img">
                <p>飞翔的祥</p>
            </li>
        </ul>
        <ul class="concern_list" v-else>
            <li v-for="( item,index ) in sortData" :key="index">
                <img :src="item.headImg" alt="" class="concern_img">
                <p>{{item.name}}</p>
                <yd-button size="small" type="primary" class="concern_btn"
                           :bgcolor="!item.hasConcern ? '#282828' : '#B0B0B0' " color="#fff"
                           @click.native="concernFn(index,item.hasConcern)"> {{ item.hasConcern ? '已关注' : '关注'}}
                </yd-button>

            </li>
        </ul>
    </yd-layout>
</template>

<script>
    export default {
        name: 'concern',
        data () {
            return {
                itemId: '1',
                list: [{
                    headImg: require('../../assets/head.png'),
                    name: '飞翔的羊',
                    hasConcern: false
                }, {
                    headImg: require('../../assets/head.png'),
                    name: '飞翔的祥',
                    hasConcern: true
                }, {
                    headImg: require('../../assets/head.png'),
                    name: '飞翔的祥',
                    hasConcern: false
                }]
            }
        },
        created () {
            let params = this.$route.params
            this.itemId = params.item
        },
        computed: {
            sortData () {
                let newData = this.list.sort(function (val1,val2) {
                    if(!val1.hasConcern){
                        return -1;
                    }else{
                        return 1
                    }
                })
                return newData
            },
        },
        methods: {
            concernFn (index, isConcern) {
                this.list[index].hasConcern = !isConcern
                if (isConcern) {
                    this.$dialog.toast({
                        mes: '取消关注成功'
                    })
                } else {
                    this.$dialog.toast({
                        mes: '关注成功！'
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .topBar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }

    .concern_list {
        padding: 0 12px;
    }

    .concern_list li {
        height: 52px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        display: flex;
        align-content: center;
        justify-content: space-between;
        padding: 0 10px;
        margin-top: 10px;
        background: #fff;
        align-items: center;
        flex-direction: row;
    }

    .concern_list li > img {
        width: 25px;
        height: 25px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        margin-right: 10px;
    }

    .concern_list li > p {
        font-size: 14px;
        color: #606060;
        flex: 1;
    }

    .concern_btn {
        min-width: 50px;
        height: 24px;
    }
</style>
