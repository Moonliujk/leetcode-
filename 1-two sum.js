/**
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
 * 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 */

 var twoSum = function(nums, target) {
   let result = []

    for (let i in nums) {
      // 注意 这里的 i 为字符类型
      let tmp = target - nums[i]

      for (let j= +i + 1; j<nums.length; j++) {
        if (tmp == nums[j]) {
          result.push(+i, j)
          return result
        }
      }
    }
 };

twoSum([2, 7, 11, 15], 9);
