$(document).ready(function(){
    $(".dotdot").dotdotdot({
        ellipsis: '...',
        watch : true,
        wrap : 'letter',
    });

    // VideoSwiper 공통
    let VideoSwiperOp = {
        slidesPerView : 'auto',
        spaceBetween : 0,
        loop : false, 
        observer: true,	
        observeParents: true,
        slideToClickedSlide: true,
        threshold: 0,
        speed: 300,
    }
    let VideoSwiper =  new Swiper(".VideoSwiper",VideoSwiperOp);

    // 강의상세 - 차시별강의 slick
    let classLectureListOpt = {
        vertical: false,
        slideToShow: 1,
        infinite: false,
        rows : 5,
        arrows: false,
        dots : true,
        touchThreshold : 25,
        adaptiveHeight: true,
        speed: 400,
        customPaging : function(slider, i) {

			var thumb = jQuery(slider.$slides[i]).data();
			return '<span class="dot"></span>'; // <-- new

		},
    }
    $(".classLectureList").slick(classLectureListOpt);

    // 강의상세 - 차시별강의 전체보기, 전체보기 닫기
    let openList = false;
    $(".spreadBtn").on("click",function(){
        if(!openList){
            openList = true;
            $(this).parents(".content").find(".classLectureList").slick('unslick');
            $(this).addClass("on");
            $(this).children('.text').text("전체보기 닫기");
        }else{
            openList = false;
            $(".classLectureList").slick(classLectureListOpt);
            $(this).removeClass("on");
            $(this).children('.text').text("전체보기");
        }

        return false;
    });
    
    // 강의상세 - 차시별강의 제목 클릭
    $(".detailContent .classLectureList .mainTitle > a").on("click", function(){

        $(".detailContent .classLectureList .mainTitle").removeClass("on");
        $(this).parent().addClass("on");
        $(".detailContent .classLectureList li").removeClass("on");
        $(this).parents("li").addClass("on");

        return false;
    });

    
    // 강의상세 - 강의상세 콘텐츠 열고 닫기
    $(".detailContent h4 > a").on("click",function(){
        if(!$(this).parents(".detailContent").hasClass("off")){
            $(this).parents(".detailContent").find(".content").hide();
            $(this).parents(".detailContent").addClass("off");
        }else{
            $(this).parents(".detailContent").find(".content").show();
            $(this).parents(".detailContent").removeClass("off");
        }

        return false;
    });

    // clipBtn
    $(".clipBtn .addtext .close").on("click",function(){
        $(this).parent().fadeOut();

        return false;
    });

    // searchSort 리스트 스타일 변화
    $(".searchSort .listType a").on("click",function(){
        $(".searchSort .listType").addClass('active');
        $(this).parent().removeClass("active");

        if($(this).parent().hasClass('grid')){
            $(".searchVideoList").removeClass('list').addClass('grid');
        }else if($(this).parent().hasClass('list')){
            $(".searchVideoList").removeClass('grid').addClass('list');
        }
        
        return false;
    });

});