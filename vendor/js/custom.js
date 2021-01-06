$(document).ready(function(){
	 $('.menu_icon').click(function(){
		 $('.menu ul').slideToggle();
	 });
	
	
	// sticky header
	// sticky header
	
	 $(window).on('scroll',function() {    
				   var scroll = $(window).scrollTop();
				   if (scroll < 100) {
					$(".sticky-header").removeClass("sticky");
				   }else{
					$(".sticky-header").addClass("sticky");
				   }
		});
		
	// Counter up js
	// Counter up js
	
	$("h3.counter").counterUp({
		delay: 5,
		time: 2000
   });	
	
	 // Client area
    // Client area
		   
	    $(".all_client_img").owlCarousel({
             loop:true,
			 dots:true,
			 nav:false,
			 autoplay:true,
			 autoplayTimeout:2000,
			 responsive:{
			0:{
				items:1
			},
			767:{
				items:3
			},
			990:{
				items:4
			}

		    }
			
      });
	
      // Scroll JS
     // Scroll JS
		
	 $('.scroll_bar a').click(function(){
		  $('html,body').animate({
          scrollTop:0
        },5000);
        return false;
		 
	 });	
     
     $(window).scroll(function(){
		  if($(window).scrollTop()>1500){
			   $('.scroll_bar a').fadeIn(2000);
		 }else{
			 $('.scroll_bar a').fadeOut(2000);
		 }
		 
	 });

	// mixitup js
	// mixitup js
	// mixitup js
	   
	    var option= {
		     animation: {
             enable: true,
			 effects: 'rotateY(-25deg)'   
          } 
		  }
		 
		var mixer = mixitup('.port',option);
	   
	 // magnific-popup js 
	 // magnific-popup js 
		   
	   	  $('.portfolio_area .view-btn').magnificPopup({
			  delegate: 'a',
			  type: 'image',
			  gallery: {
					enabled: true
				}
			
	});












	 
	  
});