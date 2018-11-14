<template>
    <yd-layout>
        <yd-navbar  title="昵称修改">
            <router-link to="/mine" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </router-link>
            <div  slot="right">
                <span>保存</span>
            </div>
        </yd-navbar>
        <yd-cell-group style='padding:10px;'>
            <yd-cell-item class="bra-5">
                <input slot="right" type="number" placeholder="一个好的昵称能让人更快的记住你">
            </yd-cell-item>
        </yd-cell-group>
    </yd-layout>
</template>

<script>
    export default {
        name: 'change-name'
    }
</script>

<style scoped>
    .bra-5{
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        overflow: hidden;
    }
</style>
