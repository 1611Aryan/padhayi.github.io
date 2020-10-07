const addSubject1 = (subject: string) => {
  const section =
    '<a href=""><section><span>' + subject + "</span></section></a>";
  $("main").append(section);
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
const noOfSubjects1 = streams1.length;
for (let i = 0; i < noOfSubjects1; i++) {
  addSubject1(streams1[i]);
}
