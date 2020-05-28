layui.use(['element','jquery','table','layer'], function() {
    var table = layui.table
        , $ = layui.jquery
        , layer = layui.layer;

    table.render({
        elem: '#test'
        , url: '/demo/table/user/'
        , cols: [[
            {type: 'number'}
            , {field: 'id', title: '员工编号'}
            , {field: 'username', title: '员工姓名'}
            , {field: 'sex', title: '启用',templet:function (d) {
                    return d.xx ==0 ? "<i class='layui-icon layui-icon-ok'></i>" : ""
                }}
            , {field: '', title: '性别'}
            , {field: 'sign', title: '所属网点'}
            , {field: 'experience', title: '所属部门'}
            , {field: 'score', title: '所在职位'}
            , {field: 'classify', title: '岗位编码'}
            , {field: 'wealth', title: '职位状态'}
            , {field: 'wealth', title: '出生年月'}
            , {field: 'wealth', title: '民族'}
            , {field: 'wealth', title: '籍贯'}
            , {field: 'wealth', title: '身份证号'}
            , {field: 'wealth', title: '手机号'}
            , {field: 'wealth', title: 'Email'}
            , {field: 'wealth', title: '电话'}
            , {field: 'wealth', title: '工作QQ'}
            , {field: 'wealth', title: '家庭电话'}
            , {field: 'wealth', title: '紧急联系人'}
            , {field: 'wealth', title: '联系人关系'}
            , {field: 'wealth', title: '紧急联系人电话'}
            , {field: 'wealth', title: '现居地址'}
            , {field: 'wealth', title: '建立时间'}
            , {field: 'wealth', title: '建立人'}
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