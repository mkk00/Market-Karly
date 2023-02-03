import { getNode } from '../../lib/index.js';

/* -------------------------------------------------------------------------- */
/*                                   header                                   */
/* -------------------------------------------------------------------------- */


// 새로고침시 스크롤 내려감 방지
window.onload = () =>{
  setTimeout(scrollTo(0,0),100)
}

// 새로고침시 스크롤 복원 비활성화
history.scrollRestoration = "manual"



// {#ddd} top banner close

const $topBanner = getNode('.top-banner');
const $topBannerCloseBtn = getNode('.top-banner__close-btn');

function topBannerClose(){
  $topBanner.style.transitionDuration="300ms"
  $topBanner.style.height = 0;  
}

$topBannerCloseBtn.addEventListener('click', topBannerClose)
