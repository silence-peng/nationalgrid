layui.use(['element','jquery','table','layer','transfer','form'], function() {
    var table = layui.table
        , $ = layui.jquery
        , layer = layui.layer
        ,transfer =layui.transfer
        ,form =layui.form;
    $("#affiliatedBranches").load('http://127.0.0.1:8080/transboundaryV5/base/loadBranchBasicsInfo',function (result) {
        const data=eval(result);
        $(data).each(function (i,o) {
            $("#affiliatedBranches").append("<option value='"+o.branchCoding+"'>"+o.branchName+"</option>")
        });
        form.render("select");
    });
    form.on('submit(formDemo)', function(data){
        table.reload('testReload', {
            where: {
                isStartUsing:$("#isStartUsing").val(),
                positionType:$("#positionType").val(),
                positionCoding:$("#positionCoding").val(),
                affiliatedBranches:$("#affiliatedBranches").val()
            }
        }, 'data');
        return false;
    });
    table.render({
        elem: '#test'
        ,id:"testReload"
        , url: 'http://127.0.0.1:8080/transboundaryV5/base/loadPositionManagment'
        , cols: [[
            {type:'radio'}
            ,{field: 'isStartUsing', title: '启用', templet: function(res){
                    if (res.isStartUsing===1){
                        return "<input type=\"checkbox\" name=\"isStartUsing\"  lay-filter='startUsing' checked title=\"启用\">"
                    }
                    return "<input type=\"checkbox\" name=\"isStartUsing\"  lay-filter='startUsing'  title=\"启用\">"

                }}
            , {field: 'positionCoding', title: '货位编码'}
            , {field: 'positionType', title: '货位类型', templet: function(res){
                    if (res.positionType===1){
                        return "正常区"
                    }
                    return "异常区"

                }}
            , {field: 'affiliatedBranches', title: '所属网点'}
            , {field: 'remark', title: '备注'}
            , {field: 'createPerson', title: '创建人'}
            , {field: 'createDate', title: '创建时间'}
            , {field: 'alterDate', title: '修改时间'}
            , {field: 'alterPerson', title: '修改人'}
        ]]
        ,done:function (res, curr, count) {
            $.ajax({
                url: 'http://127.0.0.1:8080/transboundaryV5/base/loadBranchBasicsInfo',
                type: 'get',
                dataType: 'json',  // 请求方式为jsonp
                crossDomain: true,
                success: function(result) {
                    for (var i=0;i<count;i++){
                        const el=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='affiliatedBranches']").children();
                        var affiliatedBranches=el.html();
                        if (result.length>0){
                            $.each(result,function (i,o) {
                                if (o.branchCoding===affiliatedBranches){
                                    el.html(o.branchName)
                                }
                            })
                        }
                    }

                }
            });
        }
    });
    table.on('row(test)', function(obj){
        $(".layui-table-body tr ").attr({"style":"background:#FFFFFF"});//其他tr恢复原样
        $(obj.tr.selector).attr({"style":"background:#99ff99"});//改变当前tr颜色

    });
    var $ = layui.$, active = {
        getCheckData: function(){ //获取选中数据
            var checkStatus = table.checkStatus('testReload')
                ,data = checkStatus.data;
            if(data.length<=0){
                layer.alert("请选择一条要修改的数据")
            }else{
                WeAdminShow('修改货位','updateGoodsAllocation.html?id='+data[0].positionCoding,700,400);
            }
        },
        delData: function(){ //获取选中数据
            var checkStatus = table.checkStatus('testReload')
                ,data = checkStatus.data;
            if(data.length<=0){
                layer.alert("请选择一条要删除的数据")
            }else{
                if (layer.confirm("确定要删除当前数据吗？")){
                    $.post( 'http://127.0.0.1:8080/transboundaryV5/base/delPositionManagment',data[0],function (result) {
                        if (result){
                            layer.alert("删除成功！");
                            table.reload('testReload');
                        }else{
                            layer.alert("删除失败！")
                        }
                    })
                }
            }
        }
    };

    $('.btnArr .layui-btn').on('click', function(){
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
    });
    form.on('checkbox(startUsing)', function(data){
        const tableData=layui.table.cache["testReload"];
        var re = $(data.elem);
        //遍历父级tr，取第一个，然后查找第二个td，取值
        var index = re.parents('tr').index();
        console.log(data.elem.checked);
        if (data.elem.checked){
            const trData=tableData[index];
            trData.isStartUsing=1;
            $.ajax({
                url: 'http://127.0.0.1:8080/transboundaryV5/base/updPositionManagment',
                type: 'get',
                dataType: 'json',  // 请求方式为jsonp
                crossDomain: true,
                data: trData,
                success: function(result) {
                    if (result){
                        layer.alert("启用货位成功！")
                    }else{
                        layer.alert("启用或我失败！")
                    }
                }
            });
        }else{
            const trData=tableData[index];
            trData.isStartUsing=0;
            $.ajax({
                url: 'http://127.0.0.1:8080/transboundaryV5/base/updPositionManagment',
                type: 'get',
                dataType: 'json',  // 请求方式为jsonp
                crossDomain: true,
                data: trData,
                success: function(result) {
                    if (result){
                        layer.alert("禁用货位成功！")
                    }else{
                        layer.alert("禁用货位失败！")
                    }
                }
            });
        }
        setTimeout(function () {
            table.reload('testReload'),1000
        })
    });

});