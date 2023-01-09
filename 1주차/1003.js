let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").slice(1);

let fibonacciDP = [[1,0],[0,1]]; // fibonacciDP[i] = [fibonacci(i)가 0을 호출한 횟수, fibonacci(i)가 1을 호출한 횟수]

for(let i=2;i<41;i++)   // 0~40까지의 fibonacciDP를 구한다.
    fibonacciDP.push(fibonacciDP[i-1].map((v,j)=>v+fibonacciDP[i-2][j])); 

input.map(v=>console.log(fibonacciDP[v].join(" "))); // 입력값에 대해 fibonacciDP를 출력한다.