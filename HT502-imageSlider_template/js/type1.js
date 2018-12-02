$(document).ready(function(){
    //slider라는 id 속성을 가진 element를 선택
    //jQuery로 아이디 찾을 때 : $("#slider")
    //jQuery로 클래스 찾을 때 : $(".slider")
    //javascript로 아이디 찾을 때 : document.getElementById("slider")
    //javascript로 클래스 찾을 때 : document.getElementsByClassName("slider")


    $items = $("#slider ul li.item");

    var currentIndex = 1; //현재 보여지는 인덱스 번호를 1로 저장. 원래 첫번째 엘리먼트에 active가 지정되어있기 때문에 그 다음것부터 코드가 적용되도록 하게 하기 위함.
    var imgCount = $items.length; //$items들의 개수를 출력해서 imgCount변수에 저장

    //setTimeout() //~초 후에 이 안의 코드를 실행한다
    setInterval(function(){
        if (currentIndex > (imgCount)) {
            currentIndex = 0;
        }//만약 currentIndex가 imgCount 개수와 같거나 커지면 0으로 되돌려라
        //1. 모든 이미지에 active 클래스를 제거한다
        $items.removeClass('active');
        //2. 인덱스번호 0부터 active 클래스를 추가함.
        $items.eq(currentIndex++).addClass('active');
    }, 1000); //~초 마다 이 안의 코드를 반복해서 실행한다
});