/**
 * Leetcode problem 20: Valid Parentheses . 
 *
 * @author hellfiresong
 * @mail   hellfiresong.me@gmail.com
 * @date   2015/9/7
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var result = true;
    if( s.length === 0 ) {
        return result;
    }
    // Scan string
    // When meet '(','[','{', push to stack
    // meet ')',']','}', pop stack
    
    for( var i = 0, len = s.length; i < len; i ++ ) {
	var p = s[i];    
        if( p === '(' || p === '[' || p === '{' ) {
	    stack.push(p);
	} else {
	    var q = stack[stack.length - 1];
	    if( (p === ')' && q === '(') || (p === ']' && q === '[') || (p === '}' && q === '{') ) {
	        stack.pop();
	    } else {
	        result = false;
	    }
	}
    }
    if( stack.length !== 0 ) {
        result = false;
    }
    return result;    
};

// Test
console.log(isValid(''));
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));		
