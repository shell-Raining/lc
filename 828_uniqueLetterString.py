from typing import collections

class Solution:
    # WARNING: this is O(n) solution
    def uniqueLetterString(self, s: str) -> int:
        index = collections.defaultdict(list)
        for i, c in enumerate(s):
            index[c].append(i)

        res = 0
        for arr in index.values():
            arr = [-1] + arr + [len(s)]
            for i in range(1, len(arr) - 1):
                res += (arr[i] - arr[i - 1]) * (arr[i + 1] - arr[i])
        return res

    # WARNING: this is O(n^2) solution, and it use recursion formula
    # def uniqueLetterString(self, s: str) -> int:
    #     sum = 0
    #     for i in range(0, len(s)):
    #         hashmap = [0] * 26
    #         sumTemp = 0
    #         preSum = 0
    #         for j in range(i, len(s)):
    #             curSum = preSum
    #             index = ord(s[j]) - ord('A')
    #             if hashmap[index] == 0:
    #                 curSum += 1
    #             elif hashmap[index] == 1:
    #                 curSum -= 1
    #             hashmap[index] += 1
    #             preSum = curSum
    #             sumTemp += curSum
    #         sum += sumTemp
    #
    #     return sum


solution = Solution()
num = solution.uniqueLetterString("LEETCODE")
print(num)
