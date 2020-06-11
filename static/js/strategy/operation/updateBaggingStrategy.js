var uid;
function getid(id){
    uid= id;
    layui.use([ 'layer','form','jquery'], function(){
        var layer = layui.layer
            ,form = layui.form
            ,$ =layui.jquery;
        $("input[name='id']").val(uid);
        $.post('http://127.0.0.1:8080/bagging/findBranch',function(result){
            var branch = eval(result);
            $("select[name='affiliatedBranches']").append("<option value=''>请选择</option>");
            $(branch).each(function(){
                $("select[name='affiliatedBranches']").append("<option value='"+this.branchCoding+"'>"+this.branchName+"</option>");
                form.render('select');
            });
            console.log(uid);
            $.ajax({
                url:'http://127.0.0.1:8080/bagging/findBaggingOne'
                ,type:'post'
                ,data:{id:uid}
                ,dataType:'json'
                ,success:function(e){
                    if(e.isStartUsing==1){
                        $("input[type='checkbox']").prop("checked",true);
                    }else{
                        $("input[type='checkbox']").prop("checked",false);
                    }
                    var str = e.baggingRule;
                    var arr=new Array();
                    arr=str.split('+');
                    for(var i=0;i<arr.length;i++)
                    {
                        $("select[name='rOne']").val(arr[0]);
                        $("input[name='rTwo']").val(arr[1]);
                        $("select[name='rThree']").val(arr[2]);
                        $("input[name='rFour']").val(arr[3]);
                        $("select[name='rFive']").val(arr[4]);
                    }
                    form.val("formTest",e);

                }
            })
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
                url:"http://127.0.0.1:8080/bagging/updBagging",
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