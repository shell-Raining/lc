class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        lst = [-1] * 106
        maxlen = 0
        for i, c in enumerate(s):
            if lst[ord(c)] == -1:
                lst[ord(c)] = i
            else:
                maxlen = max(i - lst[ord(c)] - 1, maxlen)
        return maxlen


solution = Solution()
res = solution.maxLengthBetweenEqualCharacters("abca")
print(res)
