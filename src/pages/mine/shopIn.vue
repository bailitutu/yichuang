<template>
    <yd-layout title="店铺入驻" link="/mine">
        <yd-cell-group class="mt-10" v-if="!isCheck">
            <yd-cell-item>
                <span slot="left">手机号：</span>
                <input slot="right" type="number" placeholder="请输入手机号">
            </yd-cell-item>
            <yd-cell-item>
                <input type="text" slot="right" placeholder="请输入验证码">
                <!-- ↓↓关键代码是这里↓↓ -->
                <yd-sendcode slot="right"
                             v-model="start1"
                             @click.native="sendCode1"
                             type="warning"
                ></yd-sendcode>
                <!-- ↑↑关键代码是这里↑↑ -->

            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">姓名：</span>
                <input slot="right" type="number" placeholder="请输入姓名">
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">微信号：</span>
                <input slot="right" type="number" placeholder="请输入微信号">
            </yd-cell-item>

        </yd-cell-group >
        <div class="btn_box" v-if="!isCheck">
            <yd-button size="large" bgcolor="#333" color="#FFF">申请入驻</yd-button>
        </div>

        <div class="checking_item" v-if="isCheck">
            <img src="../../assets/shenhezhong.png" alt="">
            <p>审核中</p>
        </div>


    </yd-layout>
</template>

<script>
    export default {
        name: 'address-edit',
        data () {
            return {
                start1: false,
                isCheck: true
            }
        },
        created () {
            console.log(this.$route)
        },
        methods: {
            sendCode1 () {
                this.$dialog.loading.open('发送中...')
                setTimeout(() => {

                    this.start1 = true
                    this.$dialog.loading.close()

                    this.$dialog.toast({
                        mes: '已发送',
                        icon: 'success',
                        timeout: 1500
                    })

                }, 1000)
            }
        }
    }
</script>

<style>
    .mt-10 {
        margin-top: 10px;
    }

    .yd-cell-item {
        background: #fff;
    }

    .btn_box {
        width: 100%;
        padding: 12px;
    }

    .checking_item {
        text-align: center;
    }

    .checking_item img {
        width: 160px;
        height: auto;
        margin: 90px auto 0;
        display: block;
    }

    .checking_item p {
        font-size: 14px;
        color: #B0B0B0;
        margin-top: 34px;
    }
</style>
