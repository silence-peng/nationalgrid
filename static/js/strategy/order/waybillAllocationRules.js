layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element', 'slider','jquery','form'], function() {
    var laydate = layui.laydate //日期
        , laypage = layui.laypage //分页
        , layer = layui.layer //弹层
        , table = layui.table //表格
        , carousel = layui.carousel //轮播
        , upload = layui.upload //上传
        , element = layui.element //元素操作
        , $ = layui.jquery
        , form = layui.form
        , slider = layui.slider; //滑块//执行一个laydate实例

    //执行一个 table 实例
    table.render({
        elem: '#test'
        ,url:'/demo/table/user/'
        ,height: 350
        ,cols: [[ //表头
            {field: 'num', title: '启用'}
            ,{field: 'sortNo', title: '规则编码'}
            ,{field: 'sortNo', title: '规则名称'}
            ,{field: 'orderNum', title: '单号类型'}
            ,{field: 'errorInfo', title: '校验类型'}
            ,{field: 'errorInfo', title: '单号规则'}
            ,{field: 'errorInfo', title: '预警份数'}
            ,{field: 'errorInfo', title: '单次最大获取份数'}
            ,{field: 'errorInfo', title: '累计总份数'}
            ,{field: 'errorInfo', title: '累计可用份数'}
            ,{field: 'errorInfo', title: '创建时间'}
            ,{field: 'errorInfo', title: '创建人'}
            ,{field: 'errorInfo', title: '修改时间'}
            ,{field: 'errorInfo', title: '修改人'}
        ]]
        ,page:true
    });


  table.render({
        elem: '#numberInfo'
        ,url:'/demo/table/user/'
      ,height: 300
        ,cols: [[ //表头
            {field: '序号', width:80,title: '序号'}
            ,{title: '',align:'center',width:80, toolbar: '#rowDemo',edit:'text'}
            ,{field: 'sortNo',width:80, title: '使用状态'}
            ,{field: 'sortNo',width:80, title: '起始单号'}
            ,{field: 'orderNum',width:80, title: '终止单号'}
            ,{field: 'errorInfo',width:80, title: '总份数'}
            ,{field: 'errorInfo',width:80, title: '使用份数'}
            ,{field: 'errorInfo',width:80, title: '作废份数'}
            ,{field: 'errorInfo',width:80, title: '最新申请单号'}
            ,{field: 'errorInfo',width:80, title: '最新申请时间'}
            ,{field: 'errorInfo',width:80, title: '最新申请人'}
            ,{field: 'errorInfo',width:80, title: '创建时间'}
            ,{field: 'errorInfo',width:80, title: '创建人'}
            ,{field: 'errorInfo',width:80, title: '修改时间'}
            ,{field: 'errorInfo',width:80, title: '修改人'}
        ]]
        ,page:true
    });
    table.render({
        elem: '#useInfo'
        ,url:'/test/table/demo1.json'
        ,height: 300
        ,cols: [[ //表头
            {field: 'id', width:80,title: '序号'}
            ,{field: 'username',width:80, title: '操作'}
            ,{field: 'sortNo',width:80, title: '网点'}
            ,{field: 'orderNum',width:80, title: '客户'}
            ,{field: 'errorInfo',width:80, title: '指定路线'}
            ,{field: 'errorInfo',width:80, title: '创建时间'}
            ,{field: 'errorInfo',width:80, title: '创建人'}
        ]]
        ,page:true
    });

})

