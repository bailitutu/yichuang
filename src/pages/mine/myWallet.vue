<template>
    <yd-layout title="我的钱包" link="/mine">
        <div class="wallet_item">
            <div class="history" @click="checkDetail()">
                <span> 交易记录</span>
            </div>
            <p>我的余额</p>
            <!--<h3>980.00</h3>-->
            <yd-countup class="count_num"
                        endnum="1200"
                        duration="1"
                        decimals="2"
                        separator=","
                        prefix=""
                        suffix=""
            ></yd-countup>
            <yd-button size="small" class="cash_btn" @click.native="goCash">提现</yd-button>
        </div>
    </yd-layout>
</template>

<script>
    export default {
        name: 'my-wallet',
        data () {
            return {}
        },
        methods: {
            checkDetail () {
                this.$router.push({name: 'transDetail', query: {userId: '11'}})
            },
            goCash () {
                this.$router.push({name: 'withdrawCash'})
            }
        }
    }
</script>

<style scoped>
    .wallet_item {
        margin: 10px 12px;
        height: 196px;
        background: url("../../assets/wallet_bg.png") no-repeat center;
        background-size: 100% auto;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        text-align: center;
        color: #fff;
    }

    .wallet_item .history {
        text-align: right;
        color: #fff;
        font-size: 12px;
    }

    .wallet_item .history span {
        display: inline-block;
        padding: 8px 10px;
        height: 100%;
        width: auto;
    }

    .wallet_item p {
        font-size: 13px;
        margin-top: 20px;
    }

    .wallet_item .count_num {
        font-size: 24px;
        margin-top: 26px;
        display: block;
    }

    .wallet_item .cash_btn {
        font-size: 13px;
        color: #3C9EF7;
        margin-top: 30px;
        background: #fff;
    }
</style>
