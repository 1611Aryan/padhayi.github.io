let randColor = () => {
  let values = "1234567890ABCDEF";
  let val = values.split("");
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += val[Math.floor(Math.random() * 16)];
  }
  if (color == "#000000") {
    return "#ffffff";
  } else {
    return color;
  }
};

for (let i = 1; i <= noOfSubjects; i++) {
  $("section:nth-child(" + i + ")").css("backgroundColor", randColor);
}
