import { getNode, getNodes, attr, addClass } from '../../lib/index.js';

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



// {#ddd} pop-up

const $popupClose = getNode('.popup__btn button:last-child');
const $popup = getNode('.popup');
const $popupDim = getNode('.popup-dim');

function closePopup(){
  $popup.style.display="none";
  $popupDim.style.display="none";
}

$popupClose.addEventListener('click', closePopup);
$popupDim.addEventListener('qclick', closePopup);


// {#ddd} add cart

// add cart event
const $cartIcon = getNodes('.today-products__add-cart img, .recommend-products__add-cart img');
const $cartBox = getNode('.add-cart');

for(const button of $cartIcon){
  button.addEventListener('click', showCartBox);
}

function showCartBox(e){
  e.preventDefault();
  e.stopPropagation();
  
  $countNum.value = "1";
  $priceTotal.textContent = $productPrice;

  $cartBox.style.display = "block";
  $popupDim.style.display = "block";
}

const $cartCancel = getNode('.add-cart__cancel');

function closeCartBox(e){
  e.preventDefault();

  $cartBox.style.display = "none";
  $popupDim.style.display = "none";

  $countNum.value = "1";
  $priceTotal.textContent = $productPrice;
}

$cartCancel.addEventListener('click', closeCartBox);


// add cart up&down icon event
const $countPlus = getNode('.product-count__plus');
const $countMinus = getNode('.product-count__minus');
const $countNum = getNode('#product-count');
const $countIconPlus = getNode('.product-count__plus img');
const $countIconMinus = getNode('.product-count__minus img');

// price 에서 숫자만 추출, 회계 단위로 표현하는 함수
const $priceTotal = getNode('.add-cart__total-price');
let $productPrice = getNode('.add-cart__price').textContent;
let setCount = Number($countNum.value);

let $parseIntPrice = parseInt($productPrice.replaceAll(/,/g, ""))

let getOnlyPrice = function(node){
  return parseInt(node.replaceAll(/,/g, ""));
}

let calculateTotalPrice = function (){
  $priceTotal.textContent = (setCount * $parseIntPrice).toLocaleString() + '원'
}


function productCountUp(){
  if(Number($countNum.value)>=99){
    setCount = 99;
    $countNum.value = setCount;
    calculateTotalPrice();
  } else if(Number($countNum.value)>=98){
    attr($countIconPlus, 'src', '../assets/icons/Icon/count_plus_off.svg');
    setCount++;
    $countNum.value = setCount;
    calculateTotalPrice();
  } else{
    setCount++;
    $countNum.value = setCount;
    calculateTotalPrice();
  }
  attr($countIconMinus, 'src', '../assets/icons/Icon/count_minus_on.svg');  
}
function productCountDown(){
  if(Number($countNum.value)<=1){
    setCount = 1;
    $countNum.value = setCount;
    calculateTotalPrice();
  } else if(Number($countNum.value)<=2){
    attr($countIconMinus, 'src', '../assets/icons/Icon/count_minus_off.svg');
    setCount--;
    $countNum.value = setCount;
    calculateTotalPrice();
  } else{
    setCount--;
    $countNum.value = setCount;
    calculateTotalPrice();
  }
  attr($countIconPlus, 'src', '../assets/icons/Icon/count_plus_on.svg');
}

$countPlus.addEventListener('click', productCountUp);
$countMinus.addEventListener('click', productCountDown);


const $getProduct = getNode('.add-cart__add');
const $catchProduct = getNode('.catch-product');
$catchProduct.textContent = 0;

function topCartIconCountUp(e){
  e.preventDefault();
  $catchProduct.style.opacity="1";
  setTimeout(() => {
    $catchProduct.addClass('.vibrate');    
  }, 500);
  $catchProduct.textContent = Number($catchProduct.textContent) + 1;
}

$getProduct.addEventListener('click', topCartIconCountUp);