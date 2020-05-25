layui.use(['laydate', 'laypage', 'layer', 'table','form',"jquery"], function(){
    var laydate = layui.laydate //日期
        ,laypage = layui.laypage //分页
        ,layer = layui.layer //弹层
        ,table = layui.table //表格
        ,form=layui.form,
        $=layui.jquery;

    laydate.render({
        elem: '#date'
    });
    table.render({
        elem: '#chargeInfo'
        ,page: true //开启分页
        ,height:220
        ,url: 'test' //数据接口
        ,title: '错误信息表'
        ,cols: [[ //表头
            {field: 'orderstatus', title: '其他科目'}
            ,{field: 'num', title: '金币'}
            ,{field: 'orderNum', title: '币别'}
        ]]
    });

    $("#btnLoadOrderInfo").click(function () {
        const routeCode=$("#routeCode").val();
        if (routeCode!=null && routeCode!==""){
            WeAdminShow('查找','./orderInfo.html?type='+'destination',900,650);
        }else{
            layer.msg("清先选择指定路线");
            $("#routeCode").focus();
        }
    })
});
function getCustomerValue(str,name) {
    var code=document.getElementById("customerCode");
    var customerName=document.getElementById("customerName");
    code.value=str;
    customerName.value=name;
}