<template>
    <div id="app">
        <tab></tab>
        <class_popup></class_popup>
        <note_popup></note_popup>
        <register_popup></register_popup>
        <note_operations_popup></note_operations_popup>
    </div>
</template>
<script>

    import tab from './tab.vue';
    tab._Ctor = undefined;
    import class_popup from './popup/class.vue';
    class_popup._Ctor = undefined;
    import note_popup from './popup/note.vue';
    note_popup._Ctor = undefined;
    import note_operations_popup from './popup/note_operations.vue';
    note_operations_popup._Ctor = undefined;
    import register_popup from './popup/register.vue';
    register_popup._Ctor = undefined;

    export default
        {
            name: 'app',
            data: function ()
            {
                return {};
            },
            computed:
                {
                },
            components:
                {
                    tab,
                    class_popup,
                    note_popup,
                    note_operations_popup,
                    register_popup,
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
</style>
