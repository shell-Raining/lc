from typing import List


class Solution:
    def suit(self, mat, i, j) -> bool:
        for a in range(0, len(mat[0])):
            if a != j and mat[i][a] == 1:
                return False
        for b in range(0, len(mat)):
            if  b != i and mat[b][j] == 1:
                return False
        return True

    def numSpecial(self, mat: List[List[int]]) -> int:
        num = 0
        row = len(mat)
        col = len(mat[0])
        visited = [0] * col

        for i in range(row):
            for j in range(col):
                if not visited[j] and mat[i][j] == 1:
                    visited[j] = 1
                    if self.suit(mat, i, j):
                        num += 1
                    break

        return num


solution = Solution()
solution.numSpecial([[0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 1, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0],
                     [1, 0, 0, 0, 0, 0, 0, 1],
                     [0, 0, 0, 0, 0, 0, 1, 0],
                     [0, 0, 0, 0, 0, 0, 0, 1]])
