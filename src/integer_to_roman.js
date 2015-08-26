/**
 * Leetcode problem 12: Integer to Roman
 *
 * @author hellfiresong
 * @mail   hellfiresong.me@gmail.com
 * @date   2015/8/26
 */

/**
 * Main function
 * Greddy method
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var result = '';
    // Roman number dictionary	
    var dict = {
	'M': 1000,
	'CM': 900,
	'D': 500,
	'CD': 400,
	'C': 100,
	'XC': 90,
	'L': 50,
	'XL': 40,
	'X': 10,
	'IX': 9,
	'V': 5,
	'IV': 4,
	'I': 1
    };
    for( var i in dict ) {
    	while( num >= dict[i] ) {
	    num -= dict[i];
	    result += i;
	}
    }
    return result;
};

// Test example

// Call

console.log(intToRoman(1));
console.log(intToRoman(3125));
