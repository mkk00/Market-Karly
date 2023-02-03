import { getNode } from '../../lib/index.js';

/* -------------------------------------------------------------------------- */
/*                                product_list                                */
/* -------------------------------------------------------------------------- */
const brandCheck = getNode('.accordion_item__inputCheck');

function handleBrand(e) {
  e.preventDefault();
  console.log(brandCheck);
}

brandCheck.addEventListener('click', handleBrand);
