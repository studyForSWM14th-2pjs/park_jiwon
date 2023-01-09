fs=require('fs');
[N,...I]=fs.readFileSync("/dev/stdin").toString().trim().split("\n");
I=I.map(e=>e.split(" ").map(Number));m=0;l=Array(N).fill(0);
(c=i=>{
    if(i==N)m=Math.max(m,I.reduce((a,c,i)=>a+(l[i]?c[1]:0),0));
    else{l[i]=true;k=i+I[i][0];if(k<=N)c(k);l[i]=false;c(i+1);}
})(0);
console.log(m);