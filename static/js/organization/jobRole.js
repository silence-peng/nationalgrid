layui.use(['element','jquery','table','layer','transfer','tree'], function() {
    var table = layui.table
        , $ = layui.jquery
        , layer = layui.layer
        ,transfer =layui.transfer
        ,tree =layui.tree;
    window.WeAdminShow = function(title, url, w, h) {
        if(title == null || title == '') {
            title = false;
        };
        if(url == null || url == '') {
            url = "404.html";
        };
        if(w == null || w == '') {
            w = ($(window).width() * 0.9);
        };
        if(h == null || h == '') {
            h = ($(window).height() - 50);
        };
        if(url == ""){
            layer.open({
                type: 2,
                area: [w + 'px', h + 'px'],
                fix: false, //不固定
                width:w,
                height:h,
                maxmin: true,
                shadeClose: true,
                shade: 0.4,
                title: title,
                content: url
            });
        }
    }
    table.render({
        elem: '#test'
        , url: '/demo/table/user/'
        , cols: [[
            {type: 'checkbox'}
            , {field: 'id', title: '网点名称'}
            , {field: 'username', title: '网点编码'}
            , {field: 'sex', title: '启用'    }
            , {field: 'city', title: '网络简码'}
            , {field: 'sign', title: '网点类型'}
            , {field: 'experience', title: '网点简体'}
            , {field: 'score', title: '网点英文'}
            , {field: 'classify', title: '所属国家'}
            , {field: 'wealth', title: '所属洲/省'}
            , {field: 'wealth', title: '所属城市'}
            , {field: 'wealth', title: '本位币'}
            , {field: 'wealth', title: '委托录单网点'}
            , {field: 'wealth', title: '负责人'}
            , {field: 'wealth', title: '负责人电话'}
            , {field: 'wealth', title: '经理'}
            , {field: 'wealth', title: '经理电话'}
            , {field: 'wealth', title: '投诉电话'}
            , {field: 'wealth', title: '内部电话'}
            , {field: 'wealth', title: '客服'}
            , {field: 'wealth', title: '客服传真'}
            , {field: 'wealth', title: '客服电话'}
            , {field: 'wealth', title: '对账员'}
            , {field: 'wealth', title: '备注'}
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
function x_admin_close() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}