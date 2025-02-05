//Create an object representing a car with properties like make, model, and year. Add a method getCarInfo() that returns a string with this information.
const myCar = {
  type: "BMW",
  model: "500",
  madeYear: "2001",
  madeIn: "Germany",

  getCarInfo() {
    return `Car type: ${myCar.type}, Car model: ${this.model}, Produced in: ${this.madeYear}, Made in: ${this.madeIn}`;
  },
};

console.log(myCar.getCarInfo());

//Write a function that takes an object and returns an array of its keys.
function getObjectKeys(obj) {
  return Object.keys(obj);
}

const student_info = {
  name: "Elis",
  class: "XII_C",
  age: "17",
  grade: "A",
};

const arrrr = getObjectKeys(student_info);

// arrr = ['name', 'class', 'age', 'grade']

console.log(getObjectKeys(student_info));

//Create an object that stores student information, including name, age, and grades (as an array). Write a method to calculate the average grade.

const student = {
  name: "Elis",
  age: 17,
  grades: [85, 90, 78, 92, 88],

  calculateAverageGrade() {
    let total = 0;
    for (let i = 0; i < this.grades.length; i++) {
      total += this.grades[i];
    }
    return total / this.grades.length;
  }
};

console.log(`Average Grade: ${student.calculateAverageGrade()}`);

//Write a function mergeObjects(obj1, obj2) that merges two objects into one.
const fruits = { fruit1: "kiwi", fruit2: "coconut" };
const veggies = { veggie1: "carrot", veggie2: "onion" };

let merged = {};
function mergeObjects(obj1, obj2) {
  for (let obj of [obj1, obj2]) {
    for (let key in obj) {
      merged[key] = obj[key];
    }
  }
  return merged;
}

console.log(mergeObjects(fruits, veggies));

//Create an object representing a shopping cart with items and prices. Write a method to calculate the total cost of items in the cart.
const shoppingCart = {
  products: [
    { name: "Chocolate", price: 5 },
    { name: "Milk", price: 20 },
    { name: "spaghetti", price: 15 },
  ],

  getTotalCost: function () {
    let total = 0;
    for (let product of shoppingCart.products) {
      total += product.price;
    }
    return total;
  },
};

console.log("Kostoja totale eshte:", shoppingCart.getTotalCost());

//Write a program that takes a string and counts the occurrences of each character in it. (Hint: Use an object.)
function countChar(str) {
  let charCount = {};

  for (let char of str) {
    if (char !== " ") {
      countChar[char] = (countChar[char] || 0) + 1;
    }
  }
  return countChar;
}

console.log(countChar("Javascript"));

//Create a function fibonacci(n) that returns the first n numbers in the Fibonacci sequence.

function fibonacci(n) {
  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence.slice(0, n);
}

console.log(fibonacci(10));

//Write a program that takes an array of objects representing books (with properties like title and author) and filters all books written by a specific author.
const library = {
  books: [
    { title: "The castle", author: "Franz Kafka" },
    { title: "The Paris's Cathedral", author: "Victor Hugo" },
    { title: "Metamorphosis", author: "Franz Kafka" },
  ],
};

function filterBooksByAuthor(authorName) {
  return library.books.filter((book) => book.author === authorName);
}

const filteredArr = filterBooksByAuthor("Franz Kafka");

console.log(filteredArr);
