<template>
    <yd-layout title="地址管理" link="/mine">
        <yd-cell-group class="mlr-10" style="background: #f4f4f4;">
            <yd-cell-item arrow class="list_item" :href="{ path:'/addressEdit',query:{ type:'2'}}" type="link"
                          v-for="(data,index) in 4" :key="index">
                <div slot="left">
                    <p> 小明 <span>18232321123</span> <span>默认</span></p>
                    <div class="address_detail">浙江省杭州市余杭区常山路345号阿里巴巴未来科技 城3幢一单元2109</div>
                </div>
                <span slot="right"></span>
            </yd-cell-item>
        </yd-cell-group>
        <div class="plr-10"
             style="width:100%;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;">
            <yd-button size="large" type="primary" style="background: #fff;color: #282828;" @click.native="addAddress">
                <!--<yd-icon name="home" size=".6rem" color=""></yd-icon>-->
                新增地址
            </yd-button>
        </div>
    </yd-layout>
</template>

<script>
    export default {
        name: 'address-list',
        methods:{
            addAddress(){
                this.$router.push({path:'addressEdit',query:{ type:'1'}})
            }
        }
    }
</script>

<style>
    .mlr-10 {
        margin: 0 10px;
    }

    .plr-10 {
        padding: 0 10px;
    }

    .list_item {
        height: 80px;
        margin-top: 10px;
        background: #fff;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }

    .address_detail {
        height: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow:hidden;
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;
        width: 100%;
        white-space: normal;
        word-break: break-all;
        margin-top: 4px;
    }

    .yd-cell {
        background-color: #f4f4f4;
    }
</style>
