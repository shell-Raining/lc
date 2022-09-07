# TODO: autopep8 need install with pip3
class Solution:
    def reorderSpaces(self, text: str) -> str:
        wordList = text.split()
        cnt = text.count(' ')
        wordNum = len(wordList)
        if wordNum == 1:
            return wordList[0] + " " * int(cnt)
        subCnt = cnt / (wordNum - 1)
        remain = cnt - subCnt * (wordNum - 1)
        ans = " " * int(subCnt)
        ans = ans.join(wordList)
        ans = ans + " " * int(remain)
        return ans


solution = Solution()
res = solution.reorderSpaces("hello   world")
print(res)
