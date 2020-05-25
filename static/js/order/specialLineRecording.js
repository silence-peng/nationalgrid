
var renderForm;
layui.use(['laydate' ,'layer', 'table', 'jquery', 'form'], function(){
    var laydate = layui.laydate //日期
        ,layer = layui.layer //弹层
        ,table = layui.table
        ,$=layui.jquery,//表格
        form=layui.form;
    $(".choiceReceipt").click(function () {
        var customer=$("#customerName").val();
        if (customer!==null&&customer!==''){
            WeAdminShow('选择收件人','addressee.html',1000,400);
        }else{
            layer.msg("请先选择客户");
            $("#customerName").focus();
        }
    });
    renderForm=function (obj) {
        form.val('record',JSON.parse(JSON.stringify(obj)));
    }
    table.render({
        elem: '#orderInfo'
        ,cellMinWidth: 80
        ,totalRow: true //开启合计行
        ,id:"grid"
        ,toolbar: '#toolbarDemo'
        ,cols: [[
            {type:'numbers',title:"序号"}
            ,{title: '',align:'center', toolbar: '#rowDemo',edit:'text'}
            ,{field:'chineseName', title:'中文品名',edit: 'text'}
            ,{field:'englishName', title:'英文品名',edit: 'text' }
            ,{field:'goodsNumber', title:'件数',edit: 'text',totalRow: true}
            ,{field:'rw', title:'实重',edit: 'text',totalRow: true }
            ,{field:'long', title:'长(cm)',edit:'text'}
            ,{field:'wide', title:'宽(cm)',edit:'text'}
            ,{field:'height', title:'高(cm)',edit:'text'}
            ,{field:'volume', title:'体积(m³)',totalRow: true}
            ,{field:'num', title:'数量',edit:'text'}
            ,{field:'price', title:'单价',edit:'text'}
            ,{field:'prices', title:'总价',totalRow: true}
            ,{field:'customsCode', title:'海关编码'}
        ]],data:[{
            "chineseName": ""
            ,"englishName": ""
            ,"goodsNumber": "1"
            ,"rw": "0.00"
            ,"long": "0.0"
            ,"wide": "0.0"
            ,"height": "0.0"
            ,"volume": "0.00"
            ,"num": "1"
            ,"price": "0.00"
            ,"prices": "0.00"
            ,"customsCode": ""
        }],done: function(res, curr, count){
            //如果是异步请求数据方式，res即为你接口返回的信息。
            //如果是直接赋值的方式，res即为：{data: [], count: 99} data为当前页数据、count为数据总长度
            tabledata = res.data;
            //去掉下拉框的失焦事件 否则在下拉框里输入值 失焦后变回下拉选项里的值了 没有需要的同学忽略掉即可

            $('tr').each(function(e){
                var $cr=$(this);
                var dataindex = $cr.attr("data-index");
            });


            var long = $('.layui-table-main').find("td[data-field='long']");
            var wide = $('.layui-table-main').find("td[data-field='wide']");
            var height = $('.layui-table-main').find("td[data-field='height']");
            var num = $('.layui-table-main').find("td[data-field='num']");
            var price = $('.layui-table-main').find("td[data-field='price']");
            var goodsNumber = $('.layui-table-main').find("td[data-field='goodsNumber']");
            var rw = $('.layui-table-main').find("td[data-field='rw']");

            long.on("input",function(e){
                var $cr=$(e.target);
                var dataindex = $cr.parents('tr').attr("data-index");
                var wide = $('.layui-table-main').find("tr[data-index="+dataindex+"] td[data-field='wide']").children().html();
                var height = $('.layui-table-main').find("tr[data-index="+dataindex+"] td[data-field='height']").children().html();
                var goodsNumber = $('.layui-table-main').find("tr[data-index="+dataindex+"] td[data-field='goodsNumber']").children().html();
                var sub = ((wide/100)*(height/100)*(e.target.value/100))*goodsNumber;
                $cr.parents('tr').find("td[data-field='volume']").children().html(sub);

                $.each(tabledata,function(index,value){
                    if(value.LAY_TABLE_INDEX==dataindex){
                        tabledata[index].long=e.target.value;
                        tabledata[index].volume=sub;
                    }

                });
                setTimeout(function(){table.reload('grid', {})},2000);

            });
            rw.on("input",function(e){
                var $cr=$(e.target);
                var dataindex = $cr.parents('tr').attr("data-index");
                $cr.parents('tr').find("td[data-field='rw']").children().html(e.target.value);
                $.each(tabledata,function(index,value){
                    if(value.LAY_TABLE_INDEX==dataindex){
                        tabledata[index].rw=e.target.value;
                    }

                }); setTimeout(function(){table.reload('grid', {})},2000);


            });
            goodsNumber.on("input",function(e){
                var $cr=$(e.target);
                var dataindex = $cr.parents('tr').attr("data-index");
                var wide = $('.layui-table-main').find("tr[data-index="+dataindex+"] td[data-field='wide']").children().html();
                var height = $('.layui-table-main').find("tr[data-index="+dataindex+"] td[data-field='height']").children().html();
                var long = $('.layui-table-main').find("tr[data-index="+dataindex+"] td[data-field='long']").children().html();
                var sub = ((wide/100)*(height/100)*(long/100))*e.target.value;
                $cr.parents('tr').find("td[data-field='volume']").children().html(sub);
                $.each(tabledata,function(index,value){
                    if(value.LAY_TABLE_INDEX==dataindex){
                        tabledata[index].goodsNumber=e.target.value;
                        tabledata[index].volume=sub;
                    }

                }); setTimeout(function(){table.reload('grid', {})},2000);

            });
            wide.on("input",function(e){
                var $cr=$(e.target);
                var dataindex = $cr.parents('tr').attr("data-index");
                var goodsNumber = $('.layui-table-main').find("tr[data-index="+dataindex+"] td[data-field='goodsNumber']").children().html();
                var long = $('.layui-table-main').find("tr[data-index="+dataindex+"] td[data-field='long']").children().html();
                var height = $('.layui-table-main').find("tr[data-index="+dataindex+"] td[data-field='height']").children().html();
                var sub = ((long/100)*(height/100)*(e.target.value/100))*goodsNumber;
                $cr.parents('tr').find("td[data-field='volume']").children().html(sub);

                $.each(tabledata,function(index,value){
                    if(value.LAY_TABLE_INDEX==dataindex){
                        value.wide=e.target.value;
                        value.volume=sub;
                    }

                }); setTimeout(function(){table.reload('grid', {})},2000);

            });
            height.on("input",function(e){
                var $cr=$(e.target);
                var dataindex = $cr.parents('tr').attr("data-index");
                var goodsNumber = $('.layui-table-main').find("tr[data-index="+dataindex+"] td[data-field='goodsNumber']").children().html();
                var long = $('.layui-table-main').find("tr[data-index="+dataindex+"] td[data-field='long']").children().html();
                var wide = $('.layui-table-main').find("tr[data-index="+dataindex+"] td[data-field='wide']").children().html();
                var sub =( (long/100)*(wide/100)*e.target.value/100)*goodsNumber;
                $cr.parents('tr').find("td[data-field='volume']").children().html(sub);

                $.each(tabledata,function(index,value){
                    if(value.LAY_TABLE_INDEX==dataindex){
                        value.height=e.target.value;
                        value.volume=sub;
                    }
                }); setTimeout(function(){table.reload('grid', {})},2000);
            });
            num.on("input", function (e) {
                var $cr = $(e.target);
                var dataindex = $cr.parents('tr').attr("data-index");
                var price = $('.layui-table-main').find("tr[data-index=" + dataindex + "] td[data-field='price']").children().html();
                var prices = price * e.target.value;
                $cr.parents('tr').find("td[data-field='prices']").children().html(prices);
                $.each(tabledata, function (index, value) {
                    if (value.LAY_TABLE_INDEX == dataindex) {
                        value.num = e.target.value;
                        value.prices = prices;
                    }
                }); setTimeout(function(){table.reload('grid', {})},2000);
            });
            price.on("input", function (e) {
                var $cr = $(e.target);
                var dataindex = $cr.parents('tr').attr("data-index");
                var num = $('.layui-table-main').find("tr[data-index=" + dataindex + "] td[data-field='num']").children().html();
                var prices = num * e.target.value;
                $cr.parents('tr').find("td[data-field='prices']").children().html(prices);
                $.each(tabledata, function (index, value) {
                    if (value.LAY_TABLE_INDEX == dataindex) {
                        value.price = e.target.value;
                        value.prices = prices;
                    }
                });
                setTimeout(function(){table.reload('grid', {})},2000);
            });

        }
    });
    var tabledata;
    //头工具栏添加按钮事件
    table.on('toolbar(orderInfo)', function(obj){
        if(obj.event === 'add'){
            tabledata.push({  "nw": "0"
                ,"long": "0"
                ,"wide": "0"
                ,"height": "0"
                ,"divided": "500"
                ,"weight": ""
                ,"cw": "0"
                ,"minimumWeight": ""
                ,"packingCost": "0"
                ,"currency": "CNY"
            });

            table.reload('grid', {
                data: tabledata
            });

        };
    });
    table.on('tool(orderInfo)', function(obj){
            if(obj.event === 'del'){
                obj.del();
            };
        }
    );


});
