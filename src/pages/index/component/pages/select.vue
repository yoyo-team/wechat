<template>
    <div id="page_select" class="weui-tab__bd-item">
        <br>

        <h3 style="text-align: center">选择课程</h3>

        <div class="weui-cells">
            <div v-for="class_content in classes" @click="show_class(class_content.class_id)" class="weui-cell">
                <div class="weui-cell__hd">
                    <i class="iconfont icon-writefill"></i>
                </div>
                <div class="weui-cell__bd weui_cell_primary">
                    <p class="notes_category"><span>&nbsp;</span>{{class_content.class_name}}</p>
                </div>
                <div class="weui-cell__ft">
                    {{class_content.class_releaser}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    const yoyoSDK = window['www---vanging---com___yoyo___sdk'];

    export default
        {
            data: function () {
                return {
                    classes: [],
                    location: ''
                };
            },
            mounted:function()
            {
                const self=this;

                window.addEventListener('hashchange',function(e)
                {
                    if(window.location.hash === '#page_select')
                    {
                        console.log(`[page_select] init`);
                        self.init();
                    }
                    else
                    {
                        while(self.classes.length > 0)
                        {
                            self.classes.pop();
                        }
                    }
                });

            },
            methods:
                {
                    init: function()
                    {
                        const self = this;
                        if( ! self.$store.state.user.online)
                        {
                            alert('需要登录');
                            return;
                        }
                        const uid = self.$store.state.user.profile.uid;
                        console.log(self);

                        yoyoSDK.getLocation(uid)
                            .then(function(result)
                            {
                                result = JSON.parse(result);
                                if(result.status === 'ok')
                                {
                                    self.location = result.message;
                                    self.query_class(result.message);
                                }
                                else
                                {
                                    console.log(result);
                                }
                            }, self.error);
                    },
                    error: function(err)
                    {
                        console.log(err);
                        alert('网络错误，请重试');
                    },
                    query_class:function(location)
                    {
                        const self = this;
                        yoyoSDK.queryClass(location)
                            .then(function(result)
                            {
                                result = JSON.parse(result);
                                if(result.status === 'ok')
                                {
                                    console.log(result.message);
                                    while(self.classes.length > 0)
                                    {
                                        self.classes.pop();
                                    }
                                    result.message.forEach(function(e)
                                    {
                                        self.classes.push(e);
                                    });
                                }
                                else
                                {
                                    console.log(result);
                                }
                            }, this.error)
                    },
                    show_class:function(class_id)
                    {
                        var event=new Event('yoyo:class_popup');
                        event.message={};
                        event.message.class_id=class_id;
                        document.body.dispatchEvent(event);
                    }
                }
        }
</script>
