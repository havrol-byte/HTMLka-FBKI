let N = Number(prompt("Введите число N:"));

while (N > 1) {
    if (N % 2 !== 0) {
        alert("NO");
        break;
    }
    N = N / 2;
}

if (N === 1) {
    alert("YES");
}