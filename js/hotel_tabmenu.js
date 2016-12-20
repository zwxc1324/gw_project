function init() {
		var btn_tab = document.querySelectorAll(".hotel_wrap .h_btn_1>button,.hotel_wrap .h_btn_2>button,.hotel_wrap .h_btn_3>button");

			for(var i = 0;i < btn_tab.length; i++){
				(function(){
					var num = i;
					addEvnt(btn_tab[i],"click",function(){
						var hotel = document.querySelector(".hotel_wrap");
						var hotel_div = hotel.querySelectorAll(".h_tab_1,.h_tab_2,.h_tab_3");
						for(var i = 0; i < hotel_div.length; i++){
							if(i == num){
								hotel_div[i].style.display = "block";
								btn_tab[i].setAttribute("class","on");
							}else{
								hotel_div[i].style.display = "none";
								btn_tab[i].setAttribute("class","");
							}
						}
					});
				}());
			}

	}
	addEvnt(window,"load",init)