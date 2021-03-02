AOS.init();

window.onscroll = function () {
  scrollDocument();
  activateAOS();
};
function activateAOS() {
  var windowWidth = $(window).width();
  var offset = windowWidth > 767 ? 200 : 100;
  AOS.init({
    easing: "ease-out-back",
    offset: offset,
    duration: 700,
    once: true,
  });
}
// Animation of Navbar
function scrollDocument() {

  if ($(this).scrollTop() != 0) {
    var navbar = document.getElementById("nav");
    navbar.classList.add("activeNavbar");
    $(".login-btn").css("borderColor", "#DF2B5C");
    $(".lang").css("color", "#333");
    $(".dropdown-toggle").css("color", "#333");

    var navLink = document.getElementsByClassName("nav-link");
    for (var i = 0; i < navLink.length; i++) {
      navLink[i].style.color = "#333";
    }
  }
  $(window).scroll(() => {
    const scroll_value = $(this).scrollTop();
    if (scroll_value != 0) {
      navbar.classList.add("activeNavbar");
    } else {
      navbar.classList.remove("activeNavbar");
      var navLink = document.getElementsByClassName("nav-link");

      for (var i = 0; i < navLink.length; i++) {
        navLink[i].style.color = "#fff";
        $(".login-btn").css("borderColor", "#fff");
        $(".lang").css("color", "#fff");
        $(".dropdown-toggle").css("color", "#fff");
      }
    }
  });
}

// WOW ANIMATION
// new WOW({ mobile: false }).init();

// add active class to navbar link

$(".nav-link").click(function () {
  $(".nav-link:not(this)").removeClass("active-link");
  $(this).addClass("active-link");
});

// add active class to img pages app

$(".app-pages .row .col figure img").click(function () {
  $(".app-pages .row .col figure img:not(this)").removeClass("active-pages");
  $(this).addClass("active-pages");
});


