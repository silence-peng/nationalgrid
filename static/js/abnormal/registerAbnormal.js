layui.use(['jquery','table','layer','upload'],function () {
    const $=layui.jquery
        ,table=layui.table
        ,layer=layui.layer
        ,upload = layui.upload;
    upload.render({
        elem: '#test3'
        ,url: '' //改成您自己的上传接口
        ,accept: 'file' //普通文件
        ,done: function(res){
            layer.msg('上传成功');
            console.log(res);
        }
    });
    table.render({
        elem: '#chargeInfo'
        ,page: true //开启分页
        ,url: 'test' //数据接口
        ,title: '错误信息表'
        ,toolbar: 'default' //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
        ,cols: [[ //表头
            {field: 'orderstatus', title: '处理状态'}
            ,{field: 'num', title: '运单号码'}
            ,{field: 'orderNum', title: '转单号吗'}
            ,{field: 'orderNum', title: '问题状态'}
            ,{field: 'orderNum', title: '问题描述'}
            ,{field: 'orderNum', title: '处理网点'}
            ,{field: 'orderNum', title: '问题件通知人'}
            ,{field: 'orderNum', title: '截止处理时间'}
            ,{field: 'orderNum', title: '登记网点'}
            ,{field: 'orderNum', title: '登记人'}
        ]]
    });
});