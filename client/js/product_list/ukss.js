// import { getNode } from '../../lib/index.js';

/* -------------------------------------------------------------------------- */
/*                                product_list                                */
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
