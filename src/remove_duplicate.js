/**
 * Leetcode problem 26: Remove Duplicates from Sorted Array 
 *
 * @author hellfiresong
 * @mail   hellfiresong.me@gmail.com
 * @date   2015/9/8
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var result = 0;
    var num;
    for( var i = 0; i < nums.length; ) {
	if( nums[i] !== num ) {
	    result ++;
	    num = nums[i];
	    i ++;
	} else {
	    nums.splice(i, 1);
	}
    }
    return result;
};

console.log(removeDuplicates([1,1,1]));
console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([1,1,2,2,3,3,4,5,6,7,7,8,9]));
