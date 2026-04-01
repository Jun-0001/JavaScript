// 배열 (Array)
// Python: 리스트(list)


// index: 배열의 순서
let numbers = [10, 20, 30];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

console.log(numbers.at(-1));

// 배열 원소 갯수
console.log(numbers[numbers.length -1])

console.log(numbers[3])

console.log("==========")

let scores = [82, 95, 77]
for (const [i,score] of scores.entries()) {
    console.log(i + "번째 요소의 값:" + score);
};

let data = ["hello", 100, true];
