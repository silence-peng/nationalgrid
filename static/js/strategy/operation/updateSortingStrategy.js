var uid;
function getid(id){
    uid= id;
    layui.use([ 'layer','form','jquery'], function(){
        var layer = layui.layer
            ,form = layui.form
            ,$ =layui.jquery;
        $("input[name='id']").val(uid);
        $.post('http://127.0.0.1:8080/boycottGoods/findBranch',function(result){
            var branch = eval(result);
            $("select[name='affiliatedBranches']").append("<option value=''>请选择</option>");
            $(branch).each(function(){
                $("select[name='affiliatedBranches']").append("<option value='"+this.branchCoding+"'>"+this.branchName+"</option>");
                form.render('select');
            });
            console.log(uid);
            $.ajax({
                url:'http://127.0.0.1:8080/sorting/findSortingOne'
                ,type:'post'
                ,data:{id:uid}
                ,dataType:'json'
                ,success:function(e){
                    if(e.isStartUsing==1){
                        $("input[type='checkbox']").prop("checked",true);
                    }else{
                        $("input[type='checkbox']").prop("checked",false);
                    }
                    form.val("formTest",e);

                }
            })
        });
        $.post('http://127.0.0.1:8080/sorting/findAssRoute',function(result){
            var branch = eval(result);
            $("select[name='assRoute']").append("<option value=''>请选择</option>");
            $(branch).each(function(){
                $("select[name='assRoute']").append("<option value='"+this.name+"'>"+this.name+"</option>");
                form.render('select');
            })
        });
        $.post('http://127.0.0.1:8080/sorting/findshipRoute',function(result){
            var branch = eval(result);
            $("select[name='shipRoute']").append("<option value=''>请选择</option>");
            $(branch).each(function(){
                $("select[name='shipRoute']").append("<option value='"+this.name+"'>"+this.name+"</option>");
                form.render('select');
            })
        });
        $.post('http://127.0.0.1:8080/sorting/findCustomsClearance',function(result){
            var branch = eval(result);
            $("select[name='clearanceId']").append("<option value=''>请选择</option>");
            $(branch).each(function(){
                $("select[name='clearanceId']").append("<option value='"+this.id+"'>"+this.customsWay+"</option>");
                form.render('select');
            })
        });
        $.post('http://127.0.0.1:8080/sorting/findCustomer',function(result){
            var branch = eval(result);
            $("select[name='customer']").append("<option value=''>请选择</option>");
            $(branch).each(function(){
                $("select[name='customer']").append("<option value='"+this.name+"'>"+this.name+"</option>");
                form.render('select');
            })
        });
        $.post('http://127.0.0.1:8080/sorting/findCargoType',function(result){
            var branch = eval(result);
            $("select[name='cargoTypeId']").append("<option value=''>请选择</option>");
            $(branch).each(function(){
                $("select[name='cargoTypeId']").append("<option value='"+this.id+"'>"+this.cargoType+"</option>");
                form.render('select');
            })
        });
        form.on('submit(formDemo)', function(data) {
            if ($("input[type='checkbox']").prop('checked')) {
                $("input[name='isStartUsing']").val(1);
            } else {
                $("input[name='isStartUsing']").val(0);
            }
            var param = $("form").serialize();
            $.ajax({
                url:"http://127.0.0.1:8080/sorting/updSorting",
                type:"post",
                data:param,
                dataType:"text",
                success:function(result){
                    if(result){
                        layer.msg('修改成功！');
                    }else{
                        layer.msg('修改失败！');
                    }
                }
            });
            return false;
        });
    });
}
/*关闭弹出框口*/
function x_admin_close() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}