var getSubject = sessionStorage.getItem("subject");
getSubject = getSubject.replace(/_/g, " ");
console.log(getSubject);
document.getElementById("nameOfStream").innerHTML = getSubject;
var addSubject = function (code, subject) {
    var subjectDetails = ' <div id="subject1" class="subject"><svg width="461" height="445" viewBox="0 0 461 445" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="stickyNote" clip-path="url(#clip0)"><path id="shadow" d="M35.1852 33.9509C88.4104 21.3611 172.597 22.7268 172.597 22.7268L412.752 24.4995L411.309 219.96C411.309 219.96 409.209 333.912 434.592 392.017C353.274 413.163 214.406 413.979 214.406 413.979L18.9444 412.537L21.4126 78.1808C21.4126 78.1808 18.1567 51.0242 35.1852 33.9509L35.1852 33.9509Z"fill="#FFAAAA" fill-opacity="0.392157" /><path id="paper"d="M35.1251 31.9041C95.3635 23.3223 174.597 23.9968 174.597 23.9968L414.754 25.7696L413.311 221.23C413.311 221.23 411.487 297.707 436.869 355.811C363.758 422.481 216.406 415.249 216.406 415.249L20.9456 413.806L23.4137 79.4505C23.4137 79.4505 24.0609 47.3583 35.1251 31.9041L35.1251 31.9041Z"fill="#FFAAAA" /><text class="center" fill="#474747"><tspan x="45%" y="50%">' +
        code +
        '</tspan><tspan x="15%" y="65%">' +
        subject +
        '</tspan></text></g><defs><clipPath id="clip0"><rect width="460.342" height="444.825" fill="white" /></clipPath></defs></svg></div>';
    $("#stickyNotes").append(subjectDetails);
};
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
for (var i = 0; i < 7; i++) {
    addSubject(coe[i][0], coe[i][1]);
}
