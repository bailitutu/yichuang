<template>
    <yd-layout title="我的消息" link="/mine">
        <ul class="mess_list">
            <li class="mess_item">
                <div class="mess_icon">
                    <img class="mess_icon" src="../../assets/message_icon.png" style="" alt="">
                    <yd-badge type="danger" scale="0.9" class="mess_badge">10</yd-badge>
                </div>
                <div class="mess_cell">
                    <div class="mess_title"><span>小仙女</span><span>20181001</span></div>
                    <div class="mess_text">美女你的身打发士大夫萨达萨达材比例怎么样，我们好为您量身定做！！！</div>
                </div>
            </li>
            <li class="mess_item">
                <div class="mess_icon">
                    <img class="mess_icon" src="../../assets/message_icon.png" style="" alt="">
                    <yd-badge type="danger" scale="0.9" class="mess_badge">8</yd-badge>
                </div>
                <div class="mess_cell">
                    <div class="mess_title"><span>小仙女</span><span>20181001</span></div>
                    <div class="mess_text">美女你的身打发士大夫萨达萨达材比例怎么样，我们好为您量身定做！！！</div>
                </div>
            </li>
            <li class="mess_item">
                <div class="mess_icon">
                    <img class="mess_icon" src="../../assets/message_icon.png" style="" alt="">
                    <yd-badge type="danger" scale="0.9" class="mess_badge">8</yd-badge>
                </div>
                <div class="mess_cell">
                    <div class="mess_title"><span>小仙女</span><span>20181001</span></div>
                    <div class="mess_text">美女你的身打发士大夫萨达萨达材比例怎么样，我们好为您量身定做！！！</div>
                </div>
            </li>
        </ul>

    </yd-layout>
</template>

<script>
    export default {
        name: 'message'
    }
</script>

<style scoped>
    .mess_list .mess_item {
        height: 52px;
        border-bottom: 1px solid #f4f4f4;
        background: #fff;
        padding: 0 12px;
        width: 100%;
        display: flex;
        align-items: center;
    }
    .mess_cell {
        flex: 3;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        overflow: hidden;
        align-content: stretch;
    }

    .mess_cell .mess_title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: stretch;
    }
    .mess_cell .mess_text{
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow: hidden;
    }
    .mess_icon{
        position: relative;
        width: 35px;
        height: 35px;
        margin-right: 10px;
    }
    .mess_icon img{
        width: 100%;
        height: 100%;
    }
    .mess_badge{
        position: absolute;
        right:-10px;
        top:-6px;
    }
</style>
