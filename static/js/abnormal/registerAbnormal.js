layui.use(['jquery','table','layer','upload','form'],function () {
    const $=layui.jquery
        ,table=layui.table
        ,layer=layui.layer
        ,upload = layui.upload
        ,form=layui.form;
    upload.render({
        elem: '#test3'
        ,url: '' //改成您自己的上传接口
        ,accept: 'file' //普通文件
        ,auto:false
        ,bindAction: '#loginInfo'
        ,before: function(obj){
            //预读本地文件示例，不支持ie8
            console.log($("#data").serialize());
            obj.preview(function(index, file, result){
                // $('#demo2').append(file.name )
            });
            this.data.waybillNumber = $("#waybillNumber").val();
            this.data.problemState = $("#problemState").val();
            this.data.processingNode = $("#processingNode").val();
            this.data.description = $("#description").val();
            this.data.processLimited = $("#processLimited").val();
            this.data.notifier = $("#notifier").val();
        }
        ,data: {

        },done: function(res){
            layer.msg('上传成功');
            console.log(res);
        }
    });

    $("#problemState").load('http://127.0.0.1:8080/transboundaryV5/abnormal/loadPortBeforeIssueInfo',function (result) {
        const data=eval(result);
        $("#problemState").append("<option value='0'></option>");
        $(data).each(function (i,o) {
            $("#problemState").append("<option value='"+o.id+"'>"+o.typeName+"</option>")
        });
        form.render("select");
    });
    $("#processingNode").load('http://127.0.0.1:8080/transboundaryV5/base/loadBranchBasicsInfo',function (result) {
        const data=eval(result);
        $("#processingNode").append("<option value='0'></option>");
        $(data).each(function (i,o) {
            $("#processingNode").append("<option value='"+o.branchCoding+"'>"+o.branchName+"</option>")
        });
        form.render("select");
    });
    $("#notifier").load('http://127.0.0.1:8080/transboundaryV5/order/loadCustomerManagement',function (result) {
        const data=eval("("+result+")");
        $("#notifier").append("<option value='0'></option>");
        $(data).each(function (i,o) {
            $("#notifier").append("<option value='"+o.code+"'>"+o.name+"</option>")
        });
        form.render("select");
    });
    table.render({
        elem: '#chargeInfo'
        ,page: true //开启分页
        ,url: 'http://127.0.0.1:8080/transboundaryV5/abnormal/loadAssignRouteList' //数据接口
        ,title: '错误信息表'
        ,toolbar: 'default' //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
        ,minimumWeight:120
        ,cols: [[ //表头
            {field: 'treatmentState', title: '处理状态'}
            ,{field: 'waybillNumber', title: '运单号码'}
            ,{field: 'trackingNumber', title: '转单号码'}
            ,{field: 'problemState', title: '问题状态'}
            ,{field: 'description', title: '问题描述'}
            ,{field: 'processingNode', title: '处理网点'}
            ,{field: 'notifier', title: '问题件通知人'}
            ,{field: 'endTime', title: '截止处理时间'}
            ,{field: 'loginSite', title: '登记网点'}
            ,{field: 'registrant', title: '登记人'}
        ]]
    });
});