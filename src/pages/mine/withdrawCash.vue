<template>
    <yd-layout title="提现" link="myWallet">
        <yd-cell-group class="mt-10">
            <yd-cell-item>
                <span slot="left">提现账户：</span>
                <input slot="right" type="number" v-model="cashAccout" placeholder="添加支付宝账号">
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">提现金额：</span>
                <input slot="right" type="number" v-model="cashValue" placeholder="请输入提现金额">
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">账户密码：</span>
                <input slot="right" type="number" v-model="cashPsd" placeholder="请输入账户密码">
            </yd-cell-item>
        </yd-cell-group>
        <div class="plr-12">
            <yd-button type="primary" size="large" bgcolor="#282828" color="#fff">提现</yd-button>
        </div>
    </yd-layout>
</template>

<script>
    export default {
        name: 'withdraw-cash',
        data () {
            return {
                cashAccout: '',
                cashValue: '',
                cashPsd: ''
            }
        }
    }
</script>

<style scoped>

</style>
