layui.use(['element','jquery','layer','form'], function() {
    var $ = layui.jquery
        , layer = layui.layer
        , form = layui.form;
    form.on('submit(formDemo2)', function(data){
        $.post( 'http://127.0.0.1:8080/transboundaryV5/base/addPositionManagment',$("#data").serialize(),function (result) {
            if (result){
                layer.alert("新增成功！",function () {
                    x_admin_close()
                })
            }else{
                layer.alert("新增失败！货位编码重复或其他问题！",function () {
                    x_admin_close()
                })
            }
        })
        return false;
    });
    $("#affiliatedBranches").load('http://127.0.0.1:8080/transboundaryV5/base/loadBranchBasicsInfo',function (result) {
        const data=eval(result);

        $(data).each(function (i,o) {
            $("#affiliatedBranches").append("<option value='"+o.branchCoding+"'>"+o.branchName+"</option>")
        });
        form.render("select");
    });
});
/*关闭弹出框口*/
function x_admin_close() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}