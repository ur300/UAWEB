jQuery(function ($) {

    $('.search-body__i input[type="text"]').focus(function () {
        $('.popup-text').fadeOut(200);
    });
    $('.search-body__i input[type="text"]').blur(function () {
        $('.popup-text').fadeIn(200);
    });

    $(window).load(function () {
       
                 
    });
        
}); 
