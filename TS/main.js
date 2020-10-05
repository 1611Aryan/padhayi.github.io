var toggle = $("#toggle");
var seasame = $("#seasame");
var header = $("header");
var vanish = function () {
    if (seasame.css("display") != "none") {
        seasame.hide("swing");
        //remove the X
        toggle.toggleClass("fas fa-times ");
        //insert the hamburger
        toggle.toggleClass("fas fa-bars ");
    }
};
toggle.click(function () {
    seasame.toggle("swing");
    //remove the hamburger
    toggle.toggleClass("fas fa-bars ");
    //insert the X
    toggle.toggleClass("fas fa-times");
});
seasame.on("mouseleave", vanish);
