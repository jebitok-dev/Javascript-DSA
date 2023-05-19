function mapArray(arr, fn) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result
}

console.log(mapArray([1,2,3], function plusone(n) { return n + 1; }))