<template>
    <div class="weui-cells">
        <div v-for="item in items" class="weui-cell open-popup" data-target="#class_detail">
            <div class="weui-cell__hd">
                <i class="iconfont icon-writefill"></i>
            </div>
            <div class="weui-cell__bd weui_cell_primary">
                <p class="notes_category"><span>&nbsp;</span>{{item.bd}}</p>
            </div>
            <div class="weui-cell__ft">
                {{item.ft}}
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
            components:
                {}
        }
</script>
<style scoped>
    .icon-writefill
    {
        color:#3bb5f4;
    }
</style>
