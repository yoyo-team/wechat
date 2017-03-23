<template>
    <div id="page_select" class="weui-tab__bd-item">
        <br>

        <h3 style="text-align: center">选择课程</h3>

        <div class="weui-cells">
            <div v-for="(class_content,cid) in classes" @click="show_class(class_content,cid)" class="weui-cell">
                <div class="weui-cell__hd">
                    <i class="iconfont icon-writefill"></i>
                </div>
                <div class="weui-cell__bd weui_cell_primary">
                    <p class="notes_category"><span>&nbsp;</span>{{class_content.name}}</p>
                </div>
                <div class="weui-cell__ft">
                    {{class_content.releaser}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports =
        {
            data: function () {
                return {
                    classes:{},
                    location:''
                };
            },
            mounted:function()
            {
                var self=this;

                document.body.addEventListener('yoyo:get_location:ok',function(e)
                {
                    self.location=e.message.location;
                    self.query_class();
                });

                document.body.addEventListener('yoyo:query_class:ok',function(e)
                {
                    console.log(e);
                    e.message.forEach(function(e)
                    {
                        Vue.set
                        (
                            self.classes,
                            e.cid,
                            e
                        )
                    });
                });
                document.body.addEventListener('yoyo:query_class:error',function(e)
                {
                    alert('获取课程列表失败');
                });
            },
            methods:
                {
                    query_class:function()
                    {
                        if(window.luoc.navbar.online)
                        {
                            window.luoc.yoyo.query_class
                            (
                                {
                                    key:this.location
                                }
                            )
                        }
                        else
                        {
                            alert('需要登录');
                        }
                    },
                    show_class:function(class_content,cid)
                    {
                        var event=new Event('yoyo:class_popup');
                        event.message={};
                        event.message.class_content=class_content;
                        event.message.cid=cid;
                        document.body.dispatchEvent(event);
                    }
                }
        }
</script>
