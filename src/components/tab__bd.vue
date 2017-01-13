<template>
    <div class="weui-tab__bd">
        <page_home></page_home>
        <page_notes></page_notes>
        <page_select></page_select>
        <page_me></page_me>
    </div>
</template>
<script>
    module.exports =
        {
            name: 'tab__bd',
            data: function()
            {
                return {};
            },
            components:
                {
                    page_home:require('./page_home.vue'),
                    page_notes:require('./page_notes.vue'),
                    page_select:require('./page_select.vue'),
                    page_me:require('./page_me.vue')
                }
        }
</script>
<style>
    .weui-cells
    {
        border-top:1px  solid #d9d9d9;
        border-bottom:1px  solid #d9d9d9;
    }
    .cells_title
    {
        padding-left:15px;
    }
    .filter
    {
        display: block;
        margin:30px auto;
        width:80%;
        font-size:20px;
        padding:3px;
        background-color: #efeff4;
        border: 0 solid #000;
        border-bottom-width: 1px;
        text-align:center;
    }
    .filter:focus
    {
        outline: none 0;
        box-shadow: none;
    }
    .weui-tab__bd-item
    {
        background-color: #efeff4;
    }
</style>
