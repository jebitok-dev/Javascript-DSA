function reduceTransArr(nums, fn, init) {
  let reduceArr = init;
  
  for(let i = 0; i < nums.length; i++) {
    reduceArr = fn(reduceArr, nums[i])
  }
  return reduceArr;
}