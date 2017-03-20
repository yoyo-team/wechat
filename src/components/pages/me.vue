<template>
    <div id="page_me" class="weui-tab__bd-item">
        <div v-if="!online">
            <br><br>
            <h3 style="text-align: center">登录</h3>
            <br><br>
            <form @submit.prevent="login($event)" class="weui-cells weui_cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label for="account" class="weui-label">账号</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input v-model="account" id="account" type="email" class="weui-input" required>
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
                <button type="submit" class="weui-btn weui-btn_plain-primary">
                    登录
                </button>
            </form>

            <br><br>

            <button @click="register" type="button" class="weui-btn weui-btn_plain-default">
                没有账号？点击注册
            </button>

            <br><br>
        </div>

        <div v-if="online">
            <br><br>
            <h3 id="email"> {{email}} </h3>
            <br><br>
            <h4 class="cells_title">个人信息</h4>
            <div class="weui-cells weui_cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label for="location" class="weui-label">我的位置</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input v-model="location" @blur="set_location()" id="location" type="text" class="weui-input">
                    </div>
                </div>
            </div>
            <br><br>
            <button @click="logout()" class="weui-btn weui-btn_warn">
                退出登录
            </button>
            <br><br>
        </div>
    </div>
</template>
<script>
    module.exports=
        {
            data:function()
            {
                return {
                    email:'需要登录',
                    online:false,
                    account:'',
                    password:'',
                    location:''
                };
            },
            mounted:function()
            {
                var self=this;

                document.body.addEventListener('yoyo:get_location:ok',function(e)
                {
                    self.location=e.message.location;
                });

                document.body.addEventListener('navbar:login:ok',function(e)
                {
                    self.online=true;
                    self.email=e.message.email;
                    window.luoc.yoyo.get_location({uid:window.luoc.navbar.data.uid})
                });
                document.body.addEventListener('navbar:login:error',function(e)
                {
                    alert('登录失败');
                    console.log(e);
                });

                document.body.addEventListener('navbar:logout',function(e)
                {
                    self.online=false;
                    self.email='需要登录';
                });
            },
            methods:
                {
                    login:function()
                    {
                        window.luoc.navbar.login
                        (
                            {
                                account:this.account,
                                password:this.password
                            }
                        )
                    },
                    logout:window.luoc.navbar.logout,
                    set_location:function()
                    {
                        window.luoc.yoyo.set_location
                        (
                            {
                                uid:window.luoc.navbar.data.uid,
                                location:this.location
                            }
                        );
                    },
                    register:function()
                    {
                        var e = new Event("yoyo:register_popup");
                        document.body.dispatchEvent(e);
                    }
                }
        }
</script>
<style scoped>
    #email
    {
        text-align: center;
    }
</style>
