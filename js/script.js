(function(){
    document.addEventListener("DOMContentLoaded",function(){
        var bgMenu = document.getElementById('bgMenu');
        console.log(bgMenu);
        var nav = document.querySelectorAll("header>nav>a");
        console.log(nav);
        var count = 0;
        bgMenu.addEventListener('click',function(){
       count++;

       if(count%2==0){
           bgMenu.src='./img/1.png';
           for(var i =0; i < nav.length; i++){
               nav[i].style.display = 'none';
           }


       }
       else if(count%2!=0){
           bgMenu.src='./img/3.png';
           for(var i =0; i < nav.length; i++){
               nav[i].style.display = 'inline-block';
           }

       }

        });
    });
})();