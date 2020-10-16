//!Jquery Free
var toggle = document.getElementById('toggle');
var seasame = document.getElementById('seasame');
var header = document.getElementById('header');
var counterNav = 0;
var navInAction = function () {
    if (counterNav % 2 == 0) {
        seasame.style.display = 'block';
        seasame.style.opacity = '1';
        //?remove the hamburger
        toggle.classList.toggle("fa-bars");
        //?insert the X
        toggle.classList.toggle("fa-times");
        counterNav++;
    }
    else {
        seasame.style.opacity = '0';
        seasame.addEventListener('webkitTransitionEnd', function (e) {
            seasame.style.display = 'none';
        });
        //?remove the hamburger
        toggle.classList.toggle("fa-bars");
        //?insert the X
        toggle.classList.toggle("fa-times");
        counterNav++;
    }
};
//menu opening closing
toggle.addEventListener('click', function () {
    navInAction();
});
toggle.addEventListener('touch', function () {
    navInAction();
});
