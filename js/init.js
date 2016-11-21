function init()
{
    // icons init
    $icon_home.html(iconfont.home);
    $icon_notes.html(iconfont.notes);
    $icon_select.html(iconfont.select);
    $icon_me.html(iconfont.me);
    $icon_class.html(iconfont.class);
    $icon_note.html(iconfont.note);
    $icon_info.html(iconfont.info);

    // hide elements
    $.closePopup();

    // nav init
    nav_to(location.hash);

    // init pickers
    $("#location").cityPicker
    (
        {
            title:'请选择你所在的区域'
        }
    )
}