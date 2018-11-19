<template>
    <yd-layout title='密码修改' link="/setting">
        <div class="change_icon">
            <img src="../../assets/change_icon.png" alt="">
        </div>
        <yd-cell-group class="change_section">
            <yd-cell-item class="change_item">
                <input slot="right" type="text" placeholder="输入旧密码">
            </yd-cell-item>
        </yd-cell-group>
        <yd-cell-group class="change_section">
            <yd-cell-item class="change_item">
                <input slot="right" type="password" placeholder="输入新密码">
            </yd-cell-item>
        </yd-cell-group>
        <yd-cell-group class="change_section">
            <yd-cell-item class="change_item">
                <input slot="right" type="password" placeholder="再次确认密码">
            </yd-cell-item>
        </yd-cell-group>

        <div style="margin:0 0.7rem;">
            <yd-button type="primary" size="large" bgcolor="#333333" color="#fff">确定</yd-button>
        </div>
    </yd-layout>
</template>

<script>
    export default {
        name: 'change-password'
    }
</script>
<style scoped>
    .change_icon{
        width: 100%;
        height:auto;
        text-align: center;
        padding:0.72rem 0 0.2rem;
    }
    .change_icon img{
        width:4.40rem;
        height:4.40rem;
    }
    .change_section{
        margin: 0.4rem 0.7rem;
        -webkit-border-radius: 0.08rem;
        -moz-border-radius: 0.08rem;
        border-radius: 0.08rem;
        overflow: hidden;
    }
</style>
