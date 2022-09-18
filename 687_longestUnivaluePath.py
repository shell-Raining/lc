from typing import Optional

# Definition for a binary tree node.


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def getMaxDepth(self, node: Optional[TreeNode]):
        if node == None:
            return 0

        leftMax = 0
        rightMax = 0
        if node.left and node.val == node.left.val:
            leftMax = 1 + self.getMaxDepth(node.left)
        if node.right and node.val == node.right.val:
            rightMax = 1 + self.getMaxDepth(node.right)

        maxDepth = max(leftMax, rightMax, self.getMaxDepth(
            node.left), self.getMaxDepth(node.right))

        return maxDepth

    def longestUnivaluePath(self, root: Optional[TreeNode]) -> int:
        maxDepth = self.getMaxDepth(root)
        return maxDepth
