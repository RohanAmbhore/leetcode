/**
 * LeetCode Problem 3: Longest Substring Without Repeating Characters(https://leetcode.com/problems/longest-substring-without-repeating-characters/)
 * Solved with Node.js
 * @author hellfiresong(A pursuit coding peasant.)
 * @email  hellfiresong.me@gmail.com
 * @date   2015-08-09
 */

/**
 * Main function
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    // max length of substring
    var maxLength = 0;
    if (len > 0) {
        var map = {};
        map[s[0]] = 0;
        var arr = [];
        arr[0] = 1;
        if (len === 1) {
            maxLength = 1;
        }
        for ( var i = 1; i < len; i ++ ) {
            var c = s[i];
            if (map.hasOwnProperty(c)) {
                arr[i] = Math.min(arr[i - 1] + 1, i - map[c]);
	    } else {
		arr[i] = arr[i - 1] + 1;
	    }
	    maxLength = Math.max(maxLength, arr[i]);
	    map[c] = i;
	}
    }
    return maxLength;
};

//
console.log("abcabcbb"[0]);
// Test case
console.log(lengthOfLongestSubstring("abcabcbb"));
