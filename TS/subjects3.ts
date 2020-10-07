const addSubject3 = (subject: string) => {
  const section =
    '<a href=""><section><span>' + subject + "</span></section></a>";
  $("main").append(section);
};
const streams3 = ["Computer Engineering", "Electronics"];
const noOfSubjects3 = 12;
for (let i = 0; i < noOfSubjects3; i++) {
  addSubject3("stream");
}
