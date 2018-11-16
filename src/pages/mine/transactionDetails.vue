<template>
    <yd-layout title="交易明细" link="/myWallet">
        <ul class="detail_list">
           <li>
               <h3>商品收益</h3>
               <p>2018-09-29</p>
               <span>+29</span>
           </li>
            <li>
                <h3>商品收益</h3>
                <p>2018-09-29</p>
                <span class="error">-1109</span>
            </li>
        </ul>
    </yd-layout>
</template>

<script>
    export default {
        name: 'transaction-details'
    }
</script>

<style scoped>
    .detail_list{
        height: 100px;
        background: #fff;
        padding:0 12px;
    }
    .detail_list li{
        height:44px;
        font-size:14px;
        line-height: 44px;
        display:flex;
        justify-content: space-between;
        align-content: center;
        border-bottom: 1px solid #f4f4f4;
    }
    .detail_list li h3{
        color: #333;
        font-weight:normal;
        flex:1;
    }
    .detail_list li p{
        color: #939393;
        flex:1;
        text-align: center;
    }
    .detail_list li span{
        color: #72CA12;
        flex:1;
        text-align: right;
    }
    .detail_list li span.error{
        color: #E01E1E;
    }

</style>
