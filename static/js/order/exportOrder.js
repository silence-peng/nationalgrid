layui.use(['laydate', 'laypage', 'layer', 'table', 'form', 'upload', 'element', 'jquery'], function() {

    var laydate = layui.laydate //日期
        , laypage = layui.laypage //分页
        , layer = layui.layer //弹层
        , table = layui.table //表格
        , form = layui.form //轮播
        , upload = layui.upload //上传
        , element = layui.element //元素操作
        , $ = layui.jquery; //滑块//执行一个laydate实例

    $("#code").load('http://127.0.0.1:8080/transboundaryV5/order/loadCustomerManagement',function (result) {
        const data=eval(result);
        $(data).each(function (i,o) {
            $("#code").append("<option value='"+o.code+"'>"+o.name+"</option>")
        });
        form.render("select");
    });
    $("#template").load('http://127.0.0.1:8080/transboundaryV5/base/loadTemplateInfo',function (result) {
        const data=eval(result);
        $(data).each(function (i,o) {
            $("#template").append("<option value='"+o.templateId+"'>"+o.templateName+"</option>")
        });
        form.render("select");
    });
    upload.render({ //允许上传的文件后缀
        elem: '#templateFile'
        ,url: 'http://127.0.0.1:8080/transboundaryV5/base/upload' //改成您自己的上传接口
        ,accept: 'file' //普通文件
        ,exts: 'xlsx|xls' //只允许上传压缩文件
        ,before: function(obj) {
                layer.load();

                this.data.templateId = $("#template").val();
                this.data.code = $("#code").val();
        }
        ,data: {

        },done: function(res){
            if (res.code===1){
                layer.msg('上传成功');
            }else{
                layer.msg('上传成功');
            }
        }
    });
    //执行一个 table 实例
    table.render({
        elem: '#errorInfo'
        ,width:880
        ,height: 450
        ,url: 'test' //数据接口
        ,title: '错误信息表'
        ,cols: [[ //表头
            {field: 'sortNo', title: '序列', width:100}
            ,{field: 'num', title: '行数', width: 100}
            ,{field: 'orderNum', title: '运单号码', width:180}
            ,{field: 'errorInfo', title: '错误说明', width: 500}
        ]]
    });
});