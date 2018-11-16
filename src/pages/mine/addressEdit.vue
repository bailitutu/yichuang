<template>
    <yd-layout title="编辑地址" link="/addressList">
        <yd-cell-group class="mt-10">
            <yd-cell-item>
                <span slot="left">收货人名称：</span>
                <input slot="right" type="number" placeholder="请输入收货人名称">
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">手机号：</span>
                <input slot="right" type="number" placeholder="请输入手机号">
            </yd-cell-item>

            <yd-cell-item>
                <span slot="left">邮编：</span>
                <input slot="right" type="number" placeholder="请输入邮编">
            </yd-cell-item>

            <yd-cell-item arrow>
                <span slot="left">所在地区：</span>
                <input slot="right" type="text" @click.stop="show1 = true" v-model="model1" readonly
                       placeholder="请选择收货地址">
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left" style="align-self:flex-start;padding-top:8px;">详细地址：</span>
                <yd-textarea slot="right" placeholder="请输入详细地址" maxlength="100"></yd-textarea>
            </yd-cell-item>
            <div class="set_default" >
                <yd-checkbox v-model="checkbox1" size="16" ><span style="font-size:14px;">设为默认地址</span></yd-checkbox>
            </div>
        </yd-cell-group>
        <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
        <div class="prl-10" >
            <yd-button size="large" type="primary"  bgcolor="#fff" color="#282828"> 保存</yd-button>
        </div>
        <div class="prl-10" >
            <yd-button size="large" type="danger" class="mt-10" color="#fff"> 删除地址</yd-button>
        </div>
    </yd-layout>
</template>

<script>
    import District from 'ydui-district/dist/jd_province_city_area_id'

    export default {
        name: 'address-edit',
        data () {
            return {
                show1: false,
                model1: '',
                district: District,
                checkbox1: true
            }
        },
        methods: {
            result1 (ret) {
                this.model1 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3
            }
        }
    }
</script>

<style>
    .mt-10 {
        margin-top: 10px;
    }
    .prl-10{
        padding: 0 12px;
    }
    .set_default{
        padding: 12px;
        background: #fff;
    }
    .yd-cell-left {
        min-width: 100px;
    }

    .plr-10 {
        padding: 0 10px;
    }


</style>
