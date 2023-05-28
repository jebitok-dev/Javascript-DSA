function filterArrEl(arr) {
  let resultArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i], i)) {
      resultArr.push(arr[i])
    }
  }
  return resultArr;
}

// n > 10 && [0, 10, 20, 30] // [20, 30]
