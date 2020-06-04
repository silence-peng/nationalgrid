layui.use(['element','jquery','layer','form'], function() {
    var $ = layui.jquery
        , layer = layui.layer
        , form = layui.form;
    var positionCoding=getUrlParam("id");
    console.log(positionCoding)
    $.post( 'http://127.0.0.1:8080/transboundaryV5/base/getPositionManagment',{positionCoding:positionCoding},function (result) {
        form.val('example',result);
        $("#affiliatedBranches").load('http://127.0.0.1:8080/transboundaryV5/base/loadBranchBasicsInfo',function (re) {
            const data=eval(re);
            $(data).each(function (i,o) {
                $("#affiliatedBranches").append("<option value='"+o.branchCoding+"'>"+o.branchName+"</option>")
            });
            $("#affiliatedBranches").val(result.affiliatedBranches);
            form.render("select")
        });

    });
    form.on('submit(formDemo2)', function(data){
        $.post( 'http://127.0.0.1:8080/transboundaryV5/base/updPositionManagment',$("#data").serialize(),function (result) {
            if (result){
                layer.alert("修改成功！",function () {
                    x_admin_close()
                })
            }else{
                layer.alert("修改失败！货位编码重复或其他问题！",function () {
                    x_admin_close()
                })
            }
        })
    })

});
/*关闭弹出框口*/
function x_admin_close() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)") ;
    r = window.location.search.substr(1).match(reg);        // 匹配目标参数
    if (r != null) return decodeURI(r[2]);  // 返回参数值
    return null;  // 如果不存在，返回null
}