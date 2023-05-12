$(document).ready(function(){
     // 버튼 active 추가 제거 해보기
     $('.nav li').mouseenter(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        const changeImage = $(this).attr('data-image');
        // li에 있는 data-image 값을 변수에 저장시킴

        $('.photo').css({
            backgroundImage: `url(${changeImage})`
        });
    });
    $('.nav li').mouseleave(function(){
        $('.photo').css({
            backgroundImage: ``
        });
    });

    // 상단이동버튼 300px 이상일때 최상단으로 올라가는 상단이동버튼 구현해보기(배너에서 없어져있다가 sec1에서부터 보이게)
    let btn = $('.top-btn');
    $(window).scroll(function(){
        if($(window).scrollTop() >= 300){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
    });
    btn.click(function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    });


    let ww = $(window).width();

    if(ww > 1800){
        new fullpage('#wrap',{
            // 새로고침시 상단으로 이동되는 부분 막아주기
            anchors : ['anchor1','anchor2','anchor3','anchor4'],
            // 스크롤바 생성
            scrollBar : true,
            // 지정한 섹션에는 스크롤 정상값으로 돌려주기
            normalScrollElements : '.sec-3,.sec-4,.sec-5,.footer',
            // 높이값이 풀페이지가 아닌 경우 풀페이지 상단 영역으로 올라가는 것 막아주기
            fitToSection : false
        });
    
    }else{
        
    }
});