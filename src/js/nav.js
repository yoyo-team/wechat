switch(location.hash)
{
    case '#page_notes'  : break;
    case '#page_select' : break;
    case '#page_me'     : break;
    case '#page_home'   : break;
    default             : location.hash='#page_home'; break;
}
window.curr_nav=location.hash.slice(1).split('_')[1];
function nav_to(id) {
    $("#nav_"+curr_nav).removeClass('weui_bar_item_on');
    $("#icon_"+curr_nav).html(iconfont[curr_nav]);
    $("#page_"+curr_nav).removeClass('weui_tab_bd_item_active');
    switch (id)
    {
        case '#page_notes'  : curr_nav='notes';break;
        case '#page_select' : curr_nav='select';break;
        case '#page_me'     : curr_nav='me';break;
        default             : curr_nav='home';break; // default to home page
    }
    var $nav_item=$("[href='#page_"+curr_nav+"']");
    var $nav_icon=$("#icon_"+curr_nav);
    var $page_item=$(id);
    $nav_item.addClass('weui_bar_item_on');
    $nav_icon.html(iconfont[curr_nav+"_fill"]);
    $page_item.addClass('weui_tab_bd_item_active');
    location.hash=id;
}
