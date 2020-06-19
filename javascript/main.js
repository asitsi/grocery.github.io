 /** Product slider **/

 $('.slider-two').not(".slick-intialized").slick({
 	prevArrow:".site-slider-two .slider-btn .prev",
 	nextArrow:".site-slider-two .slider-btn .next",
 	autoplay:true,
 	autoplaySpeed:4000,
 	 responsive: [
 	 {
      breakpoint: 1920,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        

    }
      },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 });