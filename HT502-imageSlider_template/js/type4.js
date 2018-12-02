$(document).ready(function(){
    /* Control Panel */
    /*$(window).resize(() => { //ES2016 최신 자바스크립트 기법 : 함수를 선언하는 모습을 축약. finction()역할인듯. 화살표함수라고 한다. () =>
        resizePanelPosition();
    });*/ //윈도우(브라우저창)가 리사이즈 될 때를 감지해서 resizePanelPosition 함수를 실행시켜라.
    $(window).resize(function(){
        resizePanelPosition();
    });

    function resizePanelPosition(){
        // Control Panel Positioning
        $left = $("#slider .control .left i");
        $right = $("#slider .control .right i");
        $controlPanel = $("#slider .control a");
        $img = $("#slider .item img");

        let imgHeight = $img.height();
        // console.log(imgHeight);
        let adjustPosition = imgHeight - imgHeight / 2;
        // console.log(adjustPosition);
        $controlPanel.css("height", imgHeight + "px");
        $left.css("padding-top", adjustPosition + "px");
        $right.css("padding-top", adjustPosition + "px");

        console.log(".item last", $("#slider ul .item:first").last());
    }

    resizePanelPosition();

    /* Interval Image Slider */
    //Interval Control을 위한 변수
    let sliding;
    
    //0번째 li를 제외한 element를 hide (display:none;)
    $("#slider ul li:gt(0)").hide();

    //next image sliding
    function nextSlide(){
        $("#slider ul .item:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slider ul");
    }
    //prev image sliding
    function prevSlide(){
        $("#slider ul .item:first").fadeOut(1000).siblings().last().fadeIn(1000);
        $("#slider ul .item:last").prependTo("#slider ul");
    }

    $("#slider .control a").hover(
        event => {
            $(event.target).css("background-color","rgba(0,0,0,.5)");
        },
        event => {
            $(event.target).css("background-color","rgba(0,0,0,0)");
        }
    );
    $("#slider .control a").click(event => {
        if ($(event.target).hasClass("left")){
            prevSlide();
        } else {
            nextSlide();
        }
    });
});