let input = Number(require('fs').readFileSync("/dev/stdin").toString().trim());
let queue = [[input,0]]; //[[value,depth],...]
let path = Array(input+1).fill(0);

const solve = ()=>{
    while(queue.length) {
        let [cur,depth] = queue.shift();
        if (cur === 1) return depth;
        if(cur%3==0&&path[cur/3]==0){
            queue.push([cur/3,depth+1]);
            path[cur/3]=cur;
        }
        if(cur%2==0&&path[cur/2]==0){
            queue.push([cur/2,depth+1]);
            path[cur/2]=cur;
        }
        if(path[cur-1]==0&&path[cur-1]==0){
            queue.push([cur-1,depth+1]);
            path[cur-1]=cur;
        }
    }
}

console.log(solve());

let cur = 1;
let ans = [];
while(cur!==input){
    ans.push(cur);
    cur = path[cur];
}
ans.push(input);
console.log(ans.reverse().join(' '));