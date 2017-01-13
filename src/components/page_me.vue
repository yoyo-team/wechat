<template>
    <div id="page_me" class="weui-tab__bd-item">
        <div>
            <div class="center-block">
                <br><br>
                <img :src="avatar_url"
                     alt="avatar" id="avatar">
                <br><br>
                <p id="username">请登录</p>
                <br>
            </div>
        </div>

        <div id="login_no">
            <button class="weui-btn weui-btn_plain-primary" id="qq_login">
                QQ账号登录
            </button>
            <button class="weui-btn weui-btn_plain-primary" id="wechat_login">
                微信账号登录
            </button>
            <br><br>
        </div>

        <div id="login_yes">
            <button class="weui-btn weui-btn_warn" id="logout">
                退出登录
            </button>
            <br><br>
        </div>

        <h4 class="cells_title">个人信息</h4>
        <div class="weui-cells weui_cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <label for="location" class="weui_label">我的位置</label>
                </div>
                <div class="weui-cell__bd">
                    <input id="location" type="text" class="weui_input">
                </div>
            </div>
        </div>
        <br><br>
        <div class="weui-cells">
            <div class="weui-cell open-popup" data-target="#about_yoyo">
                <div class="weui-cell__hd">
                    <i class="iconfont icon-info"></i>
                </div>
                <div class="weui-cell__bd">
                    <p>&nbsp;&nbsp;关于YOYO</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports=
        {
            data:function()
            {
                return {
                    avatar_url:'assets/img/logo.png'
                };
            },
            components: {},
            mounted:function()
            {
                $("#location").cityPicker
                (
                    {
                        title:'请选择你所在的位置'
                    }
                )
            }
        }
</script>
<style scoped>
    #avatar{
        width:100px;
        height:100px;
        border-radius:100%;
    }
    #location
    {
        width:100%;
        height:100%;
        text-align: center;
        border:none;
        font-size:inherit;
        line-height: inherit;
    }
    .icon-info{
        color:#fa5151;
    }
</style>
