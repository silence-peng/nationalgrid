layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'form', 'jquery'], function(){
    var laydate = layui.laydate //日期
        ,laypage = layui.laypage //分页
        ,layer = layui.layer //弹层
        ,table = layui.table //表格
        ,carousel = layui.carousel //轮播
        ,upload = layui.upload //上传
        ,form = layui.form //元素操作
        ,$ = layui.jquery; //滑块

    laydate.render({
        elem: '#orderDate'
        ,type: 'datetime'
    });laydate.render({
        elem: '#cretedate'
        ,type: 'datetime'
    });
    $("#affiliatedBranches").load('http://127.0.0.1:8080/transboundaryV5/base/loadBranchBasicsInfo',function (result) {
        const data=eval(result);
        $("#affiliatedBranches").append("<option value='0'></option>");
        $(data).each(function (i,o) {
            $("#affiliatedBranches").append("<option value='"+o.branchCoding+"'>"+o.branchName+"</option>")
        });
        form.render("select");
    });
    $("#courseRace").load('http://127.0.0.1:8080/selectAssignRouteAll',function (result) {
        const data=eval(result);
        $("#courseRace").append("<option value='0'></option>");
        $(data).each(function (i,o) {
            $("#courseRace").append("<option value='"+o.id+"'>"+o.name+"</option>")
        });
        form.render("select");
    });
    $("#bourn").load('http://127.0.0.1:8080/selectDestinationManagementAll',function (result) {
        const data=eval(result);
        $("#bourn").append("<option value='0'></option>");
        $(data).each(function (i,o) {
            $("#bourn").append("<option value='"+o.id+"'>"+o.name+"</option>")
        });
        form.render("select");
    });
    $("#orderStatus").load('http://127.0.0.1:8080/transboundaryV5/order/loadOrderStatusInfoSelect',function (result) {
        const data=eval(result);
        $("#orderStatus").append("<option value='0'></option>");
        $(data).each(function (i,o) {
            $("#orderStatus").append("<option value='"+o.id+"'>"+o.state+"</option>")
        });
        form.render("select");
    });
    $("#shipmentRoute").load('http://127.0.0.1:8080/selectShipmentRouteAll',function (result) {
        const data=eval(result);
        $("#shipmentRoute").append("<option value='0'></option>");
        $(data).each(function (i,o) {
            $("#shipmentRoute").append("<option value='"+o.id+"'>"+o.name+"</option>")
        });
        form.render("select");
    });
    //执行一个 table 实例
    table.render({
        elem: '#errorInfo'
        ,id:"render"
        ,height: 400
        ,page: true //开启分页
        ,limits:[5,10]
        ,limit:5
        ,toolbar: 'default' //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
        ,totalRow: true //开启合计行
        ,url: 'http://127.0.0.1:8080/transboundaryV5/order/loadWayBillInfo' //数据接口
        ,title: '错误信息表'
        ,cols: [[ //表头
            {type: 'checkbox'}
            ,{field: 'orderStatus', title: '订单状态',width:120}
            ,{field: 'waybillNumber', title: '运单号码',width:120}
            ,{field: 'participationNumber', title: '参考编号',width:120}
            ,{field: 'trackingNumber', title: '转单号码',width:120}
            ,{field: 'boycottStatus', title: '排货状态',width:120}
            ,{field: 'playSingleStatus ', title: '打单状态',width:120}
            ,{field: 'orderNumberBag', title: '收货袋号',width:120}
            ,{field: 'cretedate', title: '订单日期',width:120}
            ,{field: 'siteId', title: '寄件网点',width:120}
            ,{field: 'clientId', title: '客户编码',width:120}
            ,{field: 'clientId2', title: '客户',width:120}
            ,{field: 'person_name', title: '寄件人',width:120}
            ,{field: 'company', title: '寄件公司',width:120}
            ,{field: 'phone', title: '寄件电话',width:120}
            ,{field: 'postcode', title: '寄件邮编',width:120}
            ,{field: 'courseRace', title: '指定路线',width:120}
            ,{field: 'bourn', title: '目的地编码',width:120}
            ,{field: 'bourn2', title: '目的地',width:120}
            ,{field: 'postcode2', title: '收件邮编',width:120}
            ,{field: 'packagingType', title: '包装类型',width:120}
            ,{field: 'cargoType', title: '货物类型',width:120}
        ]]
        ,done:function (res, curr, count) {
            $.post('http://127.0.0.1:8080/transboundaryV5/order/loadOrderStatusInfoSelect',function (result) {
                for(var i=0;i<count;i++){
                    const el=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='orderStatus']").children();
                    var orderStatus=parseInt(el.html());
                    if (result.length>0){
                        $.each(result,function (i,o) {
                            if (o.id===orderStatus){
                                el.html(o.state)
                            }
                        })
                    }else{
                        el.html("");
                    }
                }
            });
            $.post('http://127.0.0.1:8080/transboundaryV5/base/loadBranchBasicsInfo',function (result) {
                for (var i=0;i<count;i++){
                    const el=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='siteId']").children();
                    var siteId=el.html();
                    if (result.length>0){
                        $.each(result,function (i,o) {
                            if (o.branchCoding===siteId){
                                el.html(o.branchName)
                            }
                        })
                    }else{el.html("")}
                }
            });
            $.post('http://127.0.0.1:8080/transboundaryV5/order/loadBoycottGoodsInfoList',function (result) {
                for(var i=0;i<count;i++){
                    const el=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='waybillNumber']").children();
                    const el2=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='boycottStatus']").children();
                    var waybillNumber=el.html();
                    if (result.length>0){
                        $.each(result,function (i,o) {
                            if (o.waybillNumber===waybillNumber){
                                if (o.boycottStatus===1){
                                    el2.html("代排货");
                                }else if (o.boycottStatus===2){
                                    el2.html("已排货");
                                }
                            }
                        })
                    }else{
                        el2.html("");
                    }
                }
            });
            $.post('http://127.0.0.1:8080/transboundaryV5/order/loadPlaySingleInfo',function (result) {
                for(var i=0;i<count;i++){
                    const el=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='waybillNumber']").children();
                    const el2=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='playSingleStatus']").children();
                    var waybillNumber=el.html();
                    if (result.length>0){
                        $.each(result,function (i,o) {
                            if (o.waybillNumber===waybillNumber){
                                if (o.playSingleStatus===1){
                                    el2.html("待审核");
                                }else if (o.boycottStatus===2){
                                    el2.html("待转单");
                                }else if (o.boycottStatus===3){
                                    el2.html("已审核");
                                }else if (o.boycottStatus===4){
                                    el2.html("已取消");
                                }else if (o.boycottStatus===5){
                                    el2.html("未打单");
                                }else if (o.boycottStatus===6){
                                    el2.html("已打单");
                                }
                            }
                        })
                    }else{
                        el2.html("");
                    }
                }
            });
            $.post('http://127.0.0.1:8080/transboundaryV5/order/loadTwoSidesInfo',function (result) {
                for(var i=0;i<count;i++){
                    const el=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='waybillNumber']").children();
                    const person_name=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='person_name']").children();
                    const company=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='company']").children();
                    const phone=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='phone']").children();
                    const postcode=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='postcode']").children();
                    const postcode2=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='postcode2']").children();
                    var waybillNumber=el.html();
                    if (result.length>0){
                        $.each(result,function (i,o) {
                            if (o.waybillNumber===waybillNumber && o.typeId===1){
                                person_name.html(o.personName);
                                company.html(o.company);
                                phone.html(o.phone);
                                postcode.html(o.postcode);
                            }
                            else if (o.waybillNumber===waybillNumber && o.typeId===2){
                                postcode2.html(o.postcode);
                            }
                        })
                    }else{
                        person_name.html("");
                        company.html("");
                        phone.html("");
                        postcode.html("");
                        postcode2.html("");
                    }
                }
            });
            $.post('http://127.0.0.1:8080/selectAssignRouteAll',function (result) {
                for(var i=0;i<count;i++){
                    const el=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='courseRace']").children();
                    var courseRace=el.html();
                    if (result.length>0){
                        $.each(result,function (i,o) {
                            if (o.id===courseRace){
                                courseRace.html(o.name);
                            }
                        })
                    }else{
                        courseRace.html("");
                    }
                }
            });
            $.post('http://127.0.0.1:8080/selectDestinationManagementAll',function (result) {
                for(var i=0;i<count;i++){
                    const el=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='bourn']").children();
                    const el2=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='bourn2']").children();
                    var bourn=el.html();
                    if (result.length>0){
                        $.each(result,function (i,o) {
                            if (o.code===bourn){
                                el2.html(o.name);
                            }
                        })
                    }else{
                        courseRace.html("");
                    }
                }
            });

            $.post('http://127.0.0.1:8080/transboundaryV5/order/loadBaggingDistributionInfo',function (result) {
                for(var i=0;i<count;i++){
                    const el=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='waybillNumber']").children();
                    const el2=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='orderNumberBag']").children();
                    var waybillNumber=el.html();
                    if (result.length>0){
                        $.each(result,function (i,o) {
                            if (o.waybillNumber===waybillNumber){
                                el2.html(o.orderNumberBag);
                            }
                        })
                    }else{
                        el2.html("");
                    }
                }
            });
            $.post('http://127.0.0.1:8080/transboundaryV5/order/loadCustomerManagement',function (result) {
                for(var i=0;i<count;i++){
                    const el=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='clientId']").children();
                    const el2=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='clientId2']").children();
                    var clientId=el.html();
                    if (result.length>0){
                        $.each(result,function (i,o) {
                            if (o.code===clientId){
                                el2.html(o.name);
                            }
                        })
                    }else{
                        el2.html("");
                    }
                }
            });
        }

    });
    var $ = layui.$, active = {
        getCheckData: function(){ //获取选中数据
            var checkStatus = table.checkStatus('render')
                ,data = checkStatus.data;
            const list=[];
            $.each(data,function (o,i) {
                if (i.orderStatus===18 || i.orderStatus===20){
                   list.push(i.waybill);
                }
            });
            layer.confirm("当前选择订单，可收货订单笔数"+list.length+"笔，确认收货？",function () {
                if (list.length!==0){

                    $.post("http://127.0.0.1:8080/transboundaryV5/order/updWayBillInfo",{codes:list},function (result) {
                        if (result){
                            layer.alert("收货成功！",function () {
                                table.render('render');
                            })
                        }
                    })
                }
            });


        }
        ,getCheckLength: function(){ //获取选中数目
            var checkStatus = table.checkStatus('render')
                ,data = checkStatus.data;
            layer.msg('选中了：'+ data.length + ' 个');
        }
        ,isAll: function(){ //验证是否全选
            var checkStatus = table.checkStatus('idTest');
            layer.msg(checkStatus.isAll ? '全选': '未全选')
        }
    };

    $('.btnArr .layui-btn').on('click', function(){
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
    });
    $(".find").click(function () {
        table.reload('render', {
            page: {
                curr: 1 //重新从第 1 页开始
            }
            ,where: {
                // type=&=&=&=&=0&=&=0&=0&=undefined&=2&dataSources=1
                type:$("#type").val(),
                waybillNumber:$("#waybillNumber").val(),
                number:$("#number").val(),
                startDate:$("#orderDate").val(),
                endDate:$("#cretedate").val(),
                affiliatedBranches:$("#affiliatedBranches").val(),
                customerName:$("#customerName").val(),
                shipmentRace:$("#shipmentRace").val(),
                courseRace:$("#courseRace").val(),
                bourn:$("#bourn").val(),
                orderStatus:$("#orderStatus").val(),
                dataSources:$("#dataSources").val()
            }
        });

    })
});
function getValue(str,name) {
    var code=document.getElementById("customerCode");
    var customerName=document.getElementById("customerName");
    code.value=str;
    customerName.value=name;
}