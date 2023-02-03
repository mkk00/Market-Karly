// import { getNode } from '../../lib/index.js';

/* -------------------------------------------------------------------------- */
/*                                product_list                                */
/* -------------------------------------------------------------------------- */

const brand = document.querySelectorAll('.accordion_item__checkbox');

function handleBrandCheck(e) {
  e.preventDefault();
  let checkBtn = e.target.closest('.accordion_item__checkbox');

  checkBtn.classList.toggle('is-active');
}

for (let i = 0; i < brand.length; i++) {
  brand[i].addEventListener('click', handleBrandCheck);
}
