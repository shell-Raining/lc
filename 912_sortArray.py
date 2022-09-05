from typing import List
import random


class Solution:
    def quickSort(self, nums, left, right):
        oriLeft = left
        oriRight = right

        if left >= right:
            return None

        pivot = left
        while left < right:
            while right > pivot and nums[right] >= nums[pivot]:
                right -= 1
            nums[right], nums[pivot] = nums[pivot], nums[right]
            pivot = right
            while left < pivot and nums[left] < nums[pivot]:
                left += 1
            nums[left], nums[pivot] = nums[pivot], nums[left]
            pivot = left

        self.quickSort(nums, oriLeft, pivot-1)
        self.quickSort(nums, pivot + 1, oriRight)

        return None

    def sortArray(self, nums: List[int]) -> List[int]:
        # WARNING: need shuffle to deal ordered lists
        random.shuffle(nums)
        self.quickSort(nums, 0, len(nums) - 1)
        return nums


solution = Solution()
