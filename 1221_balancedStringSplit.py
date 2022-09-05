class Solution:
    def balancedStringSplit(self, s: str) -> int:
        num = 0
        lnum = 0
        rnum = 0
        for item in s:
            print(item)
            if item == 'R':
                rnum += 1
            else:
                lnum += 1

            if lnum == rnum:
                num += 1
                lnum = 0
                rnum = 0
        return num


solutions = Solution()
solutions.balancedStringSplit("RLRRLLRLRL")
