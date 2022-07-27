$(document).ready(function(){
    //윈도우 창의 높이 값
    let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    //윈도우 창의 너비 값
    let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

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
        $(".menuType2 .sidenav").hide();
        return false;
    });
    $(".menuType2 .allSlide a").on("click",function(){
        $(".menuType2 .depth2").addClass("all");
        $(".menuType2 .depth1 > li").removeClass("on");
        $(this).parent().addClass('on');
        $('.menuType2 .depth3').slick('setPosition');
        $(".menuType2 .sidenav").show();
        return false;
    });
    $(".menuType2 .depth3 li a").on("click",function(){
        $(".menuType2 .depth3 li").removeClass("on")
        $(this).parent().addClass("on");
        
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

    $(window).on("scroll",function(){
        windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        
        if($(".searchResultW").offset().top - (windowHeight/2) <= $(window).scrollTop()){
            $(".menuType2 .sidenav").hide();
        }else{
            $(".menuType2 .sidenav").show();
        }
    });

    // menuType3
    $(".menuType3 .depth1 > li > a").on("click",function(){
        if($(this).parent().hasClass("on")){
            $(".menuType3 .depth1 > li").removeClass("on");
            $(".menuType3 .depth2").removeClass("on");
        }else{
            $(".menuType3 .depth1 > li").removeClass("on");
            $(this).parent().addClass("on");
            $(".menuType3 .depth2").removeClass("on");
            $(this).parents('.depthW').find('.depth2').eq($(this).parent().index()).addClass("on");
            $('.menuType3 .depth2').slick('setPosition');
        }

        return false;
    });
    let menuType3Depth2SlickOp = {
        arrows : false,
        infinite: false,
        slidesToShow: 1,
        rows : 5,
        slidesPerRow: 1,
        slidesToScroll: 1,
        touchThreshold: 30,
        swipeToSlide: true,
        adaptiveHeight: true,
        vertical: false,
        speed: 300,
        dots: true,
        customPaging : function(slider, i) {
			var thumb = jQuery(slider.$slides[i]).data();
			return '<span class="dot"></span>'; // <-- new
		},
    }
    $(".menuType3 .depth2").slick(menuType3Depth2SlickOp);
    $(".menuType3 .depth2 .slick-slide > div > li > a").on("click",function(){
        $(".menuType3 .depth2 .slick-slide > div > li").removeClass("on");
        $(this).parent().addClass("on");
        $('.menuType3 .depth2').slick('setPosition');

        return false;
    });
    $(".menuType3 .depth3 > li > a").on("click",function(){
        $(".menuType3 .depth3 > li").removeClass("on");
        $(this).parent().addClass("on");
        $('.menuType3 .depth2').slick('setPosition');

        return false;
    });
});