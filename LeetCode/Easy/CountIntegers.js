function countIntegers(num) {
  let count = 0;

  for(let i = 1; i <= num; i++) {
    let digitalSum = 0;
    let n = i;

    while(n > 0) {
      digitalSum += n % 10;
      n = Math.floor(n/10);
    }

    if(digitalSum % 2 === 0) {
      count++
    }
  }
  return count;
}

console.log(countIntegers(10)) // 4
console.log(countIntegers(4)) // 2