$(document).ready(function(){
    // 로딩시 효과
    $(".visualW").addClass("effect");
    // 검색창 버튼 클릭시 검색세부창으로 넘어감
    $(".searchW .searchBtn").on("click", function(){
        $(".headerSearch .searchBtn").click();
        return false;
    });
 
    let videoListSwiperOp = {
        // freeMode: true,
        slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
        spaceBetween : 0,
        loop : false,   // 슬라이드 반복 여부
        observer: true,	// 추가
        observeParents: true,	// 추가
        slideToClickedSlide: true,
        threshold: 0,
        speed: 300,
    }
    //메인에서 비디오 리스트 스와이프로
    let vdieoList1 =  new Swiper(".videoListSwiper1",videoListSwiperOp);
    let vdieoList2 =  new Swiper(".videoListSwiper2",videoListSwiperOp);
    let vdieoList3 =  new Swiper(".videoListSwiper3",videoListSwiperOp);
});