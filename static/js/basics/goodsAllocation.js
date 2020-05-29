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
        console.log(url);
        if(url == "addGoodsAllocation.html"){
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
        if(url == "updateGoodsAllocation.html"){
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
            , {field: 'username', title: '货位编码'}
            , {field: 'sex', title: '货位类型'}
            , {field: 'city', title: '所属网点'}
            , {field: 'sign', title: '备注'}
            , {field: 'wealth', title: '创建人'}
            , {field: 'wealth', title: '创建时间'}
            , {field: 'wealth', title: '修改时间'}
            , {field: 'wealth', title: '修改人'}
        ]]
    });

})