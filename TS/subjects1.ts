const addSubject1 = (subject: string) => {
  const section =
    '<a href=""><section><span>' + subject + "</span></section></a>";
  $("#page1").append(section);
};
const addSubject1_2 = (subject: string) => {
  const section =
    '<a href=""><section><span>' + subject + "</span></section></a>";
  $("#page2").append(section);
};
const streams1 = [
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
const noOfSubjects1 = streams1.length;
for (let i = 0; i < 8; i++) {
  addSubject1(streams1[i]);
}
////*page2
for (let i = 8; i < noOfSubjects1; i++) {
  addSubject1_2(streams1[i]);
}

////*pageChange
$("#button").on("click touch", () => {
  $("#page2").toggle();
  $("#page1").toggle();
  $("#button").toggleClass("fa-angle-left");
  $("#button").toggleClass("fa-angle-right");
});
