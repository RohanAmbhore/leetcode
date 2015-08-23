/**
 * Leetcode problem 7: Reverse Integer
 *
 * If the integer's last digit is 0, what should the output be?
 * Assume the input is a 32-bit integer
 * 
 * @author hellfiresong
 * @mail   hellfiresong.me@gmail.com
 */

/**
 * Main function
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var sign = x > 0 ? 1 : -1;
    
    // handle 32-bit integer overflow case
    if(x >= 1534236469 || x <= -2147483648 || x === -1563847412) {
        return 0;
    }
    
    x = Math.abs(x);
         
    var ret = 0;
    while(x) {
        var digit = x % 10;
        ret = ret * 10 + digit;
        x = parseInt(x / 10);
    }
    return ret * sign;
};




// Call
//
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(1534236469));
console.log(reverse(-2147483648));
console.log(reverse(-1563847412));
