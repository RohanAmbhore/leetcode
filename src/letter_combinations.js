/**
 * Leetcode problem 17: Letter Combinations of a Phone Number. 
 *
 * @author hellfiresong
 * @mail   hellfiresong.me@gmail.com
 * @date   2015/8/27
 */

/**
 * Array merge
 * @param {array} arr1
 * @param {array} arr2
 */
var merge = function(arr1, arr2) {
    var result = [];
    for( var i = 0; i < arr1.length; i ++ ) {
        for( var j = 0; j < arr2.length; j ++ ) {
	    result.push(arr1[i] + arr2[j]);
	}
    }
    return result;    
}


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var arr = [];
    // number dictionary
    var dict = {
        '2': 'abc',
	'3': 'def',
	'4': 'ghi',
	'5': 'jkl',
	'6': 'mno',
	'7': 'pqrs',
	'8': 'tuv',
	'9': 'wxyz'
    };
    if(digits === '') {
        return arr;
    }
    if( digits.length === 1 ) {
        return dict[digits].split('');
    } 
    for( var i = 0; i < digits.length; i ++ ) {     
	arr.push(dict[digits[i]].split(''));
    }
    var len = arr.length;
    for( var i = 0; i < len - 1; i ++ ) {
	var arr1 = arr.shift();
	var arr2 = arr.shift();
	arr.unshift(merge(arr1, arr2));
    }
    return arr[0];
};


// Test

console.log('abc'.split(''));
console.log(merge(['a', 'b', 'c'], ['d', 'e', 'f']));


// Call
console.log(letterCombinations(''));
console.log(letterCombinations('2'));
console.log(letterCombinations('23'));
console.log(letterCombinations('234'));
console.log(letterCombinations('5678'));
