<template>
    <div class="weui-tabbar">

        <a href="#page_home" @mouseup="nav('home')" id="nav_home" class="weui-tabbar__item">
            <!--<span id="badge_home" class="weui-badge">3</span>-->
            <div class="weui-tabbar__icon">
                <i id="icon_home" class="iconfont" :class="classes.home"></i>
            </div>
            <p class="weui-tabbar__label">首页</p>
        </a>

        <a href="#page_notes" @mouseup="nav('notes')" id="nav_notes" class="weui-tabbar__item">
            <!--<span id="badge_notes" class="weui-badge">3</span>-->
            <div class="weui-tabbar__icon">
                <i id="icon_notes" class="iconfont" :class="classes.notes"></i>
            </div>
            <p class="weui-tabbar__label">笔记</p>
        </a>

        <a href="#page_select" @mouseup="nav('select')" id="nav_select" class="weui-tabbar__item">
            <!--<span id="badge_select" class="weui-badge">3</span>-->
            <div class="weui-tabbar__icon">
                <i id="icon_select" class="iconfont" :class="classes.select"></i>
            </div>
            <p class="weui-tabbar__label">选课</p>
        </a>

        <a href="#page_me" @mouseup="nav('me')" id="nav_me" class="weui-tabbar__item">
            <!--<span id="badge_me" class="weui-badge">3</span>-->
            <div class="weui-tabbar__icon">
                <i id="icon_me" class="iconfont" :class="classes.me"></i>
            </div>
            <p class="weui-tabbar__label">账号</p>
        </a>
    </div>
</template>
<script>
    function mounted()
    {
        window.addEventListener('hashchange',function()
        {
            $(".weui-tabbar__item").removeClass('weui-navbar__item--on');
            $('a[href="#page_'+location.hash.slice(1)+'"]').addClass('weui-navbar__item--on');
        });
        // 初始化
        $('a[href="#page_'+location.hash.slice(1)+'"]').addClass('weui-navbar__item--on');
        // 以后的类切换weui框架会自动完成

        nav.call(this,location.hash.slice(1));
    }
    function nav(id)
    {
        this.curr=id;
        location.hash='#'+id;
    }

    module.exports=
        {
            name:'tabbar',
            props:
                [
//                ''
            ],
            data:function()
            {
                return {
                    curr:'home'
                };
            },
            computed:
                {
                    classes:function()
                    {
                        return{
                            home:
                                {
                                    'icon-homefill':this.curr=='home',
                                    'icon-home':this.curr!=='home'
                                },
                            notes:
                                {
                                    'icon-formfill':this.curr=='notes',
                                    'icon-form':this.curr!=='notes'
                                },
                            select:
                                {
                                    'icon-roundaddfill':this.curr=='select',
                                    'icon-roundadd':this.curr!=='select'
                                },
                            me:
                                {
                                    'icon-myfill':this.curr=='me',
                                    'icon-my':this.curr!=='me'
                                }
                        };
                    }
                },
            methods:
                {
                    nav:nav
                },
            mounted:mounted
        }
</script>
<style scoped>
    .weui-tabbar
    {
        background-color: #f9f9fa;
        border-top:1px solid #a7a7ab
    }
    .iconfont
    {
        font-weight: lighter;
        color: #7b7f83;
    }
    .weui-navbar__item--on .iconfont,
    .weui-navbar__item--on .weui-tabbar__label
    {
        color:#09bb07;
    }
    .weui-badge
    {
        position:absolute;
        top:-.4em;
        right:1em;
    }
    .weui-tabbar__icon>i
    {
        font-size:27px;
        line-height: 1;
    }
</style>
