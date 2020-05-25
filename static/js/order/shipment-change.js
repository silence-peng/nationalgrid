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
            {field: 'sortNo', title: '运单号码'}
            ,{field: 'num', title: '参考编号'}
            ,{field: 'orderNum', title: '寄件日期'}
            ,{field: 'errorInfo', title: '运单号码'}
            ,{field: 'errorInfo', title: '转单号码'}
            ,{field: 'errorInfo', title: '客户'}
            ,{field: 'errorInfo', title: '指定路线'}
            ,{field: 'errorInfo', title: '件数'}
            ,{field: 'errorInfo', title: '出货实重'}
            ,{field: 'errorInfo', title: '目的地'}
            ,{field: 'errorInfo', title: '走货路线'}
            ,{field: 'errorInfo', title: '报关类型'}
            ,{field: 'errorInfo', title: '货物类型'}
            ,{field: 'errorInfo', title: '总运单号'}

        ]]
    });
})

