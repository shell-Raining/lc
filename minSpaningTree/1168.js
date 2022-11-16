/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
var minCostToSupplyWater = function (n, wells, pipes) {
  let disjointSet = new DisjointSet(n);
  // 1. add wels to pipes
  for (let i = 0; i < wells.length; i++) {
    pipes.push([i + 1, i + 1, wells[i]]);
  }

  // 2. sort the pipes
  pipes.sort((a, b) => {
    return a[2] - b[2];
  });

  // 3. get min cost
  let res = 0;
  let i = 0;
  for (const [x, y, cost] of pipes) {
    if (disjointSet.union(x, y)) {
      i++;
      res += cost;
      if (i === n) {
      }
    }
  }
};

class DisjointSet {
  constructor(n) {
    this.pa = new Array(n).fill(0).map((_, index) => index);
    this.size = new Array(n).fill(1);
  }

  find(x) {
    if (this.pa[x] === x) {
      return x;
    }
    return this.find(this.pa[x]);
  }

  union(x, y) {
    let rx = this.find(x);
    let ry = this.find(y);
    if (rx === ry) {
      return false;
    }
    if (this.size[rx] < this.size[ry]) {
      [rx, ry] = [ry, rx];
    }
    this.pa[ry] = rx;
    this.size[rx] += this.size[ry];
    return true;
  }
}

let res = minCostToSupplyWater(
  3,
  [1, 2, 2],
  [
    [1, 2, 1],
    [2, 3, 1],
  ]
);
console.log(res);
