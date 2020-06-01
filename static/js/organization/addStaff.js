layui.use(['element','jquery','layer','laydate'], function() {
    var $ = layui.jquery
        , layer = layui.layer
        , laydate = layui.laydate;

    laydate.render({
        elem:'#entryDate'
    })
    laydate.render({
        elem:'#contractDate'
    })
    laydate.render({
        elem:'#contractExpirationDate'
    })
    laydate.render({
        elem:'#dimissionDate'
    })
    laydate.render({
        elem:'#birthdate'
    })

})
/*关闭弹出框口*/
function x_admin_close() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}