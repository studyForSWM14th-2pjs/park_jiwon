let dir=[[0,1],[1,0],[0,-1],[-1,0]];

function solution(maps) {
    let [n,m] = [maps.length,maps[0].length]; //n * m
    maps.map(e=>{e.unshift(0);e.push(0)});  //세로벽
    maps.unshift(Array(m+2).fill(0));   //가로벽 위
    maps.push(Array(m+2).fill(0));  //가로벽 밑
    
    let queue = [[1,1,1]]; // [ [row,col,depth], ... ];
    maps[1][1]=0;
    while(queue.length){
        let [row,col,depth] = queue.shift();
        if(row==n&&col==m)
            return depth;
        dir.map(e=>{
            if(maps[row+e[0]][col+e[1]]==1){
                queue.push([row+e[0],col+e[1],depth+1]);
                maps[row+e[0]][col+e[1]]=0;
            }
        })
    }
    return -1;
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));
console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]));