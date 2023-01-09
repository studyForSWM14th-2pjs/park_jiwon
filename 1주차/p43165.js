function solution(numbers, target) {
    var answer = 0;
    const check = (i) => {
        if (i == numbers.length) {
            if (numbers.reduce((a, c) => a + c) == target)
                answer++;
        } else {
            numbers[i] *= 1;
            check(i + 1);
            numbers[i] *= -1;
            check(i + 1);
        }
    }
    check(0);

    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4,1,2,1], 4));