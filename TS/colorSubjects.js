var randColor = function () {
    var values = "1234567890ABCDEF";
    var val = values.split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += val[Math.floor(Math.random() * 16)];
    }
    if (color == "#000000") {
        return "#ffffff";
    }
    else {
        return color;
    }
};
for (var i = 1; i <= noOfSubjects; i++) {
    $("#paper:nth-child(" + i + ")").css("fill", randColor);
}
$("#streamName").css("backgroundColor", randColor);
