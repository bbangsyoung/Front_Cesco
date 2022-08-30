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



    var memberCountConTxt= 350000;
  
    $({ val : 150000 }).animate({ val : memberCountConTxt }, {
     duration: 3000,
    step: function() {
      var num = numberWithCommas(Math.floor(this.val));
      $(".memberCountCon1").text(num);
    },
    complete: function() {
      var num = numberWithCommas(Math.floor(this.val));
      $(".memberCountCon1").text(num).append("<em> 명</em>")
  
    }
  });
  
  function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }





  var memberCountConTxt= 50160000;
  
  $({ val : 20110000 }).animate({ val : memberCountConTxt }, {
   duration: 3000,
  step: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon2").text(num);
  },
  complete: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon2").text(num).append("<em> 건</em>");
  }
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




$("#list1").change(function(){
  $(".list1_img").html("<img src=" + $(this).val()+ " width ='200' height='60'>");
})

$("#list2").change(function(){
  $(".list2_img").html("<img src=" + $(this).val()+ " width ='200' height='60'>");
})

















  });
