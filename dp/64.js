/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let rn = grid.length;
  let cn = grid[0].length;

  for (let i = 1; i < rn; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  for (let j = 1; j < cn; j++) {
    grid[0][j] += grid[0][j - 1];
  }

  for (let i = 1; i < rn; i++) {
    for (let j = 1; j < cn; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[rn - 1][cn - 1];
};

let res;
res = minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
console.log(res);
res = minPathSum([
  [1, 2, 3],
  [4, 5, 6],
]);
console.log(res);
