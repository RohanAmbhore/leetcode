/**
 * Leetcode problem 8: String to Integer (atoi) . 
 *
 * @author hellfiresong
 * @mail   hellfiresong.me@gmail.com
 * @date   2015/9/4
 */

/**
 * Extend string method
 */
String.prototype.trimLeft = String.prototype.trimLeft || function () {
    return this.replace(/^\s+/, "");
};

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var INT_MAX =   2147483647;
    var INT_MIN =  -2147483648;
    var SIGN = {
        POSITIVE: '+',
	NEGTIVE: '-'
    };

    str = str.trimLeft();
    var result = 0;
    var start = 0;
    var validStr;
    var isPositive = 1;
    
    if( str === '' ) {
        return 0;
    }

    if( str[start] !== SIGN.POSITIVE && str[start] !== SIGN.NEGTIVE && isNaN(str[start]) ) {
        return 0;
    } 

    while( str[start] === SIGN.POSITIVE || str[start] === SIGN.NEGTIVE ) {
        if( str[start] === SIGN.NEGTIVE ) {
	        isPositive = -1;       	
	}
	start ++;	    
    }

    if( start > 1 ) {
        return 0;
    }


    for( var i = start, len = str.length; i < len; i ++ ) {
	if( str[start] === ' ' || isNaN(str[start]) ) {
	    return 0;
	}
        if( isNaN(str[i]) || i === str.length - 1 ) {
	    validStr = str.substring(start, i + 1);
	}
    }

    result = isPositive * parseInt(validStr);
    
    if( result >= INT_MAX ) {
        return INT_MAX;
    }
    if( result <= INT_MIN ) {
        return INT_MIN;
    }

    result = isPositive * parseInt(validStr);
    return result; 
};

// Call

console.log(myAtoi('     123'));
console.log(myAtoi('+12'));
console.log(myAtoi('-12'));
console.log(myAtoi('+-12'));
console.log(myAtoi(''));
console.log(myAtoi('+12abc'));
console.log(myAtoi('-abc'));
console.log(myAtoi('- 321'));
console.log(myAtoi('  +b12102370352'));
