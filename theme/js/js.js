(function ($) {

  $(window).load(function() {
    // The slider being synced must be initialized first
    $('#carousel').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      directionNav:false,
      slideshow: false,
      itemWidth: 53,
      itemMargin: 5,
      asNavFor: '#slider'
    });

    $('#slider').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      directionNav:false,
      sync: "#carousel"
    });
  });

  $(window).load(function() {
    // The slider being synced must be initialized first
    $('#carousel2').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      directionNav:false,
      slideshow: false,
      itemWidth: 53,
      itemMargin: 5,
      asNavFor: '#slider2'
    });

    $('#slider2').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      directionNav:false,
      sync: "#carousel2"
    });
  });

  $(document).ready(function(){
    $( "#slider-scroll" ).slider({
      value : 0,//Значение, которое будет выставлено слайдеру при загрузке
      min : 0,//Минимально возможное значение на ползунке
      max : 10,//Максимально возможное значение на ползунке
      step : 1,//Шаг, с которым будет двигаться ползунок
      create: function( event, ui ) {
        val = $( "#slider-scroll" ).slider("value");//При создании слайдера, получаем его значение в перемен. val
        $( "#contentSlider" ).html( val );//Заполняем этим значением элемент с id contentSlider
      },
      slide: function( event, ui ) {
        $( "#contentSlider" ).html( ui.value );//При изменении значения ползунка заполняем элемент с id contentSlider

      }
    });
  });


  $(document).ready(function(){
    $( "#slider-scroll1" ).slider({
      value : 0,//Значение, которое будет выставлено слайдеру при загрузке
      min : 0,//Минимально возможное значение на ползунке
      max : 10,//Максимально возможное значение на ползунке
      step : 1,//Шаг, с которым будет двигаться ползунок
      create: function( event, ui ) {
        val = $( "#slider-scroll1" ).slider("value");//При создании слайдера, получаем его значение в перемен. val
        $( "#contentSlider1" ).html( val );//Заполняем этим значением элемент с id contentSlider
      },
      slide: function( event, ui ) {
        $( "#contentSlider1" ).html( ui.value );//При изменении значения ползунка заполняем элемент с id contentSlider
      }
    });
  });

  $(document).ready(function(){
    $(".menu, .style-mouse").on("click","a", function (event) {

      event.preventDefault();

      var id  = $(this).attr('href'),
        top = $(id).offset().top;

      $('body,html').animate({scrollTop: top}, 1500);
    });
  });

})(jQuery);

