var tabAdd;

layui.use(['jquery'], function(){
    var $ = layui.jquery;
    tabAdd=function(title,url,id){
        var li=parent.getIframeId(id);
        if (li>0){
            parent.layui.element.tabChange('wenav_tab', id);
        }else{
            parent.layui.element.tabAdd('wenav_tab', {
                title: title,
                content: '<iframe tab-id="' + id + '" frameborder="0" src="' + url + '" scrolling="yes" class="weIframe"></iframe>',
                id: id
            });
            var menu = JSON.parse(sessionStorage.getItem('menu'));
            if(menu) {
                var deep = false;
                for(var i = 0; i < menu.length; i++) {
                    if(menu[i].id == id) {
                        deep = true;
                        menu[i].title = title;
                        menu[i].url = url;
                        menu[i].id = id;
                    }
                }
                if(!deep) {
                    menu.push({
                        title: title,
                        url: url,
                        id: id
                    })
                }
            } else {
                var menu = [{
                    title: title,
                    url: url,
                    id: id
                }]
            }
            sessionStorage.setItem('menu', JSON.stringify(menu));
            parent.CustomRightClick(id);
            parent.FrameWH();
            parent.layui.element.tabChange('wenav_tab', id);
        }

    };

});