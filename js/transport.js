function init(){
	/*var btns = document.querySelectorAll("#btn_js input[type=button]");
	var oldMenu = null;
	function showHide(k){//k = 객체 : 함수 () 만들고 소괄호에 글자 넣으면 함수 
		var myObj = k.srcElement;
		var myObjParent = myObj.parentNode;
		if(oldMenu) {
			oldMenu.style.display = "none";
			oldMenu = null;
		}
		var openDiv = nextElement(myObjParent);
		if(openDiv) {
			openDiv.style.display = "block";
			oldMenu = openDiv;
		}
	}*/

	//div 열고 닫기 
	var btns = document.querySelectorAll("#btn_js h5 input[type=button]");
	var btnsHtml = new Array("교통편", "출발지역", "도착지역");
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
		//클릭이 있고 리브가 일어나면 클릭을 다시 실행
		/*if(activBtn52){
			activBtn();
		}*/
		
	}
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
	
	/* submit으로 닫기 */
	var submit = document.querySelector("#btn_js input[type=submit]");
	function closeDiv(){
		oldDiv.style.display = "none";
		oldDiv = null;
	}
	addEvnt(submit, "click", closeDiv);
	/* .trans 선택 글자 나타내기*/
	var transBtns = document.querySelectorAll(".trans ul > li >  input[type=button]");
	var depBtns = document.querySelectorAll(".departure ul > li >  input[type=button]");
	var desBtns = document.querySelectorAll(".destination ul > li >  input[type=button]");
	 
	for(var i = 0; i < transBtns.length; i++){
		(function(){
			var t = i;
			function showTrans(t){
			var eventI = t.srcElement;
			var showTransBtn = eventI.value;
			btns[0].value = showTransBtn;
			}
			addEvnt(transBtns[i], "click", showTrans);
		}());
	}
	for(var i = 0; i < depBtns.length; i++){
		(function(){
			var t = i;
			function showDep(t){
			var eventI = t.srcElement;
			var showDepBtn = eventI.value;
			btns[1].value = showDepBtn;
			}addEvnt(depBtns[i], "click", showDep);
		}());
	}
	for(var i = 0; i < desBtns.length; i++){
		(function(){
			var t = i;
			function showDes(t){
			var eventI = t.srcElement;
			var showDesBtn = eventI.value;
			btns[2].value = showDesBtn;
			}addEvnt(desBtns[i], "click", showDes);
		}());
	}
	for(var i = 0; i < btns.length; i++){
		addEvnt(btns[i], "click", showDiv);
		addEvnt(btns[i], "click", activBtn);
		addEvnt(btns[i], "mouseover", hoverBtn);
		addEvnt(btns[i], "mouseout", leaveBtn);
	}
}
addEvnt(window,"load",init);