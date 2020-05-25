layui.use(['element','jquery','table','layer'], function() {
    var table = layui.table
        , $ = layui.jquery
        , layer = layui.layer;

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

})