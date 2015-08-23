/** 
 * Leetcode problem 13: Roman to Integer 
 * Input is guaranteed to be within the range from 1 to 3999.
 * There are 7 romain number: I(1)，V(5)，X(10)，L(50)，C(100)，D(500)，M(1000)
 * 
 * @author hellfiresong
 * @mail   hellfiresong.me@gmail.com
 * @date   2015/8/23
 */


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    // Roman number dictionary	
    var dict = {
        'I': 1,
	'V': 5,
	'X': 10,
	'L': 50,
	'C': 100,
	'D': 500,
	'M': 1000
    };

    var front = 0;
    var result = 0;

    for( var i = 0, len = s.length; i < len; i ++ ) {
        var current = dict[s[i]];
	
	result += current;

	if( current > front ) { 
	    result -= front * 2;
	}

	front = current;
    }
    return result;
       
};


// Test

// call
console.log(romanToInt('IMCLVI'));
