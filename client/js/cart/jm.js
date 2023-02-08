let cartive=document.getElementById("cart-active");
let test=document.getElementById("actbtn");
test.addEventListener('click',function(){
  if(cartive.style.display=='none'){
    cartive.style.display='flex';
  }else{
    cartive.style.display='none';
  }
});

let answer1=document.getElementById('result-1');
let answer2=document.getElementById('result-2');
let money1=document.getElementById('money-1');
let money2=document.getElementById('money-2');
let ptn1=document.getElementById('pbtn-1');
let ptn2=document.getElementById('pbtn-2');
let mtn1=document.getElementById('mbtn-1');
let mtn2=document.getElementById('mbtn-2');
let smoney=document.getElementById('s-money');
let fmoney=document.getElementById('f-money');

ptn1.addEventListener('click', function(){
  answer1.innerHTML=(parseInt(answer1.innerHTML)+1);
  money1.innerHTML=(parseInt(money1.innerHTML)+4980)+'원';
  smoney.innerHTML=(parseInt(smoney.innerHTML)+4980)+'원';
  fmoney.innerHTML=(parseInt(fmoney.innerHTML)+4980);
});
mtn1.addEventListener('click',function(){
  answer1.innerHTML=(parseInt(answer1.innerHTML)-1);
  money1.innerHTML=(parseInt(money1.innerHTML)-4980)+'원';
  smoney.innerHTML=(parseInt(smoney.innerHTML)-4980)+'원';
  fmoney.innerHTML=(parseInt(fmoney.innerHTML)-4980);
})

ptn2.addEventListener('click', function(){
  answer2.innerHTML=(parseInt(answer2.innerHTML)+1);
  money2.innerHTML=(parseInt(money2.innerHTML)+4980)+'원';
  smoney.innerHTML=(parseInt(smoney.innerHTML)+4980)+'원';
  fmoney.innerHTML=(parseInt(fmoney.innerHTML)+4980);
});
mtn2.addEventListener('click',function(){
  answer2.innerHTML=(parseInt(answer2.innerHTML)-1);
  money2.innerHTML=(parseInt(money2.innerHTML)-4980)+'원';
  smoney.innerHTML=(parseInt(smoney.innerHTML)-4980)+'원';
  fmoney.innerHTML=(parseInt(fmoney.innerHTML)-4980);
})

let allchecker=document.getElementsByName('checker');
let selectall=document.getElementById('checker1');
let checker3=document.getElementById('checker3');
let checker4=document.getElementById('checker4');

selectall.addEventListener('change',function(){
  checker3.innerHTML='change';
});


/* $('#checker1').on("click", "#checker1", function(){
  let checked=$(this).is(":checked");

  if(checked){
    $(this).parents(".box-big").find('input').prop("checked",true);
  }else{
    $(this).parents(".box-big").find('input').prop("checked",false);
  }
}); */

let x1=document.getElementById('x-1');
let x2=document.getElementById('x-2');
let aid1=document.getElementById('aid-1');
let aid2=document.getElementById('aid-2');
x1.addEventListener('click',function(){
  aid1.style.display='none';
});
x2.addEventListener('click',function(){
  aid2.style.display='none';
});

let deletebtn=document.getElementById('delbtn');
deletebtn.addEventListener('click',function(){
  
});