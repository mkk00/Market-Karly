// {#ddd} main banner - swiper

var swiper = new Swiper(".banner-swiper", {
  slidesPerView: 1,
  loop: true,
  speed: 1300,
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 4000, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  loopAdditionalSlides : 1,
    // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".banner-swiper .swiper-button-next",
    prevEl: ".banner-swiper .swiper-button-prev",
  },
});



// {#ddd} today, recommend product 

var swiper = new Swiper(".today-product-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loopAdditionalSlides : 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".today-products .swiper-button-next",
    prevEl: ".today-products .swiper-button-prev",
  },
});


var swiper = new Swiper(".recommend-product-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loopAdditionalSlides : 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".recommend-products .swiper-button-next",
    prevEl: ".recommend-products .swiper-button-prev",
  },
});