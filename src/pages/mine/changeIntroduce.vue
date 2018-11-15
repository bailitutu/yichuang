<template>
    <yd-layout>
        <yd-navbar title="昵称修改">
            <router-link to="/mine" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </router-link>
            <router-link slot="right" to="" @click.native="saveFn()">
                <span style="color:red;">保存</span>
            </router-link>
        </yd-navbar>
        <yd-cell-group style='padding:10px;'>
            <yd-cell-item class="bra-5">
                <input slot="right" type="number" v-model="inputValue" placeholder="你需要一个好的介绍">
            </yd-cell-item>
        </yd-cell-group>
    </yd-layout>
</template>

<script>
    export default {
        name: 'change-introduce',
        data () {
            return {
                inputValue: ''
            }
        },
        methods: {
            saveFn () {
                let inputValue = this.inputValue
                this.$http.post('/mine/changeName', {value: inputValue}, function (res) {
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>

</style>
