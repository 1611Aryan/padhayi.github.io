var addSubject1 = function (subject) {
    var section = '<a href=""><section><span>' + subject + "</span></section></a>";
    $("main").append(section);
};
var streams1 = ["Computer Engineering", "Electronics"];
var noOfSubjects1 = 12;
for (var i = 0; i < noOfSubjects1; i++) {
    addSubject1("stream");
}
