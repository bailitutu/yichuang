<template>
    <yd-layout>
        <div class="user_header">
            <img src="../../assets/head.png" alt="" class="header_img"  @click="goSetting()">
            <p class="user_name">小仙女</p>
            <yd-grids-group :rows="2" class="fans_item">
                <yd-grids-item class="fans_cell" link="concern/1">
                    <div slot="else" style="text-align: center;">
                        <p>关注 <span>12</span></p>
                    </div>
                </yd-grids-item>
                <yd-grids-item class="fans_cell" link="concern/2">
                    <div slot="else">
                        <p>粉丝 <span>12</span></p>
                    </div>
                </yd-grids-item>
            </yd-grids-group>
        </div>

        <yd-grids-group :rows="3" class="mt-35">
            <yd-grids-item link="/shopCar">
                <div slot="else" style="text-align: center;">
                    <img src="../../assets/myShopCar.png" class="center_cell" alt="">
                    <p>购物车</p>
                </div>
            </yd-grids-item>
            <yd-grids-item link="/message">
                <div slot="else" style="text-align: center;">
                    <img src="../../assets/myMessage.png" class="center_cell" alt="">
                    <p>我的消息</p>
                </div>
            </yd-grids-item>
            <yd-grids-item link="/mineMade">
                <div slot="else" style="text-align: center;">
                    <img src="../../assets/myMade.png" class="center_cell" alt="">
                    <p>我的定制</p>
                </div>
            </yd-grids-item>
            <yd-grids-item>
                <div slot="else" style="text-align: center;">
                    <img src="../../assets/myMatch.png" class="center_cell" alt="">
                    <p>赛事</p>
                </div>
            </yd-grids-item>
            <yd-grids-item link="/myWallet">
                <div slot="else" style="text-align: center;">
                    <img src="../../assets/myWallet.png" class="center_cell" alt="">
                    <p>钱包</p>
                </div>
            </yd-grids-item>
            <yd-grids-item link="/shopIn">
                <div slot="else" style="text-align: center;">
                    <img src="../../assets/shopIn.png" class="center_cell" alt="">
                    <p>店铺入驻</p>
                </div>
            </yd-grids-item>
        </yd-grids-group>

        <yd-cell-group class="mt-15">
            <yd-cell-item arrow href="/orderList" type="link">
                <span slot="left">我的订单</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-grids-group :rows="4">
                <yd-grids-item @click.native="goOrder(1)">
                    <div slot="else" style="text-align: center;">
                        <img src="../../assets/waitSend.png" class="order_state" alt="">
                        <p>待发货</p>
                    </div>
                </yd-grids-item>
                <yd-grids-item @click.native="goOrder(2)">
                    <div slot="else" style="text-align: center;">
                        <img src="../../assets/waitGet.png" class="order_state" alt="">
                        <p>待收货</p>
                    </div>
                </yd-grids-item>
                <yd-grids-item @click.native="goOrder(3)">
                    <div slot="else" style="text-align: center;">
                        <img src="../../assets/waitFeed.png" class="order_state" alt="">
                        <p>已完成</p>
                    </div>
                </yd-grids-item>
                <yd-grids-item @click.native="goOrder(4)">
                    <div slot="else" style="text-align: center;">
                        <img src="../../assets/backManage.png" class="order_state" alt="">
                        <p>所有订单</p>
                    </div>
                </yd-grids-item>
            </yd-grids-group>
        </yd-cell-group>


        <yd-cell-group class="mt-15">
            <yd-cell-item arrow href="aboutUs" type="link">
                <span slot="left">关于我们</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item arrow href="connectUs" type="link">
                <span slot="left">联系我们</span>
                <span slot="right"></span>
            </yd-cell-item>
        </yd-cell-group>
    </yd-layout>
</template>

<script>
    export default {
        name: 'index',
        methods: {
            goOrder (index) {
                this.$router.push({path: 'orderList', query: {index: index}})
            },
            goSetting () {
                this.$router.push({path: 'setting'})
            }

        }
    }
</script>

<style lang="less">
    .mt-15 {
        margin-top: 15px;
    }

    .mt-35 {
        margin-top: 35px;
    }

    .user_header {
        height: auto;
        background: #000;
        padding: 88px 0;
        text-align: center;
        position: relative;
        .header_img {
            height: 60px;
            width: 60px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            display: block;
            margin: 0 auto;
        }
        .user_name {
            font-size: 15px;
            color: #fff;
            margin-top: 8px;
        }
        .fans_item {
            height: 50px;
            position: absolute;
            bottom: -25px;
            background: #fff;
            width: 90%;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            left: 50%;
            margin-left: -45%;
            z-index: 10;
            overflow: hidden;
            .fans_cell {
                text-align: center;
            }
        }
    }

    .order_state {
        width: 20px;
        height: 20px;
    }

    .center_cell {
        width: 30px;
        height: 30px;
    }
</style>
