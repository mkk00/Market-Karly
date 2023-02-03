import { getNode, getNodes } from '../../lib/index.js';

/* -------------------------------------------------------------------------- */
/*                                   header                                   */
/* -------------------------------------------------------------------------- */


// 새로고침시 스크롤 내려감 방지
window.onload = () =>{
  setTimeout(scrollTo(0,0),100)
}



// {#ddd} top banner close

const $topBanner = getNode('.top-banner');
const $topBannerCloseBtn = getNode('.top-banner__close-btn');

function topBannerClose(){
  $topBanner.style.transitionDuration="300ms"
  $topBanner.style.height = 0;  
}

$topBannerCloseBtn.addEventListener('click', topBannerClose)



// {#ddd} category

const $category = getNode('.category');
const $subMenu = getNode('.sub-menu');

function categoryOpen(){
  $category.style.backgroundImage="url(../assets/icons/Icon/Hamburger-p.svg)"
  $subMenu.style.display='block'
  $subMenu.style.transitionDuration="300ms"
}

function categoryClose(){
  $category.style.backgroundImage="url(../assets/icons/Icon/Hamburger-black.svg)"
  $subMenu.style.display='none'
}

$category.addEventListener('mouseover', categoryOpen)
$category.addEventListener('mouseleave', categoryClose)
$subMenu.addEventListener('mouseleave', categoryClose)