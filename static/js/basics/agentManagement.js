layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element', 'slider','jquery','form'], function() {
    var laydate = layui.laydate //日期
        , laypage = layui.laypage //分页
        , layer = layui.layer //弹层
        , table = layui.table //表格
        , carousel = layui.carousel //轮播
        , upload = layui.upload //上传
        , element = layui.element //元素操作
        , jquery = layui.jquery
        , form = layui.form
        , slider = layui.slider; //滑块//执行一个laydate实例
    form.on('checkbox(always_the_awb)', function(data){
        var r = data.elem.checked; //是否被选中，true或者false
        $("#always_the_awb_button").attr('disabled',"true");
        alert("进来了")
    });
    /*$(function () {
        var a = $("#always_the_awb").prop('checked');
        if(a){
            $("#always_the_awb_button").click(function(){
                $(this).attr('disabled',"false");
            });
        }else {
            $("#always_the_awb_button").click(function(){
                $(this).attr('disabled',"true");
            });
        }
    })*/
    laydate.render({
        elem: '#test1,#test2'//指定元素
    });
    //执行一个 table 实例
    table.render({
        elem: '#errorInfo'
        ,height: 450
        ,url: 'test' //数据接口
        ,title: '错误信息表'
        ,cols: [[ //表头
            {type:'numbers',title:"序号"}
            ,{field: 'num', title: '启用'}
            ,{field: 'sortNo', title: '代理编码'}
            ,{field: 'sortNo', title: '代理名称'}
            ,{field: 'orderNum', title: '代理简码'}
            ,{field: 'errorInfo', title: '代理类型'}
            ,{field: 'errorInfo', title: '所属国家'}
            ,{field: 'errorInfo', title: '所属州/省'}
            ,{field: 'errorInfo', title: '所属城市'}
            ,{field: 'errorInfo', title: '所属网点'}
            ,{field: 'errorInfo', title: '对账员'}
            ,{field: 'errorInfo', title: '付款账户协议'}
            ,{field: 'errorInfo', title: '银行账号'}
            ,{field: 'errorInfo', title: '开户银行'}
            ,{field: 'errorInfo', title: '开户人'}
            ,{field: 'errorInfo', title: '最后一次交货时间'}
            ,{field: 'errorInfo', title: '备注'}
            ,{field: 'errorInfo', title: '创建时间'}
            ,{field: 'errorInfo', title: '创建人'}
            ,{field: 'errorInfo', title: '修改时间'}
            ,{field: 'errorInfo', title: '修改人'}

        ]]
    });
})

