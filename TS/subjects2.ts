const addSubject2 = (subject: string) => {
  const section =
    '<a href=""><section><span>' + subject + "</span></section></a>";
  $("main").append(section);
};
const streams2 = ["Computer Engineering", "Electronics"];
const noOfSubjects2 = 12;
for (let i = 0; i < noOfSubjects2; i++) {
  addSubject2("stream");
}
