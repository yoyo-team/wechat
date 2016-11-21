function bind_events()
{
    $(".weui_tabbar_item").on('click',function ()
    {
        var $this=$(this);
        location.hash = $this.attr('href');
        nav_to($this.attr('href'));
    });
    $("[data-class-id]").on('mouseup',function ()
    {
        var $this=$(this);
        var class_id=$this.attr('data-class-id');
        var $content=$("#class_detail_content");
        $content.html("<br><br><h1>this is the content of class"+class_id+"</h1><br><br>");
    });

    bind_login_events();
}