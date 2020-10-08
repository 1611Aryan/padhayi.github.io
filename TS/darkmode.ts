const darkmode: string =
  '<link rel="stylesheet" type="text/css" href="SASS/darkmode.css">';
///////////////
const darkmode2 =
  '<link rel="stylesheet" type="text/css" href="../SASS/darkmode.css">';
///////////////////////////
const setTheme = (color: string) => {
  sessionStorage.setItem("scheme", color);
};
const setCounter = (j: string) => {
  sessionStorage.setItem("memory", j);
};
const getTheme = () => {
  return sessionStorage.getItem("scheme");
};
const getCounter = () => {
  return sessionStorage.getItem("memory");
};
///////////////////////////
if (typeof getCounter() != "string") {
  setCounter("0");
}
///////////////////////

let i: number = parseInt(sessionStorage.getItem("memory"));

///////////////////
const darkCSS = () => {
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
const enable = (i: number) => {
  if (i % 2 == 0) {
    setTheme("dark");
    darkCSS();
  } else {
    setTheme("light");
    darkCSS();
  }
};

////////////////////////
$("#darkModeToggle").on("click touch", () => {
  enable(i);
  console.log(i);
  setCounter(i + "");
  i++;

  console.log(sessionStorage.getItem("memory"));
});

////////////////////////

setInterval(darkCSS, 100);
