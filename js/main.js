$(document).ready(function(){
    var quick_move = parseInt($(".scroll_quickmenu").css("top"));
    $(window).scroll(function() {
      var position = $(window).scrollTop(); 
      $(".scroll_quickmenu").stop().animate({"top":position+quick_move+"px"},1000);
    });

    
    $(".test").hide();
    $(".test_c").click(function(){
        $(".test:not(:animated)").slideToggle(1000)
    });





  });
