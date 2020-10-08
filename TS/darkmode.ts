const darkmode: string =
  '<link rel="stylesheet" type="text/css" href="SASS/darkmode.css">';
const darkmode2 =
  '<link rel="stylesheet" type="text/css" href="../SASS/darkmode.css">';
let i = 0;
const enable = (i: number) => {
  if (i % 2 == 0) {
    $("head").append(darkmode);
    $("head").append(darkmode2);
  } else return false;
};
$("#darkModeToggle").on("click touch", () => {
  enable(i);
  i++;
});
