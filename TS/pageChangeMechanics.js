//?pageChange
var counter = 0;
var page2 = document.getElementById('page2');
var page1 = document.getElementById('page1');
var button = document.getElementById('button');
var pageChange = function () {
    if (counter % 2 == 0) {
        page2.style.display = 'flex';
        page1.style.display = 'none';
        button.classList.toggle("fa-angle-left");
        button.classList.toggle("fa-angle-right");
        counter++;
    }
    else {
        page2.style.display = 'none';
        page1.style.display = 'flex';
        button.classList.toggle("fa-angle-left");
        button.classList.toggle("fa-angle-right");
        counter++;
    }
};
button.addEventListener("click", pageChange);
button.addEventListener("touch", pageChange);
//?
var counter2 = 0;
var hideButton = function () {
    if (counter2 % 2 == 0) {
        document.getElementById('buttons').style.opacity = ' 0';
        counter2++;
    }
    else {
        document.getElementById('buttons').style.opacity = '0.8';
        counter2++;
    }
};
document.getElementById("toggle").addEventListener("click", hideButton);
document.getElementById("toggle").addEventListener("touch", hideButton);
//?/
