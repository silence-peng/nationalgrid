layui.use(['laydate', 'laypage', 'layer', 'table','form','jquery'], function(){
    var laydate = layui.laydate //日期
        ,laypage = layui.laypage //分页
        ,layer = layui.layer //弹层
        ,table = layui.table //表格
        ,form = layui.form
        ,$ = layui.jquery;//表格

    $.post('http://127.0.0.1:8080/sorting/findCustomer',function(result){
        var branch = eval(result);
        $("select[name='customer']").append("<option value=''>请选择</option>");
        $(branch).each(function(){
            $("select[name='customer']").append("<option value='"+this.name+"'>"+this.name+"</option>");
            form.render('select');
        })
    });
    $.post('http://127.0.0.1:8080/sorting/findCargoType',function(result){
        var branch = eval(result);
        $("select[name='cargoTypeId']").append("<option value=''>请选择</option>");
        $(branch).each(function(){
            $("select[name='cargoTypeId']").append("<option value='"+this.id+"'>"+this.cargoType+"</option>");
            form.render('select');
        })
    });

    //执行一个 table 实例
    table.render({
        elem: '#errorInfo'
        ,height: 500 ,cellMinWidth: 120
        ,toolbar: 'default' //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
        ,totalRow: true //开启合计行
        ,url: 'http://127.0.0.1:8080/sorting/findSorting' //数据接口
        ,title: '错误信息表'
        ,cols: [[ //表头
            {type:'nums',width:20}
            ,{field:'',type : 'radio'}
            ,{field: 'isStartUsing', title: '启用',templet:function (d) {
                    return d.isStartUsing==1 ? "<i class='layui-icon layui-icon-ok'></i>" : ""
                }}
            ,{field: 'affiliatedBranches', title: '所属网点'}
            ,{field: 'customer', title: '客户'}
            ,{field: 'shipRoute', title: '走货路线'}
            ,{field: 'chineseDes', title: '目的地'}
            ,{field: 'clearanceId', title: '报关类型'}
            ,{field: 'cargoTypeId', title: '货物类型'}
            ,{field: 'sortingMouth', title: '分拣卡口'}
            ,{field: 'sortingYards', title: '分拣码'}
        ]],
        id:'testReload'
        ,done:function (res, curr, count) {
            $.ajax({
                url: 'http://127.0.0.1:8080/sorting/findBranch',
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
                url: 'http://127.0.0.1:8080/sorting/findCargoType',
                type: 'post',
                dataType: 'json',  // 请求方式为jsonp
                success: function(result) {
                    for (var i=0;i<count;i++){
                        const el=$('.layui-table-main').find("tr[data-index="+i+"] td[data-field='cargoTypeId']").children();
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

    form.on('submit(formDemo)', function(data) {
        table.reload('testReload', {
            where : {
                customer:$("select[name='customer']").val(),
                chineseDes:$("input[name='chineseDes']").val(),
                shipRoute:$("input[name='shipRoute']").val(),
                cargoTypeId:$("select[name='cargoTypeId']").val(),
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
                    content : 'updateSortingStrategy.html',
                    area : [ '600px', '500px' ],
                    shade : 0,
                    title : '修改货位',
                    success : function(layero, index) {
                        var iframe = window['layui-layer-iframe' + index];
                        console.log(data);
                        console.log(data[0].id);
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
                        $.post( 'http://127.0.0.1:8080/sorting/delSorting',data[0],function (result) {
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
