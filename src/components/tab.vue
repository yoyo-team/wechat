<template>
    <div class="weui-tab">
        <tab__bd></tab__bd>
        <tabbar></tabbar>
    </div>
</template>
<script>
    module.exports=
        {
            components:
                {
                    tabbar:require('./tabbar.vue'),
                    tab__bd:require('./tab__bd.vue')
                }
        }
</script>
