<template>
    <div id="page_select" class="weui-tab__bd-item">
        <br>

        <input id="class_filter" class="filter" type="text" placeholder="请输入筛选条件">

        <h3 class="center-block">选择课程</h3>

        <select_class_cells :items="items"></select_class_cells>
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
                            bd:'相信未来',
                            ft:'食指'
                        },
                        {
                            bd:'相信未来',
                            ft:'食指'
                        },
                        {
                            bd:'相信未来',
                            ft:'食指'
                        },
                        {
                            bd:'相信未来',
                            ft:'食指'
                        },
                        {
                            bd:'相信未来',
                            ft:'食指'
                        },
                        {
                            bd:'相信未来',
                            ft:'食指'
                        },
                        {
                            bd:'相信未来',
                            ft:'食指'
                        }
                    ]
                };
            },
            components:
                {
                    select_class_cells:require('./select_class_cells.vue')
                }
        }
</script>
