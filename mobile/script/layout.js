$(document).ready(function(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    
    window.addEventListener("resize", () => {
      console.log("resize");
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
    // 영역외 클릭
    $('html').on("click",function(e){
        // 검색어 관련 닫기
    	// if(!$(e.target).parents('#divSearch').length){
        //     $("#divSearch .searchKeywordW").hide();
        // }
    });
    let headerP = 0;
    let header1P = headerP + $("#divHeader").outerHeight() - $("#divHeader .header2").outerHeight();
    console.log(header1P);
    $(window).on("resize",function(){
        headerP = 0;
    });
    var prevScrollpos = window.pageYOffset;
    $(window).scroll(function(e){
        // header fix
        let position = $(this).scrollTop();        
        if(headerP <= position){
            $("#divWrapper").addClass("fixed");
        }else{
            $("#divWrapper").removeClass("fixed");
        }
        if(header1P <= position){
            $(".goTopBtn").show();
        }else{
            $(".goTopBtn").hide();
        }
        // bottomMenu hide/show, headaer hide/show
        let currentScrollpos = window.pageYOffset;
        let scrollRange = $("body").outerHeight(true) - $(window).outerHeight(true);
        if(currentScrollpos >= 0 && prevScrollpos >= 0 && currentScrollpos <= scrollRange && prevScrollpos <= scrollRange){
            if(prevScrollpos < currentScrollpos){
                $(".bottomMenuBar").css("bottom", -($(".bottomMenuBar > ul").outerHeight(true))-8);
                if(header1P <= position){
                    $("#divWrapper").addClass("hideHeader"); 
                }
            }else{
                $(".bottomMenuBar").css("bottom","0px");
                $("#divWrapper").removeClass("hideHeader");
            }
        }
        prevScrollpos = currentScrollpos;
    });

    // 전체메뉴
    // 전체메뉴 열기
    $(".wholeMenuBtn, .botWholeMenu").on("click",function(){
        $("#divWholeMenu").show();
        $("header .headerBg").show();
        setTimeout(function(){
            $("#divWholeMenu").animate({"left": "0"},1000,'easeOutQuint');
        },100);
        $("body, html").addClass("hidden");
    }); 
    // depth1 클릭시 depth2 보이기   
    $("#divWholeMenu .depth1 > li > a").on("click",function(e){
        $(this).parent().addClass("on").siblings().removeClass("on");
    });
    // 전체메뉴 닫기
    $("#divWholeMenu .wholeMenuClose").on("click",function(){
        $("#divWholeMenu").animate({"left": "-100%"},500,'easeOutQuint',function(){
            $("#divWholeMenu").hide();
            $("header .headerBg").fadeOut(400);
        });
        $("body, html").removeClass("hidden");
    });

    // 검색창
    // 검색창 보이기
    // 검색창 버튼 클릭시 검색세부창으로 넘어감
    $(".headerSearch .searchBtn").on("click", function(){
        setTimeout(function(){
            $("#divSearch").animate({"top": "48px"},1000,'easeOutQuint');
        },100);
        $("#divSearch").show();
        $("header .headerBg").show();
        $("body, html").addClass("hidden");
        console.log("a");
        return false;
    });
    // input focus 잡혀있을때 스크롤시 focus 해제
    $("#divSearch .scrollW").scroll(function(e){
        $("#divSearch input[type=text]").blur();
    });
    // 검색창 닫기
    $("#divSearch .closeBtn, header .headerBg").on("click", function(){
        $("#divSearch").animate({"top": "100%"},500,'easeOutQuint',function(){
            $("#divSearch").hide();
        });
        $("header .headerBg").fadeOut(400);
        $("body, html").removeClass("hidden");
        $("#divWrapper").removeClass("hideHeader");        

        return false;
    });
    
    // 상세검색 보이기
    $("#divSearch .searchDetailBtn .openBtn").on("click",function(){
        if($(".searchSection.detail").hasClass("open")){
            $(this).parents(".searchSection.detail").removeClass("open")
        }else{
            $(this).parents(".searchSection.detail").addClass("open")
        }

        return false;
    });
    // customSelect
    $(".customSelectBox .customSelect label").on("click",function(){
        if($(this).parents(".customSelectBox").hasClass("on")){
            $(".customSelectOpt").hide();
            $(".customSelectBox").removeClass("on");
        }else{
            $(".customSelectBox").removeClass("on");
            $(this).parents(".customSelectBox").addClass("on");
            $(".customSelectOpt").hide();
            $(this).parents(".customSelectBox").find(".customSelectOpt").slideDown(300);
        }

        return false;
    });
    // 영역외 클릭
    $('html').on("click",function(e){
        // customSelectOpt 닫기
    	if(!$(e.target).parents('.customSelectBox').length){
            $(".customSelectBox").removeClass("on");
            $(".customSelectOpt").hide();
        }
    });
    // custmSelect 옵션 선택 관련
    $(".customSelectBox .customSelectOpt li a").on("click",function(){
        let selectNum = $(this).parent().index();
        $(this).parents(".customSelectBox").find(".customSelect select option").removeAttr('selected');
        $(this).parents(".customSelectBox").find(".customSelect select option").eq(selectNum).attr("selected", "selected");
        $(this).parents(".customSelectBox").find(".customSelect label").text($(this).text());
        $(".customSelectBox").removeClass("on");
    });

    // 자동저장
    // 로딩시 자동저장 value 값이 true면 on Class 삽입
    if($(".searchSection.recent #autoSave").is(":checked")){
        $(".searchSection.recent .sectionTop .switchTrack").addClass("on");
    }
    // 자동저장 label 눌렀을때 토글
    $(".searchSection.recent .sectionTop ul li label").on("click",function(){
        if(!$(".searchSection.recent #autoSave").is(":checked")){
            $(".searchSection.recent .sectionTop .switchTrack").addClass("on");
        }else{
            $(".searchSection.recent .sectionTop .switchTrack").removeClass("on");
        }
    });
    // 자동저장 토글버튼 눌렀을때 토글
    $("#divSearch .searchSection.recent .sectionTop ul li .switchTrack").on("click",function(){
        if(!$(".searchSection.recent #autoSave").is(":checked")){
            $(".searchSection.recent .sectionTop .switchTrack").addClass("on");
            $(".searchSection.recent #autoSave").prop("checked",true);
        }else{
            $(".searchSection.recent .sectionTop .switchTrack").removeClass("on");
            $(".searchSection.recent #autoSave").prop("checked",false);
        }
    });

    // 인기검색어 더보기
    $(".searchSection.popular .popularMoreBtn").on("click", function(){
        if($(".searchSection.popular").hasClass("open")){
            $(this).text("6 ~ 10위 보기");
            $(".searchSection.popular").removeClass("open");
        }else{
            $(this).text("6 ~ 10위 닫기");
            $(".searchSection.popular").addClass("open");
        }
    });

    // goTopBtn
    $(".goTopBtn").on("click",function(){
        $("html, body").animate({ scrollTop: 0}, 500); 

        return false;
    });
});