function bind_login_events()
{
    $qq_login.click(qq_login);
    $wechat_login.click(wechat_login);
    $logout.click(logout);
    login_init();
    t_login.check();
    t_login.ready.on('user_info',login_done);
    t_login.clear.on('logout',login_init);
}

function qq_login()
{
    t_login.qq.goto_login();
}
function wechat_login()
{
    alert('微信登录暂不可用，抱歉 !');
}

function login_init()
{
    console.log('login init');
    "use strict";
    $login_yes.slideUp(0);
    $login_no.slideDown(0);
    $username.html('请登录');
    $avatar.attr('src','https://static.a.twesix.cn/img/wechat/yoyo/logo.png');
}
function login_done()
{
    console.log('login done');
    $login_yes.slideDown(0);
    $login_no.slideUp(0);
    if(t_login.logged_in())
    {
        var info=t_login.user_info;
        $username.html(info.username);
        $avatar.attr('src',info.qq.avatar);
    }
    else
    {
        logout();
    }
}

function logout()
{
    t_login.logout();
}