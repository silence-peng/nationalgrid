layui.use(['element','jquery','layer','form'], function() {
    var $ = layui.jquery
        , layer = layui.layer
        , form = layui.form;
    form.render();
    var waybillId=getUrlParam("waybillId");
    $.get('http://127.0.0.1:8080/waybillAllocationRules/getWaybillAllocationByruleCoding',{ruleCoding:waybillId},function (result) {
        form.val('example',result);

        $("#oddType").load('http://127.0.0.1:8080/waybillAllocationRules/getWaybillType',function (result) {
            const data=eval(result);
            $(data).each(function (i,o) {
                $("#oddType").append("<option value='"+o.id+"'>"+o.typeName+"</option>")
            });
            form.render("select");
        });
        $("#useBranch").load('http://127.0.0.1:8080/waybillAllocationRules/getBranchBasicsInfo',function (result) {
            const data=eval(result);
            console.log(result);
            $(data).each(function (i,o) {
                $("#useBranch").append("<option value='"+o.branchName+"'>"+o.branchName+"</option>")
            });
            form.render("select");
        });
        $("#oddType").val(result.oddType);
        $("#useBranch").val(result.useBranch);

    });

    form.on('submit(formDemo2)', function(data){
        $.get( 'http://127.0.0.1:8080/problemstate/updateIssueStaus',$("#pro").serialize(),function (result) {

            if (result=="ok"){
                layer.alert("修改成功！",function () {
                    x_admin_close()
                })
            }else{
                layer.alert("修改失败！",function () {
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
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)") ;
    r = window.location.search.substr(1).match(reg);        // 匹配目标参数
    if (r != null) return decodeURI(r[2]);  // 返回参数值
    return null;  // 如果不存在，返回null
}