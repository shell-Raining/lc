from typing import List


class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        n = len(prices)
        res = list(prices)
        for i in range(0, n):
            for j in range(i + 1, n):
                if prices[j] <= prices[i]:
                    res[i] = prices[i] - prices[j]
                    break

        return res



solution = Solution()
res = solution.finalPrices([8, 4, 6, 2, 3])
print(res)
