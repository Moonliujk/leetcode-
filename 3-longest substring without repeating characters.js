/**
 * 给定一个字符串，找出不含有重复字符的最长子串的长度。
 * 示例：
 * 给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。
 */
 var lengthOfLongestSubstring = function(s) {
   if (!s.length) return 0

   let substring = ''
   let maxSubstr = ''
   let stringArray = s.split('')

   stringArray.forEach(char => {
     if (substring.indexOf(char) === -1) {
       substring += char
     } else {
       let index = substring.indexOf(char)
       maxSubstr = substring.length > maxSubstr.length ? substring : maxSubstr

       if (index === substring.length - 1) {
         substring = char
       } else {
         substring = substring.substr(index+1) + char
       }
     }
   })

   maxSubstr = substring.length > maxSubstr.length ? substring : maxSubstr

   return maxSubstr.length
 };

 lengthOfLongestSubstring("dvdf")
