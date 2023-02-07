// Product-List ukss

/* -------------------------------------------------------------------------- */
/*                                  Navigator Part                               */
/* -------------------------------------------------------------------------- */
const checkBtn = document.querySelectorAll('.accordion_item__inputCheck');
const moreBtn = document.querySelectorAll('.accordion_head__btn');
const resetBtn = document.querySelector('.frame70__btn');

// 체크박스
function handleCheckbox(e) {
  e.preventDefault();
  let select = e.target.closest('.accordion_item__checkbox');

  select.classList.toggle('is-active');
}

// 더보기
function handleMore(e) {
  e.preventDefault();
  let more = e.target.closest('.accordion_set');

  more.classList.toggle('is-active');
}

// 초기화
function handleReset(e) {
  e.preventDefault();
  let active = document.querySelectorAll('.accordion_set .is-active');
  let status = document.querySelectorAll('.frame70__status');
  let activeArr = Array.from(active);

  activeArr.forEach((active) => active.classList.remove('is-active'));
  status.forEach((stat) => (stat.innerText = ''));
}

// 상태 변화
export function handleStatus(e) {
  e.preventDefault();

  let checkList = e.target.closest('.accordion_set');
  let active = checkList.querySelectorAll('.is-active');
  let status = checkList.querySelector('.frame70__status');

  if (!active.length) {
    status.innerText = '';
  } else {
    status.innerText = active.length;
  }
}

checkBtn.forEach((check) => check.addEventListener('click', handleCheckbox));
checkBtn.forEach((check) => check.addEventListener('click', handleStatus));
moreBtn.forEach((more) => more.addEventListener('click', handleMore));
resetBtn.addEventListener('click', handleReset);

/* -------------------------------------------------------------------------- */
/*                                    group                                   */
/* -------------------------------------------------------------------------- */
const group = document.querySelectorAll('.group-menu__button');

// 상품 출력 순서 선택
function handleType(e) {
  e.preventDefault();
  let isActive = document.querySelector('.group-menu__button.is-active');
  let target = e.target.closest('.group-menu__button');

  if (isActive !== target) {
    target.classList.add('is-active');
    isActive.classList.remove('is-active');
  }
}

group.forEach((type) => type.addEventListener('click', handleType));

/* -------------------------------------------------------------------------- */
/*                                  Add-Cart                                  */
/* -------------------------------------------------------------------------- */
const bodyTag = document.querySelector('body');
const cartBtn = document.querySelectorAll('.visual__icon');
const addCart = document.querySelector('.add-cart');
const cancelCart = document.querySelector('.add-cart__cancelBtn');
const okayCart = document.querySelector('.add-cart__addCartBtn');

const addCartMinus = document.querySelector('.add-cart__minus-icon');
const addCartPlus = document.querySelector('.add-cart__plus-icon');
const addCartCnt = document.querySelector('.add-cart__count');
const addCartProductName = document.querySelector('.add-cart__productName');
const addCartProductPrice = document.querySelector('.add-cart__productPrice');
const addCartTotalPrice = document.querySelector('.add-cart__totalPrice');

let cnt = 0;

function handleAddCartChange() {
  const regex = /[^0-9]/g;
  const beforePrice = addCartProductPrice.innerText;
  const regexPrice = beforePrice.replace(regex, '');
  const price = parseInt(regexPrice);

  let result = price * cnt;

  addCartCnt.innerText = cnt;
  addCartTotalPrice.innerText = `${result.toLocaleString()}원`;
}

function handleAddCartMinus() {
  if (!cnt) {
    return;
  } else {
    cnt--;
  }
  handleAddCartChange();
}

function handleAddCartPlus() {
  cnt++;
  handleAddCartChange();
}

function handlerCancelCart() {
  addCart.classList.remove('is-active');
  bodyTag.style.overflow = 'auto';

  cnt = 0;
  handleAddCartChange();
}

for (let i = 0; i < cartBtn.length; i++) {
  cartBtn[i].addEventListener('click', async function () {
    addCart.classList.toggle('is-active');
    bodyTag.style.overflow = 'hidden';

    // JSON 읽기
    let response = await fetch('http://localhost:3000/products');
    let product = await response.json();

    addCartProductName.innerText = `${product[i].name}`;

    if (product[i].salePrice) {
      addCartProductPrice.innerText = `${product[i].salePrice.toLocaleString()}윈`;
    } else {
      addCartProductPrice.innerText = `${product[i].price.toLocaleString()}윈`;
    }
  });
}

// LocalStorage 147 ~ 190
let beforeKey;
let beforeValue = [];

function handleTimeStamp() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const hours = today.getHours();

  const nowArr = [year, month, day, hours];
  const key = nowArr.join('-');

  if (beforeKey !== key) {
    beforeKey = key;
    beforeValue = [];
  }
}

function handleInputStorage() {
  localStorage.setItem(beforeKey, JSON.stringify(beforeValue));
}

async function handleOkayAddCart() {
  // JSON 읽기
  let response = await fetch('http://localhost:3000/products');
  let products = await response.json();

  handleTimeStamp();

  for (let i = 0; i < products.length; i++) {
    if (products[i].name === addCartProductName.innerText) {
      beforeValue.push({
        id: products[i].id,
        name: products[i].name,
        price: addCartProductPrice.innerText,
        cnt: addCartCnt.innerText,
      });
    }
  }

  handleInputStorage();
}

cancelCart.addEventListener('click', handlerCancelCart);
addCartPlus.addEventListener('click', handleAddCartPlus);
addCartMinus.addEventListener('click', handleAddCartMinus);
okayCart.addEventListener('click', handleOkayAddCart);

/* -------------------------------------------------------------------------- */
/*                                  Product List                                 */
/* -------------------------------------------------------------------------- */
const product = document.querySelectorAll('.slide');

async function handlerList(num, node) {
  // JSON 읽기
  let response = await fetch('http://localhost:3000/products');
  let user = await response.json();

  // slide__product
  let productImg = node.querySelector('.visual-img');
  productImg.src = `../assets/${user[num].image.thumbnail}`;

  // slide__info
  let slideInfoDiv = document.createElement('div');
  node.append(slideInfoDiv);
  slideInfoDiv.setAttribute('class', 'slide__info');
  const slideInfo = node.querySelector('.slide__info');

  // info-text
  let infoTextSpan = document.createElement('span');
  slideInfo.append(infoTextSpan);
  infoTextSpan.setAttribute('class', 'info-text');
  const infoText = slideInfo.querySelector('.info-text');
  infoText.innerText = '샛별배송';

  // info-productName
  let infoProductNameSpan = document.createElement('span');
  slideInfo.append(infoProductNameSpan);
  infoProductNameSpan.setAttribute('class', 'info-productName');
  const infoProductName = slideInfo.querySelector('.info-productName');
  infoProductName.innerText = `${user[num].name}`;

  // info-price
  let infoPriceSpan = document.createElement('span');
  let infoSalePriceDiv = document.createElement('div');
  let infoSaleSpan = document.createElement('span');

  let infoOriginPriceDiv = document.createElement('div');
  let infoOriginPriceSpan = document.createElement('span');
  let infoOriginPriceRecDiv = document.createElement('div');

  if (user[num].salePrice) {
    // saleRatio, salePrice
    slideInfo.append(infoSalePriceDiv);
    infoSalePriceDiv.setAttribute('class', 'info-salePrice');
    const infoSalePrice = slideInfo.querySelector('.info-salePrice');

    infoSalePrice.appendChild(infoSaleSpan);
    infoSalePrice.appendChild(infoPriceSpan);
    infoSaleSpan.setAttribute('class', 'info-sale');
    infoPriceSpan.setAttribute('class', 'info-price');

    const infoSale = slideInfo.querySelector('.info-sale');
    const infoPrice = slideInfo.querySelector('.info-price');

    infoSale.innerText = `${Math.floor(user[num].saleRatio * 100)}%`;
    infoPrice.innerText = `${user[num].salePrice.toLocaleString()} 원`;

    // originalPrice
    slideInfo.append(infoOriginPriceDiv);
    infoOriginPriceDiv.setAttribute('class', 'info-originPrice');
    const infoOriginPrice = slideInfo.querySelector('.info-originPrice');

    infoOriginPrice.appendChild(infoOriginPriceSpan);
    infoOriginPrice.appendChild(infoOriginPriceRecDiv);
    infoOriginPriceSpan.setAttribute('class', 'info-originPrice__price');
    infoOriginPriceRecDiv.setAttribute('class', 'info-originPrice__rectangle');

    const infoOriginPriceNum = slideInfo.querySelector('.info-originPrice__price');
    infoOriginPriceNum.innerText = `${user[num].price.toLocaleString()} 원`;
  } else {
    slideInfo.append(infoPriceSpan);
    infoPriceSpan.setAttribute('class', 'info-price');
    const infoPrice = slideInfo.querySelector('.info-price');

    infoPrice.innerText = `${user[num].price.toLocaleString()} 원`;
  }

  // info-info
  let infoInfoSpan = document.createElement('span');
  slideInfo.append(infoInfoSpan);
  infoInfoSpan.setAttribute('class', 'info-info');
  const infoInfo = slideInfo.querySelector('.info-info');
  infoInfo.innerText = `${user[num].description}`;

  // karlyBadge 출력, 조건 재고 5개 이하
  if (user[num].stock <= 5) {
    let infoBadgeDiv = document.createElement('div');
    let karlyBadgeDiv = document.createElement('div');
    let textBadgeDiv = document.createElement('div');

    let karlyBadgeSpan = document.createElement('span');
    let textBadgeSpan = document.createElement('span');

    slideInfo.append(infoBadgeDiv);
    infoBadgeDiv.setAttribute('class', 'info-badge');
    const infoBadge = slideInfo.querySelector('.info-badge');

    infoBadge.append(karlyBadgeDiv);
    infoBadge.append(textBadgeDiv);
    karlyBadgeDiv.setAttribute('class', 'karlyBadge');
    textBadgeDiv.setAttribute('class', 'textBadge');
    const karlyBadge = slideInfo.querySelector('.karlyBadge');
    const textBadge = slideInfo.querySelector('.textBadge');

    karlyBadge.append(karlyBadgeSpan);
    karlyBadgeSpan.setAttribute('class', 'karlyBadge__text');
    const karlyBadgeText = slideInfo.querySelector('.karlyBadge__text');
    karlyBadgeText.innerText = 'Karly Only';

    textBadge.append(textBadgeSpan);
    textBadgeSpan.setAttribute('class', 'textBadge__text');
    const textBadgeText = slideInfo.querySelector('.textBadge__text');
    textBadgeText.innerText = `${user[num].stock}개 남음`;
  }
}

for (let i = 0; i < product.length; i++) {
  handlerList(i, product[i]);
}
