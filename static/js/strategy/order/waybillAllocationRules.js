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
        ,url:'http://127.0.0.1:8080/problemstate/getIssueStaus'
        ,height: 350
        ,cols: [[ //表头
            {field: 'isStartUsing', title: '启用'}
            ,{field: 'ruleCoding', title: '规则编码'}
            ,{field: 'ruleName', title: '规则名称'}
            ,{field: 'oddType', title: '单号类型'}
            ,{field: 'checkType', title: '校验类型'}
            ,{field: 'oddRule', title: '单号规则'}
            ,{field: 'warningNumber', title: '预警份数'}
            ,{field: 'onceMaxCopies', title: '单次最大获取份数'}
            ,{field: 'sumCopies', title: '累计总份数'}
            ,{field: 'usableCopies', title: '累计可用份数'}
            ,{field: 'createDate', title: '创建时间'}
            ,{field: 'createPerson', title: '创建人'}
            ,{field: 'alterDate', title: '修改时间'}
            ,{field: 'alterPerson', title: '修改人'}
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
            ,{field: 'useStatus',width:80, title: '使用状态'}
            ,{field: 'startOdd',width:80, title: '起始单号'}
            ,{field: 'endOdd',width:80, title: '终止单号'}
            ,{field: 'sumSCopies',width:80, title: '总份数'}
            ,{field: 'useCopies',width:80, title: '使用份数'}
            ,{field: 'obsoleteCopies',width:80, title: '作废份数'}
            ,{field: 'newestOdd',width:80, title: '最新申请单号'}
            ,{field: 'newestTime',width:80, title: '最新申请时间'}
            ,{field: 'errorInfo',width:80, title: '最新申请人'}
            ,{field: 'createDate',width:80, title: '创建时间'}
            ,{field: 'createPerson',width:80, title: '创建人'}
            ,{field: 'alterDate',width:80, title: '修改时间'}
            ,{field: 'alterPerson',width:80, title: '修改人'}
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
            ,{field: 'branch',width:80, title: '网点'}
            ,{field: 'client',width:80, title: '客户'}
            ,{field: 'courseRace',width:80, title: '指定路线'}
            ,{field: 'createDate',width:80, title: '创建时间'}
            ,{field: 'createPerson',width:80, title: '创建人'}
        ]]
        ,page:true
    });

})

