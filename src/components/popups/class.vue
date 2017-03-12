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
                    <img :src="item.url">
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
    module.exports =
        {
            data: function()
            {
                return {
                    class_content:[],
                    cid:null,
                    segments:[]
                };
            },
            mounted:function()
            {
                var self=this;
                document.body.addEventListener('yoyo:class_popup',function(e)
                {
                    $("#class_detail").popup();
                    self.cid=e.message.cid;
                    document.body.addEventListener('yoyo:get_class:ok',self.done_load_class);
                    window.luoc.yoyo.get_class({cid:self.cid});
                });
            },
            methods:
                {
                    close:function()
                    {
                        this.class_content=[];
                        this.cid=null;
                        this.segments=[];
                        $.closePopup();
                    },
                    toggle:function(id)
                    {
                        this.segments[id]=!this.segments[id];
                        this.segments.reverse().reverse();
                    },
                    done_load_class:function(e)
                    {
                        var self=this;
                        document.body.removeEventListener('yoyo:get_class:ok',this.done_load_class);
                        var res=e.message;
                        console.log(res);
                        res.segments.forEach(function(e)
                        {
                            e=JSON.parse(JSON.stringify(e));
                            self.segments.push(false);
                            if(e.type==='img')
                            {
                                e.url='//luoc.co/yoyo/yoyo-loves-you/classes/'+res.cid+'/'+e.url;
                            }
                            self.class_content.push(e);
                        })
                    },
                    save:function()
                    {
                        var self=this;
                        var segments='';
                        this.segments.forEach(function(e,i)
                        {
                            if(e)
                            {
                                segments+=i+',';
                            }
                        });
                        segments=segments.slice(0,segments.length-1);
                        function done()
                        {
                            alert('笔记保存成功');
                            document.body.removeEventListener('yoyo:add_note:ok',done);
                        }
                        document.body.addEventListener('yoyo:add_note:ok',done);
                        window.luoc.yoyo.add_note
                        (
                            {
                                uid:window.luoc.navbar.data.uid,
                                cid:this.cid,
                                segments:segments
                            }
                        );
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
    #set{
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
