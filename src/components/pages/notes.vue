<template>
    <div id="page_notes" class="weui-tab__bd-item">
        <br>

        <h3 style="text-align: center">笔记列表</h3>

        <div class="weui-cells">
            <div v-for="(note,cid) in notes" class="weui-cell" @click="show_operations(cid,note)">
                <div class="weui-cell__hd">
                    <i class="iconfont icon-tagfill"></i>
                </div>
                <div class="weui-cell__bd">
                    <p class="notes_category"><span>&nbsp;</span>{{note.source.meta.name}}</p>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    module.exports =
        {
            data:function()
            {
                return {
                    notes:{}
                };
            },
            mounted:function()
            {
                var self=this;

                document.body.addEventListener('yoyo:note_operations:delete',this.delete_note);

                document.body.addEventListener('navbar:login:ok',function(e)
                {
                    self.refresh();
                });

                // get class
                document.body.addEventListener('yoyo:get_class:ok',function(e)
                {
                    if(self.notes[e.message.cid]!==undefined)
                    {
                        Vue.set
                        (
                            self.notes[e.message.cid],
                            'source',
                            e.message
                        );
                    }
                });
                document.body.addEventListener('yoyo:get_class:error',function(e)
                {
                    console.log('课程加载失败');
                    console.log(e.message);
                });

                // get notes
                document.body.addEventListener('yoyo:get_notes:ok',function(e)
                {
                    self.notes={};
                    e.message.forEach(function(e)
                    {
                        Vue.set
                        (
                            self.notes,
                            e.cid,
                            {
                                segments:e.segments,
                                source:
                                    {
                                        cid:'',
                                        meta:{},
                                        segments:[]
                                    }
                            }
                        );
                        window.luoc.yoyo.get_class({cid:e.cid})
                    });
                });
                document.body.addEventListener('yoyo:get_notes:error',function(e)
                {
                    alert('刷新笔记列表失败，请检查网络环境');
                });

                // delete note
                document.body.addEventListener('yoyo:delete_note:ok',function()
                {
                    self.refresh();
                });

                document.body.addEventListener('yoyo:add_note:ok',function()
                {
                    self.refresh();
                })
            },
            methods:
                {
                    refresh:function()
                    {
                        if(window.luoc.navbar.online)
                        {
                            window.luoc.yoyo.get_notes
                            (
                                {
                                    uid:window.luoc.navbar.data.uid
                                }
                            );
                        }
                        else
                        {
                            alert('您没有登录');
                        }
                    },
                    delete_note:function(e)
                    {
                        if(confirm('确定要删除这条笔记 ？'))
                        {
                            window.luoc.yoyo.delete_note
                            (
                                {
                                    uid:window.luoc.navbar.data.uid,
                                    cid:e.message
                                }
                            );
                        }
                    },
                    show_operations:function(cid,note)
                    {
                        var event=new Event('yoyo:note_operations_popup');
                        event.message=JSON.parse(JSON.stringify(note));
                        document.body.dispatchEvent(event);
                    }
                }
        }
</script>
