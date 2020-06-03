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
        ,url: 'issueStatus/getIssueStatus' //数据接口
        ,title: '问题状态表'
        ,cols: [[ //表头
            {type:'numbers',title:"序号"}
            , {field: 'issueCoding', title: '问题编码'}
            , {field: 'issueName', title: '问题名称'}
            , {field: 'isStartUsing', title: '启用',templet: function (item) {
                    if (item.isStartUsing == 1) {
                        return "未启用";
                    } else if (item.isStartUsing ==2) {
                        return "已启用";
                    }
                }}
            , {field: 'problemTypes', title: '问题大类',templet: function (item) {
                    if (item.problemTypes == 1) {
                        return "港前问题件";
                    } else if (item.problemTypes ==2) {
                        return "港后问题件";
                    }
                }}
            , {field: 'issueTypeId', title: '问题类型'}
            , {field: 'chineseRemark', title: '简体备注'}
            , {field: 'englishRemark', title: '英文备注'}
            , {field: 'informPost', title: '通知岗位'}
            , {field: 'roleList', title: '指定处理岗位'}
            , {field: 'consigneeIssue', title: '收件标识问题'}
            , {field: 'playSingleIssue', title: '打单标识问题件'}
            , {field: 'needReply', title: '需要回复'}
            , {field: 'visual', title: '客户可视'}
            , {field: 'sortOrder', title: '排列顺序'}
            ,{field: 'createDate', title: '建立时间'}
            ,{field: 'createPerson', title: '建立人'}
            ,{field: 'alterDate', title: '修改时间'}
            ,{field: 'alterPerson', title: '修改人'}
        ]]
        ,page: true
    });
    table.reload('problem', {
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
    });
})

