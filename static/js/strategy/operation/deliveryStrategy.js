layui.use(['laydate', 'laypage', 'layer', 'table','form'], function(){
    var laydate = layui.laydate //日期
        ,laypage = layui.laypage //分页
        ,layer = layui.layer //弹层
        ,table = layui.table //表格
        ,form = layui.form ;//表格
    //执行一个 table 实例
    table.render({
        elem: '#errorInfo'
        ,height: 500 ,cellMinWidth: 120
        ,page: true //开启分页
        ,toolbar: 'default' //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
        ,totalRow: true //开启合计行
        ,url: 'http:/boycott/find' //数据接口
        ,title: '错误信息表'
        ,cols: [[ //表头
            {field: 'affiliatedBranches', title: '所属网点'}
            ,{field: 'assRouteId', title: '指定路线'}
            ,{field: 'chineseDes', title: '目的地'}
            ,{field: 'receipt', title: '收件邮编'}
            ,{field: 'shiRouteId', title: '走货路线'}
            ,{field: 'createPerson', title: '创建人'}
            ,{field: 'createDate', title: '创建时间'}
            ,{field: 'alterDate', title: '修改时间'}
            ,{field: 'alterPerson', title: '修改人'}
        ]]
    });

    /*用户-删除*/
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
});
