f=require('fs');
[T,...I]=f.readFileSync("/dev/stdin").toString().trim().split("\n");
for(i=0;i<T;i++){
    M=I[i*2].split(" ")[1];q=I[i*2+1].split(" ").map((q,i)=>[q,i]);
    p=Array.from({length:10},e=>0);
    q.forEach(e=>p[e[0]]++);
    o=q=>{while(p.reduce((a,c,i)=>a+(i>q[0][0]?c:0),0)>0)q.push(q.shift());p[q[0][0]]--;return q.shift();};
    c=1;while(o(q)[1]!=M)c++;console.log(c);
}