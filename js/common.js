$(document).ready(function() {

	$(document).click(function() {
        $(".js-popup-field").hide();
        $(".js-btn-sbm").parent().addClass("is-active");
    });
        $(".js-popup").on("click",function(event){
        		event.stopPropagation();
        });
        $(".js-popup-close").on("click",function(event){
        		$(".js-popup-field").hide();
        		event.stopPropagation();
        });        
        $('.js-btn').click(function() {
            $(".js-popup-field").show();
            return false;
        });

    ymaps.ready(init);
    var myMap, 
        myPlacemark;

    function init(){ 
        myMap = new ymaps.Map ("map", {
            center: [56.0009, 37.7220],
            zoom: 13
        }); 
        
        myPlacemark = new ymaps.Placemark([56.0041, 37.7120], {
            hintContent: 'Ульянково!',
            balloonContent: 'Ульянково'
        });
        
        myMap.geoObjects.add(myPlacemark);
    }
});
    $('.fancybox').fancybox();