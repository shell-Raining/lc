/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function (n, connections) {
  let disjointSet = new DisjointSet(n);

  // 1. sort the connections
  connections.sort((a, b) => a[2] - b[2]);

  // 2. find the min cost
  let i = 0;
  let res = 0;
  for (const [a, b, cost] of connections) {
    if (disjointSet.union(a, b)) {
      i++;
      res += cost;
      if (disjointSet.setCount === 1) {
        return res;
      }
    }
  }
  return -1;
};

class DisjointSet {
  constructor(n) {
    this.pa = new Array(n).fill(0).map((_, index) => index);
    this.size = new Array(n).fill(1);
    this.setCount = n;
  }

  find(x) {
    if (x === this.pa[x]) {
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
    this.setCount--;
    return true;
  }
}

let res = minimumCost(4, [
  [1, 2, 3],
  [3, 4, 4],
]);
console.log(res);
