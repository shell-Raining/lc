from typing import List


class Solution:
    def specialArray(self, nums: List[int]) -> int:
        nums.sort(reverse=True)
        for i in range(len(nums)):
            if i == len(nums)-1:
                if nums[i] >= i+1:
                    return i+1
            else:
                if nums[i] >= i+1 and nums[i+1] < i+1:
                    return i+1

        return -1


solution = Solution()
ans = solution.specialArray([0, 0])
print(ans)
