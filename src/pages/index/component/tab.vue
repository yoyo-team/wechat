<template>
    <div class="weui-tab">
        <tab__bd></tab__bd>
        <tabbar></tabbar>
    </div>
</template>
<script>
    import tabbar from './tabbar.vue';
    import tab__bd from './tab__bd.vue';
    export default
        {
            components:
                {
                    tabbar,
                    tab__bd
                }
        }
</script>
