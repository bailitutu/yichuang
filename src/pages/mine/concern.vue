<template>
    <div>
        <div v-if="itemId == '1'">
            关注

        </div>
        <div v-else>粉丝</div>
    </div>
</template>

<script>
    export default {
        name: 'concern',
        data () {
            return {
                itemId: '1'
            }
        },
        created () {
            let params = this.$route.params;
            this.itemId = params.item;
        }
    }
</script>

<style scoped>

</style>
