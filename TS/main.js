var toggle = $("#toggle");
var seasame = $("#seasame");
var header = $("header");
var ignore = function () {
    toggle.on("mouseenter", function () {
        //alert("yo");
        return false;
    });
};
//menu closing when mouse leaves menu
var vanish = function () {
    if (seasame.css("display") != "none") {
        if (toggle.mouseenter()) {
            alert("hi");
        }
        else {
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
