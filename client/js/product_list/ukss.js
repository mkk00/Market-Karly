// import { getNode } from '../../lib/index.js';

/* -------------------------------------------------------------------------- */
/*                                product_list                                */
/* -------------------------------------------------------------------------- */

const checkBtn = document.querySelectorAll('.accordion_item__inputCheck');
const moreBtn = document.querySelectorAll('.accordion_head__btn');
const resetBtn = document.querySelector('.frame70__btn');
const status = document.querySelectorAll('.frame70__status');

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
  let activeArr = Array.from(active);

  activeArr.forEach((active) => active.classList.remove('is-active'));
}

// 상태 변화
export function handleStatus(e) {
  e.preventDefault();

  let list = e.target.closest('.accordion_set');
  let active = list.querySelectorAll('.is-active');
  let num = list.querySelector('.frame70__status');

  if (!active.length) {
    num.innerText = '';
  } else {
    num.innerText = active.length;
  }
}

checkBtn.forEach((check) => check.addEventListener('click', handleCheckbox));
checkBtn.forEach((check) => check.addEventListener('click', handleStatus));
moreBtn.forEach((set) => set.addEventListener('click', handleMore));
resetBtn.addEventListener('click', handleReset);
