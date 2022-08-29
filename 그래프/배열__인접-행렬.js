/*
    무방향 그래프 구현시, 값을 대칭으로 넣어주면 됩니다.
*/

const graph = Array.from(Array(5), () => Array(5).fill(false));

graph[0][1] = true; // 0 -> 1
graph[0][3] = true; // 0 -> 3
graph[1][2] = true; // 1 -> 2
graph[2][0] = true; // 2 -> 0
graph[2][4] = true; // 2 -> 4
graph[3][2] = true; // 3 -> 2
graph[4][0] = true; // 4 -> 0

console.log(graph);
/*
 *  [
 *    [ false, true, false, true, false ],
 *    [ false, false, true, false, false ],
 *    [ true, false, false, false, true ],
 *    [ false, false, true, false, false ],
 *    [ true, false, false, false, false ]
 *  ]
 */
