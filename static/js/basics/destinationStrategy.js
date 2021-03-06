layui.use(['element','jquery','table','layer','transfer','tree'], function() {
    var table = layui.table
        , $ = layui.jquery
        , layer = layui.layer
        ,transfer =layui.transfer
        ,tree =layui.tree;


    window.member_del = function (obj, id) {
        layer.confirm('确认要删除吗？', function(index) {
            //发异步删除数据
            $(obj).parents("tr").remove();
            layer.msg('已删除!', {
                icon: 1,
                time: 1000
            });
        });
    };

    table.render({
        elem: '#test'
        , url: '/demo/table/user/'
        , cols: [[
            {type: 'checkbox'}
            , {field: 'id', title: '启用'}
            , {field: 'username', title: '目的地分类'}
            , {field: 'sex', title: '国家简码'    }
            , {field: 'city', title: '国家'}
            , {field: 'sign', title: '起始邮编'}
            , {field: 'experience', title: '终止邮编'}
            , {field: 'score', title: '目的地'}
            , {field: 'wealth', title: '创建时间'}
            , {field: 'wealth', title: '创建人'}
            , {field: 'wealth', title: '修改时间'}
            , {field: 'wealth', title: '修改人'}
        ]]
    });

    //模拟数据1
    data1 = [{
        title: '江西'
        ,id: 1
        ,children: [{
            title: '南昌'
            ,id: 1000
            ,children: [{
                title: '青山湖区'
                ,id: 10001
            },{
                title: '高新区'
                ,id: 10002
            }]
        },{
            title: '九江'
            ,id: 1001
        },{
            title: '赣州'
            ,id: 1002
        }]
    }]

    //无连接线风格
    tree.render({
        elem: '#test13'
        ,data: data1
        ,showLine: false  //是否开启连接线
        ,edit: ['add', 'update', 'del'] //操作节点的图标
        ,click: function(obj){
            layer.msg(JSON.stringify(obj.data));
        }
        ,operate: function(obj){
            var type = obj.type; //得到操作类型：add、edit、del
            var data = obj.data; //得到当前节点的数据
            var elem = obj.elem; //得到当前节点元素

            //Ajax 操作
            var id = data.id; //得到节点索引
            if(type === 'add'){ //增加节点
                //返回 key 值
                return 123;
            } else if(type === 'update'){ //修改节点
                console.log(elem.find('.layui-tree-txt').html()); //得到修改后的内容
            } else if(type === 'del'){ //删除节点

            };
        }
    });

})
/*关闭弹出框口*/
/*关闭弹出框口*/
function x_admin_close() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}