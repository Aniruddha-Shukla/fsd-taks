// Experiment 4: Count function calls using console.count()

function greet(name) {
  console.count("greet() called");
  console.log(`Hello, ${name}!`);
}

function add(a, b) {
  console.count("add() called");
  return a + b;
}

greet("Aarav");
greet("Priya");
greet("Rohan");

console.log("Sum:", add(2, 3));
console.log("Sum:", add(10, 20));

// Reset the counter for greet() and call it again
console.countReset("greet() called");
console.log("\n-- greet() counter reset --");
greet("Sneha");

// Default label counter
console.count();
console.count();
