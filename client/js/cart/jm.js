var cartive=document.getElementById("cart-active");
var test=document.getElementById("actbtn");
test.addEventListener('click',function(){
  if(cartive.style.display=='none'){
    cartive.style.display='flex';
  }else{
    cartive.style.display='none';
  }
});