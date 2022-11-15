/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  let res = 0;
  // 1. get all edge length and endpoints
  let edges = [];
  let pointsNum = points.length;
  let disjointSet = new DisjointSet(pointsNum);
  const getDistance = (x, y) => {
    let dx = Math.abs(points[x][0] - points[y][0]);
    let dy = Math.abs(points[x][1] - points[y][1]);
    return dx + dy;
  };

  for (let i = 0; i < pointsNum; i++) {
    for (let j = i + 1; j < pointsNum; j++) {
      edges.push([getDistance(i, j), i, j]);
    }
  }

  // 2. sort edges
  edges.sort((a, b) => {
    return a[0] - b[0];
  });

  // 3. clac min length
  let i = 0;
  for (const [len, x, y] of edges) {
    if (disjointSet.union(x, y)) {
      res += len;
      i++;
      if (i === pointsNum -1) {
        return res;
      }
    }
  }
};

class DisjointSet {
  constructor(n) {
    this.size = new Array(n).fill(1);
    this.pa = new Array(n).fill(0).map((_, index) => index);
  }

  find(index) {
    if (index === this.pa[index]) {
      return index;
    }

    return this.find(this.pa[index]);
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

let res = minCostConnectPoints([
  [0, 0],
  [2, 2],
  [3, 10],
  [5, 2],
  [7, 0],
]);

console.log(res);
