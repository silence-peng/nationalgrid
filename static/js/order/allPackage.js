layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element', 'slider'], function() {
    var laydate = layui.laydate //日期
        , laypage = layui.laypage //分页
        , layer = layui.layer //弹层
        , table = layui.table //表格
        , carousel = layui.carousel //轮播
        , upload = layui.upload //上传
        , element = layui.element //元素操作
        , slider = layui.slider; //滑块
    //执行一个 table 实例
    table.render({
        elem: '#goodsInfo'
        ,toolbar: 'default' //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
        ,height: 400
        ,url: 'test' //数据接口
        ,page:true
        ,title: '错误信息表'
        ,cols: [[ //表头
            {field: 'sortNo', title: '收货袋号'}
            ,{field: 'num', title: '客户名称'}
            ,{field: 'orderNum', title: '总票数'}
            ,{field: 'errorInfo', title: '预报'}
            ,{field: 'errorInfo', title: '收费重'}
            ,{field: 'errorInfo', title: '指定路线'}
            ,{field: 'errorInfo', title: '货物类型'}
        ]]
    });
});