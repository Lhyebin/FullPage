$(function () {

    $('.Main__content').fullpage({
        anchors: ['main', 'sub01', 'sub02'],
        // -> 스크롤 내릴때마다 한 풀페이지마다 주소url에 이름 변경하기
        navigation: false,
        // -> 왼쪽에 몇번째 풀페이지인지 도트 표기 할지 안할지
        css3: false,
        // ->풀페이지 fixed한 sub02 이미지 고정
        responsiveWidth: 700,
        // responsiveHeight: 1200,
        afterRender: function () {
            $('.Main__content .section').eq(0).addClass('on')
        },
        afterLoad: function (link, idx) {
            console.log(link, idx);
            // $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on')
            $('.Main__content .section').eq(idx - 1).addClass('on').siblings().removeClass('on')
        },
        // -> afterLoad : 풀페이지 페이지마자 왼쪽바 같이 연동되게
        onLeave: function (idx, nidx, dir) {
            $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on')
            console.log(idx, nidx, dir);

            if (dir == 'up') {
                $('.header').addClass('on');
            } else {
                $('.header').removeClass('on');
            }
        }
    });
})