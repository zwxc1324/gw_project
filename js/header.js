/**** header javascript ****/
function headerInit(){

	var logoImg = document.querySelector("h1>a>img");
	var lang = document.querySelector("#header h3>a");
	var m_gnb = document.querySelector("h2 > .m_gnb");
	var gnb = document.querySelector("#gnb");
	var gnbAs = document.querySelectorAll("#gnb>ul>li>a");
	var lnbs = document.querySelectorAll(".lnb");
	var resLogo = null;
	var blockUl = null;
	var blockGnb = null;
	var onLnbA = null;
	var blockLnb = null;
// console.log(lang);

	/* 랭귀지 오픈 */	
	function openLang(l){
		var actLang = l.srcElement;	
		var h3 = actLang.parentNode;
		var actUl = nextElement(h3);
		if(blockUl){
			actUl.style.display = "none";
			blockUl = null;
		}else{
			actUl.style.display = "block";
			blockUl = actUl;
		}
	}
	addEvnt(lang, "click", openLang);


	/* h1이미지 변경 */
	/*
	var width = window.innerWidth;
	
	if(width < 800){
		var srcLogo = logoImg.getAttribute("src");
		var newSrc = srcLogo.replace(".gif","_res.gif");
		logoImg.setAttribute("src", newSrc);
		resLogo = logoImg;
	}
	*/
	/*	
	function resWidth(){
			if(width < 800){
				console.log(logoImg);
				var srcLogo = logoImg.getAttribute("src");
				var newSrc = srcLogo.replace(".gif","_res.gif");
				logoImg.setAttribute("src", newSrc);
				resLogo = logoImg;
			}
	}
	addEvnt(width, "move", resWidth)	
	*/

	/* 쥐앤비 오픈 했을 때 height 내려오기*/
		
	/* 쥐앤비 오픈 */
	function openGnb(){
		if(blockGnb){
			gnb.style.display = "none";
			blockGnb = null;
		}else{
			gnb.style.display = "block";
			blockGnb = gnb;
		}
	}
	addEvnt(m_gnb, "click", openGnb);
	

	/* 섭에 컬러 넣기  && 섭 오픈*/
	for(var i = 0; i < gnbAs.length; i++){
		(function(){
			var a = i;
			function colorLnb(){
				if(onLnbA){
					onLnbA.setAttribute("class","");
					onLnbA = null;
					colorLnb();
				}else{
					gnbAs[a].setAttribute("class","on");
					onLnbA = gnbAs[a];
				}
			}
			addEvnt(gnbAs[i], "click mouseover", colorLnb);

			/* 섭 펼치기*/
			function openLnb(){
				var openA = nextElement(gnbAs[a]);
				if(openA.style.display === "block"){
					openA.style.display = "none";
					//blockLnb = null;
				}else{
					openA.style.display = "block";
					//blockLnb = openA;
				}
			}
			addEvnt(gnbAs[i], "click", openLnb);
		}());
	}

	

	
}
addEvnt(window, "load", headerInit);
//주소를 알면 값을 바꿀 수 있고 , 값을 알면 값을 못 바꾼다. 
