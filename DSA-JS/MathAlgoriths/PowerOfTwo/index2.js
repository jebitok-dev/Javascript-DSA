// Given a positive integer n determine if the number is a power of 2 or not 

function isPowerOfTwoBitwise(n) {
  if(n < 1) {
    return false;
  }  
  return (n & (n - 1)) === 0
}

console.log(isPowerOfTwoBitwise(1)) // true
console.log(isPowerOfTwoBitwise(2)) // true
console.log(isPowerOfTwoBitwise(5)) // false
console.log(isPowerOfTwoBitwise(7)) // false
console.log(isPowerOfTwoBitwise(8)) // true
console.log(isPowerOfTwoBitwise(9)) // false
console.log(isPowerOfTwoBitwise(10)) // false