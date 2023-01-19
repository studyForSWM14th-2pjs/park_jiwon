let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(v=>+v).slice(1);
let fibo = [0,1];
while(fibo[fibo.length-1]+fibo[fibo.length-2]<1000000000) fibo.push(fibo[fibo.length-1]+fibo[fibo.length-2]);
input.forEach(v=>{
    let ans = [];
    for(let i=fibo.length-1;i>0;i--){
        if(v>=fibo[i]){
            v-=fibo[i];
            ans.push(fibo[i]);
        }
    }
    console.log(ans.reverse().join(' '));
});