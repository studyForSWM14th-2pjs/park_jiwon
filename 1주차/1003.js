let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").slice(1);

let fibonacci = [[1,0],[0,1]];

for(let i=2;i<41;i++)
    fibonacci.push(fibonacci[i-1].map((v,j)=>v+fibonacci[i-2][j]));

input.map(v=>console.log(fibonacci[v].join(" ")));