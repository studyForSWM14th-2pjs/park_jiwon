const fs = require('fs');
console.log(
    (fs.readFileSync("/dev/stdin")+"").trim()   //입력 ex) "5\n3 1 4 3 2"
    .split("\n")[1]                             //N 유기    ex) "3 1 4 3 2"
    .split(" ")                                 //공백으로 나누기 ex) ["3","1","4","3","2"]
    .map(Number)                                //숫자로 변환 ex) [3,1,4,3,2]
    .sort((a,b)=>b-a)                           //내림차순 정렬 ex) [4,3,3,2,1]
    .reduce((a,b,i)=>a+b*(i+1))                 //(index+1)*value의 누적합 구하기 ex) 32
);