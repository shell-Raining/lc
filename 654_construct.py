from typing import Optional
from typing import List

# Definition for a binary tree node.


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    # Solution 1
    # def construct(self, nums: List[int], left, right) -> Optional[TreeNode]:
    #     if left > right:
    #         return None
    #
    #     index = left
    #     for i in range(left, right+1):
    #         if nums[index] < nums[i]:
    #             index = i
    #
    #     node = TreeNode(nums[index])
    #     node.left = self.construct(nums, left, index-1)
    #     node.right = self.construct(nums, index+1, right)
    #
    #     return node

    # Solution 2
    def construct(self, nums: List[int]) -> Optional[TreeNode]:
        n = len(nums)
        tree = [None] * n
        stk = list()

        for i in range(n):
            tree[i] = TreeNode(nums[i])
            while stk and nums[i] > nums[stk[-1]]:
                tree[i].left = tree[stk[-1]]
                stk.pop()
            if stk:
                tree[stk[-1]].right = tree[i]
            stk.append(i)

        return tree[stk[0]]

    def constructMaximumBinaryTree(self, nums: List[int]) -> Optional[TreeNode]:
        # node = self.construct(nums, 0, len(nums) - 1)

        node = self.construct(nums)
        return node


cl = Solution()
node = cl.constructMaximumBinaryTree([3, 2, 1, 6, 0, 5])
