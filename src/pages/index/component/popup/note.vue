<template>
    <div id="note_detail" class="weui-popup__container">
        <div class="weui-popup__overlay"></div>
        <div class="weui-popup__modal">
            <br>
            <button @click="close()" id="close_note_modal" class="weui-btn weui-btn_warn weui-btn_mini">关闭</button>
            <br>
            <br>
            <div class="text-center">
                <h3>{{ class_name }}</h3>
                <h4>{{ class_releaser }}</h4>
            </div>
            <br>
            <br>
            <div>
                <div v-for="item in note" class="item">

                    <div v-if="item.type==='text'" class="text">
                        {{item.content}}
                    </div>

                    <div v-if="item.type==='img'" class="img">
                        <img :src=" `//www.vanging.com/yoyo/classes/${class_id}/${item.content}` ">
                    </div>

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
            data: function () {
                return {
                    note:[],
                    class_name: null,
                    class_releaser: null,
                    class_id: null,
                };
            },
            mounted:function()
            {
                document.body.addEventListener('yoyo:note_popup',this.show);
            },
            methods:
                {
                    close:function()
                    {
                        this.note=[];
                        this.class_name = null;
                        this.class_releaser = null;
                        this.class_id = null;
                        $.closePopup();
                    },
                    show:function(e)
                    {
                        const self=this;

                        $("#note_detail").popup();
                        const note=e.message;
                        console.log(note);

                        this.class_name = note.class_info.class_name;
                        this.class_releaser = note.class_info.class_releaser;
                        this.class_id = note.class_id;

                        yoyoSDK.getClassContent(note.class_id)
                            .then(function(result)
                            {
                                console.log(result);
                                note.class_content = result;
                                while(self.note.length > 0)
                                {
                                    self.note.pop();
                                }
                                note.note_content.split(',').forEach(function(e)
                                {
                                    self.note.push(note.class_content[parseInt(e)]);
                                })
                            }, function(err)
                            {
                                console.log(err);
                                alert('加载笔记内容出错');
                            });
                    }
                }
        }
</script>
<style scoped>
    #note_detail
    {
        -webkit-overflow-scrolling: touch;
    }
    .text-center
    {
        text-align: center;
    }
    .item
    {
        line-height: 1.2;
        border-top:1px dashed black;
        padding: 15px;
        margin:10px;
    }
    .item .img
    {
        text-align:center;
        width:100%;
    }
    .img img
    {
        width:100%;
    }
    #close_note_modal
    {
        margin-top:10px;
        margin-left:20px;
        margin-bottom:20px;
    }
</style>
