class Solution:
    def partitionString(self, s: str) -> int:
        cnt = 1
        container = ""
        for c in s:
            if c not in container:
                container = container + c
            else:
                cnt += 1
                container = c
        return cnt

solution = Solution()
ans = solution.partitionString("ssssss")
print(ans)
