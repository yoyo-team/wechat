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

    const yoyoSDK = window['www---vanging---com___yoyo___sdk'];

    export default
        {
            data:function()
            {
                return {
                    account:'email',
                    password:'password',
                    location:'',

                    user_id: '',
                };
            },
            computed:
                {
                    email: function()
                    {
                        return this.$store.state.user.profile.email;
                    },
                    online: function()
                    {
                        return this.$store.state.user.online;
                    },

                },
            mounted: function()
            {
                const self = this;
                console.log(this);
                setTimeout(function()
                {
                    self.get_location();
                }, 1000);

            },
            methods:
                {
                    error: function(err)
                    {
                        console.log(err);
                        alert('网络错误，请重试');
                    },
                    logout: function()
                    {
                        this.$store.commit('user/logout');
                    },
                    register: function()
                    {
                        $("#register_popup").popup();
                    },
                    set_location: function()
                    {
                        yoyoSDK.setLocation(this.$store.state.user.profile.uid, this.location)
                            .then(function(result)
                            {
                                result = JSON.parse(result);
                                if(result.status === 'ok')
                                {
                                    alert('设置用户位置成功');
                                }
                                else
                                {
                                    alert('设置用户位置失败')
                                }
                            }, this.error);
                    },
                    get_location: function()
                    {
                        console.log(this);
                        const self = this;
                        yoyoSDK.getLocation(this.$store.state.user.profile.uid)
                            .then(function(result)
                            {
                                result = JSON.parse(result);
                                if(result.status === 'ok')
                                {
                                    self.location = result.message;
                                }
                                else
                                {
                                    console.log(result);
                                }
                            }, this.error);
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
                                    self.$store.commit('user/sessionLogin', result.message);
                                    setTimeout(function()
                                    {
                                        console.log(JSON.stringify(self.$store.state));
                                        self.get_location();
                                    }, 1000);
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
                }
        }
</script>
<style scoped>
    .text-center
    {
        text-align: center;
    }
</style>
