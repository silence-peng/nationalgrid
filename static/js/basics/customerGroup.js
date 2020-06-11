layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element', 'slider','jquery','form'], function() {
    var laydate = layui.laydate //日期
        , laypage = layui.laypage //分页
        , layer = layui.layer //弹层
        , table = layui.table //表格
        , carousel = layui.carousel //轮播
        , upload = layui.upload //上传
        , element = layui.element //元素操作
        , $ = layui.jquery
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
        ,url: 'http://127.0.0.1:8080/CustomerGroup/finCustomer' //数据接口
        ,title: '客户分组表'
        ,id:'test'
        ,cols: [[ //表头
            {type:'numbers',title:"序号" ,fixed:'left'}
            ,{type: 'checkbox', fixed: 'left'}
            ,{field: 'clientCode', title: '客户组编码'}
            ,{field: 'clientName', title: '客户组名称'}
            ,{field: 'isStartUsing', title: '启用',templet:function (d) {
                    if (d.isStartUsing==null){
                        return "未启用"
                    }else{
                        return "启用"
                    }
                }}
            ,{field: 'affiliatedBranches', title: '所属网点'}
            ,{field: 'sharingModeId', title: '共享方式'}
            ,{field: 'remark', title: '备注'}
            ,{field: 'createDate', title: '建立时间'}
            ,{field: 'createPerson', title: '建立人'}
            ,{field: 'alterDate', title: '修改时间'}
            ,{field: 'alterPerson', title: '修改人'}

        ]]
    });
    $("#sc").click(function(){ //获取选中数据
        var checkStatus = table.checkStatus('test')
            ,data = checkStatus.data;
        if(data.length<=0){
            layer.alert("请选择一条要删除的数据")
        }else{
            $.get( 'http://127.0.0.1:8080/CustomerGroup/del',{"clientCode":data[0].clientCode},function (result) {
                if (result==true){
                    alert("删除成功！");
                    table.reload('test');
                }else{
                    layer.alert("删除失败",function () {

                    })
                }
            })
        }
    });
    $("#xg").click(function(){ //获取选中数据
        var checkStatus = table.checkStatus('test')
            ,data = checkStatus.data;
        if(data.length<=0){
            layer.alert("请选择一条要修改的数据")
        }else{
            WeAdminShow('修改目的地','updateCustomerGroup.html?clientCode='+data[0].clientCode,660,550);
        }
    })
    $("#button").on('click',function () {
        table.reload('testable',{
            where :{
                affiliatedBranches:$("#affiliatedBranches").val(),clientCode:$("#clientCode").val(),clientName:$("#clientName").val(),sharingModeId:$("#sharingModeId").val(),isStartUsing:$("#isStartUsing").val()

            }
        });
    });
})

