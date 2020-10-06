const toggle = $("#toggle");
const seasame = $("#seasame");
const header = $("header");
const ignore = () => {
  toggle.on("mouseenter", () => {
    //alert("yo");
    return false;
  });
};
//menu closing when mouse leaves menu
const vanish = () => {
  if (seasame.css("display") != "none") {
    if (toggle.mouseenter()) {
      alert("hi");
    } else {
      seasame.hide("swing");
      //remove the X
      toggle.toggleClass("fas fa-times ");
      //insert the hamburger
      toggle.toggleClass("fas fa-bars ");
    }
  }
};
//menu opening closing
toggle.on("click touch", function () {
  seasame.toggle("swing");
  //remove the hamburger
  toggle.toggleClass("fas fa-bars ");
  //insert the X
  toggle.toggleClass("fas fa-times");
});

//seasame.on("mouseleave", vanish);
