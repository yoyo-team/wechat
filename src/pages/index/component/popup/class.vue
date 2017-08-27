<template>
    <div id="class_detail" class="weui-popup__container">
        <div class="weui-popup__overlay"></div>
        <div class="weui-popup__modal">
            <br>
            <br>
            <button @click="close()" id="close_class_modal" class="weui-btn weui-btn_warn weui-btn_mini">关闭</button>
            <button @click="save()" id="save" class="weui-btn weui-btn_primary weui-btn_mini">保存</button>
            <br>
            <br>
            <div v-for="(item,id) in class_content" @click="toggle(id)" class="item" :class="{selected:segments[id]===true}">

                <div v-if="item.type==='text'" class="text">
                    {{item.content}}
                </div>

                <div v-if="item.type==='img'" class="img">
                    <img :src="item.content">
                </div>

            </div>
            <br>
            <br>
            <br>
            <br>
        </div>
    </div>
</template>
<script>

    const yoyoSDK = window['www---vanging---com___yoyo___sdk'];

    export default
    {
        data: function()
        {
            return {
                class_content:[],
                class_id:null,
                segments:[]
            };
        },
        mounted:function()
        {
            var self=this;
            document.body.addEventListener('yoyo:class_popup',function(e)
            {
                $("#class_detail").popup();
                self.class_id=e.message.class_id;

                yoyoSDK.getClassContent(self.class_id)
                    .then(function(class_content)
                    {
                        console.log(class_content);
                        self.update_class_content(class_content);
                    }, function(err)
                    {
                        console.log(err);
                    });
            });
        },
        methods:
            {
                close:function()
                {
                    this.class_content=[];
                    this.class_id=null;
                    this.segments=[];
                    $.closePopup();
                },
                toggle:function(id)
                {
                    this.segments[id]=!this.segments[id];
                    this.segments.reverse().reverse(); // tell vue to update the view`
                },
                update_class_content:function(class_content)
                {
                    const self = this;
                    const baseUrl = `//www.vanging.com/yoyo/classes/${self.class_id}/`;

                    class_content.forEach(function(e)
                    {
                        self.segments.push(false);
                        if(e.type === 'img')
                        {
                            e.content = baseUrl + e.content;
                        }
                        self.class_content.push(e);
                    })
                },
                save:function()
                {
                    const self=this;
                    let segments='';
                    this.segments.forEach(function(e,i)
                    {
                        if(e)
                        {
                            segments+=i+',';
                        }
                    });
                    segments=segments.slice(0,segments.length-1);

                    if(this.$store.state.user.online)
                    {
                        yoyoSDK.addNote(this.$store.state.user.profile.uid, this.class_id, segments)
                            .then(function(result)
                            {
                                result = JSON.parse(result);
                                if(result.status === 'ok')
                                {
                                    alert('笔记保存成功');
                                }
                                else
                                {
                                    console.log(result);
                                    alert('保存失败，请重试');
                                }
                            }, this.error);
                    }
                    else
                    {
                        alert('你没有登录');
                    }
                }
            }
    }
</script>
<style scoped>
    #set,
    #unset
    {
        margin:10px;
    }
    #set
    {
        float:right;
    }
    .item
    {
        margin:10px;
        padding:10px;
        background-color: white;
    }
    .item img
    {
        width:100%;
    }
    .selected
    {
        background-color: rgba(133, 225, 133, 0.53) !important;
    }
    #save
    {
        float:right;
        margin-top:0;
        margin-right:20px;
    }
    #close_class_modal
    {
        margin-top:0;
        margin-left:20px;
    }
</style>
