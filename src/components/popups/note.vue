<template>
    <div id="note_detail" class="weui-popup__container">
        <div class="weui-popup__overlay"></div>
        <div class="weui-popup__modal">
            <br>
            <button @click="close()" id="close_note_modal" class="weui-btn weui-btn_warn weui-btn_mini">关闭</button>
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
                                item.url='//luoc.co/yoyo/classes/'+source.meta.cid+'/'+item.url;
                            }
                            self.note.push(item);
                        });
                    }
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
    #close_note_modal
    {
        margin-top:10px;
        margin-left:20px;
        margin-bottom:20px;
    }
</style>
