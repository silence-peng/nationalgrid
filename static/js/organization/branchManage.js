layui.use(['element','jquery','table','layer'], function() {
    var table = layui.table
        , $ = layui.jquery
        , layer = layui.layer;

    table.render({
        elem: '#test'
        ,id:'testReload'
        ,height: 450
        , url: 'http://127.0.0.1:8080/problemstate/getIssueStaus'
        ,title: '网点管理表'
        ,type:'get'
        ,dataType:'json'
        ,crossDomain:true
        , cols: [[
            {type: 'checkbox'}
            , {field: 'id', title: '网点名称',width:130}
            , {field: 'username', title: '网点编码',width:130}
            , {field: 'sex', title: '启用',width:80}
            , {field: 'city', title: '网点简码',width:130}
            , {field: 'sign', title: '网点类型',width:130}
            , {field: 'experience', title: '网点简体',width:130}
            , {field: 'score', title: '网点英文',width:130}
            , {field: 'classify', title: '所属国家',width:130}
            , {field: 'wealth', title: '所属洲/省',width:130}
            , {field: 'wealth', title: '所属城市',width:130}
            , {field: 'wealth', title: '本位币',width:130}
            , {field: 'wealth', title: '委托录单网点',width:180}
            , {field: 'wealth', title: '负责人',width:100}
            , {field: 'wealth', title: '负责人电话',width:150}
            , {field: 'wealth', title: '经理',width:80}
            , {field: 'wealth', title: '经理电话',width:130}
            , {field: 'wealth', title: '投诉电话',width:130}
            , {field: 'wealth', title: '内部电话',width:130}
            , {field: 'wealth', title: '客服',width:80}
            , {field: 'wealth', title: '客服传真',width:130}
            , {field: 'wealth', title: '客服电话',width:130}
            , {field: 'wealth', title: '对账员',width:120}
            , {field: 'wealth', title: '备注',width:80}
            , {field: 'wealth', title: '创建时间',width:180}
            , {field: 'wealth', title: '创建人',width:100}
            , {field: 'wealth', title: '修改时间',width:180}
            , {field: 'wealth', title: '修改人',width:100}
        ]]
    });

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

})