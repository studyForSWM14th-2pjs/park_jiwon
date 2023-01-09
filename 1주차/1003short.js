I=(require('fs').readFileSync("/dev/stdin")+"").trim().split("\n").slice(1)
f=[[1,0],[0,1]]
for(let i=2;i<41;i++)f.push(f[i-1].map((v,j)=>v+f[i-2][j]))
I.map(v=>console.log(f[v].join(" ")))