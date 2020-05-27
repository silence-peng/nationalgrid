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
            ,{type:'checkbox'}
            ,{field: 'num', title: '客户编码'}
            ,{field: 'sortNo', title: '客户名称'}
            ,{field: 'sortNo', title: '客户状态'}
            ,{field: 'orderNum', title: '合同编号'}
            ,{field: 'errorInfo', title: '所属网点'}
            ,{field: 'errorInfo', title: '客户类型'}
            ,{field: 'errorInfo', title: '客户等级'}
            ,{field: 'errorInfo', title: '关联客户组'}
            ,{field: 'errorInfo', title: '账单格式'}
            ,{field: 'errorInfo', title: '附件'}
            ,{field: 'errorInfo', title: '同行客户'}
            ,{field: 'errorInfo', title: '主客户编码'}
            ,{field: 'errorInfo', title: '目的国家简码'}
            ,{field: 'errorInfo', title: '客户曾用名'}
            ,{field: 'errorInfo', title: '销售员'}
            ,{field: 'errorInfo', title: '跟单员'}
            ,{field: 'errorInfo', title: '港前客服'}
            ,{field: 'errorInfo', title: '港后客服'}
            ,{field: 'errorInfo', title: '对账员'}
            ,{field: 'errorInfo', title: '运费押金'}
            ,{field: 'errorInfo', title: '运费押金币别'}
            ,{field: 'errorInfo', title: '税金押金'}
            ,{field: 'errorInfo', title: '税金押金币别'}
            ,{field: 'errorInfo', title: '创建时间'}
            ,{field: 'errorInfo', title: '创建人'}
            ,{field: 'errorInfo', title: '修改时间'}
            ,{field: 'errorInfo', title: '修改人'}
            ,{field: 'errorInfo', title: '首次交货时间'}
            ,{field: 'errorInfo', title: '最后交货时间'}
        ]]
        ,page: true
    });
})

