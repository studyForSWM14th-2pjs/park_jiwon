let [[N,T],...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(v=>v.split(' ').map(v=>+v));
let house =[]; //각 집들의 좌표
let chicken = []; //각 치킨집들의 좌표

input.forEach((v,i)=>{
    v.forEach((v2,j)=>{
        if(v2==1) house.push([i,j]);
        else if(v2==2) chicken.push([i,j]);
    })
});

let chickenDist = Array.from({length:chicken.length},()=>[]);
//chickenDist[chickenIndex][houseIndex] : chickenIndex번째 치킨집과 houseIndex번째 집 사이의 거리
chicken.forEach((v,i)=>{
    house.forEach(v2=>{
        chickenDist[i].push(Math.abs(v[0]-v2[0])+Math.abs(v[1]-v2[1]));
    });
});

let isUsed = Array(chicken.length).fill(false);
let min = Infinity;


const bruteForce = (i,cnt) => {
    if(cnt==T){
        let minDist=Array(house.length).fill(Infinity); //각 집들의 최소 거리를 담을 배열
        chickenDist.filter((_,i)=>isUsed[i])    //모든 치킨집의 치킨거리 중 사용할 T개의 치킨집들의 치킨거리만 추출
        .forEach(v=>v.forEach((e,i)=>{
            minDist[i] = Math.min(e,minDist[i]);    //각 집에서 가장 가까운 치킨거리로 변경
        }));
        min = Math.min(min, minDist.reduce((a,c)=>a+c));    //각 집의 치킨거리의 합이 기존 min보다 작으면 대체
        return;
    }
    if(i<chicken.length){
        isUsed[i] = true;
        bruteForce(i+1,cnt+1);
        isUsed[i] = false;
        bruteForce(i+1,cnt);
    }
}
bruteForce(0,0);

console.log(min);