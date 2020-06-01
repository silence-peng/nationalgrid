layui.use(['element','jquery','layer','form'], function() {
    var $ = layui.jquery
        , layer = layui.layer
        , form = layui.form;

})
/*关闭弹出框口*/
function x_admin_close() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}