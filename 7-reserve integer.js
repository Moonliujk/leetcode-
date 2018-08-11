/**
 * 给定一个 32 位有符号整数，将整数中的数字进行反转。
 * 示例 1:
 * 输入: 123
 * 输出: 321
 */

 var reverse = function(x) {
    let numString = (Math.abs(x)).toString()
    let numArray = (numString.split('')).reverse()
    let reverseNum = parseInt(numArray.join(''))
    let result = x > 0 ? reverseNum : -reverseNum

    return result >= -Math.pow(2, 31) && result <= (Math.pow(2, 31) - 1) ? result : 0
 };

 console.log(reverse(123))

/*优质解答*/
var reverse = function(x) {
    let arr = [...x.toString()].reverse()
    let s = parseInt(arr.join(''))
    if(x < 0) s = -s
    return s>Math.pow(2, 31) - 1||s<-Math.pow(2, 31)?0:s;
}
