/**
 * Leetcode problem: 144
 * Binary Tree Preorder Traversal 
 *
 * @author hellfiresong
 * @mail   hellfiresong.me@gmail.com
 * @date   2015/8/22
 */



/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * Main function
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var list = [];
    var stack = [];
    if( root === null ) {
        return list;
    }
    stack.push(root);
    while( stack.length !== 0 ) {
        var node = stack.pop();
	list.push(node.val);
	if( node.right !== null ) {
	    stack.push(node.right);
	}
	if( node.left !== null ) {
	    stack.push(node.left);
	}
    }
    return list; 
};


// Test

/*test example:
 *                1
 *            2       3
 *          4  5    6   7
 *        8     9
 */
var root = new TreeNode(1);
var n2 = new TreeNode(2);
var n3 = new TreeNode(3);
var n4 = new TreeNode(4);
var n5 = new TreeNode(5);
var n6 = new TreeNode(6);
var n7 = new TreeNode(7);
var n8 = new TreeNode(8);
var n9 = new TreeNode(9);

root.left = n2;
root.right = n3
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;
n4.left = n8;
n5.right = n9;

// Call
console.log(preorderTraversal(root));
