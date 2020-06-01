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
        if(url == "addSender.html"){
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
        if(url == "updateSender.html"){
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
            , {field: 'id', title: '寄件公司'}
            , {field: 'username', title: '寄件人'}
            , {field: 'sex', title: '启用'    }
            , {field: 'city', title: '寄件电话'}
            , {field: 'sign', title: '寄件地址'}
            , {field: 'experience', title: '寄件地址2'}
            , {field: 'score', title: '寄件地址3'}
            , {field: 'classify', title: '寄件国家'}
            , {field: 'wealth', title: '寄件洲/省'}
            , {field: 'wealth', title: '寄件城市'}
            , {field: 'wealth', title: '寄件邮编'}
            , {field: 'wealth', title: '所属客户'}
            , {field: 'wealth', title: '所属网点'}
            , {field: 'wealth', title: '修改时间'}
            , {field: 'wealth', title: '修改人'}
        ]]
    });

})