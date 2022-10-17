let nums = [2, 7, 11, 15];
let target = 18;

var twoSum = function (nums, target) {
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(nums, target));

l1 = [2, 4, 3];
l2 = [5, 6, 4];
var addTwoNumbers = function (l1, l2) {
  for (let i = 0; i < l1.length; i++) {
    for (let j = 0; j < l2.length; j++) {
      console.log(i, j);
    }
  }
};

addTwoNumbers();
