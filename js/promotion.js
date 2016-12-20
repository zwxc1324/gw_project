function init(){
	var btns =  document.querySelectorAll("#prom_req input");
	for(var i = 0; i < btns.length; i++){
		(function(){
			var b = i;
			function ChBtn(k){
				var btnR = k.srcElement;
				var btnV = btnR.getAttribute("value");
				if(btnV == "취소"){
					//var rBtn = btnV.replace("취소", "취소되었습니다");
					btnR.value = "취소되었습니다";
					//var cancelBtn = b.setAttribute("value" , rBtn);
					btnR.style.width = 90 + "px";

					/*미발송 없애기*/
					//console.log(btns[b]);
					btnR.parentNode.childNodes[0].style.display = "none";
				}else if(btnV == "취소되었습니다"){
					//var cancelBtn = btnV.replace("취소되었습니다", "취소");
					var noneBtn = btnR.value ="취소";
					btnR.style.width = 40 + "px";
					btnR.parentNode.childNodes[0].style.display = "inline";
				}
			}addEvnt(btns[i], "click", ChBtn);
		}());
	}
}addEvnt(window,"load",init);