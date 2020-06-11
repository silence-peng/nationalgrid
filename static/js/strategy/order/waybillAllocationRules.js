layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element', 'slider','jquery','form','transfer'], function() {
    var laydate = layui.laydate //日期
        , laypage = layui.laypage //分页
        , layer = layui.layer //弹层
        , table = layui.table //表格
        , carousel = layui.carousel //轮播
        , upload = layui.upload //上传
        , element = layui.element //元素操作
        , $ = layui.jquery
        , form = layui.form
        ,transfer =layui.transfer
        , slider = layui.slider; //滑块//执行一个laydate实例
    $("#oddType").load('http://127.0.0.1:8080/waybillAllocationRules/getWaybillType',function (result) {
        const data=eval(result);
        $(data).each(function (i,o) {
            $("#oddType").append("<option value='"+o.id+"'>"+o.typeName+"</option>")
        });
        form.render("select");
    })
    //执行一个 table 实例
    table.render({
        elem: '#test'
        ,url:'http://127.0.0.1:8080/waybillAllocationRules/getWaybillAllocation'
        ,id:'WaybillAllocation'
        ,height: 350
        ,cols: [[ //表头
            {type:'radio'}
            ,{type:'numbers',title:"序号"}
            ,{field: 'isStartUsing', title: '启用',width:80,
                templet: function (item) {
                    if (item.isStartUsing == 1) {
                        return "未启用";
                    } else if (item.isStartUsing ==2) {
                        return "已启用";
                    }
                }
            }
            ,{field: 'ruleCoding', title: '规则编码',width:130}
            ,{field: 'ruleName', title: '规则名称',width:130}
            ,{field: 'oddType', title: '单号类型',width:130}
            ,{field: 'checkType', title: '校验类型',width:130}
            ,{field: 'oddRule', title: '单号规则',width:130}
            ,{field: 'warningNumber', title: '预警份数',width:130}
            ,{field: 'onceMaxCopies', title: '单次最大获取份数',width:150}
            ,{field: 'sumCopies', title: '累计总份数',width:130}
            ,{field: 'usableCopies', title: '累计可用份数',width:150}
            ,{field: 'createDate', title: '创建时间',width:130}
            ,{field: 'createPerson', title: '创建人',width:120}
            ,{field: 'alterDate', title: '修改时间',width:150}
            ,{field: 'alterPerson', title: '修改人',width:120}
            ,{fixed: 'right', width:80, align:'center', toolbar: '#barDemo'}
        ]]
        ,done:function (res, curr, count) {
            $.ajax({
                url: 'http://127.0.0.1:8080/waybillAllocationRules/getWaybillType',
                type: 'get',
                dataType: 'json',  // 请求方式为jsonp
                crossDomain: true,
                success: function(result) {
                    for (var i=0;i<count;i++){
                        const el=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='oddType']").children();
                        var affiliatedBranches=el.html();

                        $.each(result,function (i,o) {
                            if (o.id===parseInt(affiliatedBranches)){
                                el.html(o.typeName)
                            }
                        })
                    }

                }
            });
        }
        ,page:true
    });
    form.on('submit(formDemo)', function(data){
        table.reload('WaybillAllocation', {
            where: { //设定异步数据接口的额外参数，任意设
                oddType: $("#oddType").val()
                ,ruleName: $("#ruleName").val()
                ,isStartUsing: $("#isStartUsing").val()
                //…
            }
            ,page: {
                curr: 1 //重新从第 1 页开始
            }
        });
    })

    $("#godistributionNetwork").click(function(){ //获取选中数据
        var checkStatus = table.checkStatus('WaybillAllocation')
            ,data = checkStatus.data;
        if(data.length<=0){
            layer.alert("请选择一条需要分配网点的数据")
        }else{
            WeAdminShow('分配网点','./distributionNetwork.html?waybillId='+data[0].ruleCoding,750,450);
        }
    }),
        $("#goalloClient").click(function(){ //获取选中数据
            var checkStatus = table.checkStatus('WaybillAllocation')
                ,data = checkStatus.data;
            if(data.length<=0){
                layer.alert("请选择一条需要分配客户的数据")
            }else{
                WeAdminShow('分配客户','./alloClient.html='+data[0].ruleCoding,750,450);
            }
        }),

    table.on('tool(demo)', function(obj){
        var data = obj.data;
        if(obj.event === 'detail'){
            table.render({
                elem: '#numberInfo'
                ,url:'http://127.0.0.1:8080/waybillAllocationRules/getWaybillNumber?waybillId='+data.ruleCoding
                ,height: 300
                ,cols: [[ //表头
                    {type:'numbers', width:80,title: '序号'}
                    ,{field: 'useStatus',width:100, title: '使用状态',
                        templet: function (item) {
                            if (item.useStatus == 1) {
                                return "未使用";
                            } else if (item.useStatus ==2) {
                                return "正在使用";
                            }
                        }
                    }
                    ,{field: 'startOdd',width:100, title: '起始单号'}
                    ,{field: 'endOdd',width:100, title: '终止单号'}
                    ,{field: 'sumCopies',width:100, title: '总份数'}
                    ,{field: 'useCopies',width:100, title: '使用份数'}
                    ,{field: 'obsoleteCopies',width:100, title: '作废份数'}
                    ,{field: 'newestOdd',width:150, title: '最新申请单号'}
                    ,{field: 'newestTime',width:150, title: '最新申请时间'}
                    ,{field: 'errorInfo',width:130, title: '最新申请人'}
                    ,{field: 'createDate',width:150, title: '创建时间'}
                    ,{field: 'createPerson',width:100, title: '创建人'}
                    ,{field: 'alterDate',width:150, title: '修改时间'}
                    ,{field: 'alterPerson',width:120, title: '修改人'}
                ]]
            });
            table.render({
                elem: '#useInfo'
                ,url:'http://127.0.0.1:8080/waybillAllocationRules/getUseInfo?waybillId='+data.ruleCoding
                ,height: 300
                ,cols: [[ //表头
                    {field: 'id', width:80,title: '序号'}
                    ,{field: 'username',width:80, title: '操作'}
                    ,{field: 'branch',width:80, title: '网点'}
                    ,{field: 'client',width:80, title: '客户'}
                    ,{field: 'courseRace',width:130, title: '指定路线'}
                    ,{field: 'createDate',width:150, title: '创建时间'}
                    ,{field: 'createPerson',width:120, title: '创建人'}
                ]]
            });
        }
    });
            table.render({
                elem: '#numberInfo'
                ,height: 300
                ,url:'/demo/table/user/'
                ,cols: [[ //表头
                    {type:'numbers', width:80,title: '序号'}
                    ,{field: 'useStatus',width:100, title: '使用状态'}
                    ,{field: 'startOdd',width:100, title: '起始单号'}
                    ,{field: 'endOdd',width:100, title: '终止单号'}
                    ,{field: 'sumCopies',width:100, title: '总份数'}
                    ,{field: 'useCopies',width:100, title: '使用份数'}
                    ,{field: 'obsoleteCopies',width:100, title: '作废份数'}
                    ,{field: 'newestOdd',width:150, title: '最新申请单号'}
                    ,{field: 'newestTime',width:150, title: '最新申请时间'}
                    ,{field: 'errorInfo',width:130, title: '最新申请人'}
                    ,{field: 'createDate',width:150, title: '创建时间'}
                    ,{field: 'createPerson',width:100, title: '创建人'}
                    ,{field: 'alterDate',width:150, title: '修改时间'}
                    ,{field: 'alterPerson',width:120, title: '修改人'}
                ]]
            });
            table.render({
                elem: '#useInfo'
               ,height: 300
                ,url:'/demo/table/user/'
                ,cols: [[ //表头
                    {field: 'id', width:80,title: '序号'}
                    ,{field: 'username',width:80, title: '操作'}
                    ,{field: 'branch',width:80, title: '网点'}
                    ,{field: 'client',width:80, title: '客户'}
                    ,{field: 'courseRace',width:130, title: '指定路线'}
                    ,{field: 'createDate',width:150, title: '创建时间'}
                    ,{field: 'createPerson',width:120, title: '创建人'}
                ]]
            });

})

