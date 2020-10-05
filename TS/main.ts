const toggle = $("#toggle");
const seasame = $("#seasame");
const header = $("header");

const vanish = () => {
  if (seasame.css("display") != "none") {
    seasame.hide("swing");
    //remove the X
    toggle.toggleClass("fas fa-times ");
    //insert the hamburger
    toggle.toggleClass("fas fa-bars ");
  }
};

toggle.click(() => {
  seasame.toggle("swing");
  //remove the hamburger
  toggle.toggleClass("fas fa-bars ");
  //insert the X
  toggle.toggleClass("fas fa-times");
});

seasame.on("mouseleave", vanish);
