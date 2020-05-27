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
            {type:'numbers',title:"序号"}
            ,{type:'checkbox', fixed: 'left'}
            ,{field: 'orderstatus', title: '处理状态',width:120}
            ,{field: 'orderNum', title: '运单号码',sort:true,width:120}
            ,{field: 'orderNum', title: '转单号吗',sort:true,width:120}
            ,{field: 'errorInfo', title: '登记日期',sort:true,width:120}
            ,{field: 'errorInfo', title: '问题状态',sort:true,width:120}
            ,{field: 'errorInfo', title: '问题描述',sort:true,width:120}
            ,{field: 'errorInfo', title: '附件',sort:true,width:120}
            ,{field: 'errorInfo', title: '指定处理人',sort:true,width:120}
            ,{field: 'errorInfo', title: '处理网点',sort:true,width:120}
            ,{field: 'errorInfo', title: '退返客户',sort:true,width:120}
            ,{field: 'errorInfo', title: '问题件处理人',sort:true,width:120}
            ,{field: 'errorInfo', title: '最新回复',sort:true,width:120}
            ,{field: 'errorInfo', title: '最新回复时间',sort:true,width:120}
            ,{field: 'errorInfo', title: '寄件人',sort:true,width:120}
            ,{field: 'errorInfo', title: '寄件电话',sort:true,width:120}
            ,{field: 'errorInfo', title: '寄件邮箱',sort:true,width:120}
            ,{field: 'errorInfo', title: '客户名称',sort:true,width:120}
            ,{field: 'errorInfo', title: '截止处理时间',sort:true,width:120}
            ,{field: 'errorInfo', title: '登记网点',sort:true,width:120}
            ,{field: 'errorInfo', title: '登记人',sort:true,width:120}
            ,{field: 'errorInfo', title: '指定路线',sort:true,width:120}
            ,{field: 'errorInfo', title: '目的地编码',sort:true,width:120}
            ,{field: 'errorInfo', title: '目的地名称',sort:true,width:120}
            ,{field: 'errorInfo', title: '收费实重',sort:true,width:120}
            ,{field: 'errorInfo', title: '收费材重',sort:true,width:120}
            ,{field: 'errorInfo', title: '收费重',sort:true,width:120}
        ]]
    });
});
