<template>
    <div class="weui-cells">
        <div v-for="item in items" class="weui-cell open-popup" data-target="#note_detail">
            <div class="weui-cell__hd">
                <i class="iconfont icon-tagfill"></i>
            </div>
            <div class="weui-cell__bd">
                <p class="notes_category"><span>&nbsp;</span>{{item.bd}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports =
        {
            props:['items'],
            data: function ()
            {
                return {};
            },
            components: {}
        }
</script>
<style scoped>
    .icon-tagfill
    {
        color:#8edf11;
    }
</style>
