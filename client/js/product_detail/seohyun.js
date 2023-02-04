import { 
  getNode,
  clearContents, 
  insertLast
} from '../../lib/dom/index.js';

/* -------------------------------------------------------------------------- */
/*                               product_detail                               */
/* -------------------------------------------------------------------------- */
// -,+버튼 노드 가져오기 0
// -,+버튼 노드 값 가져오기 0

// +버튼 눌리면0
// span값 가져와서 
//  span값(숫자)값 증가
// 화면에 있는 값 지우고
// 증가한 값 뿌리기
// 화면에 뿌리기

// -버튼 눌리면 0
// span값 가져와서 span값(숫자)값 하락
const buyBtnPlus = getNode('.product__buy-btn__plus');
const buyBtnMinus = getNode('.product__buy-btn__minus');
const buyBtnNum=getNode('.product__buy-btn__num');
const buyBtnNumPrice=getNode('.product__buy-last-money');

let buyBtnText = +getSpanText(buyBtnNum); //텍스트컨텐트
// console.log('찍힘1');
let buyBtnPriceText = +getSpanText(buyBtnNumPrice);
// console.log('찍힘2');
let buyBtnTotalPrice=buyBtnPriceText;

function getSpanText(node){
  if(node.tagName !== 'SPAN') refError('getInputValue 함수는 SPAN ELEMENT만 허용합니다.')
  return node.textContent;
}
function handler(e){
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

buyBtnPlus.addEventListener('click',handler);
buyBtnMinus.addEventListener('click',handler);

// function plus(e){
//   e.preventDefault();
    
// }
// function minus(){
//   e.preventDefault();
// }
//let butBtnText = getSpanText(buyBtnNum);