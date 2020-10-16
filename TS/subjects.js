//*Jquery Removed
//?get the subject clicked on the previous page through session storage
var getSubject = localStorage.getItem("subject");
getSubject = getSubject.replace(/_/g, " ");
//?setting the name of stream on the top
document.getElementById("nameOfStream").innerHTML = getSubject;
//?changing the title
document.title = getSubject;
//!URL CHANGE
//!INSERT
//!HERE
//?sticknote
var addSubject = function (code, subject) {
    var subjectDetails = ' <div id="subject1" class="subject"><svg id="svg" width="461" height="445" viewBox="0 0 461 445" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="stickyNote" clip-path="url(#clip0)"><path id="shadow" d="M35.1852 33.9509C88.4104 21.3611 172.597 22.7268 172.597 22.7268L412.752 24.4995L411.309 219.96C411.309 219.96 409.209 333.912 434.592 392.017C353.274 413.163 214.406 413.979 214.406 413.979L18.9444 412.537L21.4126 78.1808C21.4126 78.1808 18.1567 51.0242 35.1852 33.9509L35.1852 33.9509Z"fill="#FFAAAA" fill-opacity="0.392157" /><path id="paper"d="M35.1251 31.9041C95.3635 23.3223 174.597 23.9968 174.597 23.9968L414.754 25.7696L413.311 221.23C413.311 221.23 411.487 297.707 436.869 355.811C363.758 422.481 216.406 415.249 216.406 415.249L20.9456 413.806L23.4137 79.4505C23.4137 79.4505 24.0609 47.3583 35.1251 31.9041L35.1251 31.9041Z"fill="#FFAAAA" /><text class="center" fill="#474747"><tspan x="45%" y="50%">' +
        code +
        '</tspan><tspan x="15%" y="65%">' +
        subject +
        '</tspan></text></g><defs><clipPath id="clip0"><rect width="460.342" height="444.825" fill="white" /></clipPath></defs></svg></div>';
    document.getElementById('stickyNotes').innerHTML += subjectDetails;
};
var addSubject2 = function (code, subject) {
    var subjectDetails = ' <div id="subject1" class="subject"><svg width="461" height="445" viewBox="0 0 461 445" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="stickyNote" clip-path="url(#clip0)"><path id="shadow" d="M35.1852 33.9509C88.4104 21.3611 172.597 22.7268 172.597 22.7268L412.752 24.4995L411.309 219.96C411.309 219.96 409.209 333.912 434.592 392.017C353.274 413.163 214.406 413.979 214.406 413.979L18.9444 412.537L21.4126 78.1808C21.4126 78.1808 18.1567 51.0242 35.1852 33.9509L35.1852 33.9509Z"fill="#FFAAAA" fill-opacity="0.392157" /><path id="paper"d="M35.1251 31.9041C95.3635 23.3223 174.597 23.9968 174.597 23.9968L414.754 25.7696L413.311 221.23C413.311 221.23 411.487 297.707 436.869 355.811C363.758 422.481 216.406 415.249 216.406 415.249L20.9456 413.806L23.4137 79.4505C23.4137 79.4505 24.0609 47.3583 35.1251 31.9041L35.1251 31.9041Z"fill="#FFAAAA" /><text class="center" fill="#474747"><tspan x="45%" y="50%">' +
        code +
        '</tspan><tspan x="15%" y="65%">' +
        subject +
        '</tspan></text></g><defs><clipPath id="clip0"><rect width="460.342" height="444.825" fill="white" /></clipPath></defs></svg></div>';
    document.getElementById('stickyNotes2').innerHTML += subjectDetails;
};
//?subjects
var coe = [
    ["UCS303", "OPERATING SYSTEMS"],
    ["UCS405", " MATHEMATICAL STRUCTURES"],
    ["UCS301", "DATA STRUCTURES "],
    ["UES012", "ENGINEERING MATERIALS"],
    ["UMA011", "NUMERICAL ANALYSIS"],
    ["UCS311", "PRACTICAL COMPUTING"],
    ["UTA016", "ENGINEERING DESIGN PROJECT 1"],
    //?NEXT SEM
    ["UTA002", "MANUFACTURING PROCESSES"],
    ["UCS521", "ARTIFICIAL INTELLIGENCE"],
    ["UCS411", "MEASUREMENT SCIENCE AND TECHNIQUES"],
    ["UCS310", "DATABASE MANAGEMENT SYSTEMS"],
    ["UCS414", "COMPUTER NETWORKS"],
    ["UCS415", "DESIGN AND ANALYSIS OF ALGORITHMS"],
    ["UTA024", "ENGINEERING DESIGN PROJECT 2"],
];
//?pageChange
var counter = 0;
var stickyNotes = document.getElementById('stickyNotes');
var subjectList2 = document.getElementById('subjectList2');
var button = document.getElementById('button');
var pageChange = function () {
    if (counter % 2 == 0) {
        subjectList2.style.display = 'block';
        subjectList2.style.opacity = '1';
        stickyNotes.style.opacity = '0';
        stickyNotes.addEventListener('webkitTransitionEnd', function (e) {
            stickyNotes.style.display = 'none';
        });
        button.classList.toggle("fa-angle-left");
        button.classList.toggle("fa-angle-right");
        counter++;
    }
    else {
        subjectList2.style.opacity = '0';
        subjectList2.addEventListener('webkitTransitionEnd', function (e) {
            subjectList2.style.display = 'none';
        });
        stickyNotes.style.display = 'flex';
        stickyNotes.style.opacity = '1';
        button.classList.toggle("fa-angle-left");
        button.classList.toggle("fa-angle-right");
        counter++;
    }
};
button.addEventListener("click", pageChange);
button.addEventListener("touch", pageChange);
//?/
//?button hides when nav is opened
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
//?render
var noOfSubjects = coe.length;
for (var i = 0; i < noOfSubjects / 2; i++) {
    addSubject(coe[i][0], coe[i][1]);
}
for (var i = 7; i < noOfSubjects; i++) {
    addSubject2(coe[i][0], coe[i][1]);
}
