<template>
    <tab></tab>
</template>
<script>
    module.exports =
        {
            name: 'app',
            data: function ()
            {
                return {};
            },
            components:
                {
                    tab:require('./tab.vue'),
                    class_popup:require('./popups/class.vue')
                }
        }
</script>
<style>
    html,
    body
    {
        width:100%;
        height:100%;
        overflow: hidden;
    }
    #app
    {
        margin:0;
        padding:0;
        width:100%;
        height:100%;
    }
    .center-block {
        text-align:center;
    }
</style>
