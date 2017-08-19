<template>
    <div id="page_me" class="weui-tab__bd-item weui-tab__bd-item--active">
        <div v-if="!online">
            <br><br>
            <h3 class="text-center">登录</h3>
            <br><br>
            <form @submit.prevent="login($event)" class="weui-cells weui_cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label for="account" class="weui-label">账号</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input v-model="account" id="account" type="text" class="weui-input" required>
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
                    登录
                </button>
            </form>

            <br><br>

            <button @click="register()" type="button" class="weui-btn weui-btn_plain-default">
                没有账号？点击注册
            </button>

            <br><br>
        </div>

        <div v-if="online">
            <br><br>
            <h3 id="email" class="text-center"> {{email}} </h3>
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

    const userSDK = window['www---vanging---com___sdk___user'];

    export default
        {
            data:function()
            {
                return {
                    account:'',
                    password:'',
                    location:'',

                    email: null,
                    online: false,
                };
            },
            mounted: function()
            {
                this.sessionLogin();
            },
            methods:
                {
                    logout: function()
                    {
                        window.$store.user.commit('logout');
                        this.online = false;
                        this.email = null;
                        window.localStorage.removeItem("user:session");
                    },
                    register: function()
                    {
                        $("#register_popup").popup();
                    },
                    set_location: function()
                    {

                    },
                    login: function()
                    {
                        const self = this;
                        userSDK.login(this.account, this.password)
                            .then(function(result)
                            {
                                result = JSON.parse(result);
                                console.log(result);
                                if(result.status === 'ok')
                                {
                                    window.localStorage.setItem("user:session", result.message);
                                    self.sessionLogin();
                                }
                                else
                                {
                                    alert('登录失败');
                                }
                            }, function(err)
                            {
                                alert('登录失败');
                            });
                    },
                    login_ok: function(profile)
                    {
                        window.$store.user.commit('login', profile);

                        this.online = window.$store.user.state.online;
                        this.email = window.$store.user.state.profile.email;
                    },
                    sessionLogin: function()
                    {
                        const self = this;
                        const session = window.localStorage.getItem("user:session");
                        if(session)
                        {
                            console.log(`[user] session login: yes`);

                            userSDK.getProfileFromSession(session)
                                .then(function(result)
                                {
                                    result = JSON.parse(result);
                                    if(result.status === 'ok')
                                    {
                                        console.log(`[user] session login: ok`);
                                        self.login_ok(result.message);
                                    }
                                    else
                                    {
                                        console.log(`[user] session login: fail`);
                                        console.log(result);
                                    }
                                },function(err)
                                {
                                    console.log(err);
                                });
                        }
                        else
                        {
                            console.log(`[user] session login: no`);
                        }
                    }
                }
        }
</script>
<style scoped>
    .text-center
    {
        text-align: center;
    }
</style>
