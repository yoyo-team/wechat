<template>
    <div class="weui-tab">
        <tab__bd></tab__bd>
        <tabbar></tabbar>
    </div>
</template>
<script>
    import tabbar from './tabbar.vue';
    tabbar._Ctor = undefined;
    import tab__bd from './tab__bd.vue';
    tab__bd._Ctor = undefined;
    export default
        {
            components:
                {
                    tabbar,
                    tab__bd
                }
        }
</script>
