let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let num of a) {
  sum += num;
}
// a.length is the length of the array
//  Adds the current element a[i] to sum. After each iteration, sum holds the cumulative total of elements up to that point.

let average = sum / a.length;
console.log("The average is:", average);

// factorial classwork

let num = 23;
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i; // Multiplies the current value of factorial by i and updates factorial with the result.
}

console.log("The factorial of", num, "is:", factorial);

// Combinational classwork XcY
function factorials(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function combination(X, Y) {
  if (X >= Y) {
    return factorials(X) / (factorials(Y) * factorials(X - Y));
  } else {
    return "X must be greater than Y";
  }
}

// combination classwork YcX
function fact(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function comb(A, B) {
  if (A > B) {
    return fact(A) / (fact(B) * fact(A - B));
  }
  if ((B = A)) {
    return (fact(B + 1) / fact(B + 1)) * fact(A);
  }
}

let B = prompt("Please enter your value of B: ");
let A = prompt("Please enter your value of A: ");
let X = prompt("Please enter your value of Y: ");
let Y = prompt("Please enter your value of Y: ");
