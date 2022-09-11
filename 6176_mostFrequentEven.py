from typing import List


class Solution:
    def mostFrequentEven(self, nums: List[int]) -> int:
        ans = -1
        n = len(nums)
        lst = [0] * (10 ** 5 + 100)
        for i in range(n):
            if nums[i] % 2 == 0:
                lst[nums[i]] += 1

        maxCnt = max(lst)
        if maxCnt == 0:
            return -1
        for i in range(len(lst)):
            if lst[i] == maxCnt:
                ans = i
                break

        return ans


solution = Solution()
ans = solution.mostFrequentEven([10000])
print(ans)
