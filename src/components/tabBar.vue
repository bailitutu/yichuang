<template>
    <yd-tabbar class="tabBar" slot="tabbar">
        <yd-tabbar-item title="首页" link="home">
            <yd-icon :name=" currentTab == '/home' ? 'home' : 'home-outline'" slot="icon" size="0.54rem"
                     color="#FF685D"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="定制" link="customMade">
            <yd-icon :name="currentTab == '/customMade' ? 'like': 'like-outline'" slot="icon" size="0.54rem"
                     color="#FF685D"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="创意" link="originality">
            <yd-icon :name=" currentTab == '/originality' ? 'shopcart' : 'shopcart-outline'" slot="icon" size="0.54rem"
                     color="#FF685D"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="我的" link="mine">
            <yd-icon :name=" currentTab == '/mine' ? 'ucenter' : 'ucenter-outline'" slot="icon" size="0.54rem"
                     color="#FF685D"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
</template>

<script>
    export default {
        data () {
            return {
                currentTab: '/home'
            }
        },
        created () {
            this.currentTab = this.$route.path
        },
        watch: {
            '$route' (to) {
                this.currentTab = to.path
            }
        }
    }
</script>

<style scoped>
    .tabBar {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 1000;
    }

</style>
