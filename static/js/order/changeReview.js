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
            {type: 'checkbox'}
            ,{field: 'orderstatus', title: '变更状态',width:120}
            ,{field: 'num', title: '变更来源',sort:true,width:120}
            ,{field: 'orderNum', title: '自动审核',sort:true,width:120}
            ,{field: 'errorInfo', title: '运单号码',sort:true,width:120}
            ,{field: 'errorInfo', title: '转单号码',sort:true,width:120}
            ,{field: 'errorInfo', title: '寄件日期',sort:true,width:120}
            ,{field: 'errorInfo', title: '寄件网点',sort:true,width:120}
            ,{field: 'errorInfo', title: '客户',sort:true,width:120}
            ,{field: 'errorInfo', title: '对账员',sort:true,width:120}
            ,{field: 'errorInfo', title: '&寄件日期',sort:true,width:120}
            ,{field: 'errorInfo', title: '&寄件网点',sort:true,width:120}
            ,{field: 'errorInfo', title: '&客户编码',sort:true,width:120}
            ,{field: 'errorInfo', title: '&指定路线',sort:true,width:120}
            ,{field: 'errorInfo', title: '&目的地',sort:true,width:120}
            ,{field: 'errorInfo', title: '&包装类型',sort:true,width:120}
            ,{field: 'errorInfo', title: '&收费实重',sort:true,width:120}
            ,{field: 'errorInfo', title: '&收费材重',sort:true,width:120}
            ,{field: 'errorInfo', title: '&计抛规则',sort:true,width:120}
            ,{field: 'errorInfo', title: '&收费重',sort:true,width:120}
            ,{field: 'errorInfo', title: '&出货重',sort:true,width:120}
            ,{field: 'errorInfo', title: '&走货路线',sort:true,width:120}
            ,{field: 'errorInfo', title: '&派件网点',sort:true,width:120}
            ,{field: 'errorInfo', title: '&付款方式',sort:true,width:120}
            ,{field: 'errorInfo', title: '&到付款',sort:true,width:120}
            ,{field: 'errorInfo', title: '申请人',sort:true,width:120}
            ,{field: 'errorInfo', title: '申请变更时间',sort:true,width:120}
            ,{field: 'errorInfo', title: '审核人',sort:true,width:120}
            ,{field: 'errorInfo', title: '审核时间',sort:true,width:120}
        ]]
    });
});
function getValue(str,name) {
    var code=document.getElementById("customerCode");
    var customerName=document.getElementById("customerName");
    code.value=str;
    customerName.value=name;
}