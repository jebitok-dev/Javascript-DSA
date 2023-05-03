// Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.

function countPairs(nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] == nums[j] && (i * j) % k === 0) {
        count++;
      }
    }
  }
  return count;
}

console.log(countPairs([2, 4, 4, 4, 3, 3, 1], 2));
console.log(countPairs([2, 4, 6, 9, 3, 3, 1], 3));