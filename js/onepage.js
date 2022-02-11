$(function(){
    var nav = $("#menu ul li");
    var contents = $(".section>section");
  
    nav.click(function(){
      var index = $(this).index();
  
      var section = contents.eq(index);
      var offset = section.offset().top;
  
      $("html, body").animate({scrollTop:offset},400);
    });
  });