function vars()
{
    /**
     * dom elements wrapped by $
     **/

    /* pages */
    window.$page_home=$("#home");
    window.$page_notes=$("#notes");
    window.$page_select=$("#select");
    window.$page_me=$("#me");
    /* nav items */
    window.$nav_home=$("#nav_home");
    window.$nav_notes=$("#nav_notes");
    window.$nav_select=$("#nav_select");
    window.$nav_me=$("#nav_me");
    /* nav icons */
    window.$icon_home=$("#icon_home");
    window.$icon_notes=$("#icon_notes");
    window.$icon_select=$("#icon_select");
    window.$icon_me=$("#icon_me");
    window.$icon_class=$(".icon_class");
    window.$icon_note=$(".icon_note");
    window.$icon_info=$(".icon_info");

    /* iconfont */
    window.iconfont={};

    iconfont.home='&#xe648;'; //home
    iconfont.home_fill='&#xe64b;';

    iconfont.notes='&#xe636;'; // form
    iconfont.notes_fill='&#xe707;';

    iconfont.select='&#xe663;'; //round_add
    iconfont.select_fill='&#xe662;';

    iconfont.me='&#xe6ea;'; //my
    iconfont.me_fill='&#xe6eb;';

    iconfont.class='&#xe608;'; // location_fill

    iconfont.note='&#xe6d6;'; // write_fill

    iconfont.info='&#xe66d;'; // info_fill

    // login part
    window.$username=$("#username");
    window.$avatar=$("#avatar");
    window.$login_yes=$("#login_yes");
    window.$login_no=$("#login_no");
    window.$qq_login=$("#qq_login");
    window.$wechat_login=$("#wechat_login");
    window.$logout=$("#logout");
}