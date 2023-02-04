// given a natural number n determine if the number is prime or not

// solution 1
function isPrime(n) {
  if(n < 2) {
    return false
  } 
  for(let i = 2; i < Math.sqrt(n); i++) { // executes
    if(n % i === 0) {
      return false;
    } 
  }
  return true;
}

console.log(isPrime(3)) // true
console.log(isPrime(7)) // true
console.log(isPrime(15)) // true
console.log(isPrime(18)) // false
console.log(isPrime(23)) // true
console.log(isPrime(27)) // true
console.log(isPrime(100)) // false
console.log(isPrime(167)) // true

// Big-O - O(Math.sqrt(n)) - better time complexity



