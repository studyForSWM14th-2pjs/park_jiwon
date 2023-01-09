const fs = require('fs');
let [N, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input = input.map(e=>e.split(" ").map(Number));

let max = -1;
let include = Array(N).fill(null);

const calcMaxBenefit = i =>{
    if(i==N){
        let cur = input.reduce((a,c,i)=>a+(include[i]==true?c[1]:0),0);
        max = max > cur ? max : cur;
    }
    else{
        include[i] = true;
        if(i+input[i][0]<=N)
            calcMaxBenefit(i+input[i][0]);
        include[i] = false;
        calcMaxBenefit(i+1);
    }
}

calcMaxBenefit(0);
console.log(max);