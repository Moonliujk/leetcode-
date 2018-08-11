/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 */
 var removeDuplicates = function(nums) {
     // let length = nums.length;

     for (let i=0; i<nums.length; i++) {
       let out_value = nums[i];

       for (let j=i+1; j<nums.length; j++) {
         let inner_value = nums[j];

         if (inner_value === out_value) {
           nums.splice(j, 1);
           j -= 1;
         }
       }
     }

     return nums.length;
 };

/*优质解答*/
/**
 * 思路：将所有不重复项向前放置，记录放置的次数i，返回i+1（1为初始值）即为不重复项个数
 * @param  {[type]} nums [description]
 * @return {[type]}      [description]
 */
 var removeDuplicates = function(nums) {
        var i = 0;
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] != nums[j]){
                i++;
                nums[i] = nums[j];
            }
        }
        console.log(nums)
        return i+1;
}

removeDuplicates([0,0,1,1,1,2,2,3,3,4])

/*若不要求原地去重，可使用ES6语法，set*/
let resultarr = [...new Set(arr)];
