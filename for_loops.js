// Write a program that prints the numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  //Write a program that calculates the sum of numbers from 1 to 100.
  let sum = 0;
  
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
  
  //Print all the even numbers between 1 and 20.
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  
  //Create a multiplication table for the number 5 using a for loop
  let num = 5;
  
  for (let i = 1; i <= 10; i++) {
    const test = `${num} * ${i} = ${num * i}`;
    console.log(test);
    // 5 * 1 = 5
    //5 * 2 = 10
  }
