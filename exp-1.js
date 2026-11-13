// Experiment 1: Display student information using console.log()

const student = {
  name: "Aniruddha Shukla",
  department: "Computer Science and Engineering",
  semester: 4,
  age: 20,
};

console.log("===== Student Information =====");
console.log("Name       :", student.name);
console.log("Department :", student.department);
console.log("Semester   :", student.semester);
console.log("Age        :", student.age);
console.log("===============================");

// Same details using a template literal
console.log(
  `\n${student.name} is ${student.age} years old, studying in semester ${student.semester} of ${student.department}.`
);
