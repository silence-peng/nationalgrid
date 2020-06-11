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
        ,url: 'http://127.0.0.1:8080/DestinationManagement/finddestination' //数据接口
        ,title: '目的地管理表'
        ,id:'testable'
        ,cols: [[ //表头
            {type:'numbers',title:"序号",fixed: 'left',width:80}
            ,{type: 'checkbox', fixed: 'left'}
            ,{field: 'code', title: '目的地编码',width:150,sort: true}
            ,{field: 'name', title: '目的地名称',width:150 }
            ,{field: 'isStartUsing', title: '启用',width:80,templet:function (d) {
                    if (d.isStartUsing==null){
                        return "未启用"
                    }else{
                        return "启用"
                    }

                }
                }
            ,{field: 'businessTypeId', title: '业务类型',width:150,templet:function (d) {
                    if (d.businessTypeId==0){
                        return "快递业务"
                    }else if (d.businessTypeId==1){
                        return "海运业务"
                    }else{
                        return "空运业务"
                    }
                }}
            ,{field: 'countriesInCode', title: '国家编码',width:150}
            ,{field: 'countryCode', title: '国家别名',width:150}
            ,{field: 'chineseName', title: '简体名称',width:150}
            ,{field: 'englishName', title: '英文名称',width:150}
            ,{field: 'remark', title: '备注',width:80}
            ,{field: 'createDate', title: '创建时间',width:150}
            ,{field: 'createPerson', title: '创建人',width:150}
            ,{field: 'alterDate', title: '修改时间',width:150}
            ,{field: 'alter_person', title: '修改人',width:100,sort: true, fixed: 'right'}

        ]]
    });

    $("#sc").click(function(){ //获取选中数据
        var checkStatus = table.checkStatus('testable')
            ,data = checkStatus.data;
        if(data.length<=0){
            layer.alert("请选择一条要删除的数据")
        }else{
            $.get( 'http://127.0.0.1:8080/DestinationManagement/deldestination',{"code":data[0].code},function (result) {
                if (result==true){
                   alert("删除成功！");
                    table.reload('testable');
                }else{
                    layer.alert("删除失败",function () {

                    })
                }
            })
        }
    });
    $("#xg").click(function(){ //获取选中数据
        var checkStatus = table.checkStatus('testable')
            ,data = checkStatus.data;
        if(data.length<=0){
            layer.alert("请选择一条要修改的数据")
        }else{
            WeAdminShow('修改目的地','updateDestination.html?code='+data[0].code,860,550);
        }
    })
    $("#button").on('click',function () {
        table.reload('testable',{
            where :{
                code:$("#code").val(),name:$("#name").val(),countriesInCode:$("#countriesInCode").val(),englishName:$("#englishName").val(),countryCode:$("#countryCode").val(),
                businessTypeId:$("#businessTypeId").val(),isStartUsing:$("#isStartUsing").val()
            }
        });
    });
})

