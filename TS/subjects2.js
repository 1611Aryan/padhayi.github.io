var addSubject2 = function (subject) {
    var section = '<a href=""><section><span>' + subject + "</span></section></a>";
    $("main").append(section);
};
var streams2 = ["Computer Engineering", "Electronics"];
var noOfSubjects2 = 12;
for (var i = 0; i < noOfSubjects2; i++) {
    addSubject2("stream");
}
