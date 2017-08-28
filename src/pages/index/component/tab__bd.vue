<template>
    <div class="weui-tab__bd">
        <note></note>
        <_select></_select>
        <me></me>
    </div>
</template>
<script>

    import me from './pages/me.vue';
    me._Ctor = undefined;
    import note from './pages/note.vue';
    note._Ctor = undefined;
    import _select from './pages/select.vue';
    _select._Ctor = undefined;

    export default
        {
            components:
                {
                    me,
                    note,
                    _select,
                }
        }
</script>