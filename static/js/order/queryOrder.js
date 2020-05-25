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
            ,{field: 'orderstatus', title: '运单号码',width:120}
            ,{field: 'orderNum', title: '参考编号',sort:true,width:120}
            ,{field: 'orderNum', title: '最新状态',sort:true,width:120}
            ,{field: 'errorInfo', title: '转单号码',sort:true,width:120}
            ,{field: 'errorInfo', title: '袋号/版号',sort:true,width:120}
            ,{field: 'errorInfo', title: '寄件日期',sort:true,width:120}
            ,{field: 'errorInfo', title: '寄件网点',sort:true,width:120}
            ,{field: 'errorInfo', title: '录单网点',sort:true,width:120}
            ,{field: 'errorInfo', title: '客户编码',sort:true,width:120}
            ,{field: 'errorInfo', title: '客户名称',sort:true,width:120}
            ,{field: 'errorInfo', title: '寄件人',sort:true,width:120}
            ,{field: 'errorInfo', title: '寄件电话',sort:true,width:120}
            ,{field: 'errorInfo', title: '寄件邮箱',sort:true,width:120}
            ,{field: 'errorInfo', title: '收件人',sort:true,width:120}
            ,{field: 'errorInfo', title: '收件电话',sort:true,width:120}
            ,{field: 'errorInfo', title: '收件邮箱',sort:true,width:120}
            ,{field: 'errorInfo', title: '收件城市',sort:true,width:120}
            ,{field: 'errorInfo', title: '收件地址',sort:true,width:120}
            ,{field: 'errorInfo', title: '业务类型',sort:true,width:120}
            ,{field: 'errorInfo', title: '指定路线',sort:true,width:120}
            ,{field: 'errorInfo', title: '目的地编码',sort:true,width:120}
            ,{field: 'errorInfo', title: '目的地',sort:true,width:120}
            ,{field: 'errorInfo', title: '中文品名',sort:true,width:120}
            ,{field: 'errorInfo', title: '英文品名',sort:true,width:120}
            ,{field: 'errorInfo', title: '包装类型',sort:true,width:120}
            ,{field: 'errorInfo', title: '货物类型',sort:true,width:120}
            ,{field: 'errorInfo', title: '报关方式',sort:true,width:120}
            ,{field: 'errorInfo', title: '付款方式',sort:true,width:120}
            ,{field: 'errorInfo', title: '税金付款',sort:true,width:120}
            ,{field: 'errorInfo', title: '代付款',sort:true,width:120}
            ,{field: 'errorInfo', title: '代收币别',sort:true,width:120}
            ,{field: 'errorInfo', title: '件数',sort:true,width:120}
            ,{field: 'errorInfo', title: '预报重',sort:true,width:120}
            ,{field: 'errorInfo', title: '收费实重',sort:true,width:120}
            ,{field: 'errorInfo', title: '收费材重',sort:true,width:120}
            ,{field: 'errorInfo', title: '收费重',sort:true,width:120}
            ,{field: 'errorInfo', title: '运单状态',sort:true,width:120}
            ,{field: 'errorInfo', title: '问题件',sort:true,width:120}
            ,{field: 'errorInfo', title: '问题最新描述',sort:true,width:120}
            ,{field: 'errorInfo', title: '退返客户',sort:true,width:120}
            ,{field: 'errorInfo', title: '代理退件',sort:true,width:120}
            ,{field: 'errorInfo', title: '出货重',sort:true,width:120}
            ,{field: 'errorInfo', title: '上板',sort:true,width:120}
            ,{field: 'errorInfo', title: '走货路线',sort:true,width:120}
            ,{field: 'errorInfo', title: '机场代码',sort:true,width:120}
            ,{field: 'errorInfo', title: '走货路线名',sort:true,width:120}
            ,{field: 'errorInfo', title: '代理账号',sort:true,width:120}
            ,{field: 'errorInfo', title: '总运单号',sort:true,width:120}
            ,{field: 'errorInfo', title: '收件备注',sort:true,width:120}
            ,{field: 'errorInfo', title: '出货备注',sort:true,width:120}
            ,{field: 'errorInfo', title: '最新状态网点',sort:true,width:120}
            ,{field: 'errorInfo', title: '是否偏远',sort:true,width:120}
            ,{field: 'errorInfo', title: '数据来源',sort:true,width:120}
        ]]
    });
});
