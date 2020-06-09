layui.use([ 'layer','form','jquery'], function(){
    var layer = layui.layer
        ,form = layui.form
        ,$ =layui.jquery;
    $.post('http://127.0.0.1:8080/bagging/findBranch',function(result){
        var branch = eval(result);
        $("select[name='affiliatedBranches']").append("<option value=''>请选择</option>");
        $(branch).each(function(){
            $("select[name='affiliatedBranches']").append("<option value='"+this.branchCoding+"'>"+this.branchName+"</option>");
            form.render('select');
        });
    });
    $.post('http://127.0.0.1:8080/bagging/findBranch',function(result){
        var branch = eval(result);
        $("select[name='sendASite']").append("<option value=''>请选择</option>");
        $(branch).each(function(){
            $("select[name='sendASite']").append("<option value='"+this.branchCoding+"'>"+this.branchName+"</option>");
            form.render('select');
        });
    });
    $.post('http://127.0.0.1:8080/bagging/findBranch',function(result){
        var branch = eval(result);
        $("select[name='shareBranch']").append("<option value=''>请选择</option>");
        $(branch).each(function(){
            $("select[name='shareBranch']").append("<option value='"+this.branchName+"'>"+this.branchName+"</option>");
            form.render('select');
        });
    });
    $.post('http://127.0.0.1:8080/bagging/findSharingMode',function(result){
        var branch = eval(result);
        $("select[name='sharingMode']").append("<option value=''>请选择</option>");
        $(branch).each(function(){
            $("select[name='sharingMode']").append("<option value='"+this.id+"'>"+this.shareType+"</option>");
            form.render('select');
        });
    });
    $.post('http://127.0.0.1:8080/bagging/findAssRoute',function(result){
        var branch = eval(result);
        $("select[name='assRoute']").append("<option value=''>请选择</option>");
        $(branch).each(function(){
            $("select[name='assRoute']").append("<option value='"+this.name+"'>"+this.name+"</option>");
            form.render('select');
        })
    });
    $.post('http://127.0.0.1:8080/bagging/findshipRoute',function(result){
        var branch = eval(result);
        $("select[name='shipRoute']").append("<option value=''>请选择</option>");
        $(branch).each(function(){
            $("select[name='shipRoute']").append("<option value='"+this.name+"'>"+this.name+"</option>");
            form.render('select');
        })
    });
    $.post('http://127.0.0.1:8080/bagging/findCustomsClearance',function(result){
        var branch = eval(result);
        $("select[name='clearanceId']").append("<option value=''>请选择</option>");
        $(branch).each(function(){
            $("select[name='clearanceId']").append("<option value='"+this.id+"'>"+this.customsWay+"</option>");
            form.render('select');
        })
    });
    $.post('http://127.0.0.1:8080/bagging/findCargoType',function(result){
        var branch = eval(result);
        $("select[name='cargoType']").append("<option value=''>请选择</option>");
        $(branch).each(function(){
            $("select[name='cargoType']").append("<option value='"+this.id+"'>"+this.cargoType+"</option>");
            form.render('select');
        })
    });
    form.on('submit(formDemo)', function(data) {
        if ($("input[type='checkbox']").prop('checked')) {
            $("input[name='isStartUsing']").val(1);
        } else {
            $("input[name='isStartUsing']").val(0);
        }
        var str =  $("select[name='rOne']").val()+"+"+$("input[name='rTwo']").val()+"+"+$("select[name='rThree']").val()+"+"+$("input[name='rFour']").val()+"+"+$("select[name='rFive']").val();
        $("input[name='baggingRule']").val(str);
        var param = $("form").serialize();
        $.ajax({
            url:"http://127.0.0.1:8080/bagging/addBagging",
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
});
/*关闭弹出框口*/
function x_admin_close() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}