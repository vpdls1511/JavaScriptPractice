function popup_open(){// window.open() 함수 연습
  var url = "http://ngyu.me";
  var title = "포트폴리오사이트";
  var option = "width = 650 , height = 400 , left = center , top = center , scrollbar = no , status = no , toolbox = no , location = yes"
  window.open(url , title, option);
}

function popup_alert(){ // alert() 경고창 연습
  alert("alert 연습");
}

function popup_prompt(){ // 입력 연습
  var title = prompt("문자열 작성","기본값");
  alert(title);
}

function popup_confirm(){ // 둘중에 하나만 골라 Yes or Yes(?)
  var state = confirm("Yes or No");
  alert(state);
}

popup_confirm();
