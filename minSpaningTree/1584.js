var getDistance = function (x, y) {
  let dx = Math.abs(x[0] - y[0]);
  let dy = Math.abs(x[1] - y[1]);
  return dx + dy;
};

/**
 * @param {number[][]} points
 * @return {number}
 // var minCostConnectPoints = function (points) {
//   let pointsNum = points.length;
//   let edges = [];
//
//   // get the edges of all points
//   for (let i = 0; i < pointsNum; i++) {
//     for (let j = i + 1; j < pointsNum; j++) {
//       edges.push([i, j, getDistance(points[i], points[j])]);
//     }
//   }
//
//   // sort the edges
//   edges.sort((a, b) => a[2] - b[2]);
//
//   // calc the min cost
//   let disjointSet = new DisjointSet(pointsNum);
//   let res = 0;
//   for (const [a, b, cost] of edges) {
//     if (disjointSet.union(a, b)) {
//       res += cost;
//       if (disjointSet.setCount === 1) {
//         break;
//       }
//     }
//   }
//   return res;
//*/

// prim algorithms
function minCostConnectPoints(points) {
  // default use points[0] as the begin node
  let edgeSet = new Map(
    points.map((value, idx) => {
      return [idx, getDistance(value, points[0])];
    })
  );
  edgeSet.delete(0);
  let res = 0;
  while (edgeSet.size) {
    let min = Infinity;
    let minIdx = 0;
    for (const [idx, cost] of edgeSet) {
      if (cost < min) {
        min = cost;
        minIdx = idx;
      }
    }

    let minPoint = points[minIdx];
    res += min;
    edgeSet.delete(minIdx);
    for (const [idx, cost] of edgeSet) {
      edgeSet.set(idx, Math.min(cost, getDistance(minPoint, points[idx])));
    }
  }
  return res;
}

class DisjointSet {
  constructor(n) {
    this.size = new Array(n).fill(1);
    this.pa = new Array(n).fill(0).map((_, index) => index);
    this.setCount = n;
  }

  find(a) {
    if (this.pa[a] === a) {
      return a;
    }
    return this.find(this.pa[a]);
  }

  union(a, b) {
    let ra = this.find(a);
    let rb = this.find(b);
    if (ra === rb) {
      return false;
    }
    if (this.size[ra] < this.size[rb]) {
      [ra, rb] = [rb, ra];
    }
    this.setCount--;
    this.pa[rb] = ra;
    this.size[ra] += this.size[rb];
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
