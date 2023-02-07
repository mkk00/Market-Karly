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

ptn1.addEventListener('click', function(){
  answer1.innerHTML=(parseInt(answer1.innerHTML)+1);
  money1.innerHTML=(parseInt(money1.innerHTML)+4980)+'원';
});
mtn1.addEventListener('click',function(){
  answer1.innerHTML=parseInt((answer1.innerHTML)-1);
  money1.innerHTML=parseInt((money1.innerHTML)-4980);
})

ptn2.addEventListener('click', function(){
  answer2.innerHTML=(parseInt(answer2.innerHTML)+1);
  money2.innerHTML=(parseInt(money2.innerHTML)+4980);
});
mtn2.addEventListener('click',function(){
  answer2.innerHTML=parseInt((answer2.innerHTML)-1);
  money2.innerHTML=parseInt((money2.innerHTML)-4980);
})

let allchecker=document.getElementsByName('checker');
let selectall=document.getElementById('checker1');
selectall.addEventListener('change',function(){
  
    allchecker='checked';
  
});


/* $('#checker1').on("click", "#checker1", function(){
  let checked=$(this).is(":checked");

  if(checked){
    $(this).parents(".box-big").find('input').prop("checked",true);
  }else{
    $(this).parents(".box-big").find('input').prop("checked",false);
  }
}); */
