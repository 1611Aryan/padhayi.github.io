//*Jquery Free
//?Generates random rgba color
var randColor = function () {
    var color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    };
    if (color.r == 0 && color.g == 0 && color.b == 0) {
        color = {
            r: 0,
            g: 0,
            b: 0
        };
    }
    return 'rgba(' + color.r * 255 + ',' + color.g * 255 + ',' + color.b * 255 + ')';
};
//?/
//? Sets the randcolor to all the stream squares
var coloredSquare = document.querySelectorAll('#coloredSquare');
coloredSquare.forEach(function (element) {
    element.style.backgroundColor = randColor();
});
//?/
