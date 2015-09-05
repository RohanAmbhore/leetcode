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
    var str = str.trimLeft();
    var sign;
    var index;
    var validStr;
    var value;
    var  INT_MAX = 2147483647;
    var INT_MIN = -2147483648;
    if( str === '' ) {
        return 0;
    }

    for( var i = 0; i < str.length; i ++ ) {
        if( !isNaN(str[i])) {
	    sign = str[i - 1];
	    index = i;
	    break;
	}
    }

    if( sign === '-' || sign === '+' ) {
        for( var i = index; i < str.length; i ++ ) {
            if( isNaN(str[i]) || i === str.length - 1) {		
	        validStr = str.substring(1, i + 1);
	        break;
       	    }
        }
    } else {
        for( var i = index - 1; i < str.length; i ++ ) {
            if( isNaN(str[i]) || i === str.length - 1) {		
	        validStr = str.substring(0, i + 1);
	        break;
       	    }
        }    
    }

    value = parseInt(validStr);
    if( value > INT_MAX || value < INT_MIN ) {
        return 0;
    }
    return value; 
};


// Test
//console.log('   wtf!'.trimLeft());
//console.log(isNaN('c'));

// Call
console.log(myAtoi('-123'));
console.log(myAtoi('1'));
console.log(myAtoi('+1'));
console.log(myAtoi('+-1'));
