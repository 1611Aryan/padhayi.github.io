var toggle = $("#toggle");
var seasame = $("#seasame");
var vh = window.innerHeight;
var radius = 2.5 * vh + "px";
toggle.click(function () {
    seasame.toggle("swing");
    toggle.toggleClass("fas fa-times");
    toggle.toggleClass("fas fa-bars");
});
