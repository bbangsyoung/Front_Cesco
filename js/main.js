$(document).ready(function(){

  $(function() {
    var marginLeft = parseInt( $("#bottom5").css('margin-left') );
    $(window).scroll(function() {
      $("#bottom5").css("margin-left", marginLeft - $(this).scrollLeft())
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
        $("#family_site5 ul").animate({top:250},0);
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



















  });
