const toggle = $("#toggle");
const seasame = $("#seasame");
const vh = window.innerHeight;
const radius = 2.5 * vh + "px";
toggle.click(() => {
  seasame.toggle("swing");
  toggle.toggleClass("fas fa-times");
  toggle.toggleClass("fas fa-bars");
});
