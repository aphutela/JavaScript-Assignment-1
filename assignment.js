// Q1. You are provided with two numbers A and B. Your task is to add these two numbers.
// Note: You have to complete AddTwoNumbers function. No need to take any input.

// Soln:

function AddTwoNumbers(A, B) {
  return A + B;
}

// Q2. Find if the conditions are obeyed or not?
// You are given two number first as A� and second as B� and check if both conditions
// (A<10�<10 and A>B�>�) are satisfied or not with the help of operators.
// Note: You have to complete Is_Valid function. No need to take any input

// soln: ??

// Q3. You are given two numbers A and B. You need to do the following checks:
// 1. if both are divisible by 10 console true.
// 2. if both are not divisible by 10 console false.
// 3. if one of them only is divisible by 10 console true.
// Use operator to do this.
// Note: You have to complete Check function. No need to take any input.

// Soln:

function Check(A, B) {
  if (A % 10 === 0 || B % 10 === 0) {
    console.log(true);
  }
  if (A % 10 !== 0 && B % 10 !== 0) {
    console.log(false);
  }
}

// Q4.Find the first digit of a 4 digit number

// Soln:

function First_Digit(N) {
  let fd = Math.floor(N / 1000);
  console.log(fd);
}

/* Q5.Find the last digit of a 4 digit number 
You are provided a four digit number N only. Your task is to print out the last digit of that 
number.
Note: You have to complete Last_Digit function. No need to take any input. */

// Soln:

function Last_Digit(N) {
  let ld = Math.floor(N % 10);
  console.log(ld);
}

// Q6.Find the remainder

// Soln:

function Find_the_remainder(A, B) {
  return B % A;
}

// Q7.Multiply two Numbers

// Soln:

function Multiply(A, B) {
  return A * B;
}

// Q8. Marks Calculator

// Soln:

function Sum(A, B, C) {
  return A + B + C;
}

function Avg(s, n) {
  return s / n;
}
let s = Sum(50, 20, 100);
console.log(s);
console.log(Avg(s, 3));
console.log(`${s}, ${Avg(s, 3)}`);
