var firstYear = document.getElementById('first');
var secondYear = document.getElementById('second');
var thirdYear = document.getElementById('third');
var setYear = function (value) {
    localStorage.setItem('year', value);
};
firstYear.addEventListener('click', function () {
    setYear('firstYear');
});
firstYear.addEventListener('touch', function () {
    setYear('firstYear');
});
secondYear.addEventListener('click', function () {
    setYear('secondYear');
});
secondYear.addEventListener('touch', function () {
    setYear('secondYear');
});
thirdYear.addEventListener('click', function () {
    setYear('thirdYear');
});
thirdYear.addEventListener('touch', function () {
    setYear('thirdYear');
});
