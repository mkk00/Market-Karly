import { getNode } from '../../lib/index.js';

/* -------------------------------------------------------------------------- */
/*                                    main                                    */
/* -------------------------------------------------------------------------- */




// {#ddd} main banner prev&next Arrow fadeIn, fadeOut

const $mainBanner = getNode('.main-banner');
const $mainBanner_prevArrow = getNode('.swiper-button-prev');
const $mainBanner_nextArrow = getNode('.swiper-button-next');

function mainBannerArrowIn(){
  $mainBanner_prevArrow.style.transitionDuration="300ms"
  $mainBanner_nextArrow.style.transitionDuration="300ms"
  $mainBanner_prevArrow.style.opacity=1;
  $mainBanner_nextArrow.style.opacity=1;
}

function mainBannerArrowOut(){
  $mainBanner_prevArrow.style.transitionDuration="500ms"
  $mainBanner_nextArrow.style.transitionDuration="500ms"
  $mainBanner_prevArrow.style.opacity=0;
  $mainBanner_nextArrow.style.opacity=0;
}

$mainBanner.addEventListener('mouseover', mainBannerArrowIn)
$mainBanner.addEventListener('mouseleave', mainBannerArrowOut)



// pop-up

const $popupClose = getNode('.popup__btn button:last-child');
const $popupTodayClose = getNode('.popup__btn button:first-child');
const $popup = getNode('.popup');

function closePopup(){
  $popup.style.display="none";
}