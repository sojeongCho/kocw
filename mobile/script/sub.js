$(document).ready(function(){
    $(".dotdot").dotdotdot({
        ellipsis: '...',
        watch : true,
        wrap : 'letter',
    });

    // 강의상세 - 차시별강의 slick
    let detailList1Opt = {
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
    $(".classLecture .detailList1").slick(detailList1Opt);

    // 강의상세 - 차시별강의 전체보기, 전체보기 닫기
    let openList = false;
    $(".spreadBtn").on("click",function(){
        if(!openList){
            openList = true;
            $(this).parents(".content").find(".detailList1").slick('unslick');
            $(this).addClass("on");
            $(this).children('.text').text("전체보기 닫기");
        }else{
            openList = false;
            $(".detailList1").slick(detailList1Opt);
            $(this).removeClass("on");
            $(this).children('.text').text("전체보기");
        }

        return false;
    });

    // 강의상세 - 차시별강의 제목 클릭
    $(".detailContent .detailList1 .mainTitle > a").on("click", function(){

        $(".detailContent .detailList1 .mainTitle").removeClass("on");
        $(this).parent().addClass("on");
        $(".detailContent .detailList1 li").removeClass("on");
        $(this).parents("li").addClass("on");

        return false;
    });

    // 강의상세 - 연관공개강의 swiper
    let detailList2SwiperOp = {
        slidesPerView : 'auto',
        spaceBetween : 0,
        loop : false, 
        observer: true,	
        observeParents: true,
        slideToClickedSlide: true,
        threshold: 0,
        speed: 300,
    }
    let detailList2 =  new Swiper(".relationLecture .detailList2Swiper",detailList2SwiperOp);

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

    // menuType1
    let menuType1Swiper = new Swiper(".menuType1 .depth1W .swiper",{
        slideToClickedSlide: true,
        slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
        spaceBetween : 0,
        loop : false,   // 슬라이드 반복 여부
        observer: true,	// 추가
        observeParents: true,	// 추가
        slideToClickedSlide: true,
        speed: 700,
    });
   
    let menuType1Depth3SlickOp = {
        arrows : false,
        infinite: false,
        slidesToShow: 1,
        rows : 5,
        slidesPerRow: 4,
        slidesToScroll: 1,
        touchThreshold: 30,
        swipeToSlide: true,
        vertical: false,
        speed: 300,
        dots: true,
        customPaging : function(slider, i) {
			var thumb = jQuery(slider.$slides[i]).data();
			return '<span class="dot"></span>'; // <-- new
		},
        responsive : [
            {
                breakpoint : 767,
                settings:{
                    slidesPerRow: 3,
                }
            },
            {
                breakpoint : 460,
                settings:{
                    slidesPerRow: 2,
                }
            }
        ]
    }
    $(".menuType1 .depth3").slick(menuType1Depth3SlickOp);

    $(".menuType1 .depth1 > li > a").on("click",function(){
        $(this).parent().addClass("on").siblings().removeClass("on");
        $(".menuType1 .depth2W .depth2").eq($(this).parent().index()).addClass("on").siblings().removeClass("on");
        $(".menuType1 .allSlide").removeClass("on");
        $('.menuType1 .depth3').slick('setPosition');	
 
        return false;
    });
    $(".menuType1 .allSlide a").on("click",function(){
        $(".menuType1 .depth1 > li").removeClass("on");
        $(".menuType1 .depth2W .depth2").removeClass("on");
        $(this).parent().addClass('on');

        return false;
    });
    $(".menuType1 .depth2W .depth2 > li > a").on("click",function(){
        
        if($(this).parent().hasClass("on")){
            $(this).parent().removeClass("on");    
        }else{
            $(".menuType1 .depth2W .depth2 > li").removeClass("on");
            $(this).parent().addClass("on");
            $('.menuType1 .depth3').slick('setPosition');	
        }
        return false;
    });
    $(".menuType1 .depth3W .depth3 li a").on("click",function(){
        $(".menuType1 .depth3W .depth3 li").removeClass("on")
        $(this).parent().addClass("on");
        $('.menuType1 .depth3').slick('setPosition');
        return false;
    });


    // menuType2
    let menuType2Swiper = new Swiper(".menuType2 .depth1W .swiper",{
        slideToClickedSlide: true,
        slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
        spaceBetween : 0,
        loop : false,   // 슬라이드 반복 여부
        observer: true,	// 추가
        observeParents: true,	// 추가
        slideToClickedSlide: true,
        speed: 700,
    });
   
    let menuType2Depth3SlickOp = {
        arrows : false,
        infinite: false,
        slidesToShow: 1,
        rows : 5,
        slidesPerRow: 3,
        slidesToScroll: 1,
        touchThreshold: 30,
        swipeToSlide: true,
        vertical: false,
        speed: 300,
        dots: true,
        customPaging : function(slider, i) {
			var thumb = jQuery(slider.$slides[i]).data();
			return '<span class="dot"></span>'; // <-- new
		},
        responsive : [
            {
                breakpoint : 641,
                settings:{
                    slidesPerRow: 2,
                }
            },
        ]
    }
    $(".menuType2 .depth3").slick(menuType2Depth3SlickOp);

    $(".menuType2 .depth1 > li > a").on("click",function(){
        $(this).parent().addClass("on").siblings().removeClass("on");
        $(".menuType2 .allSlide").removeClass("on");
        $(".menuType2 .depth2").removeClass("all");
        $(".menuType2 .depth2 > li").eq($(this).parent().index()).addClass("on").siblings().removeClass();
        $('.menuType2 .depth3').slick('setPosition');
        return false;
    });
    $(".menuType2 .allSlide a").on("click",function(){
        $(".menuType2 .depth2").addClass("all");
        $(".menuType2 .depth1 > li").removeClass("on");
        $(this).parent().addClass('on');
        $('.menuType2 .depth3').slick('setPosition');
        return false;
    });
    $(".menuType2 .depth3 li a").on("click",function(){
        $(".menuType2 .depth3 li").removeClass("on")
        $(this).parent().addClass("on");
        
        return false;
    });

    // 검색결과목록 - swiper
    let searchVideoSwiperOp = {
        autoHeight: true,
        slidesPerView : 'auto',
        spaceBetween : 0,
        loop : false, 
        observer: true,	
        observeParents: true,
        slideToClickedSlide: true,
        threshold: 0,
        speed: 300,
    }
    let searchVideoSwiper =  new Swiper(".searchVideoW .searchVideoSwiper",searchVideoSwiperOp);

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

    $(".menuType2 .sidenav li a").on("click",function(){
        let poin = $(this).attr('href')
        poin = poin.replace("#","");
        let poinTop = $("#"+poin).offset().top;

        if(poinTop > $(window).scrollTop()){
            $("html, body").animate({ scrollTop: poinTop - 90}, 500); 
        }else{
            $("html, body").animate({ scrollTop: poinTop - 200}, 500); 
        }
        
        return false;
    });
});