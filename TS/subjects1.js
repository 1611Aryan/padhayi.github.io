var addSubject1 = function (subject) {
    var section = '<a href=""><section><span>' + subject + "</span></section></a>";
    $("main").append(section);
};
var streams1 = [
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
    "Mechanical MBA",
    "Electronics and Computer ",
    "Electrical and Computer ",
    "Communication MBA",
];
var noOfSubjects1 = streams1.length;
for (var i = 0; i < noOfSubjects1; i++) {
    addSubject1(streams1[i]);
}
