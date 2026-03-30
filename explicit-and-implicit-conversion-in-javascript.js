/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// Convert "5" to a number before subtracting.
// This makes the code clear and aviod relying on implied behavior.

let result = Number ("5") - 2;
console.log("The result is: ", result);
// Boollean ("false") is true because its a non-empty string is truthy.
// Compare the string directly to "true" if you want a real true/false result.
let isValidInput = "false";
let isValid = isValidInput === "true";
if (isValid) {
 console.log("this is valid!");
} else {
  console.log("this is not valid!");
}
// "25 is a string, so + 5 becomes "255" because of string concatentation
// Number (age) converts the string to a number addition works correctly
let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age:", totalAge);
// the numbe 5 is converted to a string because it is added to a string 
let implicitExample = "10" + 5;
console.log("Implicit conversion example:");
console.log('Before: "10" is a', typeof "10");
console.log("after adding 5:", typeof implicitExample);
console.log("Result type:", typeof implicitExample);
// convert a string to a number using number()
let explicitExample = "42";
let convertedNumber = Number (explicitExample);
console.log("Explicit conversion example:")
console.log("Before conversion:", explicitExample, "-", typeof explicitExample);
// Converting undefined to a number retuerns NaN
let edgeCaseValue = undefined;
let edgeCaseConverted = Number(edgeCaseValue);
console.log("Edge case example:")
console.log("Before conversion:", edgeCaseValue, "-", typeof edgeCaseValue);
console.log("After conversion:", edgeCaseConverted, "-", typeof edgeCaseConverted);



