let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").slice(1).map(e=>e.split(""));
let [N,M] = [input.length,input[0].length];
let visited = Array(N).fill(0).map(e=>Array(M).fill(false));
let dir = [[1,0],[-1,0],[0,1],[0,-1]];
let r1 = 0, r2 = 0;

let temp1 = 0, temp2 = 0;

let dfs = (x,y) => {
    visited[x][y] = true;
    if(input[x][y]=="o")
        temp1++;
    else if(input[x][y]=="v")
        temp2++;
    for(let d of dir){
        let [nx,ny] = [x+d[0],y+d[1]];
        if(nx<0||nx>=N||ny<0||ny>=M||input[nx][ny]=="#"||visited[nx][ny])
            continue;
        dfs(nx,ny);
    }
}

input.forEach((e,i)=>{
    e.forEach((f,j)=>{
        if(f!="#"&&!visited[i][j]){
            temp1 = 0; temp2 = 0;
            dfs(i,j);
            if(temp1>temp2)
                r1+=temp1;
            else
                r2+=temp2;
        }
    });
});

console.log(r1,r2);