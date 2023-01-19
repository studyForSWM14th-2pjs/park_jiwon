let [[N,T],...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(v=>v.split(' ').map(v=>+v));
let house =[]; //각 집들의 좌표
let chicken = []; //각 치킨집들의 좌표

input.forEach((v,i)=>{
    v.forEach((v2,j)=>{
        if(v2==1) house.push([i,j]);
        else if(v2==2) chicken.push([i,j]);
    })
});

let chickenDist = Array.from({length:chicken.length},()=>[]); //[[치킨집1과 집1의 좌표, 치킨집1과 집2의 좌표, ...], [치킨집2과 집1의 좌표, 치킨집2과 집2의 좌표, ...], ...]
chicken.forEach((v,i)=>{
    house.forEach(v2=>{
        chickenDist[i].push(Math.abs(v[0]-v2[0])+Math.abs(v[1]-v2[1]));
    });
});

let isUsed = Array(chicken.length).fill(false);
let min = Infinity;


const bruteForce = (i,cnt) => {
    if(cnt==T){
        let minDist=Array(house.length).fill(Infinity);
        chickenDist.filter((_,i)=>isUsed[i]).forEach(v=>v.forEach((e,i)=>{
            minDist[i] = Math.min(e,minDist[i]);
        }));
        min = Math.min(min, minDist.reduce((a,c)=>a+c));
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