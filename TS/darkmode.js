var darkmode = '<link rel="stylesheet" type="text/css" href="SASS/darkmode.css">';
var darkmode2 = '<link rel="stylesheet" type="text/css" href="../SASS/darkmode.css">';
var i = 0;
var enable = function (i) {
    if (i % 2 == 0) {
        $("head").append(darkmode);
        $("head").append(darkmode2);
    }
    else
        return false;
};
$("#darkModeToggle").on("click touch", function () {
    enable(i);
    i++;
});
