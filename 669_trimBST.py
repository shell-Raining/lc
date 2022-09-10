from typing import Optional

# Definition for a binary tree node.


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    # def preTraversal(self, root: Optional[TreeNode], low: int, high: int):
    #     if root == None:
    #         return None
    #     if root.val <= high and root.val >= low:
    #         root.left = self.preTraversal(root.left, low, high)
    #         root.right = self.preTraversal(root.right, low, high)
    #         return root
    #     elif root.val > high:
    #         return self.preTraversal(root.left, low, high)
    #     else:
    #         return self.preTraversal(root.right, low, high)

    def iter(self, root: Optional[TreeNode], low: int, high: int):
        while root and (root.val < low or root.val > high):
            root = (root.left if root.val > high else root.right)

        if root == None:
            return None

        node = root
        while node.left:
            if node.left.val >= low:
                node = node.left
            else:
                node.left = node.left.right
        node = root
        while node.right:
            if node.right.val <= high:
                node = node.right
            else:
                node.right = node.right.left

        return root

    def trimBST(self, root: Optional[TreeNode], low: int, high: int) -> Optional[TreeNode]:
        # ans = self.preTraversal(root, low, high)
        ans = self.iter(root, low, high)
        return ans
