let [[N,T],...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(v=>v.split(' ').map(v=>+v));
let LMax = 0;
let RMax = 0;
let LSum = 0;
let RSum = 0;

input.forEach(([a,b])=>{
    LMax = Math.max(LMax,a);
    RMax = Math.max(RMax,b);
    LSum += a;
    RSum += b;
});

if(LSum>T||RSum<T) return console.log(-1);

input.sort((a,b)=>a[0]-b[0]);

const check = S => {
    let sum = 0;
    input.forEach(([a,b])=>{
        sum += Math.min(S,b);
    });
    return sum>=T;
}

let left = LMax;
let right = RSum;

while(left<right){
    let mid = Math.floor((left+right)/2);
    if(check(mid)) right = mid;
    else left = mid+1;
}

console.log(left);