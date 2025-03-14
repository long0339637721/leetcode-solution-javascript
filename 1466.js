/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const g = Array(n).fill(0).map(() => []);
  for (const [a, b] of connections) {
    g[a].push([b, 1]);
    g[b].push([a, 0]);
  }
  const visited = Array(n).fill(false);
  let res = 0;
  const dfs = (i) => {
    visited[i] = true;
    for (const [j, d] of g[i]) {
      if (!visited[j]) {
        res += d;
        dfs(j);
      }
    }
  };
  dfs(0);
  return res;
};
