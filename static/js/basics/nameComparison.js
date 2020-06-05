layui.use(['element','jquery','table','layer','transfer','tree'], function() {
    var table = layui.table
        , $ = layui.jquery
        , layer = layui.layer
        ,transfer =layui.transfer
        ,tree =layui.tree;


    window.member_del = function (obj, id) {
        layer.confirm('确认要删除吗？', function(index) {
            //发异步删除数据
            $(obj).parents("tr").remove();
            layer.msg('已删除!', {
                icon: 1,
                time: 1000
            });
        });
    };

    table.render({
        elem: '#test'
        , url: '/demo/table/user/'
        , cols: [[
            {type: 'checkbox'}
            , {field: 'id', title: '英文品名'}
            , {field: 'username', title: '中午品名'}
            , {field: 'sex', title: '备注'}
            , {field: 'wealth', title: '创建人'}
            , {field: 'wealth', title: '创建时间'}
            , {field: 'wealth', title: '修改时间'}
            , {field: 'wealth', title: '修改人'}
        ]]
    });

})