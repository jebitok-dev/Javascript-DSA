// Given a number, n find the first n elements of the Fibonacci sequence 
function fibonacci(n) {
  const fib = [0, 1];

  for(let i = 2; i < n; i++) {
    fib[i] = fib[i -1] + fib[i - 2]
  }

  return fib
}

console.log(fibonacci(1)); // [0, 1]
console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(4)); // [0, 1, 1, 2]
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(6)); // [0, 1, 1, 2, 3, 5]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacci(9)); // [0, 1, 1, 2, 3, 5, 8 13, 21]
console.log(fibonacci(10)); //[0, 1, 1, 2, 3, 5, 13, 21, 34]

// Big-O = O(n) - linear