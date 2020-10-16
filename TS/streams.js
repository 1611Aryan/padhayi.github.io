//!Jquery Free
//?HTML code for page1
var addStream1 = function (num, Stream) {
    var section = '<a   id="carryOver' +
        num +
        '" href="subjects.php"><section id="coloredSquare"><span id="carryOverText' +
        num +
        '">' +
        Stream +
        "</span></section></a>";
    document.getElementById('page1').innerHTML += section;
};
//?/
//?HTML code for page2
var addStream2 = function (num, Stream) {
    var section = '<a id="carryOver' +
        num +
        '" href="subjects.php"><section id="coloredSquare" ><span id="carryOverText' +
        num +
        '">' +
        Stream +
        "</span></section></a>";
    document.getElementById('page2').innerHTML += section;
};
//?/
//?setting the stream clicked to session storage
var setSubject = function (subject) {
    localStorage.setItem("subject", subject);
};
//?/
//?The boss function
//*Adds the elements to the pages
//*saves to storage which stream was selected
var streamCreator = function (streamSet) {
    var noOfStreams = streamSet.length;
    //?Add to page1
    for (var i = 0; i < 8; i++) {
        addStream1(i, streamSet[i]);
    }
    //?/
    //?Add to page2
    for (var i = 8; i < noOfStreams; i++) {
        addStream2(i, streamSet[i]);
    }
    var _loop_1 = function (i) {
        document.getElementById("carryOver" + i + "").addEventListener("click", function (e) {
            var k = document.getElementById("carryOverText" + i + "").innerHTML;
            k = k.replace(/ /g, "_");
            setSubject(k);
        });
    };
    //?/
    //?saving to storage which stream was selected
    for (var i = 0; i < noOfStreams; i++) {
        _loop_1(i);
    }
    //?/
};
//?/
//?Streams of First Year
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
//?
//?Streams of Second Year
var streams2 = [
    "Biotechnology",
    "Chemical",
    "Civil",
    "Computer Engineering",
    "Computer Science and Engineering",
    "Computer Science and Business",
    "Electronics and Communication",
    "Electrical",
    "Electronics and Instrumentation ",
    "Mechanical",
    "Mechatronics",
    "Mechanical Production",
    "Electronics and Computer",
];
//?
//?streams of third year
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
//?
var year = localStorage.getItem("year");
//?switch case to check which stream array to use
switch (year) {
    case 'firstYear':
        streamCreator(streams1);
        break;
    case 'secondYear':
        streamCreator(streams2);
        break;
    case 'thirdYear':
        streamCreator(streams3);
        break;
}
//?/
