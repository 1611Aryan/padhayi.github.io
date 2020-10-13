var addStream3 = function (num, Stream) {
    var section = '<a   id="carryOver' +
        num +
        '" href="subjects.html"><section ><span id="carryOverText' +
        num +
        '">' +
        Stream +
        "</span></section></a>";
    $("#page1").append(section);
};
var addStream3_2 = function (num, Stream) {
    var section = '<a id="carryOver' +
        num +
        '" href="subjects.html"><section><span id="carryOverText' +
        num +
        '">' +
        Stream +
        "</span></section></a>";
    $("#page2").append(section);
};
var streams3 = [
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
var noOfStreams3 = streams3.length;
for (var i = 0; i < 8; i++) {
    addStream3(i, streams3[i]);
}
////*page2
for (var i = 8; i < noOfStreams3; i++) {
    addStream3_2(i, streams3[i]);
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
var _loop_1 = function (i) {
    document
        .getElementById("carryOver" + i + "")
        .addEventListener("click", function (e) {
        var k = $("#carryOverText" + i + "").html();
        k = k.replace(/ /g, "_");
        setSubject(k);
        console.log(k);
    });
};
for (var i = 0; i < noOfStreams3; i++) {
    _loop_1(i);
}
var setSubject = function (subject) {
    sessionStorage.setItem("subject", subject);
};
