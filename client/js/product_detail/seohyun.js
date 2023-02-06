import { 
  getNode,
  clearContents, 
  insertFirst
} from '../../lib/dom/index.js';

/* -------------------------------------------------------------------------- */
/*                               product_detail                               */
/* -------------------------------------------------------------------------- */
const buyBtnPlus = getNode('.product__buy-btn__plus');
const buyBtnMinus = getNode('.product__buy-btn__minus');
const buyBtnNum=getNode('.product__buy-btn__num');
const buyBtnNumPrice=getNode('.product__buy-last-money');

const buyHeartBtn=getNode('.product__buy-heart-btn'); //버튼

//텍스트컨텐트
let buyBtnText = +getSpanText(buyBtnNum); 
let buyBtnPriceText = +getSpanText(buyBtnNumPrice);
let buyBtnTotalPrice=buyBtnPriceText;
/* --------------------------------------------------------------------------------------------------------------------------- */
function getSpanText(node){
  if(node.tagName !== 'SPAN') refError('getInputValue 함수는 SPAN ELEMENT만 허용합니다.')
  return node.textContent;
}
/* 수량 버튼,총합 금액 */
function handlerBuy(e){
  e.preventDefault();

  if(e.currentTarget === buyBtnPlus){
    let buyBtnTotal= ++buyBtnText;
    buyBtnTotalPrice += buyBtnPriceText;

    clearContents(buyBtnNum);
    clearContents(buyBtnNumPrice);

    buyBtnNum.textContent=buyBtnTotal;
    buyBtnNumPrice.textContent=buyBtnTotalPrice;
    
  }
  else{
    let buyBtnTotal= --buyBtnText;
    buyBtnTotalPrice -= buyBtnPriceText;

    clearContents(buyBtnNum);
    clearContents(buyBtnNumPrice);

    buyBtnNum.textContent=buyBtnTotal;
    buyBtnNumPrice.textContent=buyBtnTotalPrice;
  }
}
/* 하트 아이콘 색 변경 */
function handlerBuyHeart(e){
  let buyEmptyHeart=getNode('.product__buy-empty-heart'); //빈 하트 이미지

  if(buyHeartBtn.firstElementChild.className=="product__buy-empty-heart"){ //누른게 빈 하트면
    buyEmptyHeart.remove();
    insertFirst(buyHeartBtn,` <img class="product__buy-heart" src="../assets/icons/Icon/squre-heart.svg" alt="좋아요 아이콘"/>`);
  }
  else{
      let buyHeart=getNode('.product__buy-heart'); //색 하트 이미지

      buyHeart.remove();
      insertFirst(buyHeartBtn,` <img class="product__buy-empty-heart" src="../assets/icons/Icon/squre-empty-heart.svg" alt="빈 좋아요 아이콘"/>`);
  }
}

buyBtnPlus.addEventListener('click',handlerBuy);
buyBtnMinus.addEventListener('click',handlerBuy);

buyHeartBtn.addEventListener('click',handlerBuyHeart);
