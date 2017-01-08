/**** main container ****/
function vsSlide(){
  
  var imgArray = [
    'images/main/bg_main_v_3.png',
    'images/main/bg_main_v_2.png',
    'images/main/bg_main_v_1_1.png'],
    curIndex = 0;
    imgDuration = 10000;

  var slideFrame = document.querySelector(".visual");
  var slideWrap = document.querySelector(".visual .wrap_slide");
  var slideImg = document.querySelectorAll(".visual .wrap_slide img");
  var btnList = document.querySelectorAll(".visual .pgc_pageList > li > button");
   var btnPrev = document.querySelector(".visual .vs_pagecontrol_prev");
   var btnNext = document.querySelector(".visual .vs_pagecontrol_next");
   var btnPause = document.querySelector(".visual .vs_pagecontrol_pause");
  var schBtn = false;

  var showA = 1;
  var maxNum = slideImg.length - showA;
  var minNum = 0;
  var imgWidth = 100;
  var showNum = 0;
  var actPaging = 0;
   var autoSlide = null;
   var schBtn = false;


   function autoClick(){
      showNum++;
      if(showNum > maxNum){
          showNum = minNum
       }
      playSlideBanner(showNum);
      chPaging(showNum);
   }
   autoSlide = setInterval(autoClick, 10000);

  function playSlideBanner(num){
    document.getElementById('slider').className += "fadeOut";
    setTimeout(function() {
        document.getElementById('slider').src = imgArray[curIndex];
        document.getElementById('slider').className = "";
    },1000);
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
//console.log(curIndex);
  }

   //현재 슬라이드 버튼
  function chPaging(num){
   //console.log(curIndex);
      btnList[actPaging].setAttribute("class","");
      btnList[curIndex].setAttribute("class","on");
      actPaging = curIndex;
   }

   function vSlidNext(){
      showNum--;
      if(showNum < minNum){
         showNum = maxNum
      }
      playSlideBanner(showNum);
      chPaging(showNum);
   }
   function vSlidPrev(){
      showNum++;
      if(showNum > maxNum){
         showNum = minNum
      }
      
      playSlideBanner(showNum);
      chPaging(showNum);
   }
   function vSlidPP(e){
      schBtn = !schBtn;
      var sldImg = e.srcElement;
      console.log(sldImg);
      if(schBtn){
         clearInterval(autoSlide); 
         var imgSrc = sldImg.getAttribute("src");
         var newSrc = imgSrc.replace("pause.png","play.png");
         sldImg.setAttribute("src",newSrc);
      }else {
         clearInterval(autoSlide);
         autoSlide = setInterval(autoClick, 10000);
         var imgSrc = sldImg.getAttribute("src");
         var newSrc = imgSrc.replace("play.png","pause.png");
         sldImg.setAttribute("src",newSrc);
      }
   }

   addEvnt(btnPrev,"click",vSlidNext);
   addEvnt(btnNext,"click",vSlidPrev);
   addEvnt(btnPause,"click",vSlidPP);

  
   for(var k = 0; k < btnList.length; k++){
      (function(){
         var z = k;
         addEvnt(btnList[k],"click", function(){
           //console.log(z);
           playSlideBanner(z);
           showNum = z;
         });
      }());
   }

}
addEvnt(window,"load",vsSlide);

function festivalSlide(){
	var slideFrame = document.querySelector("#festival_slide");
	var slideUl = document.querySelector("#festival_slide > ul");
	var slideA = document.querySelectorAll("#festival_slide > ul > li > a");
	var btnList = document.querySelectorAll("#festival_slide .pgc_pageList > li > button");
   var btnPrev = document.querySelector("#festival_slide .pagecontrol_prev");
   var btnNext = document.querySelector("#festival_slide .pagecontrol_next");
   //var btnPause = document.querySelector("#festival_slide .pagecontrol_pause");

	var showA = 1;
	var maxNum = slideA.length - showA;
	var minNum = 0;
	var imgWidth = 100;
	var showNum = 0;
	var actPaging = 0;
   var autoSlide = null;
   var schBtn = false;


	function playSlideBanner(num){
		slideUl.style.marginLeft = -num * imgWidth + "%";
	}

   //현재 슬라이드 버튼
	function chPaging(num){
      btnList[actPaging].setAttribute("class","");
      btnList[num].setAttribute("class","on");
      actPaging = num;
   }

   function slidNext(){
      showNum--;
      if(showNum < minNum){
         showNum = maxNum
      }
      playSlideBanner(showNum);
      chPaging(showNum);
   }
   function slidPrev(){
      showNum++;
      if(showNum > maxNum){
         showNum = minNum
      }
      
      playSlideBanner(showNum);
      chPaging(showNum);
   }
   

   addEvnt(btnPrev,"click",slidNext);
   addEvnt(btnNext,"click",slidPrev);

  
   for(var k = 0; k < btnList.length; k++){
      (function(){
         var z = k;
         addEvnt(btnList[k],"click", function(){
           //console.log(z);
           playSlideBanner(z);
           showNum = z;
         });
      }());
   }
}
addEvnt(window,"load",festivalSlide);

function etcSlide(){
   var slideFrame = document.querySelector("#main_etcslide");
   var slideUl = document.querySelector("#main_etcslide > ul");
   var slideA = document.querySelectorAll("#main_etcslide > ul > li > a");
   var btnList = document.querySelectorAll("#main_etcslide .pgc_pageList > li > button");
   var btnPrev = document.querySelector("#main_etcslide .etc_pagecontrol_prev");
   var btnNext = document.querySelector("#main_etcslide .etc_pagecontrol_next");
   //var btnPause = document.querySelector("#main_etcslide .etc_pagecontrol_pause");

   var showA = 1;
   var maxNum = slideA.length - showA;
   var minNum = 0;
   var imgWidth = 100;
   var showNum = 0;
   var actPaging = 0;
   var autoSlide = null;
   var schBtn = false;

   //프래임에 마우스 오버 정지 o
   addEvnt(slideFrame,"mouseenter",function(){
      clearInterval(autoSlide);
    });
    addEvnt(slideFrame,"mouseleave",function(){
      clearInterval(autoSlide);
      autoSlide = setInterval(autoClick, 4000);
    });

   //자동재생 o
   function autoClick(){
      showNum++;
      if(showNum > maxNum){
          showNum = minNum
       }
      playSlideBanner(showNum);
      chPaging(showNum);
   }
   autoSlide = setInterval(autoClick, 4000);

   function playSlideBanner(num){
      slideUl.style.marginLeft = -num * imgWidth + "%";
   }

   //현재 슬라이드 버튼
   function chPaging(num){
      btnList[actPaging].setAttribute("class","");
      btnList[num].setAttribute("class","on");
      actPaging = num;
   }

   function slidNext(){
      showNum--;
      if(showNum < minNum){
         showNum = maxNum
      }
      playSlideBanner(showNum);
      chPaging(showNum);
   }
   function slidPrev(){
      showNum++;
      if(showNum > maxNum){
         showNum = minNum
      }
      
      playSlideBanner(showNum);
      chPaging(showNum);
   }
   

   addEvnt(btnPrev,"click",slidNext);
   addEvnt(btnNext,"click",slidPrev);

  
   for(var k = 0; k < btnList.length; k++){
      (function(){
         var z = k;
         addEvnt(btnList[k],"click", function(){
           //console.log(z);
           playSlideBanner(z);
           showNum = z;
         });
      }());
   }
}
addEvnt(window,"load",etcSlide);