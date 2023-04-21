export const sliderSettings = {
  //   focusOnSelect: true,
  //   infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,

  speed: 500,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export const reviewsSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  initialSlide: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveWidth: true,
  adaptiveHeight: true,
  centerMode: true,
  lazyLoad: true,
  centerPadding: '320px',
  arrows: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        centerPadding: '0px',
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        verticalSwiping: true,
        centerPadding: '0px',
      },
    },
  ],
};
