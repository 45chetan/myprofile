
document.addEventListener("DOMContentLoaded", function() {
    var nav = document.getElementsByClassName('nav')[0];
    //console.log(nav);
    var collapse= document.getElementById('navbarNav')
    var top= document.getElementById('top')
    window.onscroll = function () { 
        if (window.scrollY > 0) {
            nav.classList.add("nav-colored");
            nav.classList.remove("nav-transparent");
            navbarNav.classList.add("nav-colored");
            navbarNav.classList.remove("nav-transparent");

        } else {
            nav.classList.remove("nav-colored");
            nav.classList.add("nav-transparent");
            navbarNav.classList.remove("nav-colored");
            navbarNav.classList.add("nav-transparent");
        }
        if (window.scrollY > 0)
            {
                top.classList.remove("hide")
                top.classList.add("show")
            }
        if(window.scrollY == 0)
            {
                top.classList.remove("show")
                top.classList.add("hide")
            }
    };
  });

