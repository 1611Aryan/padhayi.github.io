var addSubject3 = function (subject) {
    var section = '<a href=""><section><span>' + subject + "</span></section></a>";
    $("main").append(section);
};
var streams3 = ["Computer Engineering", "Electronics"];
var noOfSubjects3 = 12;
for (var i = 0; i < noOfSubjects3; i++) {
    addSubject3("stream");
}
