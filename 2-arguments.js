
const argCount = process.argv.slice(2);

if (argCount[0] === undefined) {
  console.log("No argument");
} else if (argCount[1] === undefined) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
