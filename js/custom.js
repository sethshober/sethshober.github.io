    $(".fit-a").fitText(1.2); //more aggressive
    $(".fit-b").fitText(0.8); //less aggressive


    $("#hire-me").click(function(event){
      event.preventDefault();
      var moveTo = $("#connect").offset().top;
      $("html, body").animate({scrollTop: moveTo});
    });


    $("li a").click(function(event){
      event.preventDefault();
      var id = $(this).attr("href");
      var divPosition = $(id).offset().top;
      $("html, body").animate({scrollTop: divPosition});
    });
