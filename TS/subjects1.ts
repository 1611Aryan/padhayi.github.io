const addSubject1 = (subject: string) => {
  const section =
    '<a href=""><section><span>' + subject + "</span></section></a>";
  $("main").append(section);
};
const streams1 = ["Computer Engineering", "Electronics"];
const noOfSubjects1 = 12;
for (let i = 0; i < noOfSubjects1; i++) {
  addSubject1("stream");
}
