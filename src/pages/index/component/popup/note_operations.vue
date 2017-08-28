<template>
    <div id="note_operations_popup" class="weui-popup__container popup-bottom">
        <div class="weui-popup__overlay"></div>
        <div class="weui-popup__modal">
            <br>
            <button @click="show()" class="weui-btn weui-btn_primary">查看</button>
            <br>
            <button @click="delete_note()" class="weui-btn weui-btn_warn">删除</button>
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
                    note:null
                };
            },
            methods:
                {
                    show:function()
                    {
                        $.closePopup();
                        var event=new Event('yoyo:note_popup');
                        event.message=this.note;
                        document.body.dispatchEvent(event);
                        this.note=null;
                    },
                    delete_note:function()
                    {
                        $.closePopup();
                        var event=new Event('yoyo:note_operations:delete');
                        event.message=this.note;
                        document.body.dispatchEvent(event);
                        this.note=null;
                    }
                },
            mounted:function()
            {
                var self=this;
                document.body.addEventListener('yoyo:note_operations_popup',function(e)
                {
                    $("#note_operations_popup").popup();
                    self.note=e.message;
                })
            }
        }
</script>
<style scoped>
.weui-popup__overlay
{
    background-color: grey;
    opacity: .6;
}
.weui-popup__modal
{
    background-color: transparent;
}
</style>
