/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function (n, edges) {
  let minCost = 0;
  let edgeNum = edges.length;
  // 0. add index to every edges
  for (const [index, edge] of edges.entries()) {
    edge.push(index);
  }

  // 1. calc the min cost
  let disjointSet = new DisjointSet(n);
  edges.sort((a, b) => a[2] - b[2]);
  for (const [a, b, cost] of edges) {
    if (disjointSet.union(a, b)) {
      minCost += cost;
      if (disjointSet.setCount === 1) {
        break;
      }
    }
  }

  // TODO: delete comments
  console.log(`min cost is ${minCost}`);

  let res = [[], []];
  for (let i = 0; i < edgeNum; i++) {
    // 2. judge whether edge[i] is critical
    let d1 = new DisjointSet(n);
    let cost = 0;
    for (let j = 0; j < edgeNum; j++) {
      if (i !== j && d1.union(edges[j][0], edges[j][1])) {
        cost += edges[j][2];
        if (d1.setCount === 1) {
          break;
        }
      }
    }
    if (d1.setCount !== 1 || (d1.setCount === 1 && cost > minCost)) {
      res[0].push(edges[i][3]);
      continue;
    }

    // 3. judge whether edge[i] is pseudo edge
    let d2 = new DisjointSet(n);
    cost = 0;
    d2.union(edges[i][0], edges[i][1]);
    cost += edges[i][2];
    for (let j = 0; j < edgeNum; j++) {
      if (i != j && d2.union(edges[j][0], edges[j][1])) {
        cost += edges[j][2];
        if (d2.setCount === 1) {
          break;
        }
      }
    }
    if (cost === minCost) {
      res[1].push(edges[i][3]);
      continue;
    }
  }

  return res;
};

class DisjointSet {
  constructor(n) {
    this.pa = new Array(n).fill(0).map((_, index) => index);
    this.size = new Array(n).fill(1);
    this.setCount = n;
  }

  find(a) {
    if (a === this.pa[a]) {
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

    this.pa[rb] = ra;
    this.size[ra] += this.size[rb];
    this.setCount--;
    return true;
  }
}

let res = findCriticalAndPseudoCriticalEdges(5, [
  [0, 1, 1],
  [1, 2, 1],
  [2, 3, 2],
  [0, 3, 2],
  [0, 4, 3],
  [3, 4, 3],
  [1, 4, 6],
]);
console.log(res);

res = findCriticalAndPseudoCriticalEdges(4, [
  [0, 1, 1],
  [1, 2, 1],
  [2, 3, 1],
  [0, 3, 1],
]);

console.log(res);
