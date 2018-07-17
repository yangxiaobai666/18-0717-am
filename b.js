define(["banner","tab","topBar"],function(banner,tab,topBar){
    document.onclick = function(){
        banner();
    }
    document.onmousemove = function(){
        tab();
    }
    topBar();   //页面加载完成后，首先执行这个功能；

})