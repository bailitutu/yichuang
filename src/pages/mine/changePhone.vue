<template>
    <yd-layout title='手机号码更改' link="/setting">
        <div class="change_icon">
            <img src="../../assets/change_icon.png" alt="">
        </div>
        <div class="phone_tip">
            <p>您当前已绑定手机 <span>{{bindPhone | hidePhone}}</span></p>
        </div>
        <yd-cell-group class="change_section">
            <yd-cell-item class="change_item">
                <span slot="left" class="phone_label">+86</span>
                <input slot="right" type="password" placeholder="请输入原手机号码">
            </yd-cell-item>
        </yd-cell-group>
        <yd-cell-group class="change_section">
            <yd-cell-item class="change_item">
                <input slot="right" type="number" placeholder="请输入手机验证码">
                <yd-sendcode slot="right"
                             v-model="start1"
                             @click.native="sendCode1"
                             type="warning"
                ></yd-sendcode>
            </yd-cell-item>
        </yd-cell-group>

        <div style="margin:0 0.7rem;">
            <yd-button type="primary" size="large" bgcolor="#333333" color="#fff" @click.native="nextFn">下一步</yd-button>
        </div>
    </yd-layout>
</template>

<script>
    export default {
        name: 'change-phone',
        data () {
            return {
                start1: false,
                bindPhone: '18223423412'
            }
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
            },
            nextFn () {
                this.$router.push({path: 'bindPhone'})
            },

        }
    }
</script>
<style scoped>
    .change_icon {
        width: 100%;
        height: auto;
        text-align: center;
        padding: 0.72rem 0 0.2rem;
    }

    .change_icon img {
        width: 4.40rem;
        height: 4.40rem;
    }

    .change_section {
        margin: 0.4rem 0.7rem;
        -webkit-border-radius: 0.08rem;
        -moz-border-radius: 0.08rem;
        border-radius: 0.08rem;
        overflow: hidden;
    }

    .phone_tip {
        text-align: center;
        font-size: 0.28rem;
        color: #606060;
    }

    .phone_tip span {
        color: #0C7FE7;
    }

    .phone_label {
        width: 0.84rem;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        border-right: 1px solid #9B9B9B;
        margin-right: 0.2rem;
    }
</style>
