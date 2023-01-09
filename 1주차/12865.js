const fs = require('fs');
const [[N,K], ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(e=>e.split(" ").map(Number));
const dp = Array(N+1).fill(0).map(e=>Array(K+1).fill(0));

input.map((e,i)=>{
    const [w, v] = e;
    for(let j=1; j<=K; j++){
        if(w>j)
            dp[i+1][j] = dp[i][j];
        else
            dp[i+1][j] = Math.max(dp[i][j], dp[i][j-w]+v);
    }
});

console.log(dp[N][K]);