/**
 * Leetcode problem: 145
 * Binary Tree Postorder Traversal 
 *
 * @author hellfiresong
 * @mail   hellfiresong.me@gmail.com
 * @date   2015/8/22
 */

/**
 * Defination of a binary tree.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Main functio
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    var list = [];
    var stack = [];
    var prev;
    
    if(root == null)
	return list;  
        
    stack.push(root);
    while( stack.length !== 0 ){
        var curr = stack[stack.length - 1];
 
        // go down the tree.
        //check if current node is leaf, if so, process it and pop stack,
        //otherwise, keep going down
        if(prev == null || prev.left == curr || prev.right == curr){
            //prev == null is the situation for the root node
            if(curr.left != null){
                stack.push(curr.left);
            } else if(curr.right != null){
                stack.push(curr.right);
            } else{
                stack.pop();
                list.push(curr.val);
            }
 
        //go up the tree from left node    
        //need to check if there is a right child
        //if yes, push it to stack
        //otherwise, process parent and pop stack
        } else if(curr.left == prev){
            if(curr.right != null){
                stack.push(curr.right);
            } else{
                stack.pop();
                list.push(curr.val);
            }
 
        //go up the tree from right node 
        //after coming back from right node, process parent node and pop stack. 
        } else if(curr.right == prev){
            stack.pop();
            list.push(curr.val);
        }
 
        prev = curr;
    }
 
    return list;
};


// Test
//           * test example:
//	     *                1
//	     *            2        3
//	     *         4    5    6    7
//		 *        8        9
var root = new TreeNode(1);
var n2   = new TreeNode(2);
var n3   = new TreeNode(3);
var n4   = new TreeNode(4);
var n5   = new TreeNode(5);
var n6   = new TreeNode(6);
var n7   = new TreeNode(7);
var n8   = new TreeNode(8);
var n9   = new TreeNode(9);
root.left = n2;
root.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;
n5.left = n8;
n6.right = n9;

// Call
console.log(postorderTraversal(root));
