$(document).ready(function() {

	$(document).click(function() {
        $(".js-popup").hide();
    });
        $(".js-popup").on("click",function(event){
        		event.stopPropagation();
        });
        $(".js-popup-close").on("click",function(event){
        		$(".js-popup").hide();
        		event.stopPropagation();
        });
  

			$('.fancybox').fancybox();

		
});