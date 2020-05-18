layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element', 'slider'], function(){
    var laydate = layui.laydate //日期
        ,laypage = layui.laypage //分页
        ,layer = layui.layer //弹层
        ,table = layui.table //表格
        ,carousel = layui.carousel //轮播
        ,upload = layui.upload //上传
        ,element = layui.element //元素操作
        ,slider = layui.slider //滑块

    laydate.render({
        elem: '#startDate'
    });laydate.render({
        elem: '#endDate'
    });
    //执行一个 table 实例
    table.render({
        elem: '#errorInfo'
        ,height: 500
        ,page: true //开启分页
        ,toolbar: 'default' //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
        ,totalRow: true //开启合计行
        ,url: 'test' //数据接口
        ,title: '错误信息表'
        ,cols: [[ //表头
            {field: 'orderstatus', title: '订单状态',width:120}
            ,{field: 'num', title: '运单号码',sort:true,width:120}
            ,{field: 'orderNum', title: '参考编号',sort:true,width:120}
            ,{field: 'errorInfo', title: '转单号码',sort:true,width:120}
            ,{field: 'errorInfo', title: '打单号吗',sort:true,width:120}
            ,{field: 'errorInfo', title: '排货状态',sort:true,width:120}
            ,{field: 'errorInfo', title: '大胆状态',sort:true,width:120}
            ,{field: 'errorInfo', title: '收货袋号',sort:true,width:120}
            ,{field: 'errorInfo', title: '订单日期',sort:true,width:120}
            ,{field: 'errorInfo', title: '录单网点',sort:true,width:120}
            ,{field: 'errorInfo', title: '寄件网点',sort:true,width:120}
            ,{field: 'errorInfo', title: '客户编码',sort:true,width:120}
            ,{field: 'errorInfo', title: '客户',sort:true,width:120}
            ,{field: 'errorInfo', title: '寄件人',sort:true,width:120}
            ,{field: 'errorInfo', title: '寄件公司',sort:true,width:120}
            ,{field: 'errorInfo', title: '寄件电话',sort:true,width:120}
            ,{field: 'errorInfo', title: '寄件邮箱',sort:true,width:120}
            ,{field: 'errorInfo', title: '指定路线',sort:true,width:120}
            ,{field: 'errorInfo', title: '目的地编码',sort:true,width:120}
            ,{field: 'errorInfo', title: '目的地',sort:true,width:120}
            ,{field: 'errorInfo', title: '收件邮编',sort:true,width:120}
            ,{field: 'errorInfo', title: '包装类型',sort:true,width:120}
            ,{field: 'errorInfo', title: '货物类型',sort:true,width:120}
        ]]
    });
});