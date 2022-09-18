from typing import List
import heapq


# TODO: Sooooo hard
class Solution:
    def mincostToHireWorkers(self, quality: List[int], wage: List[int], k: int) -> float:
        qw = sorted(zip(quality, wage), key=lambda p: p[1] / p[0])  # 按照 r 值排序
        h = [-q for q, _ in qw[:k]]
        heapify(h)
        sum_q = -sum(h)
        ans = sum_q * qw[k - 1][1] / qw[k - 1][0]
        for q, w in qw[k:]:
            if q < -h[0]:
                sum_q += heapreplace(h, -q) + q
                ans = min(ans, sum_q * w / q)
        return ans
