import { getNode, getNodes, insertLast, addClass, removeClass } from '../../lib/index.js';

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



// {#ddd} Header Top Fixed

let $Nav = getNode('.header-nav');
let $NavInner = getNode('.header-nav__inner');
let $deliveryNotice = getNode('.delivery-notice');
let $search = getNode('.search');
let $userOrder = getNode('.user-order');
let $main = getNode('main');

let $NavHeight = $Nav.offsetHeight;

function fixed(){  
  let windowTop = window.scrollY;
  if(windowTop>=$NavHeight){    
    addClass($Nav, 'fixed');
    addClass($NavInner, 'flexStart');
    addClass($search, 'rearrIcon');
    addClass($userOrder, 'rearrIcon');
    
    $subMenu.style.transform="translateY(-16px)"
    $deliveryNotice.style.display="none";
    $category.style.width="120px";
    $category.style.height="56px";
    $category.style.lineHeight="56px";
    $category.style.backgroundPosition="0 20px";
    $main.style.marginTop="-90px"

  }else{
    removeClass($Nav, 'fixed');
    removeClass($NavInner, 'flexStart');
    removeClass($search, 'rearrIcon');
    removeClass($userOrder, 'rearrIcon');

    $subMenu.style.transform="translateY(0)"
    $category.style.width="84px"
    $category.style.height="72px";
    $category.style.lineHeight="72px";
    $category.style.backgroundPosition="0 29px";
    $deliveryNotice.style.display="block";
    $main.style.marginTop="0"
  }
}

window.addEventListener('scroll', fixed);



// {#ddd} header switch tab

const $headerSwitch = getNodes('.header__switch li');

for(let i=0; $headerSwitch.length; i++){
  $headerSwitch[i].addEventListener('click', tabSwitch)
}

function tabSwitch(){
  for(let j=0; j < $headerSwitch.length; j++){
    $headerSwitch[j].classList.remove('is-active');
  }
  this.classList.add('is-active');
}