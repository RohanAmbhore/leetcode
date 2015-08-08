/**
 * LeetCode Problem 1: Two sum(https://leetcode.com/problems/two-sum/)
 * Solved with Node.js
 * @author hellfiresong(A pursuit coding peasant.)
 * @email  hellfiresong.me@gmail.com
 * @date   2015-08-07
 */

/**
 * Main Function
 * @param  {Array}   nums
 * @param  {Number}  target
 * @return {Array}
 */

var twoSum = function( nums, target ) {
    var index;
    var len = nums.length;
    var arr = [];
    var obj = {};
    for ( var i = 0; i < len; i ++ ) {
	var elem = target - nums[i];
	if(obj.hasOwnProperty(elem)) {
	    arr.push(i + 1);
	    arr.push(obj[elem] + 1);
	    arr.sort(function(a, b) {return a - b});
	    return arr;
	} else {
	    obj[nums[i]] = nums.indexOf(nums[i]); 
	}
    }
};

// Some test case as below:

// Array indexOf method
console.log([2, 3, 4, 5].indexOf(3));

// twoSum function call test
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([0, 4, 3, 0], 0));
