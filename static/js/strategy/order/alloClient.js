layui.use(['element','jquery','layer','form'], function() {
    var $ = layui.jquery
        , layer = layui.layer
        , form = layui.form;
    var issueCoding=getUrlParam("ruleCoding");
    $.get('http://127.0.0.1:8080/problemstate/getIssueStausById',{issueCoding:issueCoding},function (result) {

        if (result.isStartUsing == 1){
            $("#isStartUsing").val(1);
        }
        form.val('example',result);

        $("#informPost").load('http://127.0.0.1:8080/problemstate/getRole',function (result) {
            const data=eval(result);
            $(data).each(function (i,o) {
                $("#informPost").append("<option value='"+o.id+"'>"+o.roleName+"</option>")
            });
            form.render("select");
        });
        $("#roleList").load('http://127.0.0.1:8080/problemstate/getRole',function (result) {
            const data=eval(result);
            $(data).each(function (i,o) {
                $("#roleList").append("<option value='"+o.id+"'>"+o.roleName+"</option>")
            });
            form.render("select");
        });
        $("#issueTypeId").load('http://127.0.0.1:8080/problemstate/getIssueType',function (result) {
            const data=eval(result);
            $(data).each(function (i,o) {
                $("#issueTypeId").append("<option value='"+o.id+"'>"+o.issueName+"</option>")
            });
            form.render("select");
        })
        $("#playSingleIssue").val(result.playSingleIssue);
        $("#consigneeIssue").val(result.consigneeIssue);
        $("#problemTypes").val(result.problemTypes);
        $("#playSingleIssue").val(result.playSingleIssue);

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