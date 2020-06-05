layui.use([ 'layer','form'], function(){
    var layer = layui.layer
        ,form = layui.form;

    form.on('submit(formDemo2)', function(data) {
        var param = $("form").serialize();
        $.ajax({
            url:"/emp/addEmps",
            type:"post",
            data:param,
            dataType:"text",
            success:function(result){
                if(result==true){
                    layer.msg('新建成功！',{time:1000},function(){
                        parent.layer.close(parent.layer.index);
                    });
                }else{
                    layer.msg('新建失败！');
                }
            }
        });
        return false;
    });
})
/*关闭弹出框口*/
function x_admin_close() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}