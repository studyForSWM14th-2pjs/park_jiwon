const fs = require('fs');
const [T, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const pop = priorityCount => queue => {
    while (priorityCount.reduce((a, c, i) => a + (i > queue[0].data ? c : 0), 0) > 0)   // 자기보다 우선순위가 높은 문서가 남아있는지 확인
        queue.push(queue.shift());  // 우선순위가 높은 문서가 남아있다면 큐를 회전시킨다.
    priorityCount[queue[0].data]--; // 우선순위가 높은 문서를 빼내므로 우선순위 카운트를 감소시킨다.
    return queue.shift();  // 우선순위가 높은 문서를 빼낸다.
}

for (let i = 0; i < T; i++) {
    let M = input[i * 2].split(" ")[1];
    let queue = input[i * 2 + 1].split(" ");
    let priorityCount = Array.from({ length: 10 }, () => 0); // 우선순위 카운트
    queue.forEach(e => priorityCount[e]++); // 우선순위 카운트
    popByPriority = pop(priorityCount); // 우선순위에 따라 문서를 빼내는 함수
    queue = queue.map((q, i) => { return { index: i, data: q } }); // 큐에 인덱스를 추가
    let count = 1;
    while (popByPriority(queue).index != M) // M번째 문서가 나올 때까지 반복
        count++;
    console.log(count);
}