function init() {
        var btn_tab = document.querySelectorAll(".res_wrap h4 button");

        for (var i = 0; i < btn_tab.length; i++) {
            (function() {
                var num = i;
                addEvnt(btn_tab[i], "click", function() {

                    var res_div = document.querySelectorAll(".res_wrap >div");
                    for (var i = 0; i < res_div.length; i++) {
                        if (i == num) {
                            res_div[i].style.display = "block";
                            btn_tab[i].setAttribute("class", "on");
                        } else {
                            res_div[i].style.display = "none";
                            btn_tab[i].setAttribute("class", "");
                        }
                    }
                });
            }());
        }

    }
    addEvnt(window, "load", init)