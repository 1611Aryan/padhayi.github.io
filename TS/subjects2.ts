const addSubject2 = (subject: string) => {
  const section =
    '<a href=""><section><span>' + subject + "</span></section></a>";
  $("#page1").append(section);
};
const addSubject2_2 = (subject: string) => {
  const section =
    '<a href=""><section><span>' + subject + "</span></section></a>";
  $("#page2").append(section);
};
const streams2 = [
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
const noOfSubjects2 = streams2.length;
for (let i = 0; i < 8; i++) {
  addSubject2(streams2[i]);
}
////*page2
for (let i = 8; i < noOfSubjects2; i++) {
  addSubject2_2(streams2[i]);
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
