<template>
    <yd-layout title="订单" link="/mine" class="pages">
        <yd-tab active-color="#282828" color="#B0B0B0" class="tab_section" ref="tab_section">
            <yd-tab-panel label="待发货" :active="activeIndex == '1'" class="tab_cell" :style="{height: setHeight+ 'px'}">
                <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo" style="height:100%;overflow:auto;">
                    <yd-list theme="1" slot="list">
                        <yd-list-item v-for="(item, key) in list" :key="key">
                            <img slot="img" :src="item.img">
                            <span slot="title">{{item.title}}</span>
                            <yd-list-other slot="other">
                                <div>
                                    <span class="list-price"><em>¥</em>{{item.marketprice}}</span>
                                    <span class="list-del-price">¥{{item.productprice}}</span>
                                </div>
                                <div>content</div>
                            </yd-list-other>
                        </yd-list-item>
                    </yd-list>

                    <!-- 数据全部加载完毕显示 -->
                    <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

                    <!-- 加载中提示，不指定，将显示默认加载中图标 -->
                    <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

                </yd-infinitescroll>
            </yd-tab-panel>
            <yd-tab-panel label="待收货" :active=" activeIndex == '2'" class="tab_cell">
                我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友。
            </yd-tab-panel>
            <yd-tab-panel label="已完成" :active=" activeIndex == '3'" class="tab_cell">时间是一切财富中最宝贵的财富。</yd-tab-panel>
            <yd-tab-panel label="所有订单" :active=" activeIndex == '4'" class="tab_cell">真理惟一可靠的标准就是永远自相符合。</yd-tab-panel>
        </yd-tab>
    </yd-layout>
</template>

<script>


    export default {
        name: 'order-list',
        data () {
            return {
                activeIndex: '0',
                page: 1,
                pageSize: 10,
                list: [
                    {
                        img: 'http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg',
                        title: '标题标题标题标题标题',
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: 'http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg',
                        title: '骆驼男装2016夏装男士短袖T恤 圆领衣服 印花男装体恤 半袖打底衫',
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: 'http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg',
                        title: '条纹短袖T恤男士韩版衣服大码潮流男装夏季圆领体恤2016新款半袖',
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: 'http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg',
                        title: '夏季青少年衣服男生潮牌t恤 男士 夏秋学生 日系棉短袖半袖男小衫',
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: 'http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg',
                        title: '2016夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服',
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: 'http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg',
                        title: '男装衣服男夏t恤 男士短袖t恤圆领夏季潮牌宽松原宿风半截袖男',
                        marketprice: 56.23,
                        productprice: 89.36
                    }
                ]
            }
        },
        computed: {
            setHeight () {
                let sHeight = document.getElementById('scrollView').innerHeight;
                return sHeight - 42;
            }
        },
        created () {
            let activeIndex = this.$route.query.index
            if (activeIndex) this.activeIndex = activeIndex
        },
        mounted () {
            this.getHeight();
        },
        methods: {
            getHeight(){
                console.log()
            },
            loadList () {
                this.$http.jsonp('http://list.ydui.org/getdata.php?type=backposition', {
                    params: {
                        page: this.page,
                        pagesize: this.pageSize
                    }
                }).then(function (response) {
                    const _list = response.body

                    this.list = [...this.list, ..._list]

                    if (_list.length < this.pageSize || this.page == 3) {
                        /* 所有数据加载完毕 */
                        this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone')
                        return
                    }

                    /* 单次请求数据完毕 */
                    this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad')

                    this.page++
                })
            }
        }
    }
</script>

<style scoped>
    .pages,.tab_section {
        height: 100%;
        width: 100%;
        overflow: auto;
    }
    #scrollView{
        overflow:hidden;
    }
</style>
