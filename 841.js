/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let n = rooms.length;
  const visited = Array(n).fill(false);
  const dfs = (room) => {
    if (visited[room]) {
      return;
    }
    visited[room] = true;
    n--;
    for (let key of rooms[room]) {
      dfs(key);
    }
  };
  dfs(0);
  return n === 0;
};
