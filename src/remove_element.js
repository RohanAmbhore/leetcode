/**
 * Leetcode problem 27: Remove Element
 *
 * @author hellfiresong
 * @date   2015/9/9 
 *
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for( var i = 0; i < nums.length; ) {
        if( nums[i] === val ) {
	    nums.splice(i, 1);
	} else {
	    i ++;
	}	
    }
    return nums.length;    
};


console.log(removeElement([1,1,1,2,1], 1));
