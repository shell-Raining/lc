class Solution:
    def balancedStringSplit(self, s: str) -> int:
        num = 0
        lnum = 0
        rnum = 0
        for item in s:
            (rnum := rnum + 1) if item == 'R' else (lnum := lnum + 1)

            if lnum == rnum:
                num += 1
                lnum = 0
                rnum = 0
        return num


solutions = Solution()
solutions.balancedStringSplit("RLRRLLRLRL")
