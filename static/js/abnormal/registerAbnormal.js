layui.use(['jquery','table','layer','upload'],function () {
    const $=layui.jquery
        ,table=layui.table
        ,layer=layui.layer
        ,upload = layui.upload;
    upload.render({
        elem: '#test3'
        ,url: 'https://httpbin.org/post' //改成您自己的上传接口
        ,accept: 'file' //普通文件
        ,done: function(res){
            layer.msg('上传成功');
            console.log(res);
        }
    });
});