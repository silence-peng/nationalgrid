layui.use(['laydate', 'laypage', 'layer', 'table','form',"jquery"], function(){
    var laydate = layui.laydate //日期
        ,laypage = layui.laypage //分页
        ,layer = layui.layer //弹层
        ,table = layui.table //表格
        ,form=layui.form,
        $=layui.jquery;

    laydate.render({
        elem: '#startDate'
    });laydate.render({
        elem: '#endDate'
    });
    form.on('checkbox(listeningReferenceNumber)', function(data){
        if (data.elem.checked){
            $("#referenceNumber").prop('disabled', true);
        }else{
            $("#referenceNumber").prop('disabled', false);
        }
    });
    form.on('checkbox(listeningTransferNo)', function(data){
        if (data.elem.checked){
            $("#transferNo").prop('disabled', true);
        }else{
            $("#transferNo").prop('disabled', false);
        }
    });
    //执行一个 table 实例
    // table.render({
    //     elem: '#chargeInfo'
    //     ,page: true //开启分页
    //     ,height:220
    //     ,url: 'test' //数据接口
    //     ,title: '错误信息表'
    //     ,cols: [[ //表头
    //         {field: 'orderstatus', title: '其他科目'}
    //         ,{field: 'num', title: '金币'}
    //         ,{field: 'orderNum', title: '币别'}
    //     ]]
    // });
    // table.render({
    //     elem: '#listInfo'
    //     ,page: true //开启分页
    //     ,height:800
    //     ,url: 'test' //数据接口
    //     ,title: '错误信息表'
    //     ,toolbar: 'default' //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
    //     ,totalRow: true //开启合计行
    //     ,cols: [[ //表头
    //         {field: 'orderstatus', title: '件数'}
    //         ,{field: 'num', title: '收费实重'}
    //         ,{field: 'orderNum', title: '收费材重'}
    //         ,{field: 'orderNum', title: '计抛方式'}
    //         ,{field: 'orderNum', title: '收费重'}
    //         ,{field: 'orderNum', title: '运费'}
    //         ,{field: 'orderNum', title: '其他费用'}
    //         ,{field: 'orderNum', title: '报关方式'}
    //         ,{field: 'orderNum', title: '税金付款'}
    //     ]]
    // });
    $("#btnLoadOrderInfo").click(function () {
        const routeCode=$("#routeCode").val();
        if (routeCode!=null && routeCode!==""){
            WeAdminShow('查找','./orderInfo.html?type='+'destination',900,650);
        }else{
            layer.msg("清先选择指定路线");
            $("#routeCode").focus();
        }
    });
    $("#customsWay").load('http://127.0.0.1:8080/selectCustomsClearanceInfoAll',function (result) {
        const data=eval(result);

        $(data).each(function () {

            $("#customsWay").append("<option value='"+this.id+"'>"+this.customsWay+"</option>")
        });
        form.render("select");
    });
    $("#cargoType").load('http://127.0.0.1:8080/selectCargoTypeInfoAll',function (result) {
        const data=eval(result);

        $(data).each(function () {

            $("#cargoType").append("<option value='"+this.id+"'>"+this.cargoType+"</option>")
        });
        form.render("select");
    });
    $("#packagingType").load('http://127.0.0.1:8080/selectPackagingTypeAll',function (result) {
        const data=eval(result);

        $(data).each(function () {

            $("#packagingType").append("<option value='"+this.id+"'>"+this.packagingName+"</option>")
        });
        form.render("select");
    });
    $("#declaredCurrency").load('http://127.0.0.1:8080/selectCountryAll',function (result) {
        const data=eval(result);

        $(data).each(function () {

            $("#declaredCurrency").append("<option value='"+this.id+"'>"+this.countryCoding+"</option>")
        });
        form.render("select");
    });
    $("#paymentCurrency").load('http://127.0.0.1:8080/selectCountryAll',function (result) {
        const data=eval(result);

        $(data).each(function () {

            $("#paymentCurrency").append("<option value='"+this.id+"'>"+this.countryCoding+"</option>")
        });
        form.render("select");
    });
    $("#agencyCurrency").load('http://127.0.0.1:8080/selectCountryAll',function (result) {
        const data=eval(result);

        $(data).each(function () {

            $("#agencyCurrency").append("<option value='"+this.id+"'>"+this.countryCoding+"</option>")
        });
        form.render("select");
    });
    $("#paymentMethod").load('http://127.0.0.1:8080/selectPaymentMethodInfoAll',function (result) {
        const data=eval(result);

        $(data).each(function () {

            $("#paymentMethod").append("<option value='"+this.id+"'>"+this.payType+"</option>")
        });
        form.render("select");
    });
    $("#taxPayment").load('http://127.0.0.1:8080/selectPaymentMethodInfoAll',function (result) {
        const data=eval(result);

        $(data).each(function () {

            $("#taxPayment").append("<option value='"+this.id+"'>"+this.payType+"</option>")
        });
        form.render("select");
    });
});

function getCustomerValue(str,name) {
    var code=document.getElementById("customerCode");
    var customerName=document.getElementById("customerName");
    code.value=str;
    customerName.value=name;
}