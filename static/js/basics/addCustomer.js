layui.use(['element','jquery','table','layer','transfer','form'], function() {
    var table = layui.table
        , $ = layui.jquery
        , layer = layui.layer
        , form = layui.form
        ,transfer =layui.transfer;

    form.on('submit(formDemo2)', function(data){


        $.get( 'http://127.0.0.1:8080/CustomerGroup/add',$("#form").serialize(),function (result) {
            if (result==true){
                layer.alert("新增成功！",function () {

                    x_admin_close();
                })
            }else{
                layer.alert("新增失败",function () {
                    x_admin_close()
                })
            }
        })
        return false;
    });



});
/*关闭弹出框口*/
function x_admin_close() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}