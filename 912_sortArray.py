from typing import List
import random


class Solution:
    # def quickSort(self, nums, left, right):
    #     oriLeft = left
    #     oriRight = right
    #
    #     if left >= right:
    #         return None
    #
    #     pivot = left
    #     while left < right:
    #         while right > pivot and nums[right] >= nums[pivot]:
    #             right -= 1
    #         nums[right], nums[pivot] = nums[pivot], nums[right]
    #         pivot = right
    #         while left < pivot and nums[left] < nums[pivot]:
    #             left += 1
    #         nums[left], nums[pivot] = nums[pivot], nums[left]
    #         pivot = left
    #
    #     self.quickSort(nums, oriLeft, pivot-1)
    #     self.quickSort(nums, pivot + 1, oriRight)
    #
    #     return None

    def getPivot(self, nums: List, l, r):
        pivot = nums[r]
        i = l - 1

        for j in range(l, r+1):
            if pivot > nums[j]:
                i += 1
                nums[j], nums[i] = nums[i], nums[j]

        nums[i], nums[r] = nums[r], nums[i]

        return i+1

    def quickSort(self, nums, l, r):
        if l >= r:
            return None

        pivot = self.getPivot(nums, l, r)
        self.quickSort(nums, l, pivot-1)
        self.quickSort(nums, pivot+1, r)
        return None

    def sortArray(self, nums: List[int]) -> List[int]:
        # WARNING: need shuffle to deal ordered lists
        # random.shuffle(nums)
        self.quickSort(nums, 0, len(nums) - 1)
        return nums


solution = Solution()
ans = solution.sortArray([5, 1, 1, 2, 0, 0])
print(ans)
