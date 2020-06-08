layui.use([ 'layer','form','jquery'], function(){
    var layer = layui.layer
        ,form = layui.form
        ,$=layui.jquery;

    $.post('http://127.0.0.1:8080/boycottGoods/findBranch',function(result){
        var branch = eval(result);
        $("select[name='affiliatedBranches']").append("<option value=''>请选择</option>");
        $(branch).each(function(){
            $("select[name='affiliatedBranches']").append("<option value='"+this.branchCoding+"'>"+this.branchName+"</option>");
            form.render('select');
        });
    });
    $.post('http://127.0.0.1:8080/boycottGoods//findAssRoute',function(result){
        var branch = eval(result);
        $("select[name='assRoute']").append("<option value=''>请选择</option>");
        $(branch).each(function(){
            $("select[name='assRoute']").append("<option value='"+this.name+"'>"+this.name+"</option>");
            form.render('select');
        })
    });
    $.post('http://127.0.0.1:8080/boycottGoods/findshipRoute',function(result){
        var branch = eval(result);
        $("select[name='shiRoute']").append("<option value=''>请选择</option>");
        $(branch).each(function(){
            $("select[name='shiRoute']").append("<option value='"+this.name+"'>"+this.name+"</option>");
            form.render('select');
        })
    });
    form.on('submit(formDemo)', function(data) {
        var param = $("form").serialize();
        $.ajax({
            url:"http://127.0.0.1:8080/boycottGoods/addBoycottGoods",
            type:"post",
            data:param,
            dataType:"text",
            success:function(result){
                if(result){
                    layer.msg('添加成功！');
                }else{
                    layer.msg('添加失败！');
                }
            }
        });
        return false;
    });
})
/*关闭弹出框口*/
function x_admin_close() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}