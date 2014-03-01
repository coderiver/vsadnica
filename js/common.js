$(document).ready(function() {

	$(document).click(function() {
        $(".js-popup-field").hide();
    });
        $(".js-popup").on("click",function(event){
        		event.stopPropagation();
        });
        $(".js-popup-close").on("click",function(event){
        		$(".js-popup-field").hide();
        		event.stopPropagation();
        });
  
        
		$('.fancybox').fancybox();

        $('.js-btn').click(function() {
            $(".js-popup-field").show();
            return false;
        });
});