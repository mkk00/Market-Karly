import { getNode, getNodes, attr, addClass, removeClass, saveStorage } from '../../lib/index.js';

/* -------------------------------------------------------------------------- */
/*                                    main                                    */
/* -------------------------------------------------------------------------- */



// {#ddd} main banner prev&next Arrow fadeIn, fadeOut

// const $mainBanner = getNode('.main-banner');
// const $mainBanner_prevArrow = getNode('.swiper-button-prev');
// const $mainBanner_nextArrow = getNode('.swiper-button-next');

// let mainBannerArrowIn = ()=>{
//   $mainBanner_prevArrow.style.transitionDuration="300ms"
//   $mainBanner_nextArrow.style.transitionDuration="300ms"
//   $mainBanner_prevArrow.style.opacity=1;
//   $mainBanner_nextArrow.style.opacity=1;
// }

// let mainBannerArrowOut = ()=>{
//   $mainBanner_prevArrow.style.transitionDuration="500ms"
//   $mainBanner_nextArrow.style.transitionDuration="500ms"
//   $mainBanner_prevArrow.style.opacity=0;
//   $mainBanner_nextArrow.style.opacity=0;
// }

// $mainBanner.addEventListener('mouseover', mainBannerArrowIn)
// $mainBanner.addEventListener('mouseleave', mainBannerArrowOut)



// {#ddd} pop-up

const $popupClose = getNode('.popup__btn button:last-child');
const $popup = getNode('.popup');
const $popupDim = getNode('.popup-dim');

let closePopup = () => {
  $popup.style.display="none";
  $popupDim.style.display="none";
}

$popupClose.addEventListener('click', closePopup);
$popupDim.addEventListener('qclick', closePopup);



const $popupTodayHide = getNode('.popup__btn button:first-child');
/* 스토리지 제어 함수 정의 */
let handleStorage = {
  // 스토리지에 데이터 쓰기(이름, 만료일)
  setStorage: function (name, expires) {
    // 만료 시간 구하기(exp를 ms단위로 변경)
    let date = new Date();
    date = date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);

    // 로컬 스토리지에 저장하기
    // (값을 따로 저장하지 않고 만료 시간을 저장)
    localStorage.setItem(name, date)
  },
  // 스토리지 읽어오기
  getStorage: function (name) {
    let now = new Date();
    now = now.setTime(now.getTime());
    // 현재 시각과 스토리지에 저장된 시각을 각각 비교하여
    // 시간이 남아 있으면 true, 아니면 false 리턴
    return parseInt(localStorage.getItem(name)) > now
  }
};

// 쿠키 읽고 화면 보이게
if (handleStorage.getStorage("todayHide")) {      
  $popup.style.display="none";
  $popupDim.style.display="none";
} else {
  $popup.style.display="block";
  $popupDim.style.display="block";
}

// 오늘하루 보지 않기 버튼
$popupTodayHide.addEventListener('click', () => {
  handleStorage.setStorage("todayHide", 1);
  $popup.style.display="none";
  $popupDim.style.display="none";
});


// function getCookie(name) {
//   let cookie = document.cookie;
//   if (document.cookie != "") {
//     let cookieArray = cookie.split("; ");
//     for ( let index in cookieArray) {
//       let cookieName = cookieArray[index].split("=");
//         if (cookieName[0] == "popupFlag") {
//           return cookieName[1];
//         }
//     }
//   } return ;    
// }




async function mainProductTodayRender(num, node) {
  // JSON 읽기
  let responseData = await fetch('http://localhost:3000/products');
  let user = await responseData.json();

  // 상품 이미지
  let productImg = node.querySelector('.today-products__thumbnail');
  productImg.setAttribute("src", `../assets/${user[num].image.thumbnail}`)

  // 상품 설명란
  let slideInfoDiv = document.createElement('div');
  node.append(slideInfoDiv);
  slideInfoDiv.setAttribute('class', 'today-products__info');
  const slideInfo = node.querySelector('.today-products__info');

  // 제품 이름
  let infoProductNameSpan = document.createElement('span');
  slideInfo.append(infoProductNameSpan);
  infoProductNameSpan.setAttribute('class', 'today-products__name');
  const infoProductName = slideInfo.querySelector('.today-products__name');
  infoProductName.innerText = `${user[num].name}`;

  // 상품 가격
  let infoSalePriceDiv = document.createElement('div');
  let infoSaleSpan = document.createElement('span');
  let infoPriceSpan = document.createElement('span');

  let infoOriginPriceDiv = document.createElement('div');
  let infoOriginPriceSpan = document.createElement('span');
  let infoOriginPriceRecDiv = document.createElement('div');

  // 만약 할인이 있다면?
  if (user[num].salePrice) {
    slideInfo.append(infoSalePriceDiv);
    infoSalePriceDiv.setAttribute('class', 'today-products__price');
    const infoSalePrice = slideInfo.querySelector('.today-products__price');
  
    // 할인
    infoSalePrice.appendChild(infoSaleSpan);
    infoSaleSpan.setAttribute('class', 'today-products__info-sale');
    const infoSale = slideInfo.querySelector('.today-products__info-sale');

    // 가격
    infoSalePrice.appendChild(infoPriceSpan);
    infoPriceSpan.setAttribute('class', 'today-products__info-price');
    const infoPrice = slideInfo.querySelector('.today-products__info-price');

    infoSale.innerText = `${Math.floor(user[num].saleRatio * 100)}%`;
    infoPrice.innerText = `${user[num].salePrice.toLocaleString()} 원`;

    // 원래 가격
    slideInfo.append(infoOriginPriceDiv);
    infoOriginPriceDiv.setAttribute('class', 'info-originPrice');
    const infoOriginPrice = slideInfo.querySelector('.info-originPrice');

    infoOriginPrice.appendChild(infoOriginPriceSpan);
    infoOriginPriceSpan.setAttribute('class', 'today-products__price-origin');
    const infoOriginPriceNum = slideInfo.querySelector('.today-products__price-origin');

    infoOriginPriceNum.innerText = `${user[num].price.toLocaleString()} 원`;

    // 할인이 없다면?
  } else{
    slideInfo.append(infoPriceSpan);
    infoPriceSpan.setAttribute('class', 'today-products__info-price');
    const infoPrice = slideInfo.querySelector('.today-products__info-price');

    infoPrice.innerText = `${user[num].price.toLocaleString()} 원`;
  }
}

// for (let i = mainProductToday.length; i > 0; i--) {
//   mainProductTodayRender(i, mainProductToday[i]);
// }



const mainProduct = document.querySelectorAll('.product-slide');

async function mainProductRender(num, node) {
  // JSON 읽기
  let responseData = await fetch('http://localhost:3000/products');
  let user = await responseData.json();

  // 상품 이미지
  let productImg = node.querySelector('.recommend-products__thumbnail');
  productImg.setAttribute("src", `../assets/${user[num].image.thumbnail}`)

  // 상품 설명란
  let slideInfoDiv = document.createElement('div');
  node.append(slideInfoDiv);
  slideInfoDiv.setAttribute('class', 'recommend-products__info');
  const slideInfo = node.querySelector('.recommend-products__info');

  // 제품 이름
  let infoProductNameSpan = document.createElement('span');
  slideInfo.append(infoProductNameSpan);
  infoProductNameSpan.setAttribute('class', 'recommend-products__name');
  const infoProductName = slideInfo.querySelector('.recommend-products__name');
  infoProductName.innerText = `${user[num].name}`;

  // 상품 가격
  let infoSalePriceDiv = document.createElement('div');
  let infoSaleSpan = document.createElement('span');
  let infoPriceSpan = document.createElement('span');

  let infoOriginPriceDiv = document.createElement('div');
  let infoOriginPriceSpan = document.createElement('span');
  let infoOriginPriceRecDiv = document.createElement('div');

  // 만약 할인이 있다면?
  if (user[num].salePrice) {
    slideInfo.append(infoSalePriceDiv);
    infoSalePriceDiv.setAttribute('class', 'recommend-products__price');
    const infoSalePrice = slideInfo.querySelector('.recommend-products__price');
  
    // 할인
    infoSalePrice.appendChild(infoSaleSpan);
    infoSaleSpan.setAttribute('class', 'recommend-products__info-sale');
    const infoSale = slideInfo.querySelector('.recommend-products__info-sale');

    // 가격
    infoSalePrice.appendChild(infoPriceSpan);
    infoPriceSpan.setAttribute('class', 'recommend-products__info-price');
    const infoPrice = slideInfo.querySelector('.recommend-products__info-price');

    infoSale.innerText = `${Math.floor(user[num].saleRatio * 100)}%`;
    infoPrice.innerText = `${user[num].salePrice.toLocaleString()} 원`;

    // 원래 가격
    slideInfo.append(infoOriginPriceDiv);
    infoOriginPriceDiv.setAttribute('class', 'info-originPrice');
    const infoOriginPrice = slideInfo.querySelector('.info-originPrice');

    infoOriginPrice.appendChild(infoOriginPriceSpan);
    infoOriginPriceSpan.setAttribute('class', 'recommend-products__price-origin');
    const infoOriginPriceNum = slideInfo.querySelector('.recommend-products__price-origin');

    infoOriginPriceNum.innerText = `${user[num].price.toLocaleString()} 원`;

    // 할인이 없다면?
  } else{
    slideInfo.append(infoPriceSpan);
    infoPriceSpan.setAttribute('class', 'recommend-products__info-price');
    const infoPrice = slideInfo.querySelector('.recommend-products__info-price');

    infoPrice.innerText = `${user[num].price.toLocaleString()} 원`;
  }
}

for (let i = mainProduct.length; i > 0; i--) {
  mainProductRender(i, mainProduct[i]);
}
for (let i = 0; i < mainProduct.length; i++) {
  mainProductTodayRender(i, mainProduct[i]);
}



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

let getOnlyPrice = node => {
  return parseInt(node.replaceAll(/,/g, ""));
}

let calculateTotalPrice = () =>{
  $priceTotal.textContent = (setCount * $parseIntPrice).toLocaleString() + '원'
}


let productCountUp = () => {
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
let productCountDown = () => {
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



// recent products

const $sideBar = getNode('.recent-product');

function fixedSideBar () {  
  if(window.scrollY > 215) {
    addClass($sideBar, 'fixedSideBar'); 
  }else{
    removeClass($sideBar, 'fixedSideBar');
  }
}

window.addEventListener('scroll', fixedSideBar);



