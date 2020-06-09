layui.use(['laydate', 'laypage', 'layer', 'table','form','jquery'], function(){
    var laydate = layui.laydate //日期
        ,laypage = layui.laypage //分页
        ,layer = layui.layer //弹层
        ,table = layui.table //表格
        ,form = layui.form
        ,$ = layui.jquery;//表格
    //执行一个 table 实例
    table.render({
        elem: '#errorInfo'
        ,height: 600
        ,cellMinWidth: 120
        ,toolbar: 'default' //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
        ,totalRow: true //开启合计行
        ,url: 'http://127.0.0.1:8080/bagging/findBagging' //数据接口
        ,title: '错误信息表'
        ,cols: [[ //表头
            {field:'',type : 'radio'}
            ,{field: 'isStartUsing', title: '启用',templet:function (d) {
                    return d.isStartUsing==1 ? "<i class='layui-icon layui-icon-ok'></i>" : ""
                }}
            ,{field: 'affiliatedBranches', title: '所属网点'}
            ,{field: 'strategyCoding', title: '策略编码'}
            ,{field: 'strategyBame', title: '策略名称'}
            ,{field: 'shipRoute', title: '走货路线'}
            ,{field: 'clearanceId', title: '报关方式'}
            ,{field: 'cargoType', title: '限定货物类型'}
            ,{field: 'wholeBagWeight', title: '整袋限制重量'}
            ,{field: 'chineseDes', title: '目的地'}
            ,{field: 'desAirport', title: '目的地机场代码'}
            ,{field: 'parcelExchangeOffice', title: '邮局包互换局'}
            ,{field: 'sendASite', title: '派件网点'}
            ,{field: 'sharingMode', title: '共享方式',templet:function (d) {
                    if(d.sharingMode==1){
                        return "不共享"
                    }else if(d.sharingMode==2){
                        return "共享给指定"
                    }else{
                        return "共享给所有"
                    }
                }}
            ,{field: 'shareBranch', title: '共享网点'}
            ,{field: 'createDate', title: '创建时间'}
            ,{field: 'createPerson', title: '创建人'}
            ,{field: 'alterDate', title: '修改时间'}
            ,{field: 'alterPerson', title: '修改人'}
        ]]
        ,id:'testReload'
        ,done:function (res, curr, count) {
            $.ajax({
                url: 'http://127.0.0.1:8080/bagging/findBranch',
                type: 'post',
                dataType: 'json',  // 请求方式为json
                success: function(result) {
                    for (var i=0;i<count;i++){
                        const el=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='affiliatedBranches']").children();
                        var affiliatedBranches=el.html();
                        $.each(result,function (i,o) {
                            if (o.branchCoding===affiliatedBranches){
                                el.html(o.branchName)
                            }
                        })
                    }

                }
            });
            $.ajax({
                url: 'http://127.0.0.1:8080/bagging/findCargoType',
                type: 'post',
                dataType: 'json',  // 请求方式为jsonp
                success: function(result) {
                    for (var i=0;i<count;i++){
                        const el=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='cargoType']").children();
                        var cargoTypeId=el.html();
                        $.each(result,function (i,o) {
                            if (o.id===parseInt(cargoTypeId)){
                                el.html(o.cargoType)
                            }
                        })
                    }

                }
            });
            $.ajax({
                url: 'http://127.0.0.1:8080/sorting/findCustomsClearance',
                type: 'post',
                dataType: 'json',  // 请求方式为jsonp
                success: function(result) {
                    for (var i=0;i<count;i++){
                        const el=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='clearanceId']").children();
                        var clearanceId=el.html();
                        $.each(result,function (i,o) {
                            if (o.id===parseInt(clearanceId)){
                                el.html(o.customsWay)
                            }
                        })
                    }

                }
            });
        }
    });
    $.post('http://127.0.0.1:8080/bagging/findBranch',function(result){
        var branch = eval(result);
        $("select[name='affiliatedBranches']").append("<option value=''>请选择</option>");
        $(branch).each(function(){
            $("select[name='affiliatedBranches']").append("<option value='"+this.branchCoding+"'>"+this.branchName+"</option>");
            form.render('select');
        })
    });

    form.on('submit(formDemo)', function(data) {
        table.reload('testReload', {
            where : {
                affiliatedBranches:$("select[name='affiliatedBranches']").val(),
                strategyBame:$("input[name='strategyBame']").val(),
                shipRoute:$("input[name='shipRoute']").val(),
                sendASite:$("input[name='sendASite']").val(),
                isStartUsing:$("select[name='isStartUsing']").val()
            }
        });
        return false;
    });
    $('.btnArr .layui-btn').on('click', function(){
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
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
                layer.open({
                    type : 2,
                    content : 'updateBaggingStrategy.html',
                    area : [ '800px', '500px' ],
                    shade : 0,
                    title : '修改货位',
                    success : function(layero, index) {
                        var iframe = window['layui-layer-iframe' + index];
                        iframe.getid(data[0].id);
                    },
                    shade : [ 0.8, '#393d49' ],
                    end : function() {
                        table.reload('testReload');
                    }
                })
            }
        },
        delData: function(){ //获取选中数据
            var checkStatus = table.checkStatus('testReload')
                ,data = checkStatus.data;
            if(data.length<=0){
                layer.alert("请选择一条要删除的数据")
            }else{
                layer.confirm("确定要删除当前数据吗？", {btn: ['确定', '取消']}
                    , function(index, layero){
                        $.post( 'http://127.0.0.1:8080/bagging/delBagging',data[0],function (result) {
                            if (result){
                                layer.alert("删除成功！");
                                table.reload('testReload');
                            }else{
                                layer.alert("删除失败！")
                            }
                        })
                    }, function(index){
                        layer.close(index);
                    });
            }
        }
    };
});