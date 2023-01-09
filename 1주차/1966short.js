(require('fs').readFileSync("/dev/stdin")+"").trim().split(`
`).map(e=>e.split(" ")).map((e,i,a)=>{if(i%2){M=e[1]
q=a[i+1].map((q,i)=>[q,i])
c=0
do while(q.find(e=>e[0]>q[0][0]))q.push(q.shift())
while(c++,q.shift()[1]!=M)console.log(c)}})