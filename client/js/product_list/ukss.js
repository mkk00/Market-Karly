// import { getNode } from '../../lib/index.js';

/* -------------------------------------------------------------------------- */
/*                                product_list                                */
/* -------------------------------------------------------------------------- */

const checkBtn = document.querySelectorAll('.accordion_item__inputCheck');
const moreBtn = document.querySelectorAll('.accordion_head__btn');
const resetBtn = document.querySelector('.frame70__btn');

function handleCheckbox(e) {
  e.preventDefault();
  let select = e.target.closest('.accordion_item__checkbox');

  select.classList.toggle('is-active');
}

function handleMore(e) {
  e.preventDefault();
  let more = e.target.closest('.accordion_set');

  more.classList.toggle('is-active');
}

function handleReset(e) {
  e.preventDefault();
  let active = document.querySelectorAll('.accordion_set .is-active');
  let activeArr = Array.from(active);

  activeArr.forEach((active) => active.classList.remove('is-active'));
}

checkBtn.forEach((check) => check.addEventListener('click', handleCheckbox));
moreBtn.forEach((set) => set.addEventListener('click', handleMore));
resetBtn.addEventListener('click', handleReset);
