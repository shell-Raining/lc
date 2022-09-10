from typing import List
import math


class Solution:
    def constructArray(self, n: int, k: int) -> List[int]:
        ans = list(range(1, n - k))
        i = n - k
        j = n
        while i < j:
            ans.append(i)
            if i != j:
                ans.append(j)
            i, j = i + 1, j - 1

        return ans


solution = Solution()
solution.constructArray(3, 2)
