<template>
    <div id="note_detail" class="weui-popup__container">
        <div class="weui-popup__overlay"></div>
        <div class="weui-popup__modal">
            <br>
            <button @click="close()" class="weui-btn weui-btn_warn weui-btn_mini">关闭</button>
            <br>
            <div>
                <div v-for="item in note" class="item">

                    <div v-if="item.type==='text'" class="text">
                        {{item.content}}
                    </div>

                    <div v-if="item.type==='img'" class="img">
                        <img :src="item.url">
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
    module.exports =
        {
            data: function () {
                return {
                    note:[],
                    name:'',
                    releaser:''
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
                        $.closePopup();
                    },
                    show:function(e)
                    {
                        var self=this;
                        $("#note_detail").popup();
                        var source=e.message.source;
                        this.name=source.meta.name;
                        this.releaser=source.meta.releaser;
                        var index=e.message.segments.split(',');
                        console.log(index);
                        console.log(source);
                        index.forEach(function(e)
                        {
                            var item=source.segments[e];
                            if(item.type==='img')
                            {
                                item.url='//luoc.co/yoyo/yoyo-loves-you/classes/'+source.meta.cid+'/'+item.url;
                            }
                            self.note.push(item);
                        });
                    }
//                    show_note:function(e)
//                    {
//                        var self=this;
//                        e.message.forEach(function(e)
//                        {
//                            if(e.cid===self.cid)
//                            {
//                                self.load_class(e);
//                            }
//                        });
//                        document.body.removeEventListener('yoyo:get_notes:ok',this.show_note);
//                    },
//                    load_note:function(e)
//                    {
//                        $("#note_detail").popup();
//                        this.cid=e.message;
//                        document.body.addEventListener('yoyo:get_notes:ok',this.show_note);
//                        window.luoc.yoyo.get_notes
//                        (
//                            {
//                                uid:window.luoc.navbar.data.uid
//                            }
//                        );
//                    },
//                    load_class:function(e)
//                    {
//                        function done(e)
//                        {
//                            document.body.removeEventListener('yoyo:get_class:ok',done);
//                            console.log(JSON.stringify(e.message));
//                        }
//                        document.body.addEventListener('yoyo:get_class:ok',done);
//                        window.luoc.yoyo.get_class
//                        (
//                            {
//                                cid:e.cid
//                            }
//                        )
//                    }
                }
        }
</script>
<style scoped>
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
</style>
