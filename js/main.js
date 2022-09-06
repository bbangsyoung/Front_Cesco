function banner1() {
  $(".food").animate({
      marginLeft : parseInt($(".food").css("margin-left"))-240+"px"},"slow",function(){
          $(".food li:first").appendTo(".food");
          $(".food").css("margin-left","-240px");
      });
}

$(document).ready(function(){

//숫자 천단위 콤마 함수
    function addComma(value) {
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return value;
    }

//숫자 카운터

$(".counter").css("opacity", "0"); //span
   $(".counter").animate({"opacity" : "1"});
    $(".counter").each(function(){//span
        
        var $this = $(this) ;
        countTo = $this.attr("data-count");
        
		var countNum = countNum; 
        $({ countNum: $this.text()}).animate({
            //style
            countNum : countTo
        }		,                                            
        {
            //option
            duration : 6000,  // 속도
            easing:"linear",  //효과(일정)
            step: function(){  //애니메이션의 각 단계
                $this.text(Math.floor(this.countNum)); //내림
       		 }, 
            complete : function(){
                $this.text(this.countNum); //애니메이션 완료 후 실행
       		 } 			 
        });
		
   });






//배너8개짜리 호버
$(".b_e span").text("");
$(".b_e").mouseenter(function(){  
    $(".b_e span:eq(0)").animate({width: "94%"},100,function(){
        $(this).next().animate({height: "93%"},100,function(){
          
            $(this).next().animate({width: "94%"},100,function(){
             
                $(this).next().animate({height: "93%"},300);
            });
        });
    });
}).mouseleave(function(){
  $(".b_e span:eq(0)").stop().css("width","0px","height","2px");
  $(".b_e span:eq(1)").stop().css("opacity","0");
  $(".b_e span:eq(2)").stop().css("width","0px","height","2px");
  $(".b_e span:eq(3)").stop().css("opacity","0");
  
})


  //아래배너 연습
var width1 = 240*$(".food li").size() +"px";
    $(".food").css("width",width1); //240x16 = 3840
    $(".food li:last").prependTo(".food");
    $(".food").css("margin-left","-240px");

    var banner = setInterval("banner1()",1500);

    $(".food li").mouseover(function(){
        clearInterval(banner);
        $(this).find("img").css("opacity","0.5")
    }).mouseout(function(){
        banner = setInterval("banner1()",1500);
        $(this).find("img").css("opacity","1")
    })










//태그추가\
$("#main_navi").before("<div class='bg'></div>")

$(".bg, .sub").hide();
$("#menu").mouseenter(function(){
    $(".bg,.sub").stop().slideDown("fast");
   $("#menu>li>a").delay(3000).css("color","#666");  
}).mouseleave(function(){
    $(".bg,.sub").stop().slideUp("fast");
    $("#menu>li>a").delay(3000).css("color","");
})

$("#menu>li>a").mouseover(function(){
  $(this).css("color","#00b4ff");
}).mouseout(function(){
   $("#menu>li>a").css("color","#666");
})


//마우스 올려져있을때 고정시켜놓을 bg영역
$(".bg").mouseover(function(){
    $(this).stop().show();
    $(".sub").stop().show();
}).mouseover(function(){
    $(this).stop().slideUp();
    $(".sub").stop().slideUp();
})




//네비게이션


  $(function() {
    var sscrolsss = parseInt( $("#bottom5").css('margin-left') );
    $(window).scroll(function() {
      $("#bottom5").css("margin-left", sscrolsss - $(this).scrollLeft())
      .animate({top:200},1500);
    });
  });



    $("#family_site5 ul").animate({top:300},0);
    var cnt2 = 1;
    $("#family_site5>button").click(function(){
        if(cnt2 == 1){
            $("#family_site5 ul").animate({top:0},"fast")
            $(".icon5").text("∨");
            cnt2 = 0;
        } else {
            $("#family_site5 ul").animate({top:300},"fast");
            $(".icon5").text("∧");
            cnt2 = 1;
        }
    })

    //클릭 후 페이지 왔을때의 값
    $("#family_site5 ul li a").click(function(){
        $("#family_site5 ul").animate({top:300},0);
        cnt2 = 1;
        $(".icon5").text("∧");
    })







$("#list1").change(function(){
  $(".list1_img").html("<img src=" + $(this).val()+ " width ='200' height='60'>");
})

$("#list2").change(function(){
  $(".list2_img").html("<img src=" + $(this).val()+ " width ='200' height='60'>");
})

$(".caption").css("opacity","0");
$(".con3_top_img").mouseover(function(){
    $(".caption",this).stop().animate({opacity:"1"},300);
}).mouseout(function(){
    $(".caption",this).stop().animate({opacity:"0"},300);
})


   
    



  });//end