const addSubject3 = (subject: string) => {
  const section =
    '<a href=""><section><span>' + subject + "</span></section></a>";
  $("#page1").append(section);
};
const addSubject3_2 = (subject: string) => {
  const section =
    '<a href=""><section><span>' + subject + "</span></section></a>";
  $("#page2").append(section);
};
const streams3 = [
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
const noOfSubjects3 = streams3.length;
for (let i = 0; i < 8; i++) {
  addSubject3(streams3[i]);
}
////*page2
for (let i = 8; i < noOfSubjects3; i++) {
  addSubject3_2(streams3[i]);
}

////*pageChange
$("#button").on("click touch", () => {
  $("#page2").toggle("slow");
  $("#page1").toggle("slow");
  $("#button").toggleClass("fa-angle-left");
  $("#button").toggleClass("fa-angle-right");
});

$("#toggle").on("click touch", () => {
  $("#buttons").toggle("swing");
});
