
	$(document).ready(function() {
    
    var menu = $(".gnb > li");
      var content = $(".page01> div");
      
      menu.click(function(){
          event.preventDefault();
          var tg = $(this);
          var idx = tg.index();
          var section = content.eq(idx);
          var tt = section.offset().top;
  
          $("html,body").stop().animate({scrollTop:tt});
          });//menu.click() 끝
          

          var about_pos = $('.one_name').offset().top;  //스킬 애니메이션

      $(window).scroll(function(){
          var location = $(window).scrollTop()+100;        
          content.each(function() {
              var tg = $(this);
              var idx = tg.index();
              
              if(tg.offset().top <= location){  //active 위치가 안맞으면 location + 위치값 을 추가하면 됨
                  menu.removeClass("active");
                  menu.eq(idx).addClass("active");
                  }
      });//each() 끝
             
            if ($(document).scrollTop() >= about_pos) { //스킬 애니메이션
              $('.charts .chart circle').addClass('ani')
          } else {
            $('header').css({background:'rgba(0,0,0,0)'})
          }
         });     //scroll() 끝


 
   
        //alert(about_pos)

            $('.top').click(function(){
              event.preventDefault();
          
              $("html,body").stop().animate({scrollTop:0});
              });
          
              
                $('#pop_up button').click(function(){ //사라지기 fade out, slide up -> display:none
                  $('#pop_up').hide();
                })//modal close
                $('.modal').click(function(){ //나타나기 fade in, slide down -> display:block
                  $('#pop_up').show();
                })//modal open 


    });//실행틀 끝
