function multipleOfNumber(n) {

  for(let i = 0; i <= 10; i++) {
    let result = n * i;
    console.log(n + " x " + i + " = " + result);
  }
}

console.log(multipleOfNumber(3))