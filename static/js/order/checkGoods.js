layui.use(['table','form','jquery'], function(){
    var $ = layui.jquery
        ,table = layui.table
        ,form=layui.form; //Tab的切换功能，切换事件监听等，需要依赖element模块

    table.render({
        elem: '#orderInfo'
        ,url:"res"
        ,id:"grid"
        ,height:400
        ,cols: [[
            {type:'numbers',title:"序号"}
            ,{title: '',align:'center', toolbar: '#rowDemo'}
            ,{field:'nw', title:'运单号码'}
            ,{field:'nw', title:'参考编号'}
            ,{field:'nw', title:'问题状态'}
            ,{field:'nw', title:'问题描述'}
            ,{field:'nw', title:'件数'}
            ,{field:'nw', title:'货物类型'}
            ,{field:'nw', title:'中文品名'}

        ]]
    });
});