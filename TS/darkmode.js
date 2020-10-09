var checkbox = document.querySelector("input[name=theme]");
//?Checks if dark mode was turned on previous page or if page was refreshed//
window.onload = function () {
    if (getTheme() == "dark") {
        document.documentElement.setAttribute("data-theme", getTheme());
        document.getElementById("switch").checked = true;
    }
};
//?switch toggle event//
checkbox.addEventListener("change", function () {
    if (this.checked) {
        trans();
        document.documentElement.setAttribute("data-theme", "dark");
        setTheme("dark");
        console.log(getTheme());
    }
    else {
        trans();
        document.documentElement.setAttribute("data-theme", "light");
        setTheme("light");
        console.log(getTheme());
    }
});
//?saves current theme value//
var setTheme = function (theme) {
    sessionStorage.setItem("theme", theme);
};
//?gets current theme value//
var getTheme = function () {
    return sessionStorage.getItem("theme");
};
//?smoothes the change of theme//
var trans = function () {
    document.documentElement.classList.add("transition");
    window.setTimeout(function () {
        document.documentElement.classList.remove("transition");
    }, 1000);
};
