<template>
    <yd-layout :title="itemId == '1'? '关注' : '粉丝'" link="/mine">


    </yd-layout>
</template>

<script>
    export default {
        name: 'concern',
        data () {
            return {
                itemId: '1',

            }
        },
        created () {
            let params = this.$route.params;
            this.itemId = params.item;
        }
    }
</script>

<style scoped>
    .topBar{
        position:fixed;
        top:0;
        left: 0;
        right:0;
        z-index: 1000;
    }
</style>
