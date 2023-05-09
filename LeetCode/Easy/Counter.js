function Counter(n) {
  let count = -1;

  return function() {
    count++;
    return n + count
  }
}

console.log(Counter(10))