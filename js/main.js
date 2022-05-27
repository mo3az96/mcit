window.addEventListener(
  "load",
  function () {
    var sectorswiper = new Swiper(".sectors-slider .swiper", {
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        767: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1199: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1699: {
          slidesPerView: 6,
          spaceBetween: 16,
        },
      },
      pagination: {
        el: ".sectors-slider .swiper-pagination",
        clickable: true,
      },
    });
  },
  false
);
