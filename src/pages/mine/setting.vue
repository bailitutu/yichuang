<template>
    <yd-layout title="设置" link="/mine">
        <yd-cell-group class="mt-15">
            <yd-cell-item href="addressList" type="link">
                <span slot="left">头像</span>
                <span slot="right">
                    <img src="../../assets/head.png" class="userHead" alt="">
                </span>
            </yd-cell-item>
        </yd-cell-group>
        <yd-cell-group class="mt-15">
            <yd-cell-item arrow href="changeName" type="link">
                <span slot="left">昵称</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item arrow href="changeIntroduce" type="link">
                <span slot="left">店铺介绍</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item arrow href="#" type="link" class="shopBgItem">
                <span slot="left">店铺背景图</span>
                <span slot="right">
                    <img src="../../assets/banner.png" class="shopBg" alt="">
                </span>
            </yd-cell-item>
        </yd-cell-group>
        <yd-cell-group class="mt-15">
            <yd-cell-item arrow href="changePassword" type="link">
                <span slot="left">密码修改</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item arrow href="changePhone" type="link">
                <span slot="left">更换手机号</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item arrow href="addressList" type="link">
                <span slot="left">收货地址管理</span>
                <span slot="right"></span>
            </yd-cell-item>
        </yd-cell-group>
        <div class="plr-12">
            <yd-button type="primary" size="large" bgcolor="#282828" color="#fff" @click.native="loginOut">退出登录
            </yd-button>
        </div>
    </yd-layout>
</template>

<script>
    export default {
        name: 'setting',
        methods: {
            loginOut () {

            }
        }
    }
</script>

<style scoped>
    .plr-12 {
        padding: 0 12px;
    }

    .userHead {
        width: 22px;
        height: 22px;
    }

    .shopBgItem {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .shopBg {
        height: 50px;
        width: 90px;
    }
</style>
