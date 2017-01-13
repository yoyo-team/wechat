<template>
    <div id="page_notes" class="weui-tab__bd-item">
        <br>

        <input id="note_filter" class="filter" type="text" placeholder="请输入筛选条件">

        <h3 class="center-block">笔记列表</h3>

        <note_cells :items="items"></note_cells>

    </div>
</template>
<script>
    module.exports =
        {
            data: function () {
                return {
                    items:
                    [
                        {
                            bd:'笔记1-1'
                        },
                        {
                            bd:'笔记1-2'
                        },
                        {
                            bd:'笔记1-3'
                        }
                        ,
                        {
                            bd:'笔记2-2'
                        },
                        {
                            bd:'笔记2-3'
                        }
                        ,
                        {
                            bd:'笔记3-2'
                        },
                        {
                            bd:'笔记3-3'
                        }
                    ]
                };
            },
            components:
                {
                    note_cells:require('./note_cells.vue')
                }
        }
</script>
