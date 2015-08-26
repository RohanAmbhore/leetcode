/**
 * Leetcode problem 14: LCP (longest common prefix)
 *
 * @author hellfiresong
 * @mail   hellfiresong.me@gmail.com
 * @date   2015/8/27
 */

/**
 * Main function
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var first;
    
    if( first.length === 0 ) {
        return "";
    }

    first = strs[0];

    for( var i = 0; i < first.length; i ++ ) {
        for( var j = 0; j < strs.length; j ++ ) {
	    if(first[i] !== strs[j][i]) {
	        return first.substring(0, i);
	    }
	}
    }
    return first;    
};


console.log(longestCommonPrefix(['abcdefg', 'abcde', 'abc', 'abdef', 'abcijk']));
