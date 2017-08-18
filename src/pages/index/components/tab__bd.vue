<template>
    <div class="weui-tab__bd">
        <page_notes></page_notes>
        <page_select></page_select>
        <page_me></page_me>
    </div>
</template>
<script>
    module.exports =
        {
            components:
                {
                    page_notes:require('./pages/notes.vue'),
                    page_select:require('./pages/select.vue'),
                    page_me:require('./pages/me.vue')
                }
        }
</script>