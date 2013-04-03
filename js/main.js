jQuery(function ($) {

    $('.search-body__i input[type="text"]').focus(function () {
        $('.popup-text').fadeOut(200);
    });
    $('.search-body__i input[type="text"]').blur(function () {
        $('.popup-text').fadeIn(200);
    });
     $(".gallery__item a").hover(function () {
     	var galleryItem = $(this).parent();
     	if(galleryItem.width()<140){
       		galleryItem.find(".hover-box").css({
       			"min-width":"120px",
       			"margin-left":"-74px",
       			"left":"50%"
       		});
    	}
	});
    
        
}); 
