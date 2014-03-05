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

    ymaps.ready(function () {
        var myMap = new ymaps.Map('YMapsID', {
            center: [56.0009, 37.7220],
            zoom: 13,
            // Обратите внимание, что в API 2.1 по умолчанию карта создается с элементами управления.
            // Если вам не нужно их добавлять на карту, в ее параметрах передайте пустой массив в поле controls.
            controls: []
        });
    });
});
    $('.fancybox').fancybox();