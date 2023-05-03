function countOperations(num1, num2) {
  let count = 0;

  while(num1 !== 0 && num2 !== 0) {
    if(num1 > num2) {
      num1 = num1 - num2;
    } else {
      num2 = num2 - num1
    } 
    count++
  }
  return count;
}

console.log(countOperations(4, 5));
console.log(countOperations(7, 5));
console.log(countOperations(10, 10))