<template>
    <yd-layout class="pages">
        <transition name="slide-right">
            <router-view class="myRouter"></router-view>
        </transition>
        <tab-bar></tab-bar>
    </yd-layout>
</template>

<script>
    import tabBar from '@/components/tabBar'

    export default {
        name: 'index',
        components: {
            tabBar
        }
    }
</script>

<style scoped>
    .myRouter {
        overflow: auto;
        padding-bottom: 1.08rem;
    }
</style>
