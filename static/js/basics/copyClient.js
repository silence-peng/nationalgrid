

var renderForm;
layui.use(['laydate' ,'layer', 'table', 'jquery', 'form','upload'], function(){
    var laydate = layui.laydate //日期
        ,layer = layui.layer //弹层
        ,table = layui.table
        ,$=layui.jquery,//表格
        upload = layui.upload,
        form=layui.form;

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
            ,{title: '',align:'center', toolbar: '#rowDemo',edit:'text'}
            ,{field:'chineseName', title:'联系人',edit: 'text'}
            ,{field:'englishName', title:'部门',edit: 'text' }
            ,{field:'goodsNumber', title:'业务电话',edit: 'text'}
            ,{field:'rw', title:'业务手机',edit: 'text' }
            ,{field:'long', title:'传真',edit:'text'}
            ,{field:'wide', title:'邮箱地址',edit:'text'}
            ,{field:'wide', title:'QQ',edit:'text'}
            ,{field:'height', title:'备注',edit:'text'}
        ]],data:[{
            "chineseName": ""
            ,"englishName": ""
            ,"goodsNumber": ""
            ,"rw": ""
            ,"long": ""
            ,"wide": ""
            ,"height": ""
        }],done: function(res, curr, count){
            //如果是异步请求数据方式，res即为你接口返回的信息。
            //如果是直接赋值的方式，res即为：{data: [], count: 99} data为当前页数据、count为数据总长度
            tabledata = res.data;
            //去掉下拉框的失焦事件 否则在下拉框里输入值 失焦后变回下拉选项里的值了 没有需要的同学忽略掉即可

            $('tr').each(function(e){
                var $cr=$(this);
                var dataindex = $cr.attr("data-index");
            });




        }
    });
    var tabledata;
    //头工具栏添加按钮事件
    table.on('toolbar(orderInfo)', function(obj){
        if(obj.event === 'add'){
            tabledata.push({  "nw": ""
                ,"long": ""
                ,"wide": ""
                ,"height": ""
                ,"divided": ""
                ,"weight": ""
                ,"cw": ""
                ,"minimumWeight": ""
                ,"packingCost": ""
                ,"currency": ""
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
        var uploadInst = upload.render({
            elem: '#sc' //绑定元素
            ,url: '/upload/' //上传接口
            ,done: function(res){
                //上传完毕回调
            }
            ,error: function(){
                //请求异常回调
            }
        });

});
