<template>
    <div class="weui-tab__bd">
        <!--<note></note>-->
        <!--<_select></_select>-->
        <me></me>
    </div>
</template>
<script>

    import me from './pages/me.vue';
    import note from './pages/note.vue';
    import _select from './pages/select.vue';

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