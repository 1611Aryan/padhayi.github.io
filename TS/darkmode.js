var darkmode = '<link rel="stylesheet" type="text/css" href="SASS/darkmode.css">';
///////////////
var darkmode2 = '<link rel="stylesheet" type="text/css" href="../SASS/darkmode.css">';
///////////////////////////
var setTheme = function (color) {
    sessionStorage.setItem("scheme", color);
};
var setCounter = function (j) {
    sessionStorage.setItem("memory", j);
};
var getTheme = function () {
    return sessionStorage.getItem("scheme");
};
var getCounter = function () {
    return sessionStorage.getItem("memory");
};
///////////////////////////
if (typeof getCounter() != "string") {
    setCounter("0");
}
///////////////////////
var i = parseInt(sessionStorage.getItem("memory"));
///////////////////
var darkCSS = function () {
    if (getTheme() == "dark") {
        $("header").append(darkmode);
        $("header").append(darkmode2);
    }
    if (getTheme() != "dark" || getTheme() == "light") {
        $(darkmode).prop("disabled", true);
        $(darkmode2).prop("disabled", true);
        if (i % 2 != 0) {
            window.location.reload();
            i++;
        }
    }
};
///////////////
var enable = function (i) {
    if (i % 2 == 0) {
        setTheme("dark");
        darkCSS();
    }
    else {
        setTheme("light");
        darkCSS();
    }
};
////////////////////////
$("#darkModeToggle").on("click touch", function () {
    enable(i);
    console.log(i);
    setCounter(i + "");
    i++;
    console.log(sessionStorage.getItem("memory"));
});
////////////////////////
setInterval(darkCSS, 10);
