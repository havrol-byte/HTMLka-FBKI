let a = Number(prompt("Введите число a:"));
let b = Number(prompt("Введите число b:"));

let sum = 0;
let count = 0;

for (let i = a; i <= b; i++) {
    if (i % 3 === 0) {
        sum += i;
        count++;
    }
}

if (count > 0) {
    console.log("Среднее:", sum / count);
} else {
    console.log("Нет чисел, делящихся на 3");
}