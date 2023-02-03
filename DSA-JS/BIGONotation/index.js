function summation(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(summation(4)) //10

function summations(n) {
  return (n * (n + 1)) //executed once doesn't iterate (linear)
}

console.log(summations(4)) // 20

for(i = 1; i <= n; i++) {
  for(j = 1; j <= i; j++) {
    // some code
  }
}