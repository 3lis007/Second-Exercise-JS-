//Create an array of numbers and find the largest number in it.
let numrat = [3, 12, 7, 1, 22, 10];
let largest = numrat[0];

for (let i = 0; i < numrat.length; i++) {
  if (numrat[i] > largest) {
    largest = numrat[i];
  }
}

console.log("Numri me i madh ne array eshte:", largest);

function reveresedArr(arr) {
  let revArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
}

reveresedArr([2, 4, 6, 8, 10]);
reveresedArr([2, 4, 6, 8, 10]);
reveresedArr([2, 4, 6, 8, 10]);

//Create an array of strings and use the filter() method to return strings longer than 5 characters.
let stringArr = ["Tokyo", "New York", "Tirana", "Lima"];
let newArr = stringArr.filter(function (str) {
  return str.length > 5;
});
console.log(newArr);

//Write a function that takes an array of numbers and returns a new array with all numbers squared.
let numArr = [1, 6, 19, 33, 2, 14];

function squaredArr(arr) {
  let sqrArr = [];
  arr.forEach((num) => {
    sqrArr.push(num ** 2);
  });
  return sqrArr;
}

let result = squaredArr(numArr);
console.log(result);

//Use the map() function to convert an array of temperatures in Celsius to Fahrenheit.
let tempInC = [3, 22, 35, 0];
let tempInF = tempInC.map((temp) => temp * 1.8 + 32);

console.log(tempInF);
