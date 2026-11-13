// Experiment 3: Display student marks in a table using console.table()

const students = [
  { studentId: 101, name: "Aarav Sharma", marks: 88 },
  { studentId: 102, name: "Priya Verma", marks: 92 },
  { studentId: 103, name: "Rohan Gupta", marks: 76 },
  { studentId: 104, name: "Sneha Patel", marks: 81 },
  { studentId: 105, name: "Karan Mehta", marks: 69 },
];

console.log("===== Student Marks Table =====");
console.table(students);

// Display only selected columns
console.log("\n===== Names and Marks Only =====");
console.table(students, ["name", "marks"]);
