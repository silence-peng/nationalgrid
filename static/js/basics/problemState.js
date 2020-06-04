layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element', 'slider','jquery','form'], function() {
    var laydate = layui.laydate //日期
        , laypage = layui.laypage //分页
        , layer = layui.layer //弹层
        , table = layui.table //表格
        , carousel = layui.carousel //轮播
        , upload = layui.upload //上传
        , element = layui.element //元素操作
        , jquery = layui.jquery
        , form = layui.form
        , slider = layui.slider; //滑块//执行一个laydate实例

    //执行一个 table 实例
    table.render({
        elem: '#problem'
        ,height: 450
        ,url: 'http://127.0.0.1:8080/problemstate/getIssueStaus' //数据接口
        ,title: '问题状态表'
        ,type:'get'
        ,dataType:'json'
        ,crossDomain:true
        ,cols: [[ //表头
            {type:'numbers',title:"序号"}
            , {field: 'issueCoding', title: '问题编码',width:130}
            , {field: 'issueName', title: '问题名称',width:130}
            , {field: 'isStartUsing', title: '启用',width:80,templet: function (item) {
                    if (item.isStartUsing == 1) {
                        return "未启用";
                    } else if (item.isStartUsing ==2) {
                        return "已启用";
                    }
                }}
            , {field: 'problemTypes', title: '问题大类',width:150,templet: function (item) {
                    if (item.problemTypes == 1) {
                        return "港前问题件";
                    } else if (item.problemTypes ==2) {
                        return "港后问题件";
                    }
                }}
            , {field: 'problemTypesName',width:130, title: '问题类型'}
            , {field: 'chineseRemark',width:130, title: '简体备注'}
            , {field: 'englishRemark',width:130, title: '英文备注'}
            , {field: 'informPost',width:130, title: '通知岗位'}
            , {field: 'roleList',width:150, title: '指定处理岗位'}
            , {field: 'consigneeIssue',width:150, title: '收件标识问题'}
            , {field: 'playSingleIssue',width:150, title: '打单标识问题件'}
            , {field: 'needReply',width:130, title: '需要回复'}
            , {field: 'visual',width:130, title: '客户可视'}
            , {field: 'sortOrder',width:130, title: '排列顺序'}
            ,{field: 'createDate',width:170, title: '建立时间'}
            ,{field: 'createPerson',width:130, title: '建立人'}
            ,{field: 'alterDate',width:170, title: '修改时间'}
            ,{field: 'alterPerson',width:130, title: '修改人'}
        ]]
        ,page: true
    });
   /* table.reload('problem', {
        where: { //设定异步数据接口的额外参数，任意设
            issueCoding: $("#issueCoding").val()
            ,issueTypeId: $("#issueTypeId").val()
            ,problemTypes: $("#problemTypes").val()
            ,issueName: $("#issueName").val()
            ,isStartUsing: $("#isStartUsing").val()
            //…
        }
        ,page: {
            curr: 1 //重新从第 1 页开始
        }
    });*/
})

function getIssueType() {
    $.ajax({
        url: 'http://127.0.0.1:8080/problemstate/getIssueType',
        success: function (res) {
            if (res.success) {
                for (var i = 0; i < res.length; i++) {
                    $("#issueTypeId").append("<option value=\"" + res.data[i].id + "\">" + res.data[i].alterPerson + "</option>");
                }

                //重新渲染
                layui.form.render("select");
            } else {
                layer.msg(res.message);
            }
        }
    })

}