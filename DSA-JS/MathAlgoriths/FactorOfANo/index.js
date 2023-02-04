// given an integer n find the factorial of the integer 

function factorial(n) {
  let result = 1;

  for(let i = 2; i < n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 1
console.log(factorial(3)); // 6
console.log(factorial(4)); // 6
console.log(factorial(5)); // 24
console.log(factorial(6)); // 120
console.log(factorial(7)); // 720
console.log(factorial(8)); // 5040
console.log(factorial(9)); // 40320
console.log(factorial(10)); //362880

// Big-O O(n) -linear