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
        if(url == "addPublicReceiver.html"){
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
        if(url == "updatePublicReceiver.html"){
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
            , {field: 'username', title: '发件箱地址'}
            , {field: 'sex', title: '发件箱类型'}
            , {field: 'city', title: '服务器地址'}
            , {field: 'sign', title: '服务器端口'}
            , {field: 'experience', title: '邮件服务器协议'}
            , {field: 'score', title: '用户名'}
            , {field: 'classify', title: '密码'}
            , {field: 'wealth', title: '发送间隔'}
            , {field: 'wealth', title: '首次发送时间'}
            , {field: 'wealth', title: '使用次数'}
            , {field: 'wealth', title: '最后使用时间'}
            , {field: 'wealth', title: '创建人'}
            , {field: 'wealth', title: '创建时间'}
            , {field: 'wealth', title: '修改时间'}
            , {field: 'wealth', title: '修改人'}
        ]]
    });

})