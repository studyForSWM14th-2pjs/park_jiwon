const fs = require('fs');
const [T, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const pop = priorityCount => queue => {
    while (priorityCount.reduce((a, c, i) => a + (i > queue[0].data ? c : 0), 0) > 0) 
        queue.push(queue.shift());
    priorityCount[queue[0].data]--;
    return queue.shift();
}

for (let i = 0; i < T; i++) {
    let M = input[i * 2].split(" ")[1];
    let queue = input[i * 2 + 1].split(" ");
    let priorityCount = Array.from({ length: 10 }, () => 0);
    queue.forEach(e => priorityCount[e]++);
    popByPriority = pop(priorityCount);
    queue = queue.map((q, i) => { return { index: i, data: q } });
    let count = 1;
    while (popByPriority(queue).index != M)
        count++;
    console.log(count);
}