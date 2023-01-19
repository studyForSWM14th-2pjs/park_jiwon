//로직 다 맞는데 node가 느려서 시간초과가 뜸
//같은 로직으로 py로 푸니까 통과됨...

let [[N], ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(e=>e.split(" ").map(Number));
//리프노드들이 부모까지 도달하는데 걸리는 횟수의 합이 짝수이면 No, 홀수이면 Yes

let graph = Array(N+1).fill(0).map(e=>[]);
input.forEach(e=>{graph[e[0]].push(e[1]);graph[e[1]].push(e[0]);});

let depth = Array(N+1).fill(-1);
let total = depth[1] = 0;
let queue = [1];
while(queue.length){
    cur = queue.shift();
    if(graph[cur].length==1&&cur!=1){
        total += depth[cur];
        continue;
    }
    graph[cur].forEach(e=>{
        if(depth[e]==-1){
            depth[e] = depth[cur]+1;
            queue.push(e);
        }
    });
}

console.log(total%2?"Yes":"No");