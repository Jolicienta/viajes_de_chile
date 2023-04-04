$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
       $("nav").addClass("navbar_dark");
    }else{
       $("nav").removeClass("navbar_dark");
    }
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
