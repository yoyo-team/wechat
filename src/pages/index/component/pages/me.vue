<template>
    <div id="page_me" class="weui-tab__bd-item weui-tab__bd-item--active">
        <div v-if="!online">
            <br><br>
            <h3 class="text-center">登录</h3>
            <br><br>
            <form @submit.prevent="user($event)" class="weui-cells weui_cells_form">
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
                <br><br>
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
    export default
        {
            data:function()
            {
                return {
                    account:'',
                    password:'',
                    location:''
                };
            },
            mounted:function()
            {

            },
            computed:
                {
                    email: function()
                    {
                        return window.$store.state.user.profile.email;
                    },
                    online: function()
                    {
                        return window.$store.state.user.online;
                    }
                },
            methods:
                {
                    logout: function()
                    {

                    },
                    register: function()
                    {

                    },
                    set_location: function()
                    {

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
