var addSubject2 = function (subject) {
    var section = '<a href=""><section><span>' + subject + "</span></section></a>";
    $("#page1").append(section);
};
var addSubject2_2 = function (subject) {
    var section = '<a href=""><section><span>' + subject + "</span></section></a>";
    $("#page2").append(section);
};
var streams2 = [
    "Biotechnology",
    "Chemical",
    "Civil",
    "Computer Engineering",
    "Computer Science & Engineering",
    "Computer Science and Business",
    "Electronics and Communication",
    "Electrical",
    "Electronics and Instrumentation ",
    "Mechanical",
    "Mechatronics",
    "Mechanical Production",
    "Electronics and Computer",
];
//////*page1
var noOfSubjects2 = streams2.length;
for (var i = 0; i < 8; i++) {
    addSubject2(streams2[i]);
}
////*page2
for (var i = 8; i < noOfSubjects2; i++) {
    addSubject2_2(streams2[i]);
}
////*pageChange
$("#button").on("click touch", function () {
    $("#page2").toggle("slow");
    $("#page1").toggle("slow");
    $("#button").toggleClass("fa-angle-left");
    $("#button").toggleClass("fa-angle-right");
});
$("#toggle").on("click touch", function () {
    $("#buttons").toggle("swing");
});
