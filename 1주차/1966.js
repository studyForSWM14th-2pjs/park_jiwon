const fs = require('fs');
const [T, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const pop = queue => {
    while (queue.find(e => e.data > queue[0].data)) // 우선순위가 높은 문서가 남아있다면
        queue.push(queue.shift());  // 우선순위가 높은 문서가 남아있다면 큐를 회전시킨다.
    return queue.shift();  // 우선순위가 높은 문서를 빼낸다.
}

for (let i = 0; i < T; i++) {
    let M = input[i * 2].split(" ")[1];
    let queue = input[i * 2 + 1].split(" ").map((q, i) => { return { index: i, data: q } }); // 큐에 인덱스를 추가
    let count = 1;
    while (pop(queue).index != M) // M번째 문서가 나올 때까지 반복
        count++;
    console.log(count);
}