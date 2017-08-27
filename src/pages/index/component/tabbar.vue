<template>
    <div class="weui-tabbar">

        <a href="#page_notes" @click="hash('#page_notes')" id="nav_notes" class="weui-tabbar__item">

            <div class="weui-tabbar__icon">
                <i id="icon_notes" class="iconfont" :class="classes.notes"></i>
            </div>

            <p class="weui-tabbar__label">笔记</p>

        </a>

        <a href="#page_select" @click="hash('#page_select')" id="nav_select" class="weui-tabbar__item">

            <div class="weui-tabbar__icon">
                <i id="icon_select" class="iconfont" :class="classes.select"></i>
            </div>

            <p class="weui-tabbar__label">选课</p>

        </a>

        <a href="#page_me" @click="hash('#page_me')" id="nav_me" class="weui-tabbar__item weui-bar__item--on">

            <div class="weui-tabbar__icon">
                <i id="icon_me" class="iconfont" :class="classes.me"></i>
            </div>

            <p class="weui-tabbar__label">账号</p>

        </a>
    </div>
</template>
<script>
    module.exports=
        {
            data:function()
            {
                return {
                    curr:'#page_me'
                };
            },
            computed:
                {
                    classes:function()
                    {
                        return{
                            notes:
                                {
                                    'icon-formfill':this.curr==='#page_notes',
                                    'icon-form':this.curr!=='#page_notes'
                                },
                            select:
                                {
                                    'icon-roundaddfill':this.curr==='#page_select',
                                    'icon-roundadd':this.curr!=='#page_select'
                                },
                            me:
                                {
                                    'icon-myfill':this.curr==='#page_me',
                                    'icon-my':this.curr!=='#page_me'
                                }
                        };
                    }
                },
            methods :
                {
                    hash:function(hash)
                    {
                        location.hash = hash ;
                        this.curr = hash ;
                    }
                }
        }
</script>
<style scoped>
    .weui-tabbar
    {
        background-color: #f9f9fa;
        border-top:1px solid #a7a7ab;
        position:fixed;
        z-index:0;
    }
    .iconfont
    {
        font-weight: lighter;
        color: #7b7f83;
    }
    .weui-bar__item--on .weui-tabbar__icon .iconfont,
    .weui-bar__item--on .weui-tabbar__label
    {
        color:#09bb07 !important;
    }

    .weui-tabbar__icon>i
    {
        font-size:27px;
        line-height: 1;
    }
</style>
