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
        ,url: 'test' //数据接口
        ,title: '错误信息表'
        ,cols: [[ //表头
            {field: 'orderstatus', title: '所属网点'}
            ,{field: 'orderNum', title: '指定路线启用'}
            ,{field: 'orderNum', title: '指定路线比价排货'}
            ,{field: 'errorInfo', title: '指定路线'}
            ,{field: 'errorInfo', title: '目的地'}
            ,{field: 'errorInfo', title: '收件邮编'}
            ,{field: 'errorInfo', title: '走货路线'}
            ,{field: 'errorInfo', title: '限定货物类型'}
            ,{field: 'errorInfo', title: '创建人'}
            ,{field: 'errorInfo', title: '创建时间'}
            ,{field: 'errorInfo', title: '修改人'}
        ]]
    });
});
