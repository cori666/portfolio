


$(document).ready(function() {//실행틀 시작
    
    $(".gnb2 > li:nth-child(1)").click(function(){
        tt=$('#cont1').offset().top;
    
        //alert(tt);
        $("html,body").stop().animate({scrollTop:tt});
        });//menu.click() 끝

	$(".gnb2 > li:nth-child(2)").click(function(){
		tt=$('#cont2').offset().top;
    
        //alert(tt);
		$("html,body").stop().animate({scrollTop:tt});
		});//menu.click() 끝
		

        $(".gnb2 > li:nth-child(3)").click(function(){
            tt=$('#cont3').offset().top;
        
            //alert(tt);
            $("html,body").stop().animate({scrollTop:tt});
            });//menu.click() 끝
  
            

            $(".gnb2 > li:nth-child(4)").click(function(){
                tt=$('#cont4').offset().top;
            
                //alert(tt);
                $("html,body").stop().animate({scrollTop:tt});
                });//menu.click() 끝
                

         
                    



        
});//실행틀 끝