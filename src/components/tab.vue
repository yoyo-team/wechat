<template>
    <div class="weui-tab">
        <tab__bd></tab__bd>
        <tabbar></tabbar>
    </div>
</template>
<script>
    (function init()
    {
        switch(location.hash)
        {
            case '#notes'  : break;
            case '#select' : break;
            case '#me'     : break;
            case '#home'   : break;
            default        : location.hash='#home'; break;
        }
    })();

    if(!iconfont) var iconfont={};

    iconfont.class='&#xe608;'; // location_fill
    iconfont.note='&#xe6d6;'; // write_fill
    iconfont.info='&#xe66d;'; // info_fill
    module.exports=
        {
            name: 'tab',
            data: function ()
            {
                return {};
            },
            methods:
                {
                    nav:function()
                    {
                        var id=location.hash.slice(1);
                        console.log('nav to : '+id);
                    }
                },
            components:
                {
                    tabbar:require('./tabbar.vue'),
                    tab__bd:require('./tab__bd.vue')
                },
            mounted:function()
            {
                $("#page_"+location.hash.slice(1)).addClass('weui-tab__bd-item--active');
            }
        }
</script>
<style>

    @import url(//at.alicdn.com/t/font_1469889758_9089751.css);

    /*@font-face {*/
        /*font-family: 'iconfont';*/
        /*src: url('//at.alicdn.com/t/font_1469889758_401954.eot'); !* IE9*!*/
        /*src: url('//at.alicdn.com/t/font_1469889758_401954.eot?#iefix') format('embedded-opentype'), !* IE6-IE8 *!*/
        /*url('//at.alicdn.com/t/font_1469889758_401954.woff') format('woff'), !* chrome、firefox *!*/
        /*url('//at.alicdn.com/t/font_1469889758_401954.ttf') format('truetype'), !* chrome、firefox、opera、Safari, Android, iOS 4.2+*!*/
        /*url('//at.alicdn.com/t/font_1469889758_401954.svg#iconfont') format('svg'); !* iOS 4.1- *!*/
    /*}*/
    /*.iconfont{*/
        /*font-size:24px;*/
        /*line-height:100%;*/
        /*font-family: iconfont;*/
        /*font-style:normal;*/
        /*color:darkgray;*/
    /*}*/
</style>
