<template>
    <div id="page_notes" class="weui-tab__bd-item">
        <br>

        <h3 style="text-align: center">笔记列表</h3>

        <div class="weui-cells">
            <div v-for="note in notes" class="weui-cell" @click="show_operations(note)">
                <div class="weui-cell__hd">
                    <i class="iconfont icon-tagfill"></i>
                </div>
                <div class="weui-cell__bd">
                    <p class="notes_category"><span>&nbsp;</span>{{ `${note.class_info.class_name} (${note.class_info.class_releaser})`}}</p>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

    const yoyoSDK = window['www---vanging---com___yoyo___sdk'];

    export default
        {
            data:function()
            {
                return {
                    notes: []
                };
            },
            mounted:function()
            {
                const self=this;

                document.body.addEventListener('yoyo:note_operations:delete',this.delete_note);

                window.addEventListener('hashchange',function(e)
                {
                    if(window.location.hash === '#page_notes')
                    {
                        self.refresh();
                    }
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
                    error: function(err)
                    {
                        console.log(err);
                        alert('网络错误，请重试');
                    },
                    refresh:function()
                    {
                        const self = this;

                        if(this.$store.state.user.online)
                        {
                            yoyoSDK.getNotes(this.$store.state.user.profile.uid)
                                .then(function(result)
                                {
                                    result = JSON.parse(result);
                                    if(result.status === 'ok')
                                    {
                                        console.log(result.message);
                                        self.update_notes(result.message);
                                    }
                                    else
                                    {
                                        console.log(result);
                                    }
                                }, this.error);
                        }
                        else
                        {
                            alert('您没有登录');
                        }
                    },
                    update_notes: function(notes)
                    {
                        const self = this;
                        while(this.notes.length > 0)
                        {
                            this.notes.pop();
                        }
                        notes.forEach(function(note)
                        {
                            yoyoSDK.getClass(note.class_id)
                                .then(function(result)
                                {
                                    result = JSON.parse(result);
                                    if(result.status === 'ok')
                                    {
                                        note.class_info = result.message;
                                        self.notes.push(note);
                                    }
                                    else
                                    {
                                        console.log(result);
                                    }
                                })
                        })
                    },
                    delete_note:function(e)
                    {
                        const self = this;
                        if(confirm('确定要删除这条笔记 ？'))
                        {
                            console.log(e);
                            const note = e.message;
                            yoyoSDK.deleteNote(note.user_id, note.class_id)
                                .then(function(result)
                                {
                                    result = JSON.parse(result);
                                    if(result.status === 'ok')
                                    {
                                        alert('删除笔记成功');
                                        self.refresh();
                                    }
                                    else
                                    {
                                        alert('删除笔记失败');
                                        console.log(result);
                                    }
                                }, this.error);
                        }
                    },
                    show_operations:function(note)
                    {
                        const event=new Event('yoyo:note_operations_popup');
                        event.message=JSON.parse(JSON.stringify(note));  // copy
                        document.body.dispatchEvent(event);
                    }
                }
        }
</script>
