var init = function() {
           var btn_tab = document.querySelectorAll(".contents_main h4 button");

           for (var i = 0; i < btn_tab.length; i++) {

            (function() {
                var num = i;
                addEvnt(btn_tab[i], "click", function() {
                    var notice = document.querySelector(".contents_main");
                    var notice_div = document.querySelectorAll(".contents_main>div");
                    for (var i = 0; i < notice_div.length; i++) {
                        if (i == num) {
                            notice_div[i].style.display = "block";
                            btn_tab[i].setAttribute("class", "on");
                        } else {
                            notice_div[i].style.display = "none";
                            btn_tab[i].setAttribute("class", "");
                        }
                    }
                });
            }());
            (function() {
                var num = i;
                addEvnt(btn_tab[i], "focus", function() {
                    var notice = document.querySelector(".contents_main");
                    var notice_div = document.querySelectorAll(".contents_main>div");
                    for (var i = 0; i < notice_div.length; i++) {
                        if (i == num) {
                            notice_div[i].style.display = "block";
                            btn_tab[i].setAttribute("class", "on");
                        } else {
                            notice_div[i].style.display = "none";
                            btn_tab[i].setAttribute("class", "");
                        }
                    }
                });
            }());
        }
    }


    addEvnt(window, "load", init);