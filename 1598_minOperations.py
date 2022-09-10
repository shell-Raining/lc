from typing import List


class Solution:
    def minOperations(self, logs: List[str]) -> int:
        cnt = 0
        for item in logs:
            if item == "../":
                if cnt != 0:
                    cnt -= 1
            elif item == "./":
                continue
            else:
                cnt += 1

        return cnt
