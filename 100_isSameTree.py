from typing import Optional
# Definition for a binary tree node.


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if p == None and q == None:
            return True
        elif p != None and q != None:
            leftEqual = self.isSameTree(p.left, q.left)
            rightEqual = self.isSameTree(p.right, q.right)
            if p.val == q.val and leftEqual and rightEqual:
                return True
        else:
            return False

        return False
