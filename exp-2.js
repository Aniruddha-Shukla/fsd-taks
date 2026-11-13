// Experiment 2: Display different message types in Node.js
// console.log  -> general output        (stdout)
// console.info -> informational message (stdout)
// console.warn -> warning message       (stderr)
// console.error-> error message         (stderr)

console.log("LOG   : This is a normal log message.");
console.info("INFO  : Server started successfully on port 3000.");
console.warn("WARN  : Disk space is running low (15% remaining).");
console.error("ERROR : Unable to connect to the database.");

// Using an Error object with console.error
try {
  JSON.parse("{ invalid json }");
} catch (err) {
  console.error("ERROR : Failed to parse JSON ->", err.message);
}
