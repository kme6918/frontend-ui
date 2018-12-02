$(document).ready(function(){
    /* Mouse Over Event를 통해서 setInterval()을 제어한다! */
    $("#slider ul li.item:gt(0)").hide();

    //너무 기니까 함수로 만들어주긔
    var fading;
    function start(){
        fading = setInterval(function(){
            $("#slider ul li.item:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slider ul");  //메서드 체이닝
        }, 2000);    
    };

    function stop () {
        clearInterval(fading);
    };

    start();

    $("#slider").hover(function(){
        console.log("Mouse In");
        stop();
    }, function(){
        //마우스 아웃했을 때 실행할 것을 넣어줌
        console.log("Mouse Out");
        start();
    });
});