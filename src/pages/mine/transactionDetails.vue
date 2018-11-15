<template>
    <yd-layout title="交易明细" link="/myWallet">
        <yd-flexbox class="list_item" >
            <yd-flexbox-item class="list_cell"></yd-flexbox-item>
        </yd-flexbox>
    </yd-layout>
</template>

<script>
    export default {
        name: 'transaction-details'
    }
</script>

<style scoped>
    .list_item{
        height: 100px;
        background: #fff;
    }
    .list_cell{

    }
</style>
