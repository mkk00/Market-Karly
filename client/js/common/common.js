import { getNode, getNodes, insertLast, addClass, removeClass, attr, loadStorage, saveStorage } from '../../lib/index.js';

/* -------------------------------------------------------------------------- */
/*                                   header                                   */
/* -------------------------------------------------------------------------- */


// 새로고침시 스크롤 내려감 방지
window.onload = () =>{
  setTimeout(scrollTo(0,0),100)
}

history.scrollRestoration = "manual"


// {#ddd} top banner close

const $topBanner = getNode('.top-banner');
const $topBannerCloseBtn = getNode('.top-banner__close-btn');

if( localStorage.getItem("topBanner") ){
  $topBanner.style.height = 0;

} else{
  $topBanner.style.transition = "300ms";
  $topBanner.style.height = "50px";
}

let hideTopBanner = () => {
  saveStorage("topBanner", true);
  $topBanner.style.height = 0;
  $topBanner.style.transition = "300ms";
}

$topBannerCloseBtn.addEventListener('click', hideTopBanner);



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
    
    $deliveryNotice.style.display="none";
    $category.style.width="120px";
    $NavInner.style.height="56px";
    $category.style.backgroundPosition="0 13px";     
    attr('.search__search-btn img', 'src', '../assets/icons/Icon/search-b.svg');

  }else{
    removeClass($Nav, 'fixed');
    removeClass($NavInner, 'flexStart');
    removeClass($search, 'rearrIcon');
    removeClass($userOrder, 'rearrIcon');

    $subMenu.style.transform="translateY(0)"
    $category.style.width="84px"
    $NavInner.style.height="72px";
    $NavInner.style.lineHeight="72px";
    $deliveryNotice.style.display="block";
    $main.style.marginTop="0"
    attr('.search__search-btn img', 'src', '../assets/icons/Icon/search.svg');
  }
}

window.addEventListener('scroll', fixed);


// {#ddd} go to top button

const $topButton = getNode('.goto-top');


function showTopBtn () {
  if(window.scrollY > 200) {
    addClass($topButton, 'topAction'); 
  }else{
    removeClass($topButton, 'topAction');
  }
}

let GotoScrollTop = (e) => {
  e.preventDefault();
  window.scrollTo({top:0, behavior:"smooth"});  
}

window.addEventListener('scroll', showTopBtn);
$topButton.addEventListener('click', GotoScrollTop);






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