layui.use(['element','jquery','table','layer','transfer'], function() {
    var table = layui.table
        , $ = layui.jquery
        , layer = layui.layer
        ,transfer =layui.transfer;

    //模拟数据
    var data1 = [
        {"value": "1", "title": "总部"}
        ,{"value": "2", "title": "广州分部"}
        ,{"value": "3", "title": "深圳分部"}
        ,{"value": "4", "title": "上海分部"}
        ,{"value": "6", "title": "长沙分部"}
    ]

    //显示搜索框
    transfer.render({
        elem: '#test4'
        ,data: data1
        ,title: ['网点列表', '委托录单网点列表']
        ,showSearch: true
    })

})
/*关闭弹出框口*/
function x_admin_close() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}