//Write a program that takes a number and prints "Even" if the number is even, and "Odd" if the number is odd.
let numer = prompt("Fut nje numer:");

if (isNaN(numer)) {
  alert("Fut vetem nje numer!");
} else if (numer % 2 === 0) {
  alert("Even");
} else {
  alert("Odd");
}
//Create a program that checks if a number is positive, negative, or zero.
let nr = 2;

if (nr === 0) {
  console.log("zero");
} else if (nr > 0) {
  console.log("positive");
} else {
  console.log("negative");
}

//Write a program to check whether a given year is a leap year or not.
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("leap year");
} else {
  console.log("not a leap year");
}

//Write a program that accepts a user's age and checks if they are eligible to vote (age >= 18).
let user_age = 11;

if (user_age >= 18) {
  console.log("Eligible to vote!!");
} else {
  console.log("NOT eligible to vote!!");
}
