
import { 
  getNode,
  insertLast, 
  getNodes, 
  getInputValue, 
  attr,
  removeClass,
  addClass,
  disableElement
} from '../../lib/index.js';


/* -------------------------------------------------------------------------- */
/*                                  register                                  */
/* -------------------------------------------------------------------------- */


// 회원가입 

// function vaildation() {
  let inputCheck = getNodes('.input-box')
  let idCheck = getNode('#user-id');
  let pwCheck = getNode('#user-pw');
  let pwVerify = getNode('#verify-pw');
  let emailCheck = getNode('#user-email');
  let userIdCheck = getNode('.join-error__text-red');
  let joinError = getNode('.join__error');
  let verifyButton = getNode('.verify-button');

  // input value 값 넣기
  function inputHandler(e) {
    // e.target()
    let test = e.target.closest(".input-box")
    test.setAttribute("value", e.target.value);

  }

  inputCheck.forEach((input) => input.addEventListener("change", inputHandler))
  

  // insertLast로 에러메시지 넣기 
  
  // 아이디 검사
  idCheck.addEventListener('keyup', (event) => {
    idValidation();
  })



  function idValidation() {
    const REGID = (/^[a-zA-Z0-9]{4,16}$/); // id 영문대문자와 소문자 6자리 이상 16자리 이하
    if(idCheck.value.length < 6 || !idCheck.value.match(REGID)){
      addClass(userIdCheck,'is-active');
      userIdCheck.innerText = '6자리 이상 16자 이하의 영문과 숫자를 조합';
      joinError.style.marginBottom = '0px'; 
      return false
    }
    removeClass(userIdCheck,'is-active');
    userIdCheck.innerText = '';
    joinError.style.marginBottom = '0px';
  }

  // 아이디 중복검사

  function clickIdHandler(e){
    e.preventDefault();
    let button = e.target.closest(".verify-button")
    const REGID = (/^[a-zA-Z0-9]{4,16}$/); // id 영문대문자와 소문자 6자리 이상 16자리 이하
    if(idCheck.value.length < 6 || !idCheck.value.match(REGID)){
      button.disabled = false;
      return false;
    }     
    alert('아이디를 사용 할 수 있습니다.')  
  }


  verifyButton.addEventListener('click',clickIdHandler)



  // 비밀번호 검사


  // 비밀번호 확인



// 이메일 확인






