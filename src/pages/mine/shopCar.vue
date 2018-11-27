<template>
    <yd-layout title="购物车" link="/mine">
        <ul class="car_list">
            <li v-for="(item ,index) in list" :key="index">
                <div class="car_left" @click="selectItem(index)">
                    <span :class="item.selected ? 'active': ''"></span>
                </div>
                <div class="car_center">
                    <div class="goods_img">
                        <img :src="item.goodImg" alt="">
                    </div>
                    <div class="goods_detail">
                        <div class="one_row">{{item.name}}</div>
                        <span>￥{{ item.price}}</span>
                    </div>
                </div>
                <div class="car_right">
                    <yd-spinner max="100" unit="1" width="1.6rem" height="0.45rem" v-model="item.num"></yd-spinner>
                </div>
            </li>
        </ul>
        <div class="car_footer">
            <div class="car_tool">
                <yd-checkbox v-model="selectAll" size="20" @change.native="selAll" color="#606060"
                             style="font-size:0.28rem;" shape="circle">
                    全选
                </yd-checkbox>
                <yd-button type="primary" bgcolor="#333" color="#fff" class="yc_btn" @click.native="delHandle">删除
                </yd-button>
            </div>
            <div class="car_end">
                <p>价格: <span>￥{{ allMoney }}</span></p>
                <yd-button type="primary" bgcolor="#333" color="#fff" class="yc_btn" @click.native="goPay">结算
                </yd-button>
            </div>
        </div>
    </yd-layout>
</template>

<script>
    export default {
        name: 'shop-car',
        data () {
            return {
                spinner1: 1,
                selectAll: false,
                list: [
                    {
                        selected: true,
                        goodImg: require('../../assets/goods.png'),
                        name: '女士连衣裙女士连衣裙女士连衣裙女士连衣裙',
                        price: '188.50',
                        num: 1
                    },
                    {
                        selected: false,
                        goodImg: require('../../assets/goods.png'),
                        name: '女士连衣裙女士连衣裙女士连衣裙女士连衣裙',
                        price: '88.50',
                        num: 1
                    }, {
                        selected: true,
                        goodImg: require('../../assets/goods.png'),
                        name: '女士连衣裙女士连衣裙女士连衣裙女士连衣裙',
                        price: '288.50',
                        num: 1
                    },
                    {
                        selected: false,
                        goodImg: require('../../assets/goods.png'),
                        name: '女士连衣裙女士连衣裙女士连衣裙女士连衣裙',
                        price: '68.50',
                        num: 1
                    }
                ]
            }
        },
        computed: {

            allMoney () {
                let allPrice = 0
                this.list.map((item) => {
                    if (item.selected) {
                        allPrice += Math.floor(parseFloat(item.price * 100 * item.num)) / 100
                    }
                })
                return allPrice
            },
            hasSelect () {
                return this.list.filter(item => item.selected)
            }
        },
        watch: {
            list: {
                handler (val) {
                    let isAll = true
                    if (!val.length) {
                        isAll = false
                    } else {
                        val.map((item) => {
                            if (!item.selected) {
                                isAll = false
                            }
                        })
                    }
                    this.selectAll = isAll
                },
                deep: true
            }
        },
        methods: {
            // 选择某一项;
            selectItem (i) {
                this.list[i].selected = !this.list[i].selected
            },
            // 全选/反选
            selAll () {
                this.list.forEach((item) => {
                    item.selected = !this.selectAll
                })
            },
            // 删除
            delHandle () {
                if (this.hasSelect.length > 0) {
                    this.$dialog.confirm({
                        title: '',
                        mes: '确认移除？',
                        opts: () => {
                            // 发送删除请求
                            this.list = this.list.filter(item => !item.selected)
                        }
                    })
                } else {
                    this.$dialog.toast({
                        mes: '请选择要移除的商品'
                    })
                }
            },
            // 前往支付
            goPay () {
                if (this.hasSelect.length > 0) {
                    this.$dialog.confirm({
                        title: '',
                        mes: '确认结算？',
                        opts: () => {
                            // 跳转结算页面
                            this.list = this.list.filter(item => !item.selected)
                            this.$dialog.toast({
                                mes: '结算成功'
                            })
                        }
                    })
                } else if(!this.list.length){
                    this.$dialog.toast({
                        mes: '还没有商品哦，快去逛逛吧！'
                    })
                }else {
                    this.$dialog.toast({
                        mes: '请先选择商品'
                    })
                }
            }
        }
    }
</script>
<style>
    .yd-confirm-hd,.yd-confirm-bd{
        text-align: center;
    }
</style>
<style scoped>
    .car_list {
        padding: 0 0.24rem;
    }

    .car_list > li {
        height: 1.8rem;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: stretch;
        padding: 0.2rem 0.2rem 0.2rem 0;
        margin-top: 0.2rem;
        overflow: hidden;
        -webkit-border-radius: 0.08rem;
        -moz-border-radius: 0.08rem;
        border-radius: 0.08rem;
    }

    .car_left {
        width: 0.8rem;
        height: 100%;
        flex: 1;
        text-align: center;
        align-content: center;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .car_left span {
        width: 0.4rem;
        height: 0.4rem;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 1px solid #606060;
        position: relative;
    }

    .car_left span.active::after {
        content: '';
        width: 0.24rem;
        height: 0.24rem;
        background: #606060;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -0.12rem;
        margin-top: -0.12rem;
    }

    .car_center {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: stretch;
    }

    .car_center .goods_detail {
        height: 100%;
        width: 3rem;
        overflow: hidden;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        align-content: stretch;
        padding: 0 0.2rem;
    }

    .car_center .goods_img {
        width: 1.4rem;
        height: 1.4rem;
    }

    .car_center .goods_img img {
        width: 100%;
        height: 100%;
    }

    .car_right {
        display: flex;
        text-align: center;
        height: 100%;
        align-items: center;
    }

    .car_footer {
        width: 100%;
        height: 2rem;
        background: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
    }

    .car_tool, .car_end {
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding: 0.2rem 0.2rem 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .car_end p {
        font-size: 0.24rem;
        color: #606060;
    }

    .car_end > p > span {
        font-size: 0.36rem;
        color: #E01E1E;
    }
</style>
