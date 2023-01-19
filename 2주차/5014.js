let [F, S, G, U, D] = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').map(v=>+v);
//F층 건물에서 S에서 G로 가는데 U만큼 올라가고 D만큼 내려갈 수 있다. 

let queue = [[S,0]];
let visited = Array(F+1).fill(false);

while(queue.length){
    let [cur,depth] = queue.shift();
    if(cur==G) return console.log(depth);
    if(cur+U<=F&&!visited[cur+U]){
        queue.push([cur+U,depth+1]);
        visited[cur+U]=true;
    }
    if(cur-D>0&&!visited[cur-D]){
        queue.push([cur-D,depth+1]);
        visited[cur-D]=true;
    }
}
console.log('use the stairs');