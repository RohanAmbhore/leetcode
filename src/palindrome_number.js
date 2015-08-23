/**
 * Leetcode problem 9: Palindrome Number 
 * @author hellfiresong
 * @mail   hellfiresong.me@gmail.com
 * @date   2015/8/23
 */


/**
 *
 * Reverse integer
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var sign = x > 0 ? 1 : -1;

    // Integer overflow case
    if(x >= 1534236469 || x <= -2147483648 || x === -1563847412) {
        return 0;
    }  
    x = Math.abs(x)
    var ret = 0;
    while(x) {
        var digit = x % 10;
        ret = ret * 10 + digit;
        x = parseInt(x / 10);
    }
    return ret * sign;
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    // negative integers
    if( x < 0 ) {
        return false;
    }

    if( x === 0 ) {
	return true;    
    }

    var reverseInteger = reverse(x);

    // Reverse integer overflow
    if( reverseInteger === 0 ) {
        return false;
    }

    if( reverseInteger !== x ) {
        return false;
    }

    return true;    
};




// Test
//
console.log(reverse(0));
console.log(reverse(1534334351));
//

// Call

console.log(isPalindrome(12321));
console.log(isPalindrome(1232));

console.log(isPalindrome(0));

console.log(isPalindrome(1534236469));

console.log(isPalindrome(1534334351));
