from typing import List
from typing import Optional

# Definition for a binary tree node.


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# TODO: this involves the syntax of python, so next week need review
class Solution:
    def findDuplicateSubtrees(self, root: Optional[TreeNode]) -> List[Optional[TreeNode]]:
        def dfs(node: Optional[TreeNode]) -> str:
            if not node:
                return ""

            leftHash = dfs(node.left)
            rightHash = dfs(node.right)
            serial = str(node.val) + "/" + leftHash + "/" + rightHash
            if (tree := seen.get(serial, None)):
                repeat.add(tree)
            else:
                seen[serial] = node

            return serial

        seen = dict()
        repeat = set()

        dfs(root)

        return list(repeat)
