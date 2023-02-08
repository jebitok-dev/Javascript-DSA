// Given a number, n find the n^th element of the Fibonacci sequence

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(2)) // 1
console.log(recursiveFibonacci(3)) // 2
console.log(recursiveFibonacci(4)) // 3
console.log(recursiveFibonacci(5)) // 5
console.log(recursiveFibonacci(6)) // 8
console.log(recursiveFibonacci(7)) // 13
console.log(recursiveFibonacci(8)) // 21
console.log(recursiveFibonacci(9)) // 34
// console.log(recursiveFibonacci(20)) // 65
