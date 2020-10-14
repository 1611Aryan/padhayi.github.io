var addStream1 = function (num, Stream) {
    var section = '<a   id="carryOver' +
        num +
        '" href="subjects.html"><section ><span id="carryOverText' +
        num +
        '">' +
        Stream +
        "</span></section></a>";
    $("#page1").append(section);
};
var addStream1_2 = function (num, Stream) {
    var section = '<a id="carryOver' +
        num +
        '" href="subjects.html"><section><span id="carryOverText' +
        num +
        '">' +
        Stream +
        "</span></section></a>";
    $("#page2").append(section);
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
//////*page1
var noOfStreams1 = streams1.length;
for (var i = 0; i < 8; i++) {
    addStream1(i, streams1[i]);
}
////*page2
for (var i = 8; i < noOfStreams1; i++) {
    addStream1_2(i, streams1[i]);
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
    });
};
//?looping through all streams to find which was clicked
for (var i = 0; i < noOfStreams1; i++) {
    _loop_1(i);
}
//?setting the stream clicked to session storage
var setSubject = function (subject) {
    sessionStorage.setItem("subject", subject);
};
