layui.use(['laydate', 'laypage', 'layer', 'table','form','jquery'], function(){
    var laydate = layui.laydate //日期
        ,laypage = layui.laypage //分页
        ,layer = layui.layer //弹层
        ,table = layui.table //表格
        ,form = layui.form
        ,$ =layui.jquery;//表格
    //执行一个 table 实例
    table.render({
        elem: '#errorInfo'
        ,height: 500 ,cellMinWidth: 120
        ,toolbar: 'default' //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
        ,totalRow: true //开启合计行
        ,url: 'http://127.0.0.1:8080/boycottGoods/findBoycottGoods' //数据接口
        ,title: '错误信息表'
        ,cols: [[ //表头
            {field:'',type : 'radio'}
            ,{field: 'affiliatedBranches', title: '所属网点'}
            ,{field: 'assRoute', title: '指定路线'}
            ,{field: 'chineseDes', title: '目的地'}
            ,{field: 'receipt', title: '收件邮编'}
            ,{field: 'shiRoute', title: '走货路线'}
            ,{field: 'createPerson', title: '创建人'}
            ,{field: 'createDate', title: '创建时间'}
            ,{field: 'alterDate', title: '修改时间'}
            ,{field: 'alterPerson', title: '修改人'}
        ]]
        ,id:"testReload"
    });
    $.post('http://127.0.0.1:8080/boycottGoods/findBranch',function(result){
        var branch = eval(result);
        $("#affiliatedBranches").append("<option value=''>请选择</option>");
        $(branch).each(function(){
            $("#affiliatedBranches").append("<option value='"+this.branchCoding+"'>"+this.branchName+"</option>");
            form.render('select');
        })
    });

    form.on('submit(formDemo)', function(data) {
        table.reload('testReload', {
            where : {
                affiliatedBranches:$("#affiliatedBranches").val(),
                assRoute:$("#assRoute").val(),
                shiRoute:$("#shiRoute").val(),
                chineseDes:$("#chineseDes").val()
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
                    content : 'updateDeliveryStrategy.html',
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
                        $.post( 'http://127.0.0.1:8080/boycottGoods/delBoycottGoods',data[0],function (result) {
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
