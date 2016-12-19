//버튼클릭
function init(){
//****입력폼 *****
	var btns = document.querySelectorAll("#btn_js p input[type=button]");
	var oldDiv = null;
	var oldBgcBtn = null;
	var	hBtnHtml = null;
	var	hBtnC = null;
	function hoverBtn(b){
		resetTrans = this.value;
		var hoverBtnHtml = this.value ="클릭해주세요";
		this.style.color = "#fffafa";
		this.style.backgroundColor = "#d0cecd";
		this.style.borderColor = "#fffafa";
		resetBtnTrans = hoverBtnHtml;
	}
	function leaveBtn(b){
		if(resetBtnTrans){
			var th = b.srcElement;
			th.value = resetTrans;
			th.style.color = "#525252";
			th.style.backgroundColor="#fffafa";
			th.style.borderColor ="#d0cecd";
		}
	}
 //-div 열고 닫기 
	resetBtnTrans = null;
	function showDiv(d){	
		var h5 = d.srcElement;
		if(oldDiv){
			oldDiv.style.display = "none";
			oldDiv = null;
		}
		var div = nextElement(h5.parentNode);
		var openDiv = div;//??
		if(openDiv){
			openDiv.style.display = "block";
			oldDiv = openDiv;
		}
	}
	var offActiveBtn = null;
	function activBtn(b){
		var onActiveBtn = b.srcElement;
			onActiveBtn.setAttribute("class","on");
		if(offActiveBtn){
			offActiveBtn.setAttribute("class","");
		}
		offActiveBtn = onActiveBtn;
	}
 //-/div 열고 닫기 
	
	/* submit으로 닫기 */
	var submit = document.querySelector("#btn_js input[type=submit]");
	function closeDiv(){
		oldDiv.style.display = "none";
		oldDiv = null;
	}
	addEvnt(submit, "click", closeDiv);

 //-.trans 선택 글자 나타내기*/
	var area1 = document.querySelectorAll(".area1 ul > li >  input[type=button]");
	var area2 = document.querySelectorAll(".area2 ul > li >  input[type=button]");
	var time1 = document.querySelectorAll(".time1 ul > li >  input[type=button]");
	var time2 = document.querySelectorAll(".time2 ul > li >  input[type=button]");
	var time3 = document.querySelectorAll(".time3 ul > li >  input[type=button]");
	var time4 = document.querySelectorAll(".time4 ul > li >  input[type=button]");
 
	for(var i = 0; i < area1.length; i++){
		(function(){
			var t = i;
			function show(t){
			var eventI = t.srcElement;
			var showarea1 = eventI.value;
			btns[0].value = showarea1;
			}
			addEvnt(area1[i], "click", show);
		}());
	}
	for(var i = 0; i < area2.length; i++){
		(function(){
			var t = i;
			function show(t){
			var eventI = t.srcElement;
			var showarea2 = eventI.value;
			btns[1].value = showarea2;
			}addEvnt(area2[i], "click", show);
		}());
	}

	for(var i = 0; i < time1.length; i++){
		(function(){
			var t = i;
			function show(t){
			var eventI = t.srcElement;
			var showtime1 = eventI.value;
			btns[2].value = showtime1;
			}addEvnt(time1[i], "click", show);
		}());
	}
	for(var i = 0; i < time2.length; i++){
		(function(){
			var t = i;
			function show(t){
			var eventI = t.srcElement;
			var showtime2 = eventI.value;
			btns[3].value = showtime2;
			}addEvnt(time2[i], "click", show);
		}());
	}
	for(var i = 0; i < time3.length; i++){
		(function(){
			var t = i;
			function show(t){
			var eventI = t.srcElement;
			var showtime3 = eventI.value;
			btns[4].value = showtime3;
			}addEvnt(time3[i], "click", show);
		}());
	}
	for(var i = 0; i < time4.length; i++){
		(function(){
			var t = i;
			function show(t){
			var eventI = t.srcElement;
			var showtime4 = eventI.value;
			btns[5].value = showtime4;
			}addEvnt(time4[i], "click", show);
		}());
	}

	for(var i = 0; i < btns.length; i++){
		addEvnt(btns[i], "click", showDiv);
		addEvnt(btns[i], "click", activBtn);
		addEvnt(btns[i], "mouseover", hoverBtn);
		addEvnt(btns[i], "mouseout", leaveBtn);
	}
 //-/trans 선택 글자 나타내기*/

 //-인원합치기
	var nbpTxt = document.querySelectorAll(".sec_7 > ul > li > input[type=number]");
	function nbPAdd(){
		var nbP1 = Number(document.getElementById("nbP1").value);
		var nbP2 = Number(document.getElementById("nbP2").value);
		var nbP3 = Number(document.getElementById("nbP3").value);
		if(nbP1 != null && nbP2 != null && nbP3 != null ){
			var nbPTotal = nbP1 + nbP2 + nbP3;
			document.getElementById("nbPTotal").value = nbPTotal;
		}
	};
	for(var i = 0; i < nbpTxt.length; i++ ){
		addEvnt(nbpTxt[i],"keyup click",nbPAdd);
	}
 //-/인원합치기

 //-체크박스
	var chkboxBtn = document.querySelectorAll(".sec_8 > p > label");
	var offchkboxBtn = null;
	function chkboxChk(b){
		var onchkboxBtn = b.srcElement;
			onchkboxBtn.setAttribute("class","on");
		if(offchkboxBtn){
			offchkboxBtn.setAttribute("class","");
		}
		offchkboxBtn = onchkboxBtn;
	}
	for(var i = 0; i < chkboxBtn.length; i++){
		addEvnt(chkboxBtn[i],"click", chkboxChk);
	}
 //-/체크박스

 //-정규표현
	var loginWrap = document.querySelector("#loginWrap");
	function loginAlt (a, b) {
		alert("로그인 정보가 일치하지 않습니다.")
			a.value ="";
			b.value ="";
			a.focus();
	};
	var submitLogin = function (e){
		e.preventDefault();

		//////
		var user_id = this.user_id;
		var reg_id = /^[a-z]{1}\w{7,11}$/;
		var result_id = reg_id.exec(user_id.value);
		
		var user_pw = this.user_pw;
		var reg_pw = /^\w{6,12}$/g;
		var result_pw = reg_pw.exec(user_pw.value);
		if(result_id == null){
			alert("아이디 형식이 잘못되었습니다.");
			user_id.value = "";
      user_id.focus();  
			if(result_pw == null){
				alert("비밀번호 형식이 잘못되었습니다.");
				user_pw.value = "";
				user_pw.focus();
			}
			return false;
		}
		/////
		var id_1 = "abcde2016";
		var pw_1 = "1234567";
		var input_id = loginWrap.user_id;
		var input_pw = loginWrap.user_pw;

		if(input_id.value == id_1){
			if(input_pw.value !== pw_1){
				loginAlt(input_id, input_pw);
				return false;
			}
			alert("환영합니다.")
		}else {
			loginAlt(input_id, input_pw);
			return false;
		}
		loginWrap.submit();
	}
	//loginWrap.onsubmit = submitLogin;
 //-/정규표현


//****설명박스***
	var btnInfo = document.querySelector(".sub_reserv_info > p > input[type=button]");
	var offInfodiv = false;
	function showInfo(d){	
		var div = document.querySelector(".sub_reserv_info > div");
		var openInfoDiv = div;//??
		offInfodiv = !offInfodiv;
		if(offInfodiv){
			openInfoDiv.style.display = "block";
		} else {
			openInfoDiv.style.display = "none";
		}
	}
	addEvnt(btnInfo, "click", showInfo);
//****//설명박스***
	
}

addEvnt(window,"load",init);