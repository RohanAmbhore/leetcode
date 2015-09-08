/**
 * Leetcode problem 22: Generate Parentheses  . 
 *
 * @author hellfiresong
 * @mail   hellfiresong.me@gmail.com
 * @date   2015/9/8
 */


var generate = function(ret, p, q, str) {
    if( p === 0 && q === 0 ) {
        ret.push(str);
    }

    if( p > 0 ) {
        generate(ret, p - 1, q, str + '(');
    }
    if ( q > 0 && q > p ) {
        generate(ret, p, q - 1, str + ')');
    }
}

/** Main function
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    ret = [];
    if( n > 0 ) {
        generate(ret, n, n, '');
    }
    return ret;
};


console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
console.log(generateParenthesis(4));
