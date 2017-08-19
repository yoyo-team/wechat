<template>
    <div id="register_popup" class="weui-popup__container">
        <div class="weui-popup__overlay"></div>
        <div class="weui-popup__modal">
            <br><br>
            <h3 style="text-align: center">注册账号</h3>
            <br><br>
            <form @submit.prevent="register($event)" class="weui-cells weui_cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label for="email" class="weui-label">邮箱</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input v-model="email" id="email" type="email" class="weui-input" required>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label for="password" class="weui-label">密码</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input v-model="password" id="password" type="password" class="weui-input" required>
                    </div>
                </div>
                <br><br>
                <button type="submit" class="weui-btn weui-btn_plain-primary">
                    注册
                </button>
            </form>
            <br><br>
            <button class="weui-btn weui-btn_warn" @click="cancel()">取消</button>
        </div>
    </div>
</template>
<script>
    const userSDK = window['www---vanging---com___sdk___user'];

    module.exports =
        {
            data: function () {
                return {
                    email:'',
                    password:''
                };
            },
            methods:
                {
                    register:function(e)
                    {
                        userSDK.register(this.email, this.password)
                            .then(function(result)
                            {
                                result = JSON.parse(result);
                                console.log(result);
                                if(result.status === 'ok')
                                {
                                    alert('注册成功, 可以登录了');
                                    $.closePopup();
                                }
                                else
                                {
                                    alert('注册失败');
                                }
                            }, function(err)
                            {
                                console.log(err);
                                alert('注册失败');
                            });
                    },
                    cancel : function()
                    {
                        $.closePopup();
                    }
                },
        }
</script>
<style scoped>

</style>
